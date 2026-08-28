/* ============================================
   HANDIKA PORTFOLIO — INTERACTIONS
   ============================================ */

// ---- Typing Effect ----
const phrases = [
  'Enterprise workflow builder',
  'Laravel & Flutter engineer',
  'Cloud and integration specialist',
  'Human-led, AI-accelerated delivery',
];

// ---- Privacy-safe project catalog ----
// Internal names, endpoints, credentials, customer data, and infrastructure details
// are intentionally excluded from this public dataset.
// Public projects can expose verified destinations with:
// links: [{ label: 'Live Demo', url: 'https://...' }, { label: 'Source Code', url: 'https://...' }]
const projects = [
  {
    code: 'CF01', title: 'Cloudflare Store Platform', period: 'Aug 2026', scope: 'public', ai: true,
    featured: true, category: 'Cloud Commerce',
    summary: 'An edge-first multi-tenant storefront with catalog, cart, checkout, order tracking, payment claims, and admin operations.',
    stack: ['Astro', 'React', 'TypeScript', 'Workers', 'D1'],
    links: ['https://cloudflare-store-preview.handikahevn24.workers.dev'],
  },
  {
    code: 'CF02', title: 'Farm Business Manager', period: 'Aug 2026', scope: 'internal', ai: true,
    featured: true, category: 'Cloud Operations',
    summary: 'A role-aware operations and investor ledger for digital farming businesses, including assets, cash flow, BEP recovery, and settlement rules.',
    stack: ['React', 'Hono', 'Cloudflare', 'D1', 'Drizzle'],
  },
  {
    code: 'FL02', title: 'Material Issue & Return Mobile', period: 'Dec 2025—May 2026', scope: 'internal', ai: false,
    category: 'Mobile Operations',
    summary: 'A Flutter field application for material issue, return, approvals, and QR scanning backed by cached enterprise inventory data.',
    stack: ['Flutter', 'Dart', 'REST API', 'Oracle', 'Redis'],
  },
  {
    code: 'JS03', title: 'Premium Product Landing Page', period: 'Feb—Aug 2026', scope: 'public', ai: true,
    category: 'Frontend & Conversion',
    summary: 'A responsive product story with optimized media, trust-building sections, WhatsApp conversion paths, and CTA attribution.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Vite', 'WebP'],
    links: ['https://rumahmayin.id/'],
  },
  {
    code: 'LV01', title: 'Offline-first POS SaaS', period: 'Dec 2025', scope: 'public', ai: true,
    category: 'Product Engineering',
    summary: 'A multi-tenant POS foundation spanning product, transaction, stock, reporting, device, and mobile synchronization domains.',
    stack: ['Laravel 12', 'Flutter', 'Riverpod', 'Drift', 'Sanctum'],
    links: [],
  },
  {
    code: 'P501', title: 'Office Supply Inventory', period: 'Jul 2025', scope: 'internal', ai: false,
    category: 'Warehouse Tools',
    summary: 'Stock-in, stock-out, employee requests, approvals, movement history, and printable operational reports for office supplies.',
    stack: ['PHP', 'MySQL', 'AdminLTE', 'DataTables', 'mPDF'],
  },
  {
    code: 'P506', title: 'Inventory Locator', period: 'Mar 2025', scope: 'internal', ai: false,
    category: 'Warehouse Tools',
    summary: 'A focused warehouse utility for finding item availability, organization, subinventory, and physical locator information.',
    stack: ['PHP', 'Oracle', 'Ajax', 'JavaScript'],
  },
  {
    code: 'P508', title: 'Material Receiving & Inspection', period: 'Oct 2024—Jul 2025', scope: 'internal', ai: false,
    category: 'Procurement Workflow',
    summary: 'A cross-functional receiving and inspection workflow connecting purchase orders, lots, approvals, labels, and traceable reports.',
    stack: ['PHP', 'SQL', 'Bootstrap', 'DataTables', 'PDF'],
  },
  {
    code: 'P511', title: 'Digital Delivery Note', period: 'May 2025—Aug 2026', scope: 'internal', ai: false,
    category: 'Enterprise Logistics',
    summary: 'A multi-role delivery workflow covering requests, warehouse approval, shipment documents, OTP confirmation, and customer acceptance.',
    stack: ['PHP', 'WMS', 'PDF', 'OTP', 'Messaging API'],
  },
  {
    code: 'P513', title: 'Work Order System', period: '2022—Aug 2025', scope: 'internal', ai: false,
    category: 'Enterprise Workflow',
    summary: 'A work-order lifecycle with revisions, approvals, progress, documents, internal audit, reports, and cross-team performance ratings.',
    stack: ['PHP', 'SQL', 'Bootstrap', 'PDF'],
  },
  {
    code: 'P702', title: 'Email Service Platform v1', period: '2021—Feb 2026', scope: 'internal', ai: false,
    category: 'Backend Platform',
    summary: 'A queued notification service with reusable templates, attachments, generated documents, scheduler commands, and operational logs.',
    stack: ['Laravel 8', 'Queues', 'TCPDF', 'Docker', 'Supervisor'],
  },
  {
    code: 'P705', title: 'Remote Attendance', period: 'Oct 2024—Aug 2025', scope: 'internal', ai: false,
    category: 'HR Operations',
    summary: 'A remote attendance application combining check-in status, geolocation, camera evidence, role views, history, and report export.',
    stack: ['PHP', 'JavaScript', 'Geolocation', 'Camera API', 'SSO'],
  },
  {
    code: 'P804', title: 'Bidder Evaluation & Scorecard', period: 'Jul—Aug 2023', scope: 'internal', ai: false,
    category: 'Procurement Workflow',
    summary: 'A technical evaluation workflow for criteria assignment, bidder schedules, clarification, scorecards, monitoring, and formal reports.',
    stack: ['PHP', 'PHPWord', 'Dompdf', 'TCPDF', 'JavaScript'],
  },
  {
    code: 'P805', title: 'Finished Goods Reporting', period: 'Oct 2023', scope: 'internal', ai: false,
    category: 'Manufacturing Data',
    summary: 'A reporting tool for finished-goods inventory, grades, lots, draft preparation, department submission, and Excel export.',
    stack: ['PHP', 'Oracle', 'Excel', 'JavaScript'],
  },
  {
    code: 'P806', title: 'GA Work Order', period: 'Mar 2022—Jun 2026', scope: 'internal', ai: true,
    featured: true, category: 'Enterprise Workflow',
    summary: 'A structured work-order platform with approval history, documents, API access, automated tests, and guarded read/write tooling.',
    stack: ['Laravel 8', 'REST API', 'TypeScript', 'MCP', 'Sanctum'],
  },
  {
    code: 'P808', title: 'Incident & Trouble Report System', period: 'Jun 2021—Aug 2026', scope: 'internal', ai: true,
    featured: true,
    category: 'Safety & Operations',
    summary: 'An incident-to-corrective-action platform covering investigation, risk, approvals, reminders, evidence, and consolidated reporting.',
    stack: ['Laravel 8', 'Queues', 'Dompdf', 'Docker', 'RBAC'],
  },
  {
    code: 'P810', title: 'Lot History & Production Monitoring', period: 'Oct 2024—Mar 2026', scope: 'internal', ai: true,
    featured: true,
    category: 'Manufacturing Data',
    summary: 'Production traceability through lot history, grade lookup, time records, DCS trends, operational reports, and permission controls.',
    stack: ['Laravel 8', 'Charts', 'Excel', 'Telescope', 'Docker'],
  },
  {
    code: 'P811', title: 'Product Classification & Final Blend', period: 'Mar 2022—Apr 2026', scope: 'internal', ai: false,
    featured: true, category: 'Quality Systems',
    summary: 'A quality decision workflow connecting final-blend analysis, product specification, classification approval, history, and formal PDFs.',
    stack: ['Laravel 8', 'Excel', 'TCPDF', 'SSO', 'REST API'],
  },
  {
    code: 'P814', title: 'Enterprise Job Scheduler', period: 'Oct 2024—Jul 2026', scope: 'internal', ai: false,
    category: 'Automation Platform',
    summary: 'Background automation for documents, OTP, notifications, shipment status, production data, payment tasks, and operational logs.',
    stack: ['PHP', 'Cron', 'Web Push', 'SharePoint', 'Excel'],
  },
  {
    code: 'P815', title: 'Excel Automation Service', period: 'Mar 2025—Feb 2026', scope: 'internal', ai: false,
    category: 'Data Automation',
    summary: 'Template-driven workbook generation for finance batches, inventory, barcodes, warehouse documents, and production targets.',
    stack: ['PHP', 'PhpSpreadsheet', 'Oracle', 'XLSX'],
  },
  {
    code: 'P8202', title: 'Survey & Assessment Platform', period: 'Oct 2025—Aug 2026', scope: 'hybrid', ai: true,
    category: 'Data Collection',
    summary: 'A participant journey from QR registration to timed assessment, backed by imports, live monitoring, charts, and result exports.',
    stack: ['Laravel 12', 'Excel', 'Dompdf', 'Docker'],
  },
  {
    code: 'P8203', title: 'Modular Telegram Bot Platform', period: 'Oct—Nov 2025', scope: 'internal', ai: false,
    category: 'Chat Automation',
    summary: 'A reusable multi-bot foundation with isolated routes and configuration, webhook handling, OTP, user management, and logging.',
    stack: ['Laravel 12', 'Telegram API', 'Webhook', 'OTP'],
  },
  {
    code: 'P8204', title: 'Fleet GPS Ingestion API', period: 'Sep 2024—Jun 2026', scope: 'internal', ai: false,
    category: 'Secure API',
    summary: 'A narrow, secured ingestion API for vehicle location data with API keys, IP allowlisting, throttling, and generated documentation.',
    stack: ['Laravel 11', 'OpenAPI', 'API Keys', 'Docker'],
  },
  {
    code: 'P8205', title: 'Microsoft 365 Document API', period: 'Feb 2025—Jun 2026', scope: 'internal', ai: false,
    category: 'Enterprise Integration',
    summary: 'A multi-site document service for Microsoft 365 login, drives, folders, upload, download, and cross-library search.',
    stack: ['Laravel 11', 'Microsoft Graph', 'OAuth', 'Docker'],
  },
  {
    code: 'P8210', title: 'Email Delivery Platform', period: '2021—Jun 2026', scope: 'internal', ai: true,
    category: 'Backend Platform',
    summary: 'A production-minded email and PDF delivery service with queues, SMTP connection management, retries, monitoring, and containers.',
    stack: ['Laravel', 'Redis', 'PostgreSQL', 'SMTP', 'Docker'],
  },
  {
    code: 'P8216', title: 'MSDS Document Management', period: 'Mar 2025—Jun 2026', scope: 'internal', ai: true,
    category: 'Compliance Systems',
    summary: 'Searchable safety-document management with roles, master data, storage integration, user imports, and scheduled expiry reminders.',
    stack: ['Laravel 11', 'Excel', 'OneDrive', 'Scheduler', 'Docker'],
  },
  {
    code: 'P8218', title: 'Enterprise Integration Gateway', period: 'Aug 2024—May 2026', scope: 'internal', ai: false,
    featured: true, category: 'Integration Platform',
    summary: 'A controlled gateway that normalizes access to enterprise data and services with domain keys, throttling, metrics, caching, and logs.',
    stack: ['Laravel 11', 'Oracle', 'DB2', 'Redis', 'Docker'],
  },
  {
    code: 'P8220', title: 'PDF Repair & Flattening Utility', period: 'Mar 2026', scope: 'public', ai: false,
    category: 'Document Utility',
    summary: 'A document-repair utility that previews, reconstructs, decodes, or rasterizes difficult PDF files through PHP and Python paths.',
    stack: ['PHP', 'Python', 'FPDI', 'TCPDF'],
    links: [],
  },
  {
    code: 'P8224', title: 'WMS Barcode Print Utility', period: 'Apr—May 2025', scope: 'internal', ai: false,
    category: 'Warehouse Tools',
    summary: 'An Excel-to-barcode workflow with upload validation, previews, single-item printing, batch output, and A4 PDF layout.',
    stack: ['PHP', 'PhpSpreadsheet', 'Barcode', 'TCPDF'],
  },
  {
    code: 'P8225', title: 'Daily Production Report Importer', period: 'Aug—Dec 2024', scope: 'internal', ai: false,
    category: 'Manufacturing Data',
    summary: 'A guarded Excel import pipeline that stages daily production reports and exposes the validated records through an admin panel.',
    stack: ['Laravel 11', 'Filament', 'Excel', 'Docker'],
  },
  {
    code: 'P8226', title: 'Production Schedule', period: 'Jan—May 2026', scope: 'internal', ai: true,
    featured: true, category: 'Manufacturing Planning',
    summary: 'A planning system for items, batches, rates, and granules with Gantt views, configurable approvals, revisions, and signed PDF output.',
    stack: ['Laravel 12', 'RBAC', 'TCPDF', 'Docker'],
  },
  {
    code: 'P8227', title: 'Product Allocation', period: 'Mar 2026', scope: 'internal', ai: true,
    category: 'Quality & Sales',
    summary: 'A decision-support application matching product grades and inventory lots with customer attributes through controlled role workflows.',
    stack: ['Laravel 12', 'Queues', 'Excel', 'Enterprise API'],
  },
  {
    code: 'P8230', title: 'Bank File Integration Service', period: 'Nov 2024', scope: 'internal', ai: false,
    category: 'Financial Integration',
    summary: 'A secure batch-file workflow for validation, reference generation, SFTP transfer, and acknowledgment tracking.',
    stack: ['PHP', 'SFTP', 'Redis', 'Excel'],
  },
  {
    code: 'P8236', title: 'Enterprise SSO & Employee Portal', period: 'Jun 2023—Aug 2026', scope: 'internal', ai: true,
    featured: true, category: 'Identity Platform',
    summary: 'A company identity and service portal spanning OAuth/JWT, Microsoft login, access mapping, audit, employee sync, and shared documents.',
    stack: ['Laravel 12', 'OAuth 2.0', 'JWT', 'Microsoft 365', 'Docker'],
  },
  {
    code: 'PY01', title: 'Hands-Free Face Recognition Attendance', period: 'Jun 2026', scope: 'internal', ai: true,
    featured: true, category: 'Applied AI',
    summary: 'A zero-touch attendance gate combining on-device face detection, server-side recognition, vector search, deduplication, and HR tools.',
    stack: ['FastAPI', 'DeepFace', 'pgvector', 'Flutter', 'Docker'],
  },
  {
    code: 'PY04', title: 'Telegram Bot API Gateway', period: 'Oct 2025—Feb 2026', scope: 'internal', ai: false,
    category: 'Chat Automation',
    summary: 'A containerized REST gateway for messages, QR codes, OTP, documents, user lookup, queue work, and health monitoring.',
    stack: ['Flask', 'Telegram API', 'PostgreSQL', 'Gunicorn', 'Docker'],
  },
  {
    code: 'OT08', title: 'Rental Operations Tracker', period: 'Jul 2025', scope: 'hybrid', ai: false,
    category: 'Small Business',
    summary: 'A customer ordering and admin operations flow for rental units, delivery, pickup, drivers, payments, notes, and reward points.',
    stack: ['Laravel 12', 'SQLite', 'REST API', 'Blade'],
  },
];

