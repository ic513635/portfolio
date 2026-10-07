const asset = (name) => `public/images/${name}`;

const projects = [
  {
    id: 'aideal-dashboard', company: 'Appier · AiDeal', title: 'Make campaign performance easier to read',
    summary: 'Reworking a campaign dashboard around the metrics and comparisons marketers and customer success teams needed.',
    category: 'B2B SaaS · Dashboard', tone: 'tone-sand', role: 'UX Designer', scope: 'User interviews · Wireframes · Prototype', date: 'Released Oct 2020',
    visual: 'appier_campaign_dashboard.avif', visualAlt: 'AiDeal campaign dashboard design',
    question: 'How might people understand campaign performance quickly and explain the same data to clients?',
    context: 'The dashboard served client marketers and internal Customer Success Managers. Interviews surfaced difficulty spotting trends in daily performance, understanding accumulated metrics and seeing the same view as a client.',
    approach: 'I interviewed client-side marketers and internal CSMs, clarified the problems, created wireframes and prototypes, and validated the direction with usability testing.',
    decisions: ['Bring key performance metrics forward in card layouts.', 'Use line charts to make daily trends easier to scan.', 'Clarify metric definitions and identify meaningful accumulated data.', 'Add a quick switch between admin and client views.', 'Use filters for duration, device and segment.'],
    outcome: 'Usability feedback supported the value of trend visualization and at-a-glance metrics. CSM feedback also raised the need to distinguish internal metrics from the client view. Quantitative impact was not provided.',
    visualLabel: 'CAMPAIGN PERFORMANCE DASHBOARD'
  },
  {
    id: 'aideal-creation', company: 'Appier · AiDeal', title: 'A more efficient campaign creation flow',
    summary: 'Redesigning the Create Campaign process for clearer work and more efficient campaign setup.',
    category: 'B2B SaaS · Workflow', tone: 'tone-lilac', role: 'UX Designer', scope: 'Client and internal interviews · Interactive wireframe testing', date: 'Released Jan 2021',
    visual: 'appier_campaign_creation_1_basic.avif', visualAlt: 'AiDeal campaign creation basic settings screen',
    extraVisuals: ['appier_campaign_creation_2_creative.avif'], question: 'How can campaign setup be simpler while staying flexible for different campaign needs?',
    context: 'The existing campaign setup had seven steps. Interviews with client marketers and internal Customer Success Managers surfaced confusing interactions, difficulty customizing creative with HTML/CSS, a need for responsive campaigns, and a lack of preview before publishing.',
    approach: 'I interviewed client and internal users, clarified the problems, created wireframes and prototypes, and tested the design with users.',
    decisions: ['Group related settings and show step-by-step progress.', 'Use cards, icons and interactive controls instead of a syntax editor.', 'Offer creative components such as timers, buttons and image uploads.', 'Let users preview the campaign while designing and set its primary color directly.', 'Plan for responsive campaign output and use precise wording to reduce misuse.'],
    outcome: 'Feedback from Japan and Southeast Asia CSMs described the new setup as easier to follow and more precise. They also asked for additional interactive elements and customization options. No quantitative results were provided.'
  },
  {
    id: 'handsup-live', company: 'HANDSUP · 17 LIVE', title: 'Tools for merchants selling on live video',
    summary: 'A live-streaming app designed to let merchants sell products from anywhere.',
    category: 'Live commerce · Merchant app', tone: 'tone-rose', role: 'UX Designer', scope: 'User interviews · Wireframes', date: 'Released Aug 2019',
    visual: 'handsup_live_1.avif', visualAlt: 'HandsUP merchant live-streaming app interface', extraVisuals: ['handsup_live_2.avif', 'handsup_live_3.avif'],
    question: 'How can merchants and creators keep a live shopping session active while managing products and customers?',
    context: 'HandsUP served Taiwan, Japan, Thailand and Vietnam. Interviews focused on merchants and KOLs who sell or promote products through live streaming. Needs included tracking real-time viewers, replying to audience messages, showing the product currently being promoted, and managing products and inventory during a live session.',
    approach: 'I conducted user interviews and created wireframes for the merchant live-streaming app.',
    decisions: ['Show real-time viewers and audience messages during a live session.', 'Let merchants create products and manage inventory in the app.', 'Make the currently promoted product available for viewers to open and buy.', 'Explore small interactive games to engage the audience.'],
    outcome: 'These features were documented as project goals. Usage or business impact was not provided.'
  },
  {
    id: 'handsup-cart', company: 'HANDSUP · 17 LIVE', title: 'Bring the shopping journey together',
    summary: 'Redesigning the end-to-end cart, payment and shipping experience around customer needs and merchant goals.',
    category: 'Live commerce · Checkout', tone: 'tone-blue', role: 'Product Manager', scope: 'User interviews · User flow · Specification', date: 'Released Feb 2020 · Taiwan, Thailand, Vietnam and Japan',
    visual: 'handsup_cart_ui.avif', visualAlt: 'HandsUP shopping cart interface', extraVisuals: ['handsup_cart_flow.avif'],
    question: 'How might checkout support customers buying in live streams across four different countries?',
    context: 'The work redesigned the end-to-end shopping cart around customer needs and merchant business goals. Target users were customers buying products through live streams.',
    approach: 'I interviewed users, mapped the user flow and defined the product specification for the checkout and payment work.',
    decisions: ['Integrate local logistics status and tracking information.', 'Remember shipping details used previously.', 'Support country-specific payment methods, including credit cards, PayPal and cash on delivery.'],
    outcome: 'The documented goal was to revamp live-stream shopping checkout. Outcome metrics are to be confirmed.'
  },
  {
    id: 'handsup-orders', company: 'HANDSUP · 17 LIVE', title: 'More flexible order management',
    summary: 'Order split and merge within a broader effort to give merchants more flexibility managing orders.',
    category: 'Live commerce · Order management', tone: 'tone-sand', role: 'Product Manager', scope: 'Merchant interviews · User stories · Order rules', date: 'Released Apr 2020',
    visual: 'handsup_order_1.avif', visualAlt: 'HandsUP order management interface', extraVisuals: ['handsup_order_2.avif', 'handsup_order_3.avif', 'handsup_order_4.avif'],
    question: 'How can merchants edit orders to match the way live-stream sales are fulfilled?',
    context: 'Items can sell out during a live stream, so merchants may need to split an order. A customer may also order across several live streams and want the items shipped together. In-store pickup creates another case where the merchant needs to update order status manually.',
    approach: 'I interviewed merchants, clarified editing scenarios by order status, reviewed existing logistics and payment logic, and defined user stories, scope and order management rules.',
    decisions: ['Allow an order to be split into multiple orders.', 'Allow multiple orders from the same customer to be merged for shipment.', 'Allow merchants to adjust order status for cases such as in-store pickup.', 'Define editing rules for each order status and prepare product verification items.'],
    outcome: 'The project goal was more flexible order editing for merchants. Outcome metrics are to be confirmed.'
  },
  {
    id: 'worklink-clockin', company: 'WORKLINK', title: 'Everyday time and overtime tasks',
    summary: 'Clock in, clock out and overtime application within an all-in-one HR software product.',
    category: 'HR software · Mobile and web', tone: 'tone-lilac', role: 'UX Designer', scope: 'User flow · Wireframe · Mockup · Prototype', date: 'Released Jan 2019',
    visual: 'worklink_clockin_1.avif', visualAlt: 'WorkLink clock-in interface', extraVisuals: ['worklink_clockin_2.avif'],
    question: 'How can employees complete everyday attendance and overtime tasks clearly?',
    context: 'WorkLink is an all-in-one HR product for small and medium businesses. Employees could clock in and out from anywhere and apply for overtime through the app.',
    approach: 'I designed the user flow, wireframes, mockups and prototype for the feature.',
    decisions: ['Support clock-in and clock-out away from a fixed workplace.', 'Provide an in-app overtime application flow.'],
    outcome: 'The portfolio states this feature introduced new product pricing and reached more users. No user counts or other measured results were provided.'
  },
  {
    id: 'worklink-dashboard', company: 'WORKLINK', title: 'Redesigning the WorkLink dashboard',
    summary: 'Dashboard design for an all-in-one HR product used by small and medium businesses.',
    category: 'HR software · Dashboard', tone: 'tone-rose', role: 'UX / UI Designer', scope: 'User interview · Wireframe · Mockup', date: 'Released Apr 2019',
    visual: 'worklink_dashboard_1.avif', visualAlt: 'WorkLink HR dashboard', extraVisuals: ['worklink_dashboard_2.avif'],
    question: 'How should an HR product bring everyday work information together?',
    context: 'WorkLink brought together tools such as instant messaging, shared drive, clock in/out and leave/overtime applications for small and medium businesses.',
    approach: 'The available portfolio confirms dashboard design as a case and notes responsibility for consistent UX/UI across iOS, Android and the website.',
    decisions: ['Design within an all-in-one HR product.', 'Maintain a consistent interface across platforms.'],
    outcome: 'Dashboard-specific design rationale and measured outcomes are to be confirmed.'
  }
];

