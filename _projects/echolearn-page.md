---
title: "EchoLearn"
toc: false
layout: splash
permalink: /projects/echolearn-page/
header:
  overlay_color: "#000"
  overlay_filter: "0.6"
  overlay_image: /assets/images/projects/echolearn/lab.png
  actions:
    - label: "How EchoLearn Works"
      url: "/projects/echolearn-page/#how"
    - label: "Clinical Evaluation"
      url: "/projects/echolearn-page/#clinical"
    - label: "Collaborate"
      url: "/projects/echolearn-page/#collaborate"
  caption: ""
excerpt: "AI-assisted echocardiography acquisition and training."
---

<style>
.echolearn-page {
  --el-blue: #0068b3;
  --el-ink: #3d4144;
  --el-muted: #667178;
  --el-line: #e2e8eb;
  --el-soft: #f5f8fa;
  max-width: 1040px;
  margin: 0 auto;
  color: var(--el-ink);
}
.page__hero--overlay .btn--large {
  font-size: 1rem;
}
.page__hero--overlay .page__title {
  font-size: clamp(2rem, 4vw, 3rem);
}
.echolearn-page * {
  box-sizing: border-box;
}
.echolearn-page section {
  margin: 56px 0;
}
.echolearn-page section:first-child {
  margin-top: 8px;
}
.echolearn-page h2 {
  margin: 0 0 14px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--el-line);
  color: #252b2f;
  font-size: clamp(1.3rem, 2.3vw, 1.6rem);
  line-height: 1.25;
}
.echolearn-page h3 {
  margin: 0 0 8px;
  color: #252b2f;
  font-size: 1.12rem;
  line-height: 1.35;
}
.echolearn-page p {
  margin: 0 0 14px;
  line-height: 1.7;
}
.echolearn-page .eyebrow {
  margin-bottom: 8px;
  color: var(--el-blue);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.09em;
  text-transform: uppercase;
}
.echolearn-page .intro {
  max-width: 78ch;
  margin-bottom: 24px;
}
.echolearn-page .intro p {
  font-size: 1.05rem;
}
.echolearn-page .facts,
.echolearn-page .card-grid,
.echolearn-page .steps,
.echolearn-page .status-grid,
.echolearn-page .partner-grid {
  display: grid;
  gap: 16px;
}
.echolearn-page .facts {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin: 24px 0;
}
.echolearn-page .fact,
.echolearn-page .card,
.echolearn-page .step,
.echolearn-page .status-card,
.echolearn-page .partner-card {
  min-width: 0;
  padding: 20px;
  border: 1px solid var(--el-line);
  border-top: 3px solid var(--el-blue);
  background: #fff;
}
.echolearn-page .fact {
  padding: 16px 18px;
  background: var(--el-soft);
  border-top: 0;
}
.echolearn-page .fact strong {
  display: block;
  margin-bottom: 4px;
  color: #252b2f;
}
.echolearn-page .fact span,
.echolearn-page .card p,
.echolearn-page .step p,
.echolearn-page .status-card p,
.echolearn-page .partner-card p {
  color: var(--el-muted);
  font-size: 0.94rem;
}
.echolearn-page .card-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.echolearn-page .steps {
  grid-template-columns: repeat(4, minmax(0, 1fr));
  counter-reset: el-step;
}
.echolearn-page .step {
  position: relative;
  padding-top: 58px;
}
.echolearn-page .step::before {
  counter-increment: el-step;
  content: "0" counter(el-step);
  position: absolute;
  top: 16px;
  left: 20px;
  color: var(--el-blue);
  font-size: 1.3rem;
  font-weight: 800;
}
.echolearn-page .lab-photo {
  margin-top: 22px;
  border: 1px solid #d5dfe5;
  border-radius: 6px;
  overflow: hidden;
  background: #fff;
}
.echolearn-page .lab-photo img {
  display: block;
  width: 100%;
  height: auto;
}
.echolearn-page .lab-photo figcaption {
  padding: 10px 14px;
  color: var(--el-muted);
  font-size: 0.92rem;
}
.echolearn-page .status-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
.echolearn-page .status-label {
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
.echolearn-page ul {
  margin: 8px 0 0;
  padding-left: 20px;
}
.echolearn-page li {
  margin: 0 0 7px;
  line-height: 1.5;
}
.echolearn-page .evaluation {
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(220px, 0.7fr);
  gap: 24px;
  align-items: center;
  margin: 24px 0;
  padding: 24px;
  border-left: 4px solid var(--el-blue);
  background: var(--el-soft);
}
.echolearn-page .evaluation p:last-child {
  margin-bottom: 0;
}
.echolearn-page .evaluation-status {
  padding: 16px;
  border: 1px solid var(--el-line);
  background: #fff;
  font-size: 0.92rem;
}
.echolearn-page .evaluation-status strong {
  display: block;
  margin-bottom: 4px;
  color: #252b2f;
}
.echolearn-page .partner-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.echolearn-page .partner-card a,
.echolearn-page .contact a {
  font-weight: 700;
}
.echolearn-page .contact {
  padding: 24px;
  border: 1px solid var(--el-line);
  background: var(--el-soft);
}
.echolearn-page .contact p:last-child {
  margin-bottom: 0;
}
.echolearn-page .notice {
  margin: 28px 0 8px;
  padding: 14px 18px;
  border-left: 4px solid #7a858b;
  background: #f5f6f7;
  color: #515b60;
  font-size: 0.9rem;
}
.echolearn-page .table-container {
  overflow-x: auto;
  margin: 24px 0;
}
.echolearn-page table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.94rem;
}
.echolearn-page th,
.echolearn-page td {
  border: 1px solid var(--el-line);
  padding: 12px 16px;
  text-align: left;
}
.echolearn-page th {
  background: var(--el-soft);
  font-weight: 700;
  color: #252b2f;
}
.echolearn-page td ul {
  margin: 0;
  padding-left: 18px;
}
.echolearn-page .btnrow {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 20px 0 24px;
}
.echolearn-page .btn {
  display: inline-block;
  background: var(--el-blue);
  color: #fff;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.94rem;
  padding: 10px 18px;
  border-radius: 3px;
  border: 1px solid var(--el-blue);
}
.echolearn-page .btn:hover {
  background: #005591;
}
.echolearn-page .btn.alt {
  background: #fff;
  color: var(--el-blue);
}
.echolearn-page .btn.alt:hover {
  background: var(--el-soft);
}