const scopeLabels = {
  internal: 'Internal',
  public: 'Public',
  hybrid: 'Hybrid',
};

// Sanitized product flows: business sequence only, with no organization names,
// private endpoints, credentials, infrastructure addresses, or production records.
const projectFlows = {
  CF01: 'Visitor browses the catalog → builds a cart → submits checkout → tracks the order → an operator verifies fulfillment.',
  CF02: 'Operator records assets and cash flow → the system calculates recovery and sharing → authorized roles review settlement.',
  FL02: 'Staff opens a request → scans material → availability is validated → issue or return is submitted → an approver confirms.',
  JS03: 'Visitor explores benefits and configurations → reviews proof and comparisons → selects a CTA → continues through a contact channel.',
  LV01: 'Cashier syncs the catalog → builds a transaction online or offline → stock updates → data synchronizes → owner reviews reports.',
  P501: 'Employee requests supplies → approver reviews → warehouse fulfills → stock movement is recorded → an operational report is generated.',
  P506: 'User searches for an item → the service checks availability → matching storage areas and physical locators are displayed.',
  P508: 'Receiving logs incoming material → inspection captures lot and quality checks → reviewers approve → labels and reports are issued.',
  P511: 'Request is created → warehouse approves and prepares shipment → delivery document is issued → recipient confirms → status closes.',
  P513: 'User opens a work order → reviewers approve or revise → executor records progress and evidence → history and reports are updated.',
  P702: 'Application submits a notification → service applies a template and queues delivery → message is sent → failures are logged for retry.',
  P705: 'Employee captures a location-aware check-in → policy and evidence are validated → supervisor reviews → attendance can be exported.',
  P804: 'Evaluator receives criteria → bidders are scored and clarified → results are consolidated → reviewers approve → formal report is generated.',
  P805: 'Operator retrieves inventory and lot data → prepares a grade draft → department submits → the system produces an Excel report.',
  P806: 'Request is created with evidence → manager and supervisor review → realization is recorded → history and reporting stay traceable.',
  P808: 'Incident is recorded → investigation and risk assessment follow → corrective actions are assigned → evidence is reviewed → case closes.',
  P810: 'User searches a lot or grade → production records and trends are combined → authorized users review and export the result.',
  P811: 'Laboratory results meet product specifications → classification is proposed → reviewers approve → final-blend history and PDF are produced.',
  P814: 'Scheduler selects a due job → invokes the relevant service → records its outcome → retry or notification rules handle exceptions.',
  P815: 'User selects a template → service retrieves authorized data → workbook cells are populated → a downloadable file is returned.',
  P8202: 'Participant registers through QR → completes a timed assessment → responses are stored → administrators monitor, analyze, and export results.',
  P8203: 'Client calls an assigned bot route → module validates the request → bot action is executed → result and status are logged.',
  P8204: 'Authorized source submits a location → API authenticates, validates, and rate-limits → record is stored → latest position becomes available.',
  P8205: 'User signs in through Microsoft → selects a permitted site or library → service performs the file action → normalized result returns.',
  P8210: 'Client submits an email or PDF request → queue schedules delivery → managed connections send it → monitoring handles retries and failures.',
  P8216: 'Administrator manages safety documents → users search and access approved files → scheduler checks expiry → reminders are sent.',
  P8218: 'Consumer calls a domain endpoint → gateway authenticates and throttles → adapter reads an approved system or cache → response is logged.',
  P8220: 'User uploads a difficult PDF → tool selects a repair strategy → document is reconstructed or rasterized → cleaned output is returned.',
  P8224: 'Operator uploads a spreadsheet → rows are validated and previewed → barcodes are rendered → print-ready PDF is generated.',
  P8225: 'Administrator uploads a daily workbook → staging validates and transforms rows → approved records are stored → panel displays the result.',
  P8226: 'Planner prepares a schedule → approval chain reviews or revises → timeline and status update → signed PDF is released.',
  P8227: 'User supplies product and customer criteria → rules identify eligible lots → authorized roles review allocation → result is finalized.',
  P8230: 'Approved batch is retrieved → references and transfer file are generated → secure delivery starts → acknowledgements are tracked.',
  P8236: 'Employee authenticates → SSO validates identity and access mapping → portal opens permitted services → activity remains auditable.',
  PY01: 'Employee approaches the gate → device detects a face → server compares it → policy and duplicate checks run → attendance is recorded.',
  PY04: 'Client sends an authenticated request → gateway queues and translates the action → bot service executes → response and log return.',
  OT08: 'Customer places a rental order → administrator schedules unit and delivery → driver updates handoff and pickup → payment is reconciled.',
};