const selectedWork = [
  { id: 'funpodium', company: 'FUNPODIUM', title: 'Enterprise Customer Management Platform',
    summary: 'Redesigning complex back-office workflows to help Customer Service and Compliance teams resolve member issues with greater speed and accuracy.',
    tags: ['Enterprise', 'B2B', 'Back Office', 'Workflow Design'], tone: 'tone-blue',
    visual: 'funpodium_bo.png', visualAlt: 'FUNPODIUM back-office bonus management platform screen',
    visualLabel: 'Customer Management Main Screen' },
  { id: 'identity-verification', company: 'CXC Studio', title: 'Identity Verification & Account Security',
    summary: 'Redesigning verification to balance security requirements with the task users came to complete.',
    tags: ['Web', 'Mobile', 'Account Security', 'Design System'], tone: 'tone-sand',
    visual: 'cxc_otp.png', visualAlt: 'CXC mobile phone verification and OTP flow',
    visualLabel: 'OTP Bottom Sheet / Desktop Popup' }
];

const caseStudies = {
  funpodium: {
    ...selectedWork[0], subtitle: 'Legacy workflow redesign for Customer Service & Compliance',
    roleTitle: 'UX Designer', scope: 'Wireframes · Mockup', when: 'Released Oct 2022',
    question: 'How might Customer Service and Compliance teams find the information they need and resolve member issues with fewer steps and fewer mistakes?',
    context: 'This enterprise back-office platform helps Customer Service and Compliance teams investigate member issues and account security concerns. As the product grew, information became scattered and legacy workflows accumulated extra steps, making it harder for teams to understand account status and complete tasks accurately.',
    approach: 'I reviewed the existing workflows and information needs before redesigning individual screens. I worked with PMs and engineers to clarify product rules, identify repeated or unnecessary actions, and reorganize the experience around the tasks teams needed to complete.',
    decisions: [
      'Bring member information and account status into a clearer information hierarchy.',
      'Combine or remove repeated actions and redundant confirmations to reduce steps and prevent errors.',
      'Build custom components on Ant Design, with consistent variants, interaction states, layouts, responsive behavior, and reusable patterns.'
    ],
    outcome: 'The redesigned workflow reduced the number of steps and operational errors, and was followed by fewer related support tickets. Internal users responded positively to the clearer experience. The design system established alongside the product also gave future workflow improvements a more consistent foundation.',
    caption: 'A redesigned customer management workflow with clearer information hierarchy and fewer steps.'
  },
  'identity-verification': {
    ...selectedWork[1], subtitle: 'Redesigning verification around security requirements and user intent',
    roleTitle: 'UX Designer', scope: 'Wireframes · Mockup', when: 'Released Mar 2026',
    question: 'How can users complete a required security check without losing their intent to deposit or withdraw?',
    context: 'This verification experience serves three products across three markets. Before a deposit, withdrawal, or other sensitive account action, users must verify their phone number or email. In the original flow, selecting Deposit sent users to a full OTP page without explaining why the check was needed, interrupting the task they came to complete.',
    approach: 'I reframed OTP as a temporary step within the original task: Deposit → Verification → Continue Deposit. This kept the security requirement connected to the user’s intent and became the foundation for the interaction design across products.',
    decisions: [
      'Use a bottom sheet on mobile and a popup on desktop so the Deposit or Withdrawal context remains visible.',
      'Create one reusable OTP component and use color variables to adapt it across three products, brands, and markets with shared verification rules.',
      'Build a Figma string database for three market languages and one shared internal language, supporting four language versions without rebuilding each UI.'
    ],
    outcome: 'The verification step stays connected to the original deposit or withdrawal task, reducing the sense of interruption while meeting security requirements. The reusable component and string database support three products, brands, and markets across four languages, and the redesigned experience improved OTP completion rate.'
  }
};

