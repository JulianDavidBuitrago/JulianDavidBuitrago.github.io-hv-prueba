'use strict';

/* =========================================================
   1. DATOS DE LA HOJA DE VIDA (fuente única para ambos formatos)
   Edite este objeto para personalizar el contenido.
   ========================================================= */

const CV = {
  nombre: 'Andrés Felipe Restrepo Gómez',
  iniciales: 'AR',
  cargo: 'Desarrollador Full Stack Senior',
  stackResumen: 'TypeScript · React · Next.js · Node.js · AWS',
  disponibilidad: 'Disponible · Remoto / Híbrido',

  contacto: {
    email: 'andres.restrepo@email.com',
    telefono: '+57 300 123 4567',
    ubicacion: 'Bogotá, Colombia',
    linkedin: 'linkedin.com/in/andresrestrepo-dev',
    github: 'github.com/andresrestrepo-dev',
    portafolio: 'andresrestrepo.dev'
  },

  perfil:
    'Desarrollador Full Stack con más de 6 años de experiencia diseñando, construyendo y desplegando ' +
    'aplicaciones web escalables en los sectores fintech, comercio electrónico y salud. Especialista en el ' +
    'ecosistema JavaScript/TypeScript (React, Next.js, Node.js) y en arquitecturas de microservicios sobre AWS. ' +
    'Orientado a la calidad del código, la experiencia de usuario y la entrega continua, con experiencia liderando ' +
    'equipos ágiles de hasta 6 personas y acompañando el crecimiento de perfiles junior.',

  metricas: [
    { valor: '6+',  etiqueta: 'años de experiencia' },
    { valor: '30+', etiqueta: 'proyectos entregados' },
    { valor: '45%', etiqueta: 'menos latencia en APIs' },
    { valor: '80%', etiqueta: 'cobertura de pruebas' }
  ],

  experiencia: [
    {
      cargo: 'Desarrollador Full Stack Senior',
      empresa: 'Nexa Fintech S.A.S.',
      ubicacion: 'Bogotá · Híbrido',
      inicio: 'Ene 2023',
      fin: 'Actualidad',
      logros: [
        'Lideró la migración de un monolito PHP a microservicios en Node.js y TypeScript, reduciendo en 45 % el tiempo de respuesta de la API.',
        'Diseñó el portal de clientes en Next.js con renderizado en servidor, alcanzando 98 puntos en Lighthouse y elevando la conversión en 18 %.',
        'Implementó pipelines de CI/CD con GitHub Actions y Docker, pasando de despliegues quincenales a despliegues diarios sin incidentes críticos.',
        'Coordinó un equipo de 6 desarrolladores bajo Scrum y realizó mentoría técnica a 3 perfiles junior.'
      ],
      stack: ['TypeScript', 'Next.js', 'Node.js', 'PostgreSQL', 'AWS', 'Docker']
    },
    {
      cargo: 'Desarrollador Frontend',
      empresa: 'Mercadia Retail',
      ubicacion: 'Medellín · Remoto',
      inicio: 'Mar 2021',
      fin: 'Dic 2022',
      logros: [
        'Construyó una librería de componentes en React y Storybook adoptada por 4 equipos de producto, reduciendo en 30 % el tiempo de desarrollo de nuevas vistas.',
        'Optimizó el checkout del comercio electrónico (code splitting, lazy loading y caché), disminuyendo la tasa de abandono en 12 %.',
        'Garantizó el cumplimiento de accesibilidad WCAG 2.1 AA en los flujos principales de compra.',
        'Elevó la cobertura de pruebas del 35 % al 80 % con Jest y Testing Library.'
      ],
      stack: ['React', 'Redux Toolkit', 'Storybook', 'Jest', 'Tailwind CSS']
    },
    {
      cargo: 'Desarrollador de Software Junior',
      empresa: 'Soluciones Andinas TI',
      ubicacion: 'Bogotá · Presencial',
      inicio: 'Jul 2019',
      fin: 'Feb 2021',
      logros: [
        'Desarrolló APIs REST en Node.js y Express para un sistema de agendamiento médico con más de 20.000 usuarios activos.',
        'Modeló y optimizó consultas en MySQL, reduciendo en 60 % el tiempo de generación de reportes.',
        'Participó en el levantamiento de requerimientos y documentó los servicios con OpenAPI/Swagger.'
      ],
      stack: ['JavaScript', 'Express', 'MySQL', 'Swagger', 'Git']
    }
  ],

  proyectos: [
    {
      nombre: 'DevBoard',
      descripcion: 'Tablero de código abierto para monitorear métricas de repositorios en GitHub. Más de 1.200 estrellas.',
      stack: ['React', 'GraphQL', 'Node.js'],
      enlace: 'github.com/andresrestrepo-dev/devboard'
    },
    {
      nombre: 'PagoFácil API',
      descripcion: 'Pasarela de pagos de referencia con webhooks, idempotencia y pruebas de carga con k6.',
      stack: ['NestJS', 'PostgreSQL', 'Redis'],
      enlace: 'github.com/andresrestrepo-dev/pagofacil-api'
    },
    {
      nombre: 'EcoRuta',
      descripcion: 'Aplicación web progresiva para planificar rutas de reciclaje urbano, con funcionamiento sin conexión.',
      stack: ['Vue 3', 'Firebase', 'Mapbox'],
      enlace: 'ecoruta.andresrestrepo.dev'
    }
  ],

  competencias: [
    { nombre: 'JavaScript / TypeScript', nivel: 95 },
    { nombre: 'React / Next.js',         nivel: 92 },
    { nombre: 'Node.js / NestJS',        nivel: 88 },
    { nombre: 'SQL y NoSQL',             nivel: 82 },
    { nombre: 'Testing automatizado',    nivel: 80 },
    { nombre: 'AWS y Docker',            nivel: 78 }
  ],

  stack: {
    'Lenguajes':        ['JavaScript', 'TypeScript', 'Python', 'SQL'],
    'Frontend':         ['React', 'Next.js', 'Vue 3', 'HTML5', 'CSS3', 'Tailwind CSS'],
    'Backend':          ['Node.js', 'Express', 'NestJS', 'GraphQL', 'REST'],
    'Bases de datos':   ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
    'Cloud y DevOps':   ['AWS', 'Docker', 'GitHub Actions', 'Terraform'],
    'Calidad':          ['Jest', 'Cypress', 'Testing Library', 'SonarQube'],
    'Metodologías':     ['Scrum', 'Kanban', 'Clean Architecture', 'TDD']
  },

  blandas: [
    'Liderazgo técnico', 'Comunicación asertiva', 'Resolución de problemas',
    'Pensamiento analítico', 'Trabajo en equipo', 'Aprendizaje continuo'
  ],

  educacion: [
    { titulo: 'Especialización en Arquitectura de Software', institucion: 'Pontificia Universidad Javeriana', periodo: '2021 – 2022' },
    { titulo: 'Ingeniería de Sistemas y Computación',        institucion: 'Universidad Nacional de Colombia', periodo: '2014 – 2019' }
  ],

  certificaciones: [
    { nombre: 'AWS Certified Developer – Associate',     emisor: 'Amazon Web Services', anio: '2024' },
    { nombre: 'Professional Scrum Master I (PSM I)',      emisor: 'Scrum.org',           anio: '2023' },
    { nombre: 'Meta Front-End Developer',                 emisor: 'Coursera',            anio: '2021' }
  ],

  idiomas: [
    { idioma: 'Español', nivel: 'Nativo',            pct: 100 },
    { idioma: 'Inglés',  nivel: 'B2 · Profesional',  pct: 75 }
  ]
};