const projectVisuals = {
  'Applied AI': '◎',
  'Integration Platform': '⇄',
  'Identity Platform': '⌘',
  'Quality Systems': '◇',
  'Manufacturing Planning': '▥',
  'Cloud Operations': '◫',
  'Cloud Commerce': '◈',
  'Enterprise Workflow': '⌁',
};

const featuredProjectsEl = document.getElementById('featuredProjects');
const projectCatalogEl = document.getElementById('projectCatalog');
const projectFiltersEl = document.getElementById('projectFilters');
const projectSearchEl = document.getElementById('projectSearch');
const projectResultCountEl = document.getElementById('projectResultCount');
const projectEmptyEl = document.getElementById('projectEmpty');
let activeProjectFilter = 'all';

function projectBadges(project) {
  const aiLabel = project.ai ? 'AI-assisted' : 'No AI artifacts';
  return `
    <span class="project-badge project-badge--${project.scope}">${scopeLabels[project.scope]}</span>
    <span class="project-badge project-badge--${project.ai ? 'ai' : 'human'}">${aiLabel}</span>
  `;
}

function safePublicUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === 'https:' || url.protocol === 'http:' ? url.href : '';
  } catch {
    return '';
  }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;',
  })[character]);
}

function projectFlow(project) {
  const flow = projectFlows[project.code];
  if (!flow) return '';

  return `
    <div class="project-flow">
      <span class="project-flow__label">Flow</span>
      <p>${escapeHtml(flow)}</p>
    </div>
  `;
}

