---
title: "AI in Echocardiography"
toc: false
layout: splash
permalink: /projects/ai-in-echocardiography/
header:
  overlay_color: "#0c2236"
  overlay_filter: "0.6"
  overlay_image: /assets/images/landing_page/istockphoto-2194245609-2048x2048.jpg
  actions:
    - label: "Research"
      url: "/projects/ai-in-echocardiography/#research"
    - label: "Ecosystem"
      url: "/projects/ai-in-echocardiography/#ecosystem"
  caption: ""
excerpt: "THRIVE's research theme on AI in echocardiography: the UNITY research programme, individual studies, and the Echocardiography AI Ecosystem of data, models and applications."
ecosystem:
  - image_path: /assets/images/projects/biobank.png
    alt: "Biobank"
    title: "Biobank"
    link: "/datasets/"
    excerpt: "Data and expert annotations for echocardiography research."
  - image_path: /assets/images/projects/istockphoto-2194245609-612x612.jpg
    alt: "ScanNote"
    title: "ScanNote"
    excerpt: "Annotation platform for medical imaging. Coming soon."
  - image_path: /assets/images/projects/istockphoto-2147671579-612x612.jpg
    alt: "EchoForge"
    title: "EchoForge"
    link: "/projects/echoforge/"
    excerpt: "Open-source AI models for echocardiographic image analysis."
  - image_path: /assets/images/projects/echolearn/lab.png
    alt: "EchoLearn"
    title: "EchoLearn"
    link: "/projects/echolearn/"
    excerpt: "Real-time guidance for echocardiographic image acquisition and training, now in supervised clinical evaluation."
  - image_path: /assets/images/projects/echocruise/echocruise.jpg
    alt: "EchoCruise"
    title: "EchoCruise"
    link: "/projects/echocruise/"
    excerpt: "Early-stage research on AI-assisted ultrasound examination."
---