/* =========================================================
   2. UTILIDADES
   ========================================================= */

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

const esc = (value) =>
  String(value).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const periodo = (item) => `${item.inicio} – ${item.fin}`;

const slug = (text) =>
  text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^A-Za-z0-9]+/g, '_').replace(/^_|_$/g, '');

const ICONS = {
  mail:     '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>',
  phone:    '<rect x="6" y="2" width="12" height="20" rx="2.5"/><line x1="11" y1="18" x2="13" y2="18"/>',
  pin:      '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
  linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
  code:     '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
  globe:    '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
  link:     '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
  award:    '<circle cx="12" cy="8" r="6"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>'
};

const icon = (name) =>
  `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name]}</svg>`;

/* =========================================================
   3. RENDER · FORMATO VISUAL
   ========================================================= */

function renderVisual() {
  const c = CV.contacto;

  const contacto = [
    ['mail', c.email, `mailto:${c.email}`],
    ['phone', c.telefono, `tel:${c.telefono.replace(/\s/g, '')}`],
    ['pin', c.ubicacion, null],
    ['linkedin', c.linkedin, `https://${c.linkedin}`],
    ['code', c.github, `https://${c.github}`],
    ['globe', c.portafolio, `https://${c.portafolio}`]
  ].map(([ico, texto, href]) => {
    const inner = `<span class="ico-wrap">${icon(ico)}</span>${esc(texto)}`;
    return `<li>${href ? `<a href="${esc(href)}" target="_blank" rel="noopener">${inner}</a>` : `<span>${inner}</span>`}</li>`;
  }).join('');

  const competencias = CV.competencias.map((s) => `
    <div class="v-skill">
      <div class="v-skill__row"><span>${esc(s.nombre)}</span><small>${s.nivel}%</small></div>
      <div class="bar" role="meter" aria-label="${esc(s.nombre)}" aria-valuenow="${s.nivel}" aria-valuemin="0" aria-valuemax="100">
        <span class="bar__fill" style="--lvl:${s.nivel}%"></span>
      </div>
    </div>`).join('');

  const idiomas = CV.idiomas.map((l) => `
    <div class="v-skill v-lang">
      <div class="v-skill__row"><span>${esc(l.idioma)}</span><small>${esc(l.nivel)}</small></div>
      <div class="bar"><span class="bar__fill" style="--lvl:${l.pct}%"></span></div>
    </div>`).join('');

  const blandas = CV.blandas.map((b) => `<span class="chip chip--soft">${esc(b)}</span>`).join('');

  const metricas = CV.metricas.map((m) => `
    <div class="v-metric">
      <span class="v-metric__value">${esc(m.valor)}</span>
      <span class="v-metric__label">${esc(m.etiqueta)}</span>
    </div>`).join('');

  const experiencia = CV.experiencia.map((j) => `
    <div class="v-job avoid-break">
      <div class="v-job__head">
        <div>
          <h3 class="v-job__role">${esc(j.cargo)}</h3>
          <p class="v-job__company">${esc(j.empresa)} <span>· ${esc(j.ubicacion)}</span></p>
        </div>
        <span class="v-date">${esc(periodo(j))}</span>
      </div>
      <ul>${j.logros.map((l) => `<li>${esc(l)}</li>`).join('')}</ul>
      <div class="chips">${j.stack.map((t) => `<span class="chip">${esc(t)}</span>`).join('')}</div>
    </div>`).join('');

  const proyectos = CV.proyectos.map((p) => `
    <div class="v-card avoid-break">
      <h3>${esc(p.nombre)}</h3>
      <p>${esc(p.descripcion)}</p>
      <div class="chips">${p.stack.map((t) => `<span class="chip">${esc(t)}</span>`).join('')}</div>
      <a class="v-card__link" href="https://${esc(p.enlace)}" target="_blank" rel="noopener">${icon('link')}${esc(p.enlace)}</a>
    </div>`).join('');

  const stack = Object.entries(CV.stack).map(([cat, items]) => `
    <div class="v-stack__row">
      <span class="v-stack__label">${esc(cat)}</span>
      <div class="chips">${items.map((t) => `<span class="chip">${esc(t)}</span>`).join('')}</div>
    </div>`).join('');

  const educacion = CV.educacion.map((e) => `
    <div class="v-edu__item">
      <h3>${esc(e.titulo)}</h3>
      <p>${esc(e.institucion)} · ${esc(e.periodo)}</p>
    </div>`).join('');

  const certificaciones = CV.certificaciones.map((ce) => `
    <li>${icon('award')}<span><strong>${esc(ce.nombre)}</strong> — ${esc(ce.emisor)}, ${esc(ce.anio)}</span></li>`).join('');

  return `
    <header class="v-hero">
      <div class="v-avatar"><span>${esc(CV.iniciales)}</span></div>
      <div>
        <span class="v-badge"><span class="v-badge__dot"></span>${esc(CV.disponibilidad)}</span>
        <h1 class="v-name">${esc(CV.nombre)}</h1>
        <p class="v-role">${esc(CV.cargo)}</p>
        <p class="v-tagline">${esc(CV.stackResumen)}</p>
      </div>
    </header>

    <div class="v-metrics">${metricas}</div>

    <div class="v-body">
      <aside class="v-side">
        <div class="v-side-grid">
          <section class="v-section">
            <h2 class="v-title">Contacto</h2>
            <ul class="v-contact">${contacto}</ul>
          </section>
          <section class="v-section">
            <h2 class="v-title">Competencias</h2>
            ${competencias}
          </section>
          <section class="v-section">
            <h2 class="v-title">Idiomas</h2>
            ${idiomas}
          </section>
          <section class="v-section">
            <h2 class="v-title">Habilidades blandas</h2>
            <div class="chips">${blandas}</div>
          </section>
        </div>
      </aside>

      <div class="v-main">
        <section class="v-section">
          <h2 class="v-title">Perfil profesional</h2>
          <p class="v-profile">${esc(CV.perfil)}</p>
        </section>

        <section class="v-section">
          <h2 class="v-title">Experiencia laboral</h2>
          <div class="v-timeline">${experiencia}</div>
        </section>

        <section class="v-section avoid-break">
          <h2 class="v-title">Proyectos destacados</h2>
          <div class="v-projects">${proyectos}</div>
        </section>

        <section class="v-section avoid-break">
          <h2 class="v-title">Stack tecnológico</h2>
          <div class="v-stack">${stack}</div>
        </section>

        <section class="v-section avoid-break">
          <h2 class="v-title">Educación</h2>
          <div class="v-edu">${educacion}</div>
        </section>

        <section class="v-section avoid-break">
          <h2 class="v-title">Certificaciones</h2>
          <ul class="v-certs">${certificaciones}</ul>
        </section>
      </div>
    </div>`;
}