function projectLinks(project) {
  if (project.scope !== 'public') return '';

  const links = (project.links || [])
    .map((link, index) => {
      const rawUrl = typeof link === 'string' ? link : link?.url;
      const url = safePublicUrl(rawUrl);
      let label = typeof link === 'string' ? '' : link?.label;

      if (!label && url) {
        const hostname = new URL(url).hostname.toLowerCase();
        label = hostname === 'github.com' || hostname.endsWith('.github.com')
          ? 'Source Code'
          : index === 0 ? 'View Live App' : `Project Link ${index + 1}`;
      }

      return { label: escapeHtml(label || ''), url };
    })
    .filter((link) => link.label && link.url);
  if (!links.length) return '';

  return `
    <div class="project-links" aria-label="Public project links">
      ${links.map((link) => `
        <a class="project-link" href="${link.url}" target="_blank" rel="noopener noreferrer"
          aria-label="${link.label}: ${escapeHtml(project.title)}">
          <span>${link.label}</span><span aria-hidden="true">↗</span>
        </a>
      `).join('')}
    </div>
  `;
}

function featuredProjectCard(project, index) {
  const visual = projectVisuals[project.category] || '⌁';
  return `
    <article class="project-card project-card--featured project-enter" style="--project-index:${index}">
      <div class="project-card__visual" aria-hidden="true">
        <span class="project-card__code">${project.code}</span>
        <span class="project-card__signal">${visual}</span>
        <span class="project-card__category">${project.category}</span>
      </div>
      <div class="project-card__body">
        <div class="project-card__meta"><span>${project.period}</span><span>Selected case study</span></div>
        <h3 class="project-card__title">${project.title}</h3>
        <p class="project-card__desc">${project.summary}</p>
        ${projectFlow(project)}
        <div class="project-card__badges">${projectBadges(project)}</div>
        <div class="project-card__tags">${project.stack.map((item) => `<span class="tag">${item}</span>`).join('')}</div>
        ${projectLinks(project)}
        <div class="project-card__privacy"><span aria-hidden="true">◌</span> ${project.scope === 'public' ? 'Public product' : 'Private case study — sanitized'}</div>
      </div>
    </article>
  `;
}

