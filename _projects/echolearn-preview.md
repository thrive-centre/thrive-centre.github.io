---
title: "EchoLearn"
toc: false
layout: splash
permalink: /projects/echolearn-preview/
header:
  overlay_color: "#000"
  overlay_filter: "0.6"
  overlay_image: /assets/images/projects/echolearn/echolearn4.png
  actions:
    - label: "How EchoLearn Works"
      url: "#how-echolearn-works"
    - label: "Clinical Evaluation"
      url: "#clinical-evaluation-underway"
    - label: "Collaborate"
      url: "#collaboration-and-contact"
  caption: ""
excerpt: "AI-assisted echocardiography acquisition and training, providing structured feedback to support supervised practice and workforce development."
---

<style>
.echolearn-preview {
  --el-blue: #0068b3;
  --el-ink: #3d4144;
  --el-muted: #667178;
  --el-line: #e2e8eb;
  --el-soft: #f5f8fa;
  max-width: 1040px;
  margin: 0 auto;
  color: var(--el-ink);
}
.echolearn-preview * {
  box-sizing: border-box;
}
.echolearn-preview section {
  margin: 56px 0;
}
.echolearn-preview section:first-child {
  margin-top: 8px;
}
.echolearn-preview h2 {
  margin: 0 0 14px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--el-line);
  color: #252b2f;
  font-size: clamp(1.45rem, 2.7vw, 1.9rem);
  line-height: 1.25;
}
.echolearn-preview h3 {
  margin: 0 0 8px;
  color: #252b2f;
  font-size: 1.12rem;
  line-height: 1.35;
}
.echolearn-preview p {
  margin: 0 0 14px;
  line-height: 1.7;
}
.echolearn-preview .eyebrow {
  margin-bottom: 8px;
  color: var(--el-blue);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.09em;
  text-transform: uppercase;
}
.echolearn-preview .intro {
  max-width: 78ch;
  margin-bottom: 24px;
}
.echolearn-preview .intro p {
  font-size: 1.05rem;
}
.echolearn-preview .facts,
.echolearn-preview .card-grid,
.echolearn-preview .steps,
.echolearn-preview .status-grid,
.echolearn-preview .partner-grid {
  display: grid;
  gap: 16px;
}
.echolearn-preview .facts {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin: 24px 0;
}
.echolearn-preview .fact,
.echolearn-preview .card,
.echolearn-preview .step,
.echolearn-preview .status-card,
.echolearn-preview .partner-card {
  min-width: 0;
  padding: 20px;
  border: 1px solid var(--el-line);
  border-top: 3px solid var(--el-blue);
  background: #fff;
}
.echolearn-preview .fact {
  padding: 16px 18px;
  background: var(--el-soft);
  border-top: 0;
}
.echolearn-preview .fact strong {
  display: block;
  margin-bottom: 4px;
  color: #252b2f;
}
.echolearn-preview .fact span,
.echolearn-preview .card p,
.echolearn-preview .step p,
.echolearn-preview .status-card p,
.echolearn-preview .partner-card p {
  color: var(--el-muted);
  font-size: 0.94rem;
}
.echolearn-preview .card-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.echolearn-preview .steps {
  grid-template-columns: repeat(4, minmax(0, 1fr));
  counter-reset: el-step;
}
.echolearn-preview .step {
  position: relative;
  padding-top: 58px;
}
.echolearn-preview .step::before {
  counter-increment: el-step;
  content: "0" counter(el-step);
  position: absolute;
  top: 16px;
  left: 20px;
  color: var(--el-blue);
  font-size: 1.3rem;
  font-weight: 800;
}
.echolearn-preview .interface-placeholder {
  display: grid;
  min-height: 300px;
  margin-top: 22px;
  padding: 14px;
  border: 1px solid #d5dfe5;
  border-radius: 6px;
  background: #edf2f5;
}
.echolearn-preview .interface-window {
  display: grid;
  grid-template-rows: 34px 1fr;
  overflow: hidden;
  border: 1px solid #d7e0e5;
  border-radius: 4px;
  background: #fff;
}
.echolearn-preview .interface-toolbar {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0 12px;
  border-bottom: 1px solid #e1e7eb;
  background: #f8fafb;
}
.echolearn-preview .interface-toolbar span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #c5d0d6;
}
.echolearn-preview .interface-screen {
  display: grid;
  place-content: center;
  justify-items: center;
  min-height: 230px;
  padding: 24px;
  text-align: center;
}
.echolearn-preview .interface-screen strong {
  margin-bottom: 6px;
  color: #35434b;
}
.echolearn-preview .interface-screen span {
  color: var(--el-muted);
  font-size: 0.92rem;
}
.echolearn-preview .status-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
.echolearn-preview .status-label {
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
.echolearn-preview ul {
  margin: 8px 0 0;
  padding-left: 20px;
}
.echolearn-preview li {
  margin: 0 0 7px;
  line-height: 1.5;
}
.echolearn-preview .evaluation {
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(220px, 0.7fr);
  gap: 24px;
  align-items: center;
  margin: 24px 0;
  padding: 24px;
  border-left: 4px solid var(--el-blue);
  background: var(--el-soft);
}
.echolearn-preview .evaluation p:last-child {
  margin-bottom: 0;
}
.echolearn-preview .evaluation-status {
  padding: 16px;
  border: 1px solid var(--el-line);
  background: #fff;
  font-size: 0.92rem;
}
.echolearn-preview .evaluation-status strong {
  display: block;
  margin-bottom: 4px;
  color: #252b2f;
}
.echolearn-preview .partner-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.echolearn-preview .partner-card a,
.echolearn-preview .contact a {
  font-weight: 700;
}
.echolearn-preview .contact {
  padding: 24px;
  border: 1px solid var(--el-line);
  background: var(--el-soft);
}
.echolearn-preview .contact p:last-child {
  margin-bottom: 0;
}
.echolearn-preview .notice {
  margin: 28px 0 8px;
  padding: 14px 18px;
  border-left: 4px solid #7a858b;
  background: #f5f6f7;
  color: #515b60;
  font-size: 0.9rem;
}
@media (max-width: 800px) {
  .echolearn-preview .steps,
  .echolearn-preview .status-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (max-width: 600px) {
  .echolearn-preview section {
    margin: 42px 0;
  }
  .echolearn-preview .facts,
  .echolearn-preview .card-grid,
  .echolearn-preview .steps,
  .echolearn-preview .status-grid,
  .echolearn-preview .partner-grid,
  .echolearn-preview .evaluation {
    grid-template-columns: minmax(0, 1fr);
  }
  .echolearn-preview .interface-placeholder {
    min-height: 240px;
  }
}
</style>

<div class="echolearn-preview">
  <section id="overview">
    <div class="intro">
      <p class="eyebrow">AI-assisted echocardiography training</p>
      <h2>Supporting better acquisition through structured feedback</h2>
      <p>EchoLearn connects echocardiography practice with AI-assisted image assessment and visual feedback. It is being developed to support training and supervised practice—not to make diagnoses or replace clinical judgement.</p>
      <p>Developed by the Intelligent Sensing and Vision Group at the THRIVE Centre, University of West London, EchoLearn builds on research from the UNITY programme, supported by the British Heart Foundation.</p>
    </div>
    <div class="facts" aria-label="EchoLearn at a glance">
      <div class="fact"><strong>Who it supports</strong><span>Learners, sonographers, educators, and clinical teams</span></div>
      <div class="fact"><strong>What it focuses on</strong><span>Image acquisition, feedback, and supervised training</span></div>
      <div class="fact"><strong>Where it stands</strong><span>Research prototype in supervised evaluation</span></div>
    </div>
  </section>

  <section id="challenge">
    <p class="eyebrow">Why EchoLearn</p>
    <h2>Making feedback part of the learning process</h2>
    <div class="card-grid">
      <article class="card">
        <h3>A skill that takes practice</h3>
        <p>Obtaining useful echocardiographic views depends on probe position, orientation, and adapting to each patient's anatomy. Learners build these skills through practice and expert supervision.</p>
      </article>
      <article class="card">
        <h3>Support that is structured and timely</h3>
        <p>Service pressures can make consistent feedback difficult. EchoLearn explores whether immediate, objective visual feedback can help learners and supervisors recognise image quality and discuss possible adjustments.</p>
      </article>
    </div>
  </section>

  <section id="how-echolearn-works">
    <p class="eyebrow">From scan to review</p>
    <h2>How EchoLearn works</h2>
    <p>The platform is designed to support a practical learning cycle, with educators and clinicians remaining central to supervision.</p>
    <div class="steps">
      <article class="step"><h3>Acquire</h3><p>The learner practises obtaining echocardiographic views using an ultrasound system.</p></article>
      <article class="step"><h3>Assess</h3><p>AI tools analyse the video and generate image-quality or geometric indicators.</p></article>
      <article class="step"><h3>Guide</h3><p>Visual feedback supports discussion and acquisition decisions with a supervisor.</p></article>
      <article class="step"><h3>Review</h3><p>Session information can support reflection and research into the training workflow.</p></article>
    </div>
    <div class="interface-placeholder" role="img" aria-label="Reserved space for a future EchoLearn interface screenshot">
      <div class="interface-window">
        <div class="interface-toolbar" aria-hidden="true"><span></span><span></span><span></span></div>
        <div class="interface-screen">
          <strong>EchoLearn interface preview</strong>
          <span>Interface screenshot will be added here</span>
        </div>
      </div>
    </div>
  </section>

  <section id="platform">
    <p class="eyebrow">Platform and progress</p>
    <h2>A research platform in development</h2>
    <p>EchoLearn combines AI-based image assessment with echocardiography acquisition and operator feedback. Capabilities are being developed and evaluated in stages.</p>
    <div class="status-grid">
      <article class="status-card">
        <span class="status-label">Research prototype</span>
        <h3>Available in the prototype</h3>
        <ul>
          <li>Live echocardiographic video input</li>
          <li>AI-based image assessment</li>
          <li>On-screen visual feedback</li>
          <li>Session capture and analysis</li>
        </ul>
      </article>
      <article class="status-card">
        <span class="status-label">Under evaluation</span>
        <h3>Being explored with learners</h3>
        <ul>
          <li>Supervised use in scanning practice</li>
          <li>Usability and fit with training</li>
          <li>How operators respond to feedback</li>
          <li>Potential support for novice image acquisition</li>
        </ul>
      </article>
      <article class="status-card">
        <span class="status-label">In development</span>
        <h3>Future directions</h3>
        <ul>
          <li>Longitudinal trainee progress tracking</li>
          <li>Deployment across ultrasound systems</li>
        </ul>
      </article>
    </div>
  </section>

  <section id="clinical-evaluation-underway">
    <p class="eyebrow">Clinical evaluation</p>
    <h2>Learning from supervised practice</h2>
    <div class="evaluation">
      <div>
        <p>A Phase 1 evaluation began in August 2026 in an echocardiography training setting at Hammersmith Hospital. Medical students take part in supervised scanning sessions. The evaluation is exploring usability, how learners respond to feedback, and whether real-time guidance helps novice operators acquire better images.</p>
        <p>A later controlled evaluation is intended to assess acquisition quality, acquisition time, reproducibility, and downstream measurements. Results have not yet been reported, and improved clinical performance has not yet been demonstrated.</p>
      </div>
      <div class="evaluation-status"><strong>Current focus</strong>Feasibility, usability, and learner response in supervised training.</div>
    </div>
  </section>

  <section id="research-context">
    <p class="eyebrow">Part of a wider research ecosystem</p>
    <h2>Connecting research, data, and training</h2>
    <p>EchoLearn sits within THRIVE and UNITY's wider echocardiography research environment. Related resources include:</p>
    <div class="card-grid">
      <article class="card">
        <h3><a href="https://www.thrive-centre.com/projects/echoforge/">EchoForge</a></h3>
        <p>Reusable AI tools and research resources for echocardiography.</p>
      </article>
      <article class="card">
        <h3><a href="https://intsav.github.io/biobank.html">UNITY Biobank</a></h3>
        <p>Echocardiography data and annotation infrastructure supporting research.</p>
      </article>
    </div>
  </section>

  <section id="partners">
    <p class="eyebrow">People and organisations</p>
    <h2>Partnerships</h2>
    <div class="partner-grid">
      <div class="partner-card"><h3>Research lead</h3><p>THRIVE Centre, University of West London</p></div>
      <div class="partner-card"><h3>Clinical partner</h3><p><a href="https://www.imperial.ac.uk/nhli/">National Heart and Lung Institute</a></p></div>
      <div class="partner-card"><h3>Evaluation setting</h3><p><a href="https://www.research.imperial.nhs.uk/our-research-and-innovation/facilities-and-infrastructure/peart-rose-research-unit">Hammersmith Hospital</a></p></div>
      <div class="partner-card"><h3>Funding</h3><p>British Heart Foundation Programme Grant RG/F/22/110059</p></div>
    </div>
  </section>

  <section id="collaboration-and-contact">
    <div class="contact">
      <p class="eyebrow">Work with us</p>
      <h2>Collaboration and contact</h2>
      <p>We welcome conversations with echocardiography educators, NHS training programmes, and researchers interested in image quality, operator guidance, and independent evaluation.</p>
      <p>Contact <a href="mailto:massoud.zolgharni@uwl.ac.uk">Massoud Zolgharni</a> or <a href="mailto:info@thrive-centre.com">info@thrive-centre.com</a> to discuss collaboration.</p>
    </div>
    <div class="notice">EchoLearn is a research platform. It does not provide diagnostic interpretation or automated clinical decision-making. Any use in clinical care requires appropriate evaluation and validation.</div>
  </section>
</div>