/* =========================================================
   4. RENDER · FORMATO ATS
   Estructura lineal, encabezados estándar, sin tablas ni íconos.
   ========================================================= */

function renderATS() {
  const c = CV.contacto;

  return `
    <header>
      <h1 class="ats-name">${esc(CV.nombre)}</h1>
      <p class="ats-role">${esc(CV.cargo)}</p>
      <p class="ats-contact">
        <span>${esc(c.email)}</span><span>${esc(c.telefono)}</span><span>${esc(c.ubicacion)}</span>
      </p>
      <p class="ats-contact">
        <span>${esc(c.linkedin)}</span><span>${esc(c.github)}</span><span>${esc(c.portafolio)}</span>
      </p>
    </header>

    <section class="ats-section">
      <h2>Perfil profesional</h2>
      <p>${esc(CV.perfil)}</p>
    </section>

    <section class="ats-section">
      <h2>Experiencia laboral</h2>
      ${CV.experiencia.map((j) => `
        <div class="ats-item">
          <h3>${esc(j.cargo)}</h3>
          <p class="ats-meta">${esc(j.empresa)} | ${esc(j.ubicacion)} | ${esc(periodo(j))}</p>
          <ul>${j.logros.map((l) => `<li>${esc(l)}</li>`).join('')}</ul>
          <p class="ats-tech">Tecnologías: ${esc(j.stack.join(', '))}</p>
        </div>`).join('')}
    </section>

    <section class="ats-section ats-skills">
      <h2>Habilidades técnicas</h2>
      ${Object.entries(CV.stack).map(([cat, items]) =>
        `<p><strong>${esc(cat)}:</strong> ${esc(items.join(', '))}</p>`).join('')}
    </section>

    <section class="ats-section">
      <h2>Proyectos destacados</h2>
      ${CV.proyectos.map((p) => `
        <div class="ats-item">
          <h3>${esc(p.nombre)}</h3>
          <p>${esc(p.descripcion)}</p>
          <p class="ats-tech">Tecnologías: ${esc(p.stack.join(', '))} | ${esc(p.enlace)}</p>
        </div>`).join('')}
    </section>

    <section class="ats-section">
      <h2>Educación</h2>
      ${CV.educacion.map((e) => `
        <div class="ats-item">
          <h3>${esc(e.titulo)}</h3>
          <p class="ats-meta">${esc(e.institucion)} | ${esc(e.periodo)}</p>
        </div>`).join('')}
    </section>

    <section class="ats-section">
      <h2>Certificaciones</h2>
      <ul>${CV.certificaciones.map((ce) => `<li>${esc(ce.nombre)} – ${esc(ce.emisor)} (${esc(ce.anio)})</li>`).join('')}</ul>
    </section>

    <section class="ats-section">
      <h2>Idiomas</h2>
      <ul>${CV.idiomas.map((l) => `<li>${esc(l.idioma)}: ${esc(l.nivel)}</li>`).join('')}</ul>
    </section>

    <section class="ats-section">
      <h2>Habilidades blandas</h2>
      <p>${esc(CV.blandas.join(', '))}</p>
    </section>`;
}

