---
title: "EchoForge"
toc: false
layout: splash
permalink: /projects/echoforge-new/
header:
  overlay_color: "#000"
  overlay_filter: "0.6"
  overlay_image: /assets/images/projects/istockphoto-2147671579-612x612.jpg
  actions:
    - label: "EchoForge Studio — launching soon"
      url: "https://www.thrive-centre.com/echoforge-studio/"
    - label: "Python Library on GitHub"
      url: "https://github.com/thrive-centre/EchoForge"
    - label: "Model Weights"
      url: "https://huggingface.co/thrive-2025"
  caption: ""
excerpt: "Explore EchoForge, an open platform bringing practical AI tools to echocardiography—from understanding ultrasound views and outlining cardiac structures to following the heart through a video."
---

## AI tools for echocardiography

EchoForge brings together open-source software for working with echocardiographic images and videos. It is designed for clinicians, sonographers, researchers, and developers interested in how AI can support the analysis of heart ultrasound.

The platform includes a Python library for research workflows and EchoForge Studio, a web-based interface in development. Studio is intended to make selected analyses easier to access without writing code; the Python library gives research and development teams more control over how tools are used.

## What can it do?

### Recognise the ultrasound view

An echocardiogram is recorded from different views of the heart. **Classification** can identify which view is shown in an image, helping organise studies and select suitable images for further analysis.

### Outline cardiac structures

**Segmentation** traces the boundaries of structures such as the left ventricle. These outlines provide a visual starting point for measuring cardiac structure and function, and can support more consistent analysis across images.

### Follow the heart through a video

The heart changes shape throughout each beat. **Phase detection** can identify key points in the cardiac cycle, including when the heart is most relaxed and most contracted, in an ultrasound video. This helps locate relevant frames and study heart movement over time.

### Bring analysis steps together

These capabilities can be used individually or combined. For example, locating key cardiac phases and outlining the left ventricle can form steps in a research workflow to estimate ejection fraction from a video. The goal is to make these steps transparent and reproducible, whether used through the library or, as it develops, Studio.

## Explore EchoForge

EchoForge is a growing research platform. Its repository includes the software, setup instructions, examples, documentation, and technical details for each capability. Visit the [GitHub repository](https://github.com/thrive-centre/EchoForge) to explore the [Python library and installation guide](https://github.com/thrive-centre/EchoForge#-installation), or browse the [available model weights](https://huggingface.co/thrive-2025).

EchoForge is provided for research and development; it does not replace professional interpretation or clinical judgement. Its tools should not be used to guide diagnosis or patient management without appropriate clinical validation and regulatory approval.

Interested in contributing, reporting an issue, or discussing a collaboration? Visit the project’s [contribution guide](https://github.com/thrive-centre/EchoForge/blob/main/CONTRIBUTING.md), [issue tracker](https://github.com/thrive-centre/EchoForge/issues), or [GitHub discussions](https://github.com/thrive-centre/EchoForge/discussions).
