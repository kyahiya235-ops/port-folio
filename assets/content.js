/**
 * EDIT THIS FILE to update the portfolio. No dashboard or database is needed.
 * The course order matches the numbered files in files/certifications/.
 */
const courseTitles = [
  'AI Fundamentals: Foundations for Understanding AI',
  'AI Fundamentals: Language and Vision in AI',
  'AI Literacy',
  'AI-Enabled Applications for Customer Service',
  'Artificial Intelligence Fundamentals',
  'Craft Precise Prompts for AI Models',
  'Explore Emerging Tech',
  'Generative AI Essentials: Using LLMs to Work with Data',
  'Getting Started with Generative AI',
  'Make Agentic AI Work for You',
  'Retrieval-Augmented Generation for Enhanced AI Outputs'
];

const certifications = courseTitles.map((title, i) => {
  const number = String(i + 1).padStart(2, '0');
  return {
    number, title,
    certificate: `files/certifications/${number}-certificate.pdf`,
    presentation: `files/certifications/${number}-presentation.pptx`,
    recording: `files/certifications/${number}-recording.mp4`
  };
});

const firstTwoCourseDates = ['13 October 2026', '14 October 2026'];
const firstTwoCourses = certifications.slice(0, 2).map((course, i) => ({
  title: course.title,
  description: `Completed on ${firstTwoCourseDates[i]}.`,
  links: [
    {text:'Certificate PDF', href:course.certificate},
    {text:'Presentation PPTX', href:course.presentation, download:true},
    {text:'Slideshow video', href:course.recording}
  ]
}));

window.PORTFOLIO_CONTENT = {
  githubProfile: 'https://github.com/kyahiya235-ops', // From the original uploaded repository's origin URL. Confirm your account before submitting.
  linkedin: 'https://www.linkedin.com/in/yahiya-khan-008b30176',
  certifications,
  projects: [
    {
      type: 'research',
      title: 'Inventory Management Strategies in Germany Automobile Industry',
      subtitle: 'Bachelor thesis · Transporta un sakaru institūts (TSI)',
      description: 'An academic investigation of inventory management in the German automobile industry, as listed in the supplied CV.',
      tags: ['Inventory management', 'Automotive logistics', 'Academic research'],
      state: 'CV-REFERENCED WORK',
      image: 'images/logistics-background.jpg',
      demo: 'files/cv/Yahiya_Khan_ATS_CV.pdf',
      demoLabel: 'See CV reference',
      github: '' // Do not invent a repository for the bachelor thesis.
    },
    {
      type: 'prototype',
      title: 'Supply Chain FAQ Assistant',
      subtitle: 'Prototype slot 01 · Interactive concept demo',
      description: 'A simple browser simulation answering sample supply chain and warehousing questions. Replace it with your real AI agent.',
      tags: ['FAQ flow', 'Logistics', 'Sample UI'],
      state: 'DEMO / REPLACE', figure: '01',
      demo: 'demos/supply-chain-faq.html',
      demoLabel: 'Open live sample',
      github: 'https://github.com/kyahiya235-ops/yahiya-cv/blob/main/demos/supply-chain-faq.html'
    },
    {
      type: 'prototype',
      title: 'Shipment Status Assistant',
      subtitle: 'Prototype slot 02 · Interactive concept demo',
      description: 'A sample conversation illustrating shipment updates using invented test tracking IDs. No real tracking or AI integration.',
      tags: ['Shipment updates', 'Rule-based', 'Sample UI'],
      state: 'DEMO / REPLACE', figure: '02',
      demo: 'demos/shipment-status.html',
      demoLabel: 'Open live sample',
      github: 'https://github.com/kyahiya235-ops/yahiya-cv/blob/main/demos/shipment-status.html'
    },
    {
      type: 'prototype',
      title: 'Career Preparation Assistant',
      subtitle: 'Prototype slot 03 · Interactive concept demo',
      description: 'A browser-only practice helper giving example CV and interview tips. Add your own AI agent implementation when ready.',
      tags: ['Career prep', 'Interview', 'Sample UI'],
      state: 'DEMO / REPLACE', figure: '03',
      demo: 'demos/career-prep.html',
      demoLabel: 'Open live sample',
      github: 'https://github.com/kyahiya235-ops/yahiya-cv/blob/main/demos/career-prep.html'
    }
  ],
  tasks: [
    {
      number: 1, date: '2026-09-30', displayedDate: '30.09.2026',
      title: 'Profile & Project Idea (Improved Version)',
      subtitle: 'Updated profile materials and project idea PPT',
      items: [
        { title: 'ATS-friendly CV', description: 'Updated, text-based CV created from the uploaded source. Check the Master’s degree completion status before submitting.', links: [{text:'ATS CV PDF',href:'files/cv/Yahiya_Khan_ATS_CV.pdf'}]},
        { title: 'GitHub & LinkedIn', description: 'Direct public profile links. Confirm the GitHub account and review both profiles for any teacher-requested changes.', links:[{text:'LinkedIn profile',href:'https://www.linkedin.com/in/yahiya-khan-008b30176'}, {text:'GitHub profile',href:'https://github.com/kyahiya235-ops'}]},
        { title: 'Introduction video / animation', description: 'A 20-second editable sample based on the uploaded CV. Replace it with your own introduction.',links:[{text:'Sample intro video',href:'files/intro/intro-placeholder.mp4',sample:true}]},
        { title: 'Project Idea: AI-Powered Smart Logistics & Dynamic Route Optimization System', description: 'Project background, objectives, system workflow and expected results.', links:[{text:'Project Idea PPTX',href:'files/tasks/2026-09-30-project-idea.pptx',download:true},{text:'Project Idea PDF',href:'files/tasks/2026-09-30-project-idea.pdf'}]}
      ]
    },
    {
      number: 2, date: '2026-10-07', displayedDate: '07.10.2026',
      title: 'Job Prep & First 2 Certifications',
      subtitle: 'Selected vacancy, cover letter, class improvements and IBM course evidence',
      items: [
        { title: 'Selected job posting', description: 'Accenture Riga or EPAM Latvia job posting pending.' },
        { title: 'Cover letter', description: 'Draft to tailor once the vacancy is selected.', links:[{text:'Cover-letter draft PDF',href:'files/tasks/2026-10-07-cover-letter-template.pdf',sample:true}]},
        { title: 'Class-reviewed profile improvements', description: 'Revisit your updated CV, LinkedIn profile, GitHub and full portfolio after receiving class feedback.',links:[{text:'Updated CV',href:'files/cv/Yahiya_Khan_ATS_CV.pdf'},{text:'LinkedIn',href:'https://www.linkedin.com/in/yahiya-khan-008b30176'},{text:'GitHub',href:'https://github.com/kyahiya235-ops'}]},
        ...firstTwoCourses
      ]
    },
    {
      number: 3,
      title: 'Complete Student Portfolio Page',
      subtitle: 'Updated portfolio and coursework',
      items: [
        { title:'Portfolio sections', links:[
          {text:'About Me',href:'#about'},
          {text:'Projects / Portfolio',href:'#projects'},
          {text:'All 11 IBM certifications',href:'#certifications'},
          {text:'Contact',href:'#contact'}
        ] }
      ]
    }
  ]
};