/* =========================================================
   5. PDF · FORMATO ATS
   Se genera con texto real (jsPDF), no como imagen, para que los
   sistemas ATS puedan leer, indexar y extraer cada dato.
   ========================================================= */

function generateATSPdf() {
  const JsPDF = window.jspdf && window.jspdf.jsPDF;
  if (!JsPDF) throw new Error('jsPDF no está disponible');

  const doc = new JsPDF({ unit: 'pt', format: 'a4', compress: true });
  const PW = doc.internal.pageSize.getWidth();
  const PH = doc.internal.pageSize.getHeight();
  const M = 54;
  const W = PW - M * 2;
  const INK = [17, 17, 17];
  const MUTED = [70, 70, 70];
  let y = M;

  const ensure = (h) => {
    if (y + h > PH - M) { doc.addPage(); y = M; }
  };

  const write = (text, opts = {}) => {
    const { size = 10, style = 'normal', color = INK, after = 0, lh = 1.42 } = opts;
    doc.setFont('helvetica', style);
    doc.setFontSize(size);
    doc.setTextColor(...color);
    const step = size * lh;
    doc.splitTextToSize(String(text), W).forEach((line) => {
      ensure(step);
      doc.text(line, M, y, { baseline: 'top' });
      y += step;
    });
    y += after;
  };

  const heading = (title) => {
    y += 12;
    ensure(46);
    write(title.toUpperCase(), { size: 11.5, style: 'bold', after: 2 });
    doc.setDrawColor(17, 17, 17);
    doc.setLineWidth(0.8);
    doc.line(M, y, PW - M, y);
    y += 8;
  };

  const bullet = (text) => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(...INK);
    const step = 14;
    doc.splitTextToSize(String(text), W - 14).forEach((line, i) => {
      ensure(step);
      if (i === 0) doc.text('•', M + 2, y, { baseline: 'top' });
      doc.text(line, M + 14, y, { baseline: 'top' });
      y += step;
    });
    y += 2;
  };

  const c = CV.contacto;

  // Encabezado
  write(CV.nombre, { size: 20, style: 'bold', after: 2 });
  write(CV.cargo, { size: 12, style: 'bold', color: MUTED, after: 4 });
  write(`${c.email} | ${c.telefono} | ${c.ubicacion}`, { size: 9.5, color: MUTED });
  write(`${c.linkedin} | ${c.github} | ${c.portafolio}`, { size: 9.5, color: MUTED });

  heading('Perfil profesional');
  write(CV.perfil, { size: 10 });

  heading('Experiencia laboral');
  CV.experiencia.forEach((j, idx) => {
    ensure(60);
    write(j.cargo, { size: 11, style: 'bold' });
    write(`${j.empresa} | ${j.ubicacion} | ${periodo(j)}`, { size: 9.5, color: MUTED, after: 4 });
    j.logros.forEach(bullet);
    write(`Tecnologías: ${j.stack.join(', ')}`, { size: 9.5, color: MUTED, after: idx < CV.experiencia.length - 1 ? 10 : 0 });
  });

  heading('Habilidades técnicas');
  Object.entries(CV.stack).forEach(([cat, items]) => write(`${cat}: ${items.join(', ')}`, { size: 10, after: 1 }));

  heading('Proyectos destacados');
  CV.proyectos.forEach((p, idx) => {
    ensure(44);
    write(p.nombre, { size: 10.5, style: 'bold' });
    write(p.descripcion, { size: 10 });
    write(`Tecnologías: ${p.stack.join(', ')} | ${p.enlace}`, { size: 9.5, color: MUTED, after: idx < CV.proyectos.length - 1 ? 8 : 0 });
  });

  heading('Educación');
  CV.educacion.forEach((e) => {
    ensure(32);
    write(e.titulo, { size: 10.5, style: 'bold' });
    write(`${e.institucion} | ${e.periodo}`, { size: 9.5, color: MUTED, after: 6 });
  });

  heading('Certificaciones');
  CV.certificaciones.forEach((ce) => bullet(`${ce.nombre} – ${ce.emisor} (${ce.anio})`));

  heading('Idiomas');
  CV.idiomas.forEach((l) => bullet(`${l.idioma}: ${l.nivel}`));

  heading('Habilidades blandas');
  write(CV.blandas.join(', '), { size: 10 });

  // Numeración de páginas
  const total = doc.getNumberOfPages();
  for (let i = 1; i <= total; i += 1) {
    doc.setPage(i);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(120, 120, 120);
    doc.text(`${CV.nombre} · Página ${i} de ${total}`, PW / 2, PH - 26, { align: 'center' });
  }

  doc.setProperties({
    title: `Hoja de vida – ${CV.nombre}`,
    subject: CV.cargo,
    author: CV.nombre,
    keywords: Object.values(CV.stack).flat().join(', '),
    creator: 'CV Builder'
  });

  doc.save(`CV_${slug(CV.nombre)}_ATS.pdf`);
}