@media (max-width: 800px) {
  .echolearn-page .steps,
  .echolearn-page .status-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (max-width: 600px) {
  .echolearn-page section {
    margin: 42px 0;
  }
  .echolearn-page .facts,
  .echolearn-page .card-grid,
  .echolearn-page .steps,
  .echolearn-page .status-grid,
  .echolearn-page .partner-grid,
  .echolearn-page .evaluation {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>

<div class="echolearn-page">
  <section id="overview">
    <div class="intro">
      <h2>EchoLearn</h2>
      <p>EchoLearn connects live ultrasound imaging with AI-derived image-quality and geometric assessments, and turns model outputs into visual feedback while the operator scans. Developed at the THRIVE Centre, University of West London, the platform is now in supervised evaluation in an NHS echocardiography training setting.</p>
    </div>
    <div class="table-container">
      <table>
        <tr>
          <th>Clinical evaluation</th>
          <th>Platform</th>
          <th>Focus</th>
        </tr>
        <tr>
          <td>Phase 1 clinical evaluation under way: supervised scanning in an NHS training setting since August 2026</td>
          <td>Existing research prototype: live ultrasound video, AI image assessment and on-screen feedback</td>
          <td>Acquisition quality, training and operator feedback</td>
        </tr>
      </table>
    </div>
    <div class="notice">
      <strong>Latest news</strong>
      <p>EchoLearn enters Phase 1 clinical evaluation. Supervised scanning sessions with medical students began in August 2026 at Hammersmith Hospital. <a href="https://www.thrive-centre.com/#latest-news-and-events">Read the announcement.</a></p>
    </div>
  </section>

  <section id="challenge">
    <p class="eyebrow">The Challenge</p>
    <h2>Operator-dependent acquisition quality</h2>
    <p>Echocardiographic image acquisition is operator dependent. Choosing an appropriate acoustic window and optimising probe position, orientation and angulation require technical skill and adaptation to each patient's anatomy. Image-quality errors can affect both interpretation and downstream measurements. EchoLearn investigates whether immediate, objective feedback can help operators recognise and correct suboptimal acquisitions while they learn to scan.</p>
  </section>

  <section id="how">
    <p class="eyebrow">From live scan to on-screen feedback</p>
    <h2>How EchoLearn Works</h2>
    <div class="steps">
      <article class="step">
        <h3>Acquire</h3>
        <p>A user acquires live echocardiographic images on a compatible ultrasound system.</p>
      </article>
      <article class="step">
        <h3>Assess</h3>
        <p>AI modules analyse the video and generate image-quality and geometric indicators.</p>
      </article>
      <article class="step">
        <h3>Guide</h3>
        <p>The platform presents interpretable visual feedback to support acquisition decisions.</p>
      </article>
      <article class="step">
        <h3>Review</h3>
        <p>Where enabled, session data support review and research into training workflows.</p>
      </article>
    </div>
    <figure class="lab-photo">
      <img src="{{ '/assets/images/projects/echolearn/lab.png' | relative_url }}" alt="EchoLearn experiment taking place in the lab" loading="lazy">
      <!-- <figcaption>EchoLearn experiment in the lab</figcaption> -->
    </figure>
  </section>

  <section id="platform">
    <p class="eyebrow">Platform capabilities</p>
    <h2>A Working Research Platform</h2>
    <p>EchoLearn provides a research environment for integrating AI-based image assessment with real-time echocardiography acquisition and operator feedback. The platform is being extended to support additional research applications.</p>
    <p>Where each capability currently stands:</p>
    <div class="status-grid">
      <article class="status-card">
        <span class="status-label">Available now (research prototype)</span>
        <h3>Currently available</h3>
        <ul>
          <li>Live echocardiographic video input</li>
          <li>AI-based image assessment</li>
          <li>On-screen graphical feedback</li>
          <li>Session capture and analysis</li>
        </ul>
      </article>
      <article class="status-card">
        <span class="status-label">Under evaluation</span>
        <h3>Being explored</h3>
        <ul>
          <li>Use by medical students in supervised scanning</li>
          <li>Usability and fit with training</li>
          <li>How operators respond to feedback</li>
          <li>Whether real-time guidance helps a novice acquire better images</li>
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

  <section id="clinical">
    <p class="eyebrow">Clinical evaluation</p>
    <h2>Clinical Evaluation Underway</h2>
    <p>Supervised evaluation began in August 2026 in an echocardiography training setting at Hammersmith Hospital. Medical students use EchoLearn during supervised scanning sessions. The Phase 1 clinical evaluation asks whether real-time guidance helps a novice operator acquire better images, alongside usability and how operators respond to feedback.</p>
    <p>A later controlled evaluation is intended to test whether AI feedback improves acquisition quality, acquisition time, reproducibility and downstream measurements. Results will be published after analysis and review. Improved clinical performance has not yet been shown.</p>
  </section>

  <section id="infrastructure">
    <p class="eyebrow">Research-ready infrastructure</p>
    <h2>Research-Ready Infrastructure</h2>
    <p>EchoLearn sits within the THRIVE and UNITY echocardiography research ecosystem. THRIVE provides GPU computing, technical expertise and clinical research links. EchoLearn extends the resources below into a live acquisition and feedback environment.</p>
    <div class="table-container">
      <table>
        <tr>
          <th>EchoForge</th>
          <th>UNITY</th>
          <th>EchoLearn</th>
        </tr>
        <tr>
          <td>Reusable AI model resources for echocardiography.<br><a href="https://www.thrive-centre.com/projects/echoforge/">EchoForge</a></td>
          <td>Expert annotation and dataset infrastructure.<br><a href="https://intsav.github.io/biobank.html">UNITY Biobank</a></td>
          <td>A live acquisition and feedback environment for prospective evaluation, built on these resources.</td>
        </tr>
      </table>
    </div>
  </section>

  <section id="partners">
    <p class="eyebrow">People and organisations</p>
    <h2>Partnerships</h2>
    <ul>
      <li><strong>Lead Institution:</strong> THRIVE Centre (UWL)</li>
      <li><strong>Clinical partner:</strong> <a href="https://www.imperial.ac.uk/nhli/">National Heart and Lung Institute</a></li>
      <li><strong>Clinical evaluation setting:</strong> <a href="https://www.research.imperial.nhs.uk/our-research-and-innovation/facilities-and-infrastructure/peart-rose-research-unit">Hammersmith Hospital</a></li>
    </ul>
  </section>

  <section id="collaborate">
    <div class="contact">
      <p class="eyebrow">Work with us</p>
      <h2>Collaboration & Contact</h2>
      <p>We welcome conversations with echocardiography educators, NHS training programmes, and researchers interested in image quality, operator guidance and independent evaluation.</p>
      <p>For enquiries contact: <a href="mailto:massoud.zolgharni@uwl.ac.uk">Massoud Zolgharni</a> or <a href="mailto:info@thrive-centre.com">info@thrive-centre.com</a></p>
      <p>Related: <a href="https://www.thrive-centre.com/projects/echoforge/">EchoForge</a> | <a href="https://intsav.github.io/biobank.html">UNITY Biobank</a></p>
    </div>
    <div class="notice">EchoLearn is a research platform. It does not provide diagnostic interpretation or automated clinical decision-making. Any use in clinical care requires appropriate evaluation and validation.</div>
  </section>
</div>