<style>
.echohub {
  --eh-blue: #0068b3;
  --eh-ink: #3d4144;
  --eh-muted: #667178;
  --eh-line: #e2e8eb;
  --eh-soft: #f5f8fa;
  font-size: 1rem;
  max-width: 1040px;
  margin: 0 auto;
  color: var(--eh-ink);
}
.page__hero--overlay .btn--large {
  font-size: 1rem;
}
.page__hero--overlay .page__title {
  font-size: clamp(2rem, 4vw, 3rem);
}
.echohub * {
  box-sizing: border-box;
}
.echohub section {
  margin: 56px 0;
}
.echohub section:first-child {
  margin-top: 8px;
}
.echohub h2 {
  margin: 0 0 14px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--eh-line);
  color: #252b2f;
  font-size: clamp(1.3rem, 2.3vw, 1.6rem);
  line-height: 1.25;
}
.echohub h3 {
  margin: 0 0 8px;
  color: #252b2f;
  font-size: 1.12rem;
  line-height: 1.35;
}
.echohub p {
  margin: 0 0 14px;
  line-height: 1.7;
}
.echohub .eyebrow {
  margin-bottom: 8px;
  color: var(--eh-blue);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.09em;
  text-transform: uppercase;
}
.echohub .intro {
  max-width: 78ch;
  margin-bottom: 24px;
}
.echohub .facts,
.echohub .card-grid,
.echohub .steps,
.echohub .status-grid,
.echohub .partner-grid {
  display: grid;
  gap: 16px;
}
.echohub .facts {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin: 24px 0;
}
.echohub .fact,
.echohub .card,
.echohub .step,
.echohub .status-card,
.echohub .partner-card {
  min-width: 0;
  padding: 20px;
  border: 1px solid var(--eh-line);
  border-top: 3px solid var(--eh-blue);
  background: #fff;
}
.echohub .fact {
  padding: 16px 18px;
  background: var(--eh-soft);
  border-top: 0;
}
.echohub .fact strong {
  display: block;
  margin-bottom: 4px;
  color: #252b2f;
}
.echohub .fact span,
.echohub .card p,
.echohub .step p,
.echohub .status-card p,
.echohub .partner-card p {
  color: var(--eh-muted);
}
.echohub .card-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.echohub .steps {
  grid-template-columns: repeat(4, minmax(0, 1fr));
  counter-reset: eh-step;
}
.echohub .step {
  position: relative;
  padding-top: 58px;
}
.echohub .step::before {
  counter-increment: eh-step;
  content: "0" counter(eh-step);
  position: absolute;
  top: 16px;
  left: 20px;
  color: var(--eh-blue);
  font-size: 1.3rem;
  font-weight: 800;
}
.echohub .lab-photo {
  max-width: 820px;
  aspect-ratio: 16 / 9;
  margin-top: 22px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid #d5dfe5;
  border-radius: 6px;
  overflow: hidden;
  background: #fff;
}
.echohub .lab-photo img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.echohub .lab-photo figcaption {
  padding: 10px 14px;
  color: var(--eh-muted);
}
.echohub .status-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
.echohub .status-label {
  display: inline-block;
  margin-bottom: 12px;
  padding: 4px 8px;
  border-radius: 3px;
  background: #e9f3f9;
  color: #00558f;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
.echohub ul {
  margin: 8px 0 0;
  padding-left: 20px;
}
.echohub li {
  margin: 0 0 7px;
  line-height: 1.5;
}
.echohub .evaluation {
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(220px, 0.7fr);
  gap: 24px;
  align-items: center;
  margin: 24px 0;
  padding: 24px;
  border-left: 4px solid var(--eh-blue);
  background: var(--eh-soft);
}
.echohub .evaluation p:last-child {
  margin-bottom: 0;
}
.echohub .evaluation-status {
  padding: 16px;
  border: 1px solid var(--eh-line);
  background: #fff;
}
.echohub .evaluation-status strong {
  display: block;
  margin-bottom: 4px;
  color: #252b2f;
}
.echohub .partner-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.echohub .partner-card a,
.echohub .contact a {
  font-weight: 700;
}
.echohub .contact {
  padding: 24px;
  border: 1px solid var(--eh-line);
  background: var(--eh-soft);
}
.echohub .contact p:last-child {
  margin-bottom: 0;
}
.echohub .notice {
  margin: 28px 0 8px;
  padding: 14px 18px;
  border-left: 4px solid #7a858b;
  background: #f5f6f7;
  color: #515b60;
}
.echohub .table-container {
  overflow-x: auto;
  margin: 24px 0;
}
.echohub table {
  width: 100%;
  border-collapse: collapse;
}
.echohub th,
.echohub td {
  border: 1px solid var(--eh-line);
  padding: 12px 16px;
  text-align: left;
}
.echohub th {
  background: var(--eh-soft);
  font-weight: 700;
  color: #252b2f;
}
.echohub td ul {
  margin: 0;
  padding-left: 18px;
}
.echohub .btnrow {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 20px 0 24px;
}
.echohub .btn {
  display: inline-block;
  background: var(--eh-blue);
  color: #fff;
  text-decoration: none;
  font-weight: 700;
  padding: 10px 18px;
  border-radius: 3px;
  border: 1px solid var(--eh-blue);
}
.echohub .btn:hover {
  background: #005591;
}
.echohub .btn.alt {
  background: #fff;
  color: var(--eh-blue);
}
.echohub .btn.alt:hover {
  background: var(--eh-soft);
}

@media (max-width: 800px) {
  .echohub .steps,
  .echohub .status-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (max-width: 600px) {
  .echohub section {
    margin: 42px 0;
  }
  .echohub .facts,
  .echohub .card-grid,
  .echohub .steps,
  .echohub .status-grid,
  .echohub .partner-grid,
  .echohub .evaluation {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>

<div class="echohub">
  <section id="overview">
    <div class="intro">
      <h2>AI in Echocardiography</h2>
      <p>THRIVE's research theme on applying artificial intelligence to echocardiography. It brings together a flagship research programme, UNITY, and an ecosystem of data, models and applications that support the research and carry it towards clinical use.</p>
    </div>
  </section>

  <section id="research">
    <p class="eyebrow">Research</p>
    <h2>UNITY research programme</h2>
    <p><a href="/projects/unity/">UNITY</a> is THRIVE's flagship research programme in echocardiography, developing open, AI-powered tools to standardise, accelerate and democratise echocardiography across clinical and global settings.</p>
    <p><strong>Funder.</strong> UNITY is funded by the <a href="https://www.bhf.org.uk/">British Heart Foundation</a> through a Programme Grant (RG/F/22/110059, 2022 to 2027) titled <em>UNITY: UK Collaborative for integrating AI into echocardiography</em>.</p>
    <p><strong>Partners.</strong> The programme is delivered in collaboration with:</p>
    <ul>
      <li><a href="https://www.bsecho.org">British Society of Echocardiography (BSE)</a></li>
      <li><a href="https://www.imperial.ac.uk/nhli">National Heart and Lung Institute (NHLI), Imperial College London</a></li>
      <li>11 hospitals across the UK</li>
    </ul>
    <p>Its individual research studies are described on the UNITY page. Other studies, including independently funded projects and PhD research, also sit within this theme.</p>
    <p><a class="btn btn--primary" href="/projects/unity/">Explore UNITY</a></p>
  </section>

  <section id="ecosystem">
    <p class="eyebrow">Echocardiography AI Ecosystem</p>
    <h2>Ecosystem of resources and applications</h2>
    <p>The Echocardiography AI Ecosystem is the set of lasting resources and applications THRIVE is building around echocardiography. It is not tied to a single funding cycle or programme, and it supports research across this theme, including UNITY.</p>
    {% include feature_row id="ecosystem" %}
  </section>

  <section id="connects">
    <p class="eyebrow">How it fits together</p>
    <h2>From data to applications</h2>
    <p>Expert-annotated data supports the research. The research produces methods and models, shared through EchoForge. EchoLearn applies image-quality assessment to live acquisition guidance, and EchoCruise explores how AI could support the wider ultrasound examination.</p>
  </section>

  <section id="notice">
    <div class="notice">These are research projects and platforms. They do not provide diagnostic interpretation or automated clinical decision-making. Any use in clinical care requires appropriate evaluation and validation.</div>
  </section>
</div>