function catalogProjectCard(project, index) {
  return `
    <article class="catalog-card project-enter" style="--project-index:${index}">
      <div class="catalog-card__top">
        <span class="catalog-card__code">${project.code}</span>
        <span class="catalog-card__period">${project.period}</span>
      </div>
      <p class="catalog-card__category">${project.category}</p>
      <h3>${project.title}</h3>
      <p class="catalog-card__desc">${project.summary}</p>
      ${projectFlow(project)}
      <div class="project-card__badges">${projectBadges(project)}</div>
      <div class="catalog-card__stack">${project.stack.slice(0, 4).map((item) => `<span>${item}</span>`).join('')}</div>
      ${projectLinks(project)}
    </article>
  `;
}

function matchesProjectFilter(project) {
  const query = projectSearchEl?.value.trim().toLowerCase() || '';
  const filterMatch = activeProjectFilter === 'all'
    || (activeProjectFilter === 'featured' && project.featured)
    || activeProjectFilter === project.scope
    || (activeProjectFilter === 'ai' && project.ai);
  const searchable = [project.code, project.title, project.category, project.summary, projectFlows[project.code], ...project.stack]
    .join(' ')
    .toLowerCase();
  return filterMatch && (!query || searchable.includes(query));
}

function renderProjects() {
  if (!featuredProjectsEl || !projectCatalogEl) return;

  const filtered = projects.filter(matchesProjectFilter);
  const featured = filtered.filter((project) => project.featured);
  const catalog = filtered.filter((project) => !project.featured);

  featuredProjectsEl.innerHTML = featured.map(featuredProjectCard).join('');
  projectCatalogEl.innerHTML = catalog.map(catalogProjectCard).join('');
  featuredProjectsEl.hidden = featured.length === 0;
  projectCatalogEl.hidden = catalog.length === 0;
  projectEmptyEl.hidden = filtered.length !== 0;
  projectResultCountEl.textContent = `${filtered.length} project${filtered.length === 1 ? '' : 's'}`;

  attachProjectCardTilt();
}