/* =========================================================
   6. PDF · FORMATO VISUAL
   1) Se clona la hoja de vida en un lienzo de ancho A4 fijo (794 px),
      siempre con el diseño de escritorio.
   2) Cada columna (lateral y principal) se pagina por separado, de modo
      que ningún bloque (experiencia, tarjeta, habilidad, título…) quede
      partido y una columna no obligue a cortar la otra.
   3) Se captura con html2canvas y se compone cada página A4 con jsPDF:
      encabezado en la primera página y columnas debajo, con margen
      superior en las páginas de continuación.
   ========================================================= */

const PDF_LAYOUT = {
  sheetW: 794,                               // px CSS = 210 mm
  pageH: Math.floor(794 * 297 / 210),        // 1122 px CSS = 297 mm
  topGap: 40,                                // margen superior en páginas 2+
  bottomGap: 30,                             // margen inferior de seguridad
  keepWithNext: 80                           // un título nunca queda solo al final
};

const COLUMN_BLOCKS = {
  side: '.v-title, .v-contact li, .v-skill, .chips',
  main: '.v-title, .v-profile, .v-job__head, .v-job li, .v-job .chips, .v-card, .v-stack__row, .v-edu__item, .v-certs li'
};

/** Mide los bloques indivisibles de una columna en coordenadas de la hoja. */
function measureBlocks(column, selector, originTop) {
  const { pageH, keepWithNext } = PDF_LAYOUT;
  return $$(selector, column)
    .map((el) => {
      const r = el.getBoundingClientRect();
      const extra = el.classList.contains('v-title') ? keepWithNext : 0;
      return { top: r.top - originTop, bottom: r.bottom - originTop + extra };
    })
    .filter((b) => b.bottom - b.top < pageH * 0.8);
}