const allWorkItems = [...selectedWork, ...projects];

function projectCard(p, index) {
  const media = p.visual
    ? `<img src="${asset(p.visual)}" alt="${p.visualAlt}" loading="lazy">`
    : `<div class="placeholder-art"><span>3 PRODUCTS</span><b>×</b><span>3 MARKETS</span><small>${p.visualLabel}</small></div>`;
  return `<article class="project-card ${p.tone} ${p.featured ? 'featured-card' : ''}">
    <a class="project-media" href="case.html?project=${p.id}" aria-label="Open ${p.company}: ${p.title}">${media}<span class="media-index">0${index + 1}</span><span class="media-arrow">↗</span></a>
    <div class="project-info"><div class="project-kicker"><span>${p.company}</span><span>${p.category}</span></div><h3><a href="case.html?project=${p.id}">${p.title}</a></h3><p>${p.summary}</p><a class="project-link" href="case.html?project=${p.id}">View case study <span>↗</span></a></div>
  </article>`;
}

function renderCaseHeroVisual(p) {
  return p.visual
    ? `<figure class="case-hero-visual case-visual-${p.id} ${p.tone}"><img src="${asset(p.visual)}" alt="${p.visualAlt}"><figcaption>${p.caption || p.visualAlt}</figcaption></figure>`
    : `<figure class="case-placeholder"><div class="placeholder-art"><span>3 PRODUCTS</span><b>×</b><span>3 MARKETS</span><small>${p.visualLabel}</small></div><figcaption>Supporting visuals to confirm.</figcaption></figure>`;
}

