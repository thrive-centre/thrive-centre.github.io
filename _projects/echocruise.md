---
title: "EchoCruise"
toc: false
layout: splash
permalink: /projects/echocruise/
header:
  overlay_color: "#0c2236"
  overlay_filter: "0.0"
  actions:
    - label: "About EchoCruise"
      url: "/projects/echocruise/#about"
    - label: "Research Focus"
      url: "/projects/echocruise/#focus"
    - label: "Collaborate"
      url: "/projects/echocruise/#collaborate"
  caption: ""
excerpt: "Exploring the future of AI-assisted cardiac ultrasound through research, clinical insight and collaboration."
---

<style>
.echocruise {
  --ec-blue: #0068b3;
  --ec-ink: #3d4144;
  --ec-muted: #667178;
  --ec-line: #e2e8eb;
  --ec-soft: #f5f8fa;
  font-size: 1rem;
  max-width: 1040px;
  margin: 0 auto;
  color: var(--ec-ink);
}
.page__hero--overlay .btn--large {
  font-size: 1rem;
}
.page__hero--overlay .page__title {
  font-size: clamp(2rem, 4vw, 3rem);
}
.echocruise * {
  box-sizing: border-box;
}
.echocruise section {
  margin: 56px 0;
}
.echocruise section:first-child {
  margin-top: 8px;
}
.echocruise h2 {
  margin: 0 0 14px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--ec-line);
  color: #252b2f;
  font-size: clamp(1.3rem, 2.3vw, 1.6rem);
  line-height: 1.25;
}
.echocruise h3 {
  margin: 0 0 8px;
  color: #252b2f;
  font-size: 1.12rem;
  line-height: 1.35;
}
.echocruise p {
  margin: 0 0 14px;
  line-height: 1.7;
}
.echocruise .eyebrow {
  margin-bottom: 8px;
  color: var(--ec-blue);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.09em;
  text-transform: uppercase;
}
.echocruise .intro {
  max-width: 78ch;
  margin-bottom: 24px;
}
.echocruise .facts,
.echocruise .card-grid,
.echocruise .steps,
.echocruise .status-grid,
.echocruise .partner-grid {
  display: grid;
  gap: 16px;
}
.echocruise .facts {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin: 24px 0;
}
.echocruise .fact,
.echocruise .card,
.echocruise .step,
.echocruise .status-card,
.echocruise .partner-card {
  min-width: 0;
  padding: 20px;
  border: 1px solid var(--ec-line);
  border-top: 3px solid var(--ec-blue);
  background: #fff;
}
.echocruise .fact {
  padding: 16px 18px;
  background: var(--ec-soft);
  border-top: 0;
}
.echocruise .fact strong {
  display: block;
  margin-bottom: 4px;
  color: #252b2f;
}
.echocruise .fact span,
.echocruise .card p,
.echocruise .step p,
.echocruise .status-card p,
.echocruise .partner-card p {
  color: var(--ec-muted);
}
.echocruise .card-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.echocruise .steps {
  grid-template-columns: repeat(4, minmax(0, 1fr));
  counter-reset: ec-step;
}
.echocruise .step {
  position: relative;
  padding-top: 58px;
}
.echocruise .step::before {
  counter-increment: ec-step;
  content: "0" counter(ec-step);
  position: absolute;
  top: 16px;
  left: 20px;
  color: var(--ec-blue);
  font-size: 1.3rem;
  font-weight: 800;
}
.echocruise .lab-photo {
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
.echocruise .lab-photo img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.echocruise .lab-photo figcaption {
  padding: 10px 14px;
  color: var(--ec-muted);
}
.echocruise .status-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
.echocruise .status-label {
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
.echocruise ul {
  margin: 8px 0 0;
  padding-left: 20px;
}
.echocruise li {
  margin: 0 0 7px;
  line-height: 1.5;
}
.echocruise .evaluation {
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(220px, 0.7fr);
  gap: 24px;
  align-items: center;
  margin: 24px 0;
  padding: 24px;
  border-left: 4px solid var(--ec-blue);
  background: var(--ec-soft);
}
.echocruise .evaluation p:last-child {
  margin-bottom: 0;
}
.echocruise .evaluation-status {
  padding: 16px;
  border: 1px solid var(--ec-line);
  background: #fff;
}
.echocruise .evaluation-status strong {
  display: block;
  margin-bottom: 4px;
  color: #252b2f;
}
.echocruise .partner-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.echocruise .partner-card a,
.echocruise .contact a {
  font-weight: 700;
}
.echocruise .contact {
  padding: 24px;
  border: 1px solid var(--ec-line);
  background: var(--ec-soft);
}
.echocruise .contact p:last-child {
  margin-bottom: 0;
}
.echocruise .notice {
  margin: 28px 0 8px;
  padding: 14px 18px;
  border-left: 4px solid #7a858b;
  background: #f5f6f7;
  color: #515b60;
}
.echocruise .table-container {
  overflow-x: auto;
  margin: 24px 0;
}
.echocruise table {
  width: 100%;
  border-collapse: collapse;
}
.echocruise th,
.echocruise td {
  border: 1px solid var(--ec-line);
  padding: 12px 16px;
  text-align: left;
}
.echocruise th {
  background: var(--ec-soft);
  font-weight: 700;
  color: #252b2f;
}
.echocruise td ul {
  margin: 0;
  padding-left: 18px;
}
.echocruise .btnrow {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 20px 0 24px;
}
.echocruise .btn {
  display: inline-block;
  background: var(--ec-blue);
  color: #fff;
  text-decoration: none;
  font-weight: 700;
  padding: 10px 18px;
  border-radius: 3px;
  border: 1px solid var(--ec-blue);
}
.echocruise .btn:hover {
  background: #005591;
}
.echocruise .btn.alt {
  background: #fff;
  color: var(--ec-blue);
}
.echocruise .btn.alt:hover {
  background: var(--ec-soft);
}

@media (max-width: 800px) {
  .echocruise .steps,
  .echocruise .status-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (max-width: 600px) {
  .echocruise section {
    margin: 42px 0;
  }
  .echocruise .facts,
  .echocruise .card-grid,
  .echocruise .steps,
  .echocruise .status-grid,
  .echocruise .partner-grid,
  .echocruise .evaluation {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>

<div class="echocruise">
  <section id="overview">
    <div class="intro">
      <h2>Intelligence for a better echo</h2>
      <p>Exploring the future of AI-assisted cardiac ultrasound through research, clinical insight and collaboration. EchoCruise is an early-stage research initiative at the THRIVE Centre for Translational Healthcare Research, University of West London.</p>
    </div>
  </section>

  <section id="about">
    <p class="eyebrow">About EchoCruise</p>
    <h2>A new perspective on cardiac imaging</h2>
    <p>Cardiac ultrasound is central to understanding heart health. EchoCruise is exploring how advances in artificial intelligence could help make ultrasound examinations more intuitive and consistent.</p>
    <p>Developed as part of an interdisciplinary research programme, EchoCruise brings together expertise in medical imaging, AI and clinical practice.</p>
    <div class="notice">Research in development. No clinical product or performance claims are made.</div>
  </section>

  <section id="focus">
    <p class="eyebrow">Research focus</p>
    <h2>Grounded in clinical need and evidence</h2>
    <div class="status-grid">
      <article class="status-card">
        <span class="status-label">Starting point</span>
        <h3>Clinical need</h3>
        <p>Starting from real clinical questions about consistency, access and confidence at the point of care.</p>
      </article>
      <article class="status-card">
        <span class="status-label">Approach</span>
        <h3>Responsible AI</h3>
        <p>Safety, transparency and clinician oversight shape how the research is designed and evaluated.</p>
      </article>
      <article class="status-card">
        <span class="status-label">Partnerships</span>
        <h3>Collaboration</h3>
        <p>Working with clinical, academic and industry partners towards evidence that can be trusted.</p>
      </article>
    </div>
  </section>

  <section id="collaborate">
    <div class="contact">
      <p class="eyebrow">Research and partnerships</p>
      <h2>Interested in exploring what comes next?</h2>
      <p>We welcome conversations with clinical, academic and technology partners working in ultrasound, AI and digital health.</p>
      <p>For enquiries contact: <a href="mailto:massoud.zolgharni@uwl.ac.uk">Massoud Zolgharni</a> or <a href="mailto:info@thrive-centre.com">info@thrive-centre.com</a></p>
      <p>Part of the <a href="/projects/ai-in-echocardiography/">Echocardiography AI Ecosystem</a>: <a href="/datasets/">Biobank</a> | <a href="/projects/echoforge/">EchoForge</a> | <a href="/projects/echolearn/">EchoLearn</a></p>
    </div>
    <div class="notice">EchoCruise is a research initiative only. It is not a medical device and is not available for clinical use.</div>
  </section>
</div>