/** Calcula los cortes de una columna: [inicio, corte1, corte2, …, fin]. */
function columnCuts(blocks, from, end, firstLimit, nextAvail) {
  const cuts = [from];
  let start = from;
  let limit = firstLimit;

  while (end > limit) {
    const avail = limit - start;
    let cut = limit;
    let moved = true;

    // Retrocede el corte hasta que no atraviese ningún bloque.
    while (moved) {
      moved = false;
      for (const b of blocks) {
        if (b.top < cut && b.bottom > cut && b.top > start + 20) {
          cut = Math.floor(b.top) - 12;
          moved = true;
        }
      }
    }

    if (cut <= start + avail * 0.3) cut = limit;     // evita páginas casi vacías
    cuts.push(cut);
    start = cut;
    limit = start + nextAvail;
  }

  cuts.push(end);
  return cuts;
}

async function generateVisualPdf() {
  const JsPDF = window.jspdf && window.jspdf.jsPDF;
  if (!JsPDF || typeof window.html2canvas !== 'function') {
    throw new Error('Las librerías de exportación no están disponibles');
  }

  const { sheetW, pageH, topGap, bottomGap } = PDF_LAYOUT;

  // 1. Lienzo de exportación
  const stage = document.createElement('div');
  stage.className = 'pdf-stage';
  stage.setAttribute('aria-hidden', 'true');

  const sheet = $('#cv-visual').cloneNode(true);
  sheet.removeAttribute('id');
  sheet.hidden = false;
  sheet.classList.add('pdf-sheet');
  stage.appendChild(sheet);
  document.body.appendChild(stage);

  try {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    if (document.fonts && document.fonts.ready) await document.fonts.ready;
    await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));

    // 2. Geometría y saltos de página por columna
    const origin = sheet.getBoundingClientRect().top;
    const side = $('.v-side', sheet);
    const main = $('.v-main', sheet);
    const bodyTop = Math.floor($('.v-body', sheet).getBoundingClientRect().top - origin);
    const sideW = Math.round(side.getBoundingClientRect().width);

    // Fin real del contenido de cada columna (sin el relleno inferior)
    const lastBottom = (els) => Math.ceil(Math.max(...els.map((el) => el.getBoundingClientRect().bottom)) - origin);
    const sideEnd = lastBottom($$('.v-section', side)) + 12;
    const mainEnd = lastBottom($$('.v-section', main)) + 12;

    const firstLimit = pageH - bottomGap;
    const nextAvail = pageH - bottomGap - topGap;

    const cols = [
      { x: 0, w: sideW, cuts: columnCuts(measureBlocks(side, COLUMN_BLOCKS.side, origin), bodyTop, sideEnd, firstLimit, nextAvail) },
      { x: sideW, w: sheetW - sideW, cuts: columnCuts(measureBlocks(main, COLUMN_BLOCKS.main, origin), bodyTop, mainEnd, firstLimit, nextAvail) }
    ];
    const pages = Math.max(...cols.map((c) => c.cuts.length - 1));

    // 3. Captura
    const canvas = await window.html2canvas(sheet, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff',
      logging: false,
      windowWidth: 1200,
      scrollX: 0,
      scrollY: -window.scrollY
    });

    const ratio = canvas.width / sheet.offsetWidth;
    const mm = 210 / sheetW;
    const pdf = new JsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait', compress: true });

    const place = (sx, sy, sw, sh, dx, dy) => {
      const px = Math.round(sx * ratio);
      const py = Math.round(sy * ratio);
      const pw = Math.round(sw * ratio);
      const ph = Math.min(Math.round(sh * ratio), canvas.height - py);
      if (pw <= 0 || ph <= 0) return;
      const part = document.createElement('canvas');
      part.width = pw;
      part.height = ph;
      part.getContext('2d').drawImage(canvas, px, py, pw, ph, 0, 0, pw, ph);
      pdf.addImage(part.toDataURL('image/jpeg', 0.95), 'JPEG', dx * mm, dy * mm, (pw / ratio) * mm, (ph / ratio) * mm, undefined, 'FAST');
    };

    for (let i = 0; i < pages; i += 1) {
      if (i > 0) pdf.addPage();

      // Fondo de la columna lateral en toda la altura de la página
      pdf.setFillColor(248, 250, 252);
      pdf.rect(0, 0, sideW * mm, 297, 'F');
      pdf.setDrawColor(226, 232, 240);
      pdf.setLineWidth(0.26);
      pdf.line(sideW * mm, 0, sideW * mm, 297);

      // Encabezado y métricas solo en la primera página
      if (i === 0) place(0, 0, sheetW, bodyTop, 0, 0);

      // Fragmento de cada columna
      const dy = i === 0 ? bodyTop : topGap;
      cols.forEach((col) => {
        if (i >= col.cuts.length - 1) return;
        const from = col.cuts[i];
        const to = col.cuts[i + 1];
        place(col.x, from, col.w, to - from, col.x, dy);
      });
    }

    pdf.setProperties({
      title: `Hoja de vida – ${CV.nombre}`,
      subject: CV.cargo,
      author: CV.nombre,
      creator: 'CV Builder'
    });

    pdf.save(`CV_${slug(CV.nombre)}_Visual.pdf`);
  } finally {
    stage.remove();
  }
}

