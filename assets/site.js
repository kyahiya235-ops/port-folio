(function () {
  'use strict';
  const data = window.PORTFOLIO_CONTENT;
  if (!data) return;
  const el = (selector) => document.querySelector(selector);
  const safe = (value) => String(value == null ? '' : value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const href = (value) => /^(https?:\/\/|mailto:|#?[a-z0-9_./-]+$)/i.test(value) ? safe(value) : '#';
  const attr = (value) => href(value);
  const external = (url) => /^https?:/.test(url) ? 'target="_blank" rel="noopener noreferrer"' : 'target="_blank" rel="noopener"';
  const links = (items) => items.map(item => {
    const action = item.download ? 'download' : item.href.startsWith('#') ? '' : external(item.href);
    return `<a class="task-link ${item.sample ? 'sample' : ''}" href="${attr(item.href)}" ${action}>${safe(item.text)}</a>`;
  }).join('');

  const projectHtml = (project) => {
    const featured = project.type === 'research';
    const demo = project.demo ? `<a class="link-chip" href="${attr(project.demo)}" ${external(project.demo)}>${safe(project.demoLabel || 'Live demo')} ↗</a>` : '<span class="link-chip disabled">Demo pending</span>';
    const repo = project.github ? `<a class="link-chip" href="${attr(project.github)}" target="_blank" rel="noopener noreferrer" title="GitHub link will work after these demo files are pushed to the listed repository">Code on GitHub ↗</a>` : '<span class="link-chip disabled" title="No project repository was supplied">Repository not supplied</span>';
    return `<article class="project-card ${featured ? 'featured' : ''}"><div class="project-card-top">${project.image ? `<img src="${attr(project.image)}" loading="lazy" alt="Logistics network imagery">` : `<span class="project-figure">${safe(project.figure || 'AI')}</span>`}<span class="project-status">${safe(project.state)}</span></div><div class="project-card-body"><p class="project-type">${featured ? 'ACADEMIC RESEARCH' : 'AI AGENT PROTOTYPE • SAMPLE'}</p><h3>${safe(project.title)}</h3><p class="project-summary">${safe(project.subtitle)}</p><p class="project-summary">${safe(project.description)}</p><div class="project-tags">${project.tags.map(t => `<span>${safe(t)}</span>`).join('')}</div><div class="project-links">${demo}${repo}</div></div></article>`;
  };
  el('#project-grid').innerHTML = data.projects.map(projectHtml).join('');

  const certHtml = (cert) => `<article class="cert-card">
    <div class="cert-card-head">
      <span class="cert-number" aria-label="Course ${safe(cert.number)}">${safe(cert.number)}</span>
      <div class="cert-meta"><span class="cert-type">IBM SKILLSBUILD</span><h3>${safe(cert.title)}</h3></div>
    </div>
    <div class="cert-assets">
      <a class="cert-asset" href="${attr(cert.certificate)}" target="_blank" rel="noopener"
        aria-label="Open certificate PDF for ${safe(cert.title)}"><span class="asset-icon" aria-hidden="true">▤</span><strong>Certificate</strong><small>Open PDF</small></a>
      <a class="cert-asset" href="${attr(cert.presentation)}" download
        aria-label="Download PowerPoint for ${safe(cert.title)}"><span class="asset-icon" aria-hidden="true">▣</span><strong>Presentation</strong><small>Download PPTX</small></a>
      <a class="cert-asset" href="${attr(cert.recording)}" target="_blank" rel="noopener"
        aria-label="Watch slideshow for ${safe(cert.title)}"><span class="asset-icon" aria-hidden="true">▷</span><strong>Slideshow video</strong><small>Play MP4</small></a>
    </div>
  </article>`;
  el('#cert-grid').innerHTML = data.certifications.map(certHtml).join('');

  function taskHtml(task) {
    const label = `Task ${task.number}`;
    const date = task.date
      ? `<strong><time datetime="${safe(task.date)}">${safe(task.displayedDate)}</time></strong><span>${label}</span>`
      : `<strong>${label}</strong>`;
    const items = [...task.items].sort((a,b) => a.title.localeCompare(b.title)).map(item => `
      <div class="task-item">
        <h4 class="task-item-name">${safe(item.title)}</h4>
        ${item.description ? `<p class="task-item-desc">${safe(item.description)}</p>` : ''}
        ${item.links?.length ? `<div class="task-links">${links(item.links)}</div>` : ''}
      </div>`).join('');
    return `<article class="task-entry">
      <div class="task-date">${date}</div>
      <div class="task-card">
        <div class="task-card-heading"><div><h3>${safe(task.title)}</h3><p class="task-item-desc" style="margin:7px 0 0">${safe(task.subtitle)}</p></div></div>
        ${items}
      </div>
    </article>`;
  }
  function renderTasks(order) {
    const sorted = [...data.tasks].sort((a,b) => {
      const byTitle = a.title.localeCompare(b.title);
      if (order === 'title') return byTitle;
      if (!a.date || !b.date) return Number(!a.date) - Number(!b.date) || byTitle;
      const byDate = a.date.localeCompare(b.date);
      return (order === 'oldest' ? byDate : -byDate) || byTitle;
    });
    el('#tasks-list').innerHTML = sorted.map(taskHtml).join('');
    el('#task-count').textContent = `${sorted.length} tasks`;
  }
  renderTasks('newest');
  el('#tasks-sort').addEventListener('change', event => renderTasks(event.target.value));

  const dialog = el('#video-dialog'), player = el('#intro-player');
  function openIntro() {if (dialog && !dialog.open) dialog.showModal(); if (player) {player.currentTime = 0; const p = player.play(); if (p) p.catch(() => {});}}
  function closeIntro() {if (player) player.pause(); if (dialog && dialog.open) dialog.close();}
  el('#play-intro').addEventListener('click', openIntro);
  el('#play-intro-alt').addEventListener('click', openIntro);
  el('#close-intro').addEventListener('click', closeIntro);
  dialog.addEventListener('close', () => player.pause());
  dialog.addEventListener('click', event => { if (event.target === dialog) closeIntro(); });

  const menuToggle = el('#menu-toggle'), mobileNav = el('#mobile-nav');
  function closeMenu() { mobileNav.hidden = true; menuToggle.setAttribute('aria-expanded','false');menuToggle.setAttribute('aria-label','Open menu'); }
  menuToggle.addEventListener('click', () => {
    const opened = menuToggle.getAttribute('aria-expanded') === 'true';
    mobileNav.hidden = opened;
    menuToggle.setAttribute('aria-expanded',String(!opened));
    menuToggle.setAttribute('aria-label',opened ? 'Open menu' : 'Close menu');
  });
  mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
  document.addEventListener('keydown',event=>{if(event.key === 'Escape')closeMenu();});

  const header = el('#site-header'), progress = el('#scroll-progress');
  const navLinks = [...document.querySelectorAll('.desktop-nav a')];
  function updateScroll() {
    header.classList.toggle('scrolled', window.scrollY > 30);
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (scrollable > 0 ? Math.min(100,window.scrollY/scrollable*100) : 0) + '%';
    const ids=['about','projects','certifications','tasks','contact'];
    let current = 'about';
    for (const id of ids) {const item=document.getElementById(id);if(item && item.getBoundingClientRect().top <= 165) current=id;}
    navLinks.forEach(a=>a.classList.toggle('nav-active',a.getAttribute('href')==='#'+current));
  }
  window.addEventListener('scroll',updateScroll,{passive:true});
  updateScroll();
  el('#year').textContent = String(new Date().getFullYear());

  el('#contact-form').addEventListener('submit',event=>{
    event.preventDefault();const f=event.currentTarget;
    if(!f.reportValidity())return;
    const name=f.elements.namedItem('name').value.trim();
    const email=f.elements.namedItem('email').value.trim();
    const subject=f.elements.namedItem('subject').value.trim();
    const message=f.elements.namedItem('message').value.trim();
    const composed=`From: ${name}\nReply-to: ${email}\n\n${message}`;
    const url=`mailto:Kyahiya235@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(composed)}`;
    el('#form-status').textContent='Your email application should open. Please send the message from there.';
    window.location.href=url;
  });
})();