projectFiltersEl?.addEventListener('click', (event) => {
  const button = event.target.closest('[data-filter]');
  if (!button) return;
  activeProjectFilter = button.dataset.filter;
  projectFiltersEl.querySelectorAll('.project-filter').forEach((item) => {
    const isActive = item === button;
    item.classList.toggle('is-active', isActive);
    item.setAttribute('aria-pressed', String(isActive));
  });
  renderProjects();
});

projectSearchEl?.addEventListener('input', renderProjects);
renderProjects();


const typedEl = document.getElementById('typedText');
let phraseIdx = 0;
let charIdx = 0;
let isDeleting = false;
let typingSpeed = 80;

function typeEffect() {
  const current = phrases[phraseIdx];

  if (isDeleting) {
    typedEl.textContent = current.substring(0, charIdx - 1);
    charIdx--;
    typingSpeed = 40;
  } else {
    typedEl.textContent = current.substring(0, charIdx + 1);
    charIdx++;
    typingSpeed = 80;
  }

  if (!isDeleting && charIdx === current.length) {
    typingSpeed = 2000; // pause at end
    isDeleting = true;
  } else if (isDeleting && charIdx === 0) {
    isDeleting = false;
    phraseIdx = (phraseIdx + 1) % phrases.length;
    typingSpeed = 500; // pause before next phrase
  }

  setTimeout(typeEffect, typingSpeed);
}