/* =========================================================
   7. INTERFAZ
   ========================================================= */

const HINTS = {
  visual: 'Formato visual: diseño de alto impacto para envío directo, portafolio y entrevistas.',
  ats: 'Formato ATS: estructura lineal y texto seleccionable, optimizado para sistemas de seguimiento de candidatos.'
};

const state = { mode: 'visual', busy: false };

function toast(message) {
  const el = $('#toast');
  el.textContent = message;
  el.classList.add('is-visible');
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => el.classList.remove('is-visible'), 3200);
}

function setMode(mode, { focus = false } = {}) {
  if (!['visual', 'ats'].includes(mode)) mode = 'visual';
  state.mode = mode;

  $('#modeSwitch').dataset.mode = mode;
  $$('.switch__btn').forEach((btn) => {
    const active = btn.dataset.mode === mode;
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-selected', String(active));
    btn.tabIndex = active ? 0 : -1;
    if (active && focus) btn.focus();
  });

  $('#cv-visual').hidden = mode !== 'visual';
  $('#cv-ats').hidden = mode !== 'ats';
  $('#modeHint').textContent = HINTS[mode];
  $('#btnDownloadLabel').textContent = mode === 'ats' ? 'Descargar PDF ATS' : 'Descargar PDF Visual';

  try { localStorage.setItem('cv-mode', mode); } catch (e) { /* almacenamiento no disponible */ }
  if (history.replaceState) history.replaceState(null, '', `#${mode}`);
}