function renderCaseGallery(p) {
  return p.extraVisuals?.length
    ? `<section class="case-gallery wrap">${p.extraVisuals.map((img, i) => `<figure><img src="${asset(img)}" alt="${p.company} supporting design visual ${i + 1}" loading="lazy"></figure>`).join('')}</section>`
    : '';
}

function renderHome() {
  const grid = document.getElementById('project-grid');
  if (grid) {
    const newCaseCards = selectedWork.map((p, index) => {
      const media = p.visual
        ? `<img src="${asset(p.visual)}" alt="${p.visualAlt}" loading="lazy">`
        : `<div class="work-placeholder"><span>${p.visualLabel}</span><small>Project visual coming soon</small></div>`;
      return `<article class="project-card project-${p.id} ${p.tone}"><a class="project-media" href="case.html?project=${p.id}" aria-label="View ${p.company}: ${p.title}">${media}<span class="media-index">0${index + 1}</span><span class="media-arrow">↗</span></a><div class="project-info"><div class="project-kicker"><span>${p.company}</span><span>${p.tags.join(' · ')}</span></div><h3><a href="case.html?project=${p.id}">${p.title}</a></h3><p>${p.summary}</p><a class="project-link" href="case.html?project=${p.id}">View case study <span>↗</span></a></div></article>`;
    });
    const existingCards = projects.filter(p => p.id !== 'funpodium').map((p, index) => projectCard(p, index + 2));
    grid.innerHTML = [...newCaseCards, ...existingCards].join('');
  }
  const heading = document.querySelector('#work .section-heading');
  if (heading) heading.innerHTML = '<div><p class="eyebrow">SELECTED WORK</p><h2>Selected Work</h2></div>';
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
}

