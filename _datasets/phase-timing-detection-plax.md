---
layout: default
title: Phase Timing Detection in PLAX View
permalink: /datasets/phase-timing-detection-plax
---

<link rel="stylesheet" href="{{ '/assets/css/datasets.css' | relative_url }}">

<div class="page-wrap" markdown="1">

# Phase Timing Detection in PLAX View

{: .text-center}
[Start Labelling →](#start-labelling){: .btn .btn--primary .btn--large}

---

## Project Overview

We are training an AI model to **detect key cardiac phases — end-diastole (ED)** and **end-systole (ES)** directly from **PLAX echocardiographic video sequences**.  

The model learns to recognise subtle physiological cues such as:
- **Valve motion**
- **Myocardial contraction**
- **Changes in chamber size**

These patterns allow the model to accurately identify:
- **End-Diastole (ED):** Just before *mitral valve closure*  
- **End-Systole (ES):** Just before *mitral valve opening*

This enables **automated phase measurement**, improving **consistency** and **reducing manual workload** for clinicians.

---

## Visual Examples

<div align="center" style="display: flex; flex-wrap: wrap; justify-content: center; gap: 20px;">

  <img src="/assets/images/datasets/phase-timing-detection-plax/01-0a0e5fd3ca9604ff0a7462ba64f92c246129b8cedd17a4a63cd197d6857666fe.gif" alt="PLAX Example 1" width="45%" style="border-radius: 10px;">
  <img src="/assets/images/datasets/phase-timing-detection-plax/01-152339327255beb619eabd042bdb6a24d8380fa44ba8514c280ebed9862470d8.gif" alt="PLAX Example 2" width="45%" style="border-radius: 10px;">
  <img src="/assets/images/datasets/phase-timing-detection-plax/01-04203262485753c21d47ba122f86a449d3f1a95a8bca2f66d83420071db16ed0.gif" alt="PLAX Example 3" width="45%" style="border-radius: 10px;">
  <img src="/assets/images/datasets/phase-timing-detection-plax/01-227446714163286e6ab6c28fab080757fd4a9b5f2db3003605da6cf5924c7963.gif" alt="PLAX Example 4" width="45%" style="border-radius: 10px;">

</div>

---

## Instructional Video

<div id="instructional-video" align="center">
  <h2>Watch the Demonstration</h2>
  <br>
  <iframe width="560" height="315"
    src="https://www.youtube.com/embed/ScgR-V2WDSk"
    title="Phase Timing Detection in PLAX View"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen>
  </iframe>
</div>

---

## Start Labelling

<div id="start-labelling" align="center" style="margin-top: 20px;">
  <a href="https://unityimaging.net/temporal/uwl-echo-ufumaka-plax-phase-timing"
     class="btn btn--primary btn--large"
     target="_blank">
     Start Phase Detection
  </a>
</div>

---

</div>
