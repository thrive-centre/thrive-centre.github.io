---
layout: default
title: UNITY EchoTDI
permalink: /datasets/MInD
---

<link rel="stylesheet" href="{{ '/assets/css/datasets.css' | relative_url }}">

<div class="page-wrap" markdown="1">

<!-- 
---
layout: single
title: UNITY MInD — Automated Analysis of Mitral Inflow Doppler
author_profile: true
permalink: /datasets/MInD
toc: true
toc_sticky: true
--- -->

# UNITY MInD — Automated Analysis of Mitral Inflow Doppler

{: .text-center}
[Go directly to Request Datasets](#req-data){: .btn .btn--primary .btn--large}
[Go directly to Code Repositories ](#code-repo){: .btn .btn--primary .btn--large}
[Go directly to References](#reference){: .btn .btn--primary .btn--large}


## Abstract

Doppler echocardiography is commonly used for functional assessment of heart valves such as the mitral valve.  
Currently, the measurements are made manually, which is a **laborious and subjective process**.  

We have demonstrated the feasibility of using **convolutional neural networks (CNNs)** to fully automate the process of mitral valve inflow measurements. Experiments show that the automated system yields **comparable performance to human experts**.

---

## Introduction

Transmitral Doppler echocardiography has become the **primary mode of noninvasive assessment** of diastolic filling and function.  

The transmitral Doppler velocity profile has two distinct components:  
- **E-wave** (early ventricular filling)  
- **A-wave** (atrial ventricular filling)  

Accurate analysis of these Doppler traces is critical. Current clinical practice requires manual measurements, which results in high intra- and inter-observer variability.  

Automated systems can:  
- Standardise measurement protocols  
- Reduce time spent on manual analysis  
- Improve clinical workflow  

![Mitral inflow example](/assets/images/datasets/MInD/dataset_sample2.png)

---

## Method

A random sample of **500 echocardiographic examinations** was extracted from **Imperial College Healthcare NHS Trust’s echocardiogram database**.  

- Images acquired by experienced echocardiographers using **GE** and **Philips** ultrasound equipment.  
- Ethical approval obtained from the Health Regulatory Agency (IRAS ID: **243023**).  
- **Manual annotation**: cardiologists marked E- and A-wave peak coordinates.  
- Images (various sizes) were **zero-padded to 1024×1024 pixels**.  
- **400 images** used for training, **100 images** for testing.  

### Deep learning pipeline (Figure 1):
1. **Input**: Original Doppler image (no preprocessing).  
2. **Faster-RCNN**: Detects and isolates individual heartbeats.  
3. **Non-maximum suppression**: Filters overlapping bounding boxes.  
4. **Landmark detection model** (Convolutional Pose Machines, Wei et al. 2016): Predicts E- and A-wave heatmaps.  
5. Extracted **E- and A-wave peaks** from heatmaps.  
6. Overlay peak velocities back onto Doppler image.  

Framework: **TensorFlow**, GPU: **NVIDIA RTX3090**.  

![Pipeline](/assets/images/datasets/MInD/Pipeline_new.png)  
*Figure 1: Deep learning pipeline for automated Mitral Inflow analysis.*

---

## Results

- **Bland-Altman plots** (Figure 2) show bias <1 cm/s between automated vs. expert measurements for both E- and A-wave peaks.  
- Patient-by-patient analysis: Slightly higher SD for A-wave → harder to detect than E-wave.  
- **Datasets, code, and trained models are freely available** for future benchmarking.  

![Results](/assets/images/datasets/MInD/BAplots.png)  
*Figure 2: Bland-Altman plots for automated vs. manual measurements.*

---

## Request Dataset Access {#req-data}

We aim to make the **UNITY MInD dataset** available for research purposes soon.  

**If you wish to request access, please complete the form below:**  

<form action="https://formspree.io/f/xvojdbaa" method="POST">
  <input type="text" name="name" placeholder="Your Name" required><br><br>
  <input type="email" name="email" placeholder="Your Email" required><br><br>
  <input type="text" name="institution" placeholder="Institution/Workplace" required><br><br>
  <input type="text" name="dataset" value="Mitral Inflow Doppler (UNITY MInD)" readonly>
  <textarea name="message" rows="5" placeholder="Please let us know why you would like access to this dataset and what you intend to use it for" required></textarea><br><br>
  <button type="submit" class="btn btn--primary btn--large">Submit</button>


</form>


---

## Project Team

- [Jevgeni Jevsikov](https://twitter.com/intsav_?lang=en-gb)  
- [Elisabeth S Lane](https://elisabethlane.github.io/)  
- [Massoud Zolgharni](https://www.uwl.ac.uk/staff/massoud-zolgharni)  

---