// Start typing after a short delay
setTimeout(typeEffect, 1500);

// ---- Scroll Reveal (IntersectionObserver) ----
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => {
          entry.target.classList.add('is-visible');
        }, delay * 100);
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
);

revealElements.forEach((el) => revealObserver.observe(el));

// ---- Navbar scroll effect ----
const navbar = document.getElementById('navbar');

function handleNavScroll() {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}
window.addEventListener('scroll', handleNavScroll, { passive: true });

// ---- Mobile nav toggle ----
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navLinks.classList.toggle('open');
  document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
});

// Close mobile nav on link click
navLinks.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ---- Smooth scroll for anchor links ----
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ---- Counter animation for stats ----
// Coding experience grows automatically every calendar year from 2019.
document.querySelectorAll('.stat__number[data-start-year]').forEach((el) => {
  const startYear = Number.parseInt(el.dataset.startYear, 10);
  const yearsCoding = Math.max(0, new Date().getFullYear() - startYear);
  el.dataset.count = String(yearsCoding);
});

const statNumbers = document.querySelectorAll('.stat__number[data-count]');

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count, 10);
        let current = 0;
        const increment = Math.max(1, Math.floor(target / 40));
        const duration = 1200;
        const stepTime = duration / (target / increment);

        const counter = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(counter);
          }
          el.textContent = current;
        }, stepTime);

        counterObserver.unobserve(el);
      }
    });
  },
  { threshold: 0.5 }
);

statNumbers.forEach((el) => counterObserver.observe(el));

// ---- Skill cards: animate progress bars on reveal ----
const skillCards = document.querySelectorAll('.skill-card');

const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => {
          entry.target.classList.add('is-visible');
        }, delay * 100);
        skillObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

skillCards.forEach((card) => skillObserver.observe(card));

// ---- Subtle tilt effect on featured project cards ----
function attachProjectCardTilt() {
  if (!window.matchMedia('(pointer: fine)').matches) return;

  document.querySelectorAll('.project-card--featured').forEach((card) => {
    card.addEventListener('mousemove', (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `translateY(-6px) perspective(800px) rotateX(${-y * 2.5}deg) rotateY(${x * 2.5}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

// ---- Active nav link on scroll ----
const sections = document.querySelectorAll('section[id]');

function highlightNav() {
  const scrollY = window.scrollY + 150;

  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    const link = document.querySelector(`.nav-link[href="#${id}"]`);

    if (link) {
      if (scrollY >= top && scrollY < top + height) {
        link.style.color = 'var(--neon-primary)';
      } else {
        link.style.color = '';
      }
    }
  });
}

window.addEventListener('scroll', highlightNav, { passive: true });

// ---- Parallax glow orbs on mouse move (desktop only) ----
if (window.matchMedia('(min-width: 768px)').matches) {
  const glows = document.querySelectorAll('.hero__glow');

  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;

    glows.forEach((glow, i) => {
      const factor = i === 0 ? 1 : -0.7;
      glow.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
    });
  });
}
