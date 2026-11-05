---
title: "EchoLearn"
toc: false
layout: default
classes: [echolearn-wide]
permalink: /projects/echolearn-preview-subtle/
header:
  overlay_color: "#000"
  overlay_filter: "0.6"
  overlay_image: /assets/images/projects/echolearn/echolearn4.png
  caption: ""
excerpt: "AI-assisted echocardiography acquisition and training, providing structured feedback to support supervised practice and workforce development."
---

<style>
.echolearn-wide .page__hero--overlay #page-title {
  display: none;
}
.echolearn-wide #main {
  max-width: 100%;
  padding-inline: 0;
}
.echolearn-wide .page {
  float: none;
  width: 100%;
  padding-inline: 0;
}
.echolearn-wide .page__inner-wrap {
  float: none;
  max-width: 100%;
  margin: 0;
}
.echolearn-page-wrap {
  max-width: 1500px;
  margin: 0 auto;
  padding: 28px clamp(20px, 4vw, 56px);
}
.echolearn-page-wrap h1 {
  margin: 0 0 0.6em;
  color: #3d4144;
  text-align: center;
}
.echolearn-page-wrap .btn.btn--primary.btn--large {
  background-color: #0068b3;
  color: #fff !important;
  border-radius: 8px;
  padding: 12px 28px;
  font-size: 18px;
  text-decoration: none;
  display: inline-block;
  transition: background-color 0.2s ease;
}
.echolearn-page-wrap .btn.btn--primary.btn--large:hover {
  background-color: #0056b3;
}
.echolearn-page-wrap h2 {
  margin-top: 1.8em;
}
.echolearn-page-wrap h3 {
  margin-top: 1.25em;
}
.echolearn-page-wrap hr {
  margin: 2.5em 0;
  border: 0;
  border-top: 1px solid #e4e8ea;
}
.echolearn-interface-placeholder {
  display: grid;
  min-height: 300px;
  margin: 1.5em 0 0.5em;
  padding: 14px;
  border: 1px solid #dfe5e8;
  background: #f5f7f8;
}
.echolearn-interface-window {
  display: grid;
  grid-template-rows: 32px 1fr;
  border: 1px solid #e1e6e9;
  background: #fff;
}
.echolearn-interface-toolbar {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0 11px;
  border-bottom: 1px solid #e6eaec;
  background: #fbfcfc;
}
.echolearn-interface-toolbar span {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #c9d1d5;
}
.echolearn-interface-screen {
  display: grid;
  align-content: center;
  justify-items: center;
  min-height: 230px;
  padding: 24px;
  text-align: center;
}
.echolearn-interface-screen strong {
  color: #38454c;
}
.echolearn-interface-screen span {
  margin-top: 5px;
  color: #667178;
  font-size: 0.9em;
}
.echolearn-page-wrap blockquote {
  margin: 1.5em 0;
  padding: 0.8em 1.2em;
  border-left: 3px solid #8a969d;
  background: #f6f8f9;
  color: #515b60;
  font-size: 0.95em;
}
@media (max-width: 600px) {
  .echolearn-page-wrap {
    padding: 20px 16px;
  }
  .echolearn-interface-placeholder {
    min-height: 240px;
  }
}
</style>

<div class="echolearn-page-wrap" markdown="1">

# EchoLearn

