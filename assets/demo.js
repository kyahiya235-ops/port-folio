(()=>{
 const config=window.DEMO_INFO;const log=document.getElementById('messages');const form=document.getElementById('compose-form');const input=document.getElementById('message-input');
 const add=(text,cls)=>{const item=document.createElement('div');item.className='bubble '+cls;item.textContent=text;log.appendChild(item);log.scrollTop=log.scrollHeight;};
 const reply=(q)=>{
  const t=q.toLowerCase();
  if(config.id==='faq'){
   if(/inventory|stock|warehouse/.test(t))return 'Example answer: Good inventory practices include stock visibility, reorder points, cycle counting and clear warehouse records. This is a fixed sample response, not AI-generated advice.';
   if(/jit|just in time|supplier/.test(t))return 'Example answer: Just-in-Time strategies can reduce storage costs but need reliable supplier coordination. This sample does not analyze real supplier data.';
   return 'Sample FAQ assistant: Ask about inventory, warehousing, JIT or suppliers. Real AI and document retrieval can be added later.';
  }
  if(config.id==='shipment'){
   if(/DEMO-1001/i.test(q))return 'SIMULATED DATA ONLY — DEMO-1001: In transit. Next stop: fictional sorting hub. This does not query a shipping company.';
   if(/DEMO-1002/i.test(q))return 'SIMULATED DATA ONLY — DEMO-1002: Label created. No actual package exists.';
   if(/track|shipment|status|package/.test(t))return 'Try fake test codes DEMO-1001 or DEMO-1002. This browser example has no tracking API or AI model.';
   return 'Sample shipment assistant: enter DEMO-1001 or DEMO-1002 for an invented tracking update.';
  }
  if(/interview|question/.test(t))return 'Example practice prompts: Tell me about a time you improved operations. How did you handle a difficult supplier? Explain a shipment delay and your resolution. Practice with real examples from your own CV.';
  if(/cv|resume|ats/.test(t))return 'Example CV tip: Use clear headings, accurate dates, concrete responsibilities and keywords from the selected job description. Verify all qualifications before submitting.';
  if(/cover letter|application|job/.test(t))return 'Example tip: Use the exact job title, match 2–3 verified skills to the posting, and reference your actual logistics and management experience. Do not invent achievements.';
  return 'This is a sample career-prep conversation, not a real AI model. Ask about CV, cover letter, jobs or interviews.';
 };
 add(config.welcome,'assistant');
 document.querySelectorAll('[data-prompt]').forEach(btn=>btn.addEventListener('click',()=>{input.value=btn.dataset.prompt;input.focus();}));
 form.addEventListener('submit',event=>{event.preventDefault();const q=input.value.trim();if(!q)return;add(q,'user');input.value='';window.setTimeout(()=>add(reply(q),'assistant'),250);});
})();