function renderCase() {
  const outlet = document.getElementById('case-content');
  if (!outlet) return;
  const slug = new URLSearchParams(window.location.search).get('project');
  if (caseStudies[slug]) return renderStructuredSelectedCase(outlet, caseStudies[slug], slug);
  let index = projects.findIndex(p => p.id === slug);
  if (index < 0) index = 0;
  const p = projects[index];
  const workIndex = allWorkItems.findIndex(item => item.id === p.id);
  document.title = `${p.company} — ${p.title} | Ally Lin`;
  const facts = [['Role', p.role], ['Scope', p.scope], ['When', p.date || 'Project details to confirm']];
  const heroVisual = renderCaseHeroVisual(p);
  const extras = renderCaseGallery(p);
  const decisions = p.decisions.map((d, i) => `<li><span>0${i+1}</span><p>${d}</p></li>`).join('');
  const prev = allWorkItems[(workIndex - 1 + allWorkItems.length) % allWorkItems.length];
  const next = allWorkItems[(workIndex + 1) % allWorkItems.length];
  outlet.innerHTML = `<div class="case-top wrap"><a href="index.html#work" class="back-link">← All selected work</a><span class="case-counter">CASE ${String(workIndex + 1).padStart(2, '0')} / ${String(allWorkItems.length).padStart(2, '0')}</span></div>
    <section class="case-intro wrap"><p class="eyebrow">${p.company} <span>·</span> ${p.category}</p><h1>${p.title}</h1><p class="case-deck">${p.summary}</p><div class="case-facts">${facts.map(f => `<div><span>${f[0]}</span><b>${f[1]}</b></div>`).join('')}</div></section>
    ${heroVisual}
    <section id="case-story" class="case-story wrap"><div class="story-lead"><p class="eyebrow">THE QUESTION</p><h2>${p.question}</h2></div><div class="story-copy"><div><p class="eyebrow">CONTEXT</p><p>${p.context}</p></div><div><p class="eyebrow">APPROACH</p><p>${p.approach}</p></div></div></section>
    <section id="case-decisions" class="decision-section"><div class="wrap decision-wrap"><div><p class="eyebrow">DESIGN DECISIONS</p><h2>What shaped<br><em>the experience.</em></h2></div><ol>${decisions}</ol></div></section>
    ${extras}
    <section id="case-outcome" class="outcome-section wrap"><p class="eyebrow">OUTCOME & LEARNING</p><h2>What we can say<br><em>with confidence.</em></h2><p>${p.outcome}</p></section>
    <nav class="case-pagination wrap" aria-label="Case study navigation"><a href="case.html?project=${prev.id}"><span>← PREVIOUS</span><b>${prev.company}</b><small>${prev.title}</small></a><a href="case.html?project=${next.id}" class="next-case"><span>NEXT →</span><b>${next.company}</b><small>${next.title}</small></a></nav>`;
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
}