{: .text-center}
[How EchoLearn Works](#how-echolearn-works){: .btn .btn--primary .btn--large}
[Clinical Evaluation](#clinical-evaluation){: .btn .btn--primary .btn--large}
[Collaborate](#collaborate){: .btn .btn--primary .btn--large}

EchoLearn is an AI-assisted echocardiography training platform designed to support image acquisition through structured feedback. Developed by the **Intelligent Sensing and Vision Group** at the **THRIVE Centre, University of West London**, it builds on research from the **UNITY: UK Collaborative for Integrating AI into Echocardiography** programme, supported by the British Heart Foundation.

The platform is being developed for learners, sonographers, educators, and clinical teams. Its focus is training and supervised practice, not diagnosis or automated clinical decision-making.

---

## Why EchoLearn?

Acquiring useful echocardiographic views takes practice. Probe position, orientation, and each patient's anatomy all affect the resulting image. Learners traditionally build these skills through repeated scanning and close supervision.

With increasing demand on clinical services, it can be difficult to provide every learner with consistent, timely feedback. EchoLearn explores how AI-assisted image assessment can help learners and supervisors recognise image quality and discuss possible adjustments during practice.

## How EchoLearn Works {#how-echolearn-works}

The platform is designed to support a straightforward learning cycle:

1. **Acquire:** The learner practises obtaining echocardiographic views using an ultrasound system.
2. **Assess:** AI tools analyse the video and generate image-quality or geometric indicators.
3. **Guide:** Visual feedback supports discussion and acquisition decisions with a supervisor.
4. **Review:** Session information can support reflection and research into the training workflow.

<div class="echolearn-interface-placeholder" role="img" aria-label="Reserved space for a future EchoLearn interface screenshot">
  <div class="echolearn-interface-window">
    <div class="echolearn-interface-toolbar" aria-hidden="true"><span></span><span></span><span></span></div>
    <div class="echolearn-interface-screen">
      <strong>EchoLearn interface preview</strong>
      <span>Interface screenshot will be added here</span>
    </div>
  </div>
</div>

*The interface screenshot will be added here when available.*

## A Research Platform in Development

EchoLearn combines AI-based image assessment with echocardiography acquisition and operator feedback. Its capabilities are progressing through research, evaluation, and development:

### Research prototype

- Live echocardiographic video input
- AI-based image assessment
- On-screen visual feedback
- Session capture and analysis

### Under evaluation

- Supervised use in scanning practice
- Usability and fit with training
- How operators respond to feedback
- Potential support for novice image acquisition

### In development

- Longitudinal trainee progress tracking
- Deployment across ultrasound systems

## Clinical Evaluation {#clinical-evaluation}

A Phase 1 evaluation began in August 2026 in an echocardiography training setting at Hammersmith Hospital. Medical students take part in supervised scanning sessions. The evaluation is exploring usability, how learners respond to feedback, and whether real-time guidance helps novice operators acquire better images.

A later controlled evaluation is intended to assess acquisition quality, acquisition time, reproducibility, and downstream measurements. Results have not yet been reported, and improved clinical performance has not yet been demonstrated.

## Research, Data, and Training

EchoLearn sits within THRIVE and UNITY's wider echocardiography research environment. Related resources include:

- [EchoForge](https://www.thrive-centre.com/projects/echoforge/): reusable AI tools and research resources for echocardiography.
- [UNITY Biobank](https://intsav.github.io/biobank.html): echocardiography data and annotation infrastructure supporting research.

Together, these projects connect AI research, data and annotation resources, and a live acquisition environment for prospective training evaluation.

## Partnerships

- **Research lead:** THRIVE Centre, University of West London
- **Clinical partner:** [National Heart and Lung Institute](https://www.imperial.ac.uk/nhli/)
- **Evaluation setting:** [Hammersmith Hospital](https://www.research.imperial.nhs.uk/our-research-and-innovation/facilities-and-infrastructure/peart-rose-research-unit)
- **Funding:** British Heart Foundation Programme Grant RG/F/22/110059

## Collaboration and Contact {#collaborate}

We welcome conversations with echocardiography educators, NHS training programmes, and researchers interested in image quality, operator guidance, and independent evaluation.

Contact [Massoud Zolgharni](mailto:massoud.zolgharni@uwl.ac.uk) or [info@thrive-centre.com](mailto:info@thrive-centre.com) to discuss collaboration.

> EchoLearn is a research platform. It does not provide diagnostic interpretation or automated clinical decision-making. Any use in clinical care requires appropriate evaluation and validation.

</div>
