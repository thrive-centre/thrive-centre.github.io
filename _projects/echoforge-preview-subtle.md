---
title: "EchoForge"
toc: false
layout: default
classes: [echoforge-wide]
permalink: /projects/echoforge-preview-subtle/
header:
  overlay_color: "#000"
  overlay_filter: "0.6"
  overlay_image: /assets/images/projects/istockphoto-2147671579-612x612.jpg
  caption: ""
excerpt: "Open-source AI tools for echocardiography research, from recognising ultrasound views and outlining cardiac structures to following the heart through a video."
---

<style>
.echoforge-wide .page__hero--overlay #page-title {
  display: none;
}
.echoforge-wide #main {
  max-width: 100%;
  padding-inline: 0;
}
.echoforge-wide .page {
  float: none;
  width: 100%;
  padding-inline: 0;
}
.echoforge-wide .page__inner-wrap {
  float: none;
  max-width: 100%;
  margin: 0;
}
.echoforge-page-wrap {
  max-width: 1500px;
  margin: 0 auto;
  padding: 28px clamp(20px, 4vw, 56px);
}
.echoforge-page-wrap h1 {
  margin: 0 0 0.6em;
  color: #3d4144;
  text-align: center;
}
.echoforge-page-wrap .btn.btn--primary.btn--large {
  background-color: #0068b3;
  color: #fff !important;
  border-radius: 8px;
  padding: 12px 28px;
  font-size: 18px;
  text-decoration: none;
  display: inline-block;
  transition: background-color 0.2s ease;
}
.echoforge-page-wrap .btn.btn--primary.btn--large:hover {
  background-color: #0056b3;
}
.echoforge-page-wrap h2 {
  margin-top: 1.8em;
}
.echoforge-page-wrap h3 {
  margin-top: 1.25em;
}
.echoforge-page-wrap hr {
  margin: 2.5em 0;
  border: 0;
  border-top: 1px solid #e4e8ea;
}
.echoforge-image-placeholder {
  display: grid;
  place-items: center;
  min-height: 220px;
  max-width: 960px;
  margin: 1.5em auto;
  padding: 24px;
  border: 1px dashed #bfcbd1;
  background: #f7f9fa;
  color: #667178;
  text-align: center;
}
.echoforge-page-wrap blockquote {
  margin: 1.5em 0;
  padding: 0.8em 1.2em;
  border-left: 3px solid #8a969d;
  background: #f6f8f9;
  color: #515b60;
  font-size: 0.95em;
}
@media (max-width: 600px) {
  .echoforge-page-wrap {
    padding: 20px 16px;
  }
}
</style>

<div class="echoforge-page-wrap" markdown="1">

# EchoForge

{: .text-center}
[EchoForge Studio (Launching Soon)](https://www.thrive-centre.com/echoforge-studio/){: .btn .btn--primary .btn--large}
[Python Library on GitHub](https://github.com/thrive-centre/EchoForge){: .btn .btn--primary .btn--large}
[Model Weights](https://huggingface.co/thrive-2025){: .btn .btn--primary .btn--large}

EchoForge is an open-source platform for using artificial intelligence to analyse echocardiographic images and videos. It brings together research tools for recognising ultrasound views, outlining cardiac structures, and identifying important moments in the heartbeat.

The project is intended for clinicians and sonographers interested in practical applications, as well as researchers, medical educators, and developers building or evaluating AI tools. By bringing reusable methods together, EchoForge aims to reduce duplicated effort and make reproducible echocardiography research easier to pursue.

---

## What EchoForge can do {#what-it-can-do}

### Recognise the ultrasound view

Echocardiography uses different views to examine the heart from different angles. **Classification** tools can identify the view shown in an image, helping organise scans and select images for further analysis.

<div class="echoforge-image-placeholder" role="img" aria-label="Reserved space for an EchoForge classification image">Classification image to be added</div>

### Outline cardiac structures

**Segmentation** identifies the boundary of a structure in an ultrasound image, such as the left ventricle. The resulting outline can help researchers study cardiac size and function and provide a starting point for measurements.

<div class="echoforge-image-placeholder" role="img" aria-label="Reserved space for an EchoForge segmentation image">Segmentation image to be added</div>

### Follow the heart through a video

The heart changes shape throughout each beat. **Phase detection** can locate important moments, including end-diastole when the heart is relaxed and end-systole after it contracts. Finding these moments in a video helps researchers select relevant frames and study movement over time.

<div class="echoforge-image-placeholder" role="img" aria-label="Reserved space for an EchoForge phase-detection GIF">Phase-detection GIF to be added</div>

### Assess image quality and support learning

Image-quality assessment is an area of ongoing development. The aim is to help identify image characteristics that may be useful for research, education, or supervised feedback. Trainee feedback is experimental and is not a clinical recommendation or a replacement for expert supervision.

## From image analysis to research workflow

These tasks can be used on their own or combined. For example, locating key cardiac phases and outlining the left ventricle at those points can contribute to a research workflow for estimating ejection fraction from an ultrasound video.

The library is designed around independent, interchangeable task-specific tools. This modular approach supports adding new models and datasets, makes methods easier to reuse, and helps teams compare results using documented evaluation. The software is built with TensorFlow/Keras and is intended to fit into research and development workflows.

The Python library is intended for people building or adapting analysis workflows. Using and customising the models requires a basic familiarity with Python. Clinicians and educators can use this page to explore the kinds of tasks the platform addresses, then follow the links below for implementation details.

### EchoForge Studio

EchoForge Studio will offer a simple web-based way to explore selected echocardiography analyses without writing code. It is coming soon.

## Explore EchoForge

The [EchoForge GitHub repository](https://github.com/thrive-centre/EchoForge) is the home for the software, documentation, examples, model specifications, evaluation results, and guidance on getting started. Explore the [installation guide](https://github.com/thrive-centre/EchoForge#-installation), browse the [available model weights](https://huggingface.co/thrive-2025), or visit the [contribution guide](https://github.com/thrive-centre/EchoForge/blob/main/CONTRIBUTING.md).

Questions or ideas? Report an [issue](https://github.com/thrive-centre/EchoForge/issues) or join [GitHub discussions](https://github.com/thrive-centre/EchoForge/discussions).

> EchoForge is a research and development resource. It does not replace professional interpretation or clinical judgement. Use in clinical care requires appropriate evaluation and validation.

## Acknowledgements

EchoForge is supported by the **Intelligent Sensing and Vision Group**, the **University of West London**, and the **THRIVE Centre**. The project welcomes collaboration with clinicians, researchers, developers, and educators to improve and extend AI research in echocardiography.

</div>
