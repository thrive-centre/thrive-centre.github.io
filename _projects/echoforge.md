---
title: "EchoForge"
toc: false
header:
  overlay_color: "#000"
  overlay_filter: "0.6"
  overlay_image: /assets/images/projects/istockphoto-2147671579-612x612.jpg
  caption: ""
excerpt: "An open-source model library for AI-powered echocardiographic image analysis, built to accelerate, standardise, and scale cardiac ultrasound research and practice."
intro: 
  - excerpt: >
      EchoForge provides a growing collection of pre-trained deep learning models for key echocardiography tasks—view classification, segmentation, keypoint detection, and image quality assessment.
  - excerpt: >
      It serves as a modular, reproducible, and developer-friendly toolkit for clinical researchers, educators, and engineers working at the intersection of AI and cardiac imaging.
---

## What is EchoForge?

**EchoForge** is a modular library of pre-trained deep learning models for echocardiographic image analysis. Developed by the Intelligent Sensing and Vision Lab at the University of West London, it provides researchers, clinicians, and developers with plug-and-play access to reusable AI components designed to support and accelerate cardiac ultrasound workflows.

EchoForge helps reduce duplication of effort, supports reproducibility in research, and lowers the barrier for deploying AI in clinical echo settings.

---

## Use Cases

EchoForge models have been trained and tested for a range of applications across clinical and educational use:

- **View classification**: Automatically classify echo views such as PLAX, A4C, PSAX
- **Segmentation**: Identify and delineate cardiac structures (e.g., LV, myocardium)
- **Landmark detection**: Detect key anatomical points, e.g., endocardial borders in PLAX
- **Image quality assessment**: Score image quality for training, triage, or QA
- **Skill tracking and trainee feedback** (experimental): Use quality scores over time to inform sonographer training

These models are designed to be lightweight, modular, and easily adaptable to different pipelines or clinical environments.

---

## Architecture and Design Philosophy

EchoForge is designed for:

- **Modularity**: Each model is encapsulated in its own callable module.
- **Simplicity**: Consistent interfaces across tasks using PyTorch.
- **Reusability**: Loadable pretrained weights; easy fine-tuning.
- **Interoperability**: Can be integrated into research platforms or linked with annotation tools like PulseNote.
- **Extensibility**: New models or training routines can be added via simple pull requests.

We do not list detailed model architectures on this website — for full model specs, training details, and usage examples, see our GitHub repository:

👉 [EchoForge GitHub Repository](https://github.com/intsav/EchoForge)

---