function renderStructuredSelectedCase(outlet, p, slug) {
  const index = allWorkItems.findIndex(item => item.id === slug);
  const prev = allWorkItems[(index - 1 + allWorkItems.length) % allWorkItems.length];
  const next = allWorkItems[(index + 1) % allWorkItems.length];
  const tags = p.tags.map(tag => `<span>${tag}</span>`).join('');
  const decisions = p.decisions.map((item, i) => `<li><span>0${i + 1}</span><p>${item}</p></li>`).join('');
  const visual = renderCaseHeroVisual(p);
  const extras = renderCaseGallery(p);
  document.documentElement.lang = 'en';
  document.title = `${p.title} — ${p.company} | Ally Lin`;
  outlet.innerHTML = `<div class="case-top wrap"><a href="index.html#work" class="back-link">← All selected work</a><span class="case-counter">CASE ${String(index + 1).padStart(2, '0')} / ${String(allWorkItems.length).padStart(2, '0')}</span></div>
    <section class="selected-case-intro wrap"><p class="eyebrow">${p.company}</p><h1>${p.title}</h1><p class="case-deck">${p.subtitle}</p><div class="project-tags">${tags}</div><div class="case-facts"><div><span>Role</span><b>${p.roleTitle}</b></div><div><span>Scope</span><b>${p.scope}</b></div><div><span>When</span><b>${p.when}</b></div></div></section>
    ${visual}
    <section class="case-story wrap"><div class="story-lead"><p class="eyebrow">THE QUESTION</p><h2>${p.question}</h2></div><div class="story-copy"><div><p class="eyebrow">CONTEXT</p><p>${p.context}</p></div><div><p class="eyebrow">APPROACH</p><p>${p.approach}</p></div></div></section>
    <section class="decision-section"><div class="wrap decision-wrap"><div><p class="eyebrow">DESIGN DECISIONS</p><h2>What shaped<br><em>the experience.</em></h2></div><ol>${decisions}</ol></div></section>
    ${extras}
    <section class="outcome-section wrap"><p class="eyebrow">OUTCOME & LEARNING</p><h2>What we can say<br><em>with confidence.</em></h2><p>${p.outcome}</p></section>
    <nav class="case-pagination wrap" aria-label="Case study navigation"><a href="case.html?project=${prev.id}"><span>← PREVIOUS</span><b>${prev.company}</b><small>${prev.title}</small></a><a href="case.html?project=${next.id}" class="next-case"><span>NEXT →</span><b>${next.company}</b><small>${next.title}</small></a></nav>`;
}

function setupMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('primary-nav');
  const header = toggle?.closest('.site-header');
  if (!toggle || !nav || !header) return;
  const closeMenu = (restoreFocus = false) => {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
    nav.classList.remove('is-open');
    if (restoreFocus) toggle.focus();
  };
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    toggle.setAttribute('aria-label', open ? 'Open navigation' : 'Close navigation');
    nav.classList.toggle('is-open', !open);
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => closeMenu()));
  document.addEventListener('click', event => {
    if (toggle.getAttribute('aria-expanded') === 'true' && !header.contains(event.target)) closeMenu();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') closeMenu(true);
  });
}

function setupCopyEmail() {
  document.querySelectorAll('[data-copy-email]').forEach(button => {
    button.addEventListener('click', async () => {
      const email = button.getAttribute('data-copy-email');
      const status = button.parentElement.querySelector('.copy-status');
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(email);
        } else {
          const field = document.createElement('textarea');
          field.value = email;
          field.setAttribute('readonly', '');
          field.style.position = 'fixed';
          field.style.opacity = '0';
          document.body.appendChild(field);
          field.select();
          const copied = document.execCommand('copy');
          field.remove();
          if (!copied) throw new Error('Clipboard unavailable');
        }
        button.textContent = 'Copied';
        status.textContent = 'Email copied';
      } catch {
        button.textContent = 'Try again';
        status.textContent = 'Copy unavailable';
      }
      window.setTimeout(() => {
        button.textContent = 'Copy';
        button.setAttribute('aria-label', 'Copy email address');
        status.textContent = '';
      }, 1800);
    });
  });
}

renderHome();
renderCase();
setupMenu();
setupCopyEmail();