async function handleDownload() {
  if (state.busy) return;
  state.busy = true;

  const btn = $('#btnDownload');
  const loader = $('#loader');
  btn.disabled = true;
  loader.hidden = false;

  try {
    if (state.mode === 'ats') {
      generateATSPdf();
    } else {
      await generateVisualPdf();
    }
    toast('PDF generado correctamente.');
  } catch (error) {
    console.error(error);
    toast('No fue posible generar el PDF. Se abrirá el diálogo de impresión del navegador.');
    setTimeout(() => window.print(), 400);
  } finally {
    loader.hidden = true;
    btn.disabled = false;
    state.busy = false;
  }
}

function initialMode() {
  const fromHash = location.hash.replace('#', '');
  if (fromHash === 'ats' || fromHash === 'visual') return fromHash;
  try { return localStorage.getItem('cv-mode') || 'visual'; } catch (e) { return 'visual'; }
}

function init() {
  $('#cv-visual').innerHTML = renderVisual();
  $('#cv-ats').innerHTML = renderATS();
  document.title = `Hoja de vida · ${CV.nombre}`;

  $$('.switch__btn').forEach((btn) => btn.addEventListener('click', () => setMode(btn.dataset.mode)));

  // Navegación con teclado entre pestañas
  $('#modeSwitch').addEventListener('keydown', (e) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(e.key)) return;
    e.preventDefault();
    const next = state.mode === 'visual' ? 'ats' : 'visual';
    const target = e.key === 'Home' ? 'visual' : e.key === 'End' ? 'ats' : next;
    setMode(target, { focus: true });
  });

  $('#btnDownload').addEventListener('click', handleDownload);
  setMode(initialMode());
}

document.addEventListener('DOMContentLoaded', init);
