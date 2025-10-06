---
title: "Automated Analysis of Mitral Inflow Doppler using Convolutional Neural Networks"
toc: false
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/landing_page/istockphoto-2194245609-2048x2048.jpg
excerpt: "Fully automated analysis of mitral valve inflow Doppler using deep learning to standardise clinical workflow and reduce manual variability."
---

<link rel="stylesheet" href="{{ '/assets/css/datasets.css' | relative_url }}">
<div class="page-wrap" markdown="1">

## Abstract

Doppler echocardiography is commonly used for functional assessment of heart valves such as the mitral valve.  
Currently, these measurements are performed manually — a **laborious and subjective process**.  

This project demonstrates the feasibility of using **convolutional neural networks (CNNs)** to fully automate mitral inflow Doppler analysis.  
Experiments show that the automated system yields **performance comparable to clinical experts**.

---

## Introduction

![Mitral Inflow Example](/assets/images/projects/unity/Mitral_Inflow/dataset_sample2.png){: .align-right width="400"}

Transmitral Doppler echocardiography is a key technique for **noninvasive assessment of diastolic function**.  
The Doppler velocity profile consists of two waves:

- **E-wave** — early ventricular filling  
- **A-wave** — atrial contraction phase  

Accurate measurement of these waves is critical for diagnosing diastolic dysfunction.  
However, manual tracing introduces **observer variability** and consumes valuable clinical time.  

Automating this process can help **standardise measurement protocols**, improve reproducibility, and enhance clinical workflow.
---

## Method

A dataset of **500 echocardiographic examinations** was obtained from *Imperial College Healthcare NHS Trust’s* echocardiogram database.  
All studies were performed by experienced echocardiographers using **GE** and **Philips** ultrasound systems, under ethical approval *(IRAS ID: 243023)*.

Expert cardiologists manually annotated **E- and A-wave peaks**, and DICOM-formatted Doppler images were zero-padded to **1024×1024 px**.  
Data was split into **400 training** and **100 testing** cases.

The proposed deep learning pipeline includes two stages:

1. **Heartbeat Detection:** Using a **Faster-RCNN** object detection model to localise individual beats.  
2. **Landmark Detection:** Employing a **Convolutional Pose Machine**-based network ([Wei et al., 2016](https://openaccess.thecvf.com/content_cvpr_2016/papers/Wei_Convolutional_Pose_Machines_CVPR_2016_paper.pdf)) to identify E- and A-wave peaks.

![Pipeline Overview](/assets/images/projects/unity/Mitral_Inflow/Pipeline_new.png)
*Figure 1: End-to-end pipeline for automatic Doppler inflow analysis.*

The models were implemented in **TensorFlow** and trained on an **NVIDIA RTX 3090 GPU**.  
Post-processing included non-maximum suppression for bounding boxes and heatmap decoding for wave peak extraction.

---

## Results

![Bland-Altman Plots](/assets/images/projects/unity/Mitral_Inflow/BAplots.png)
*Figure 2: Bland–Altman plots comparing automated and manual measurements.*

Bias between automated and manual measurements was **< 1 cm/s** for both E- and A-waves.  
The **A-wave** showed slightly greater variability, reflecting its more complex morphology.  

These results confirm that the CNN-based system performs **on par with human experts**, supporting potential integration into echocardiographic analysis workflows.

All **datasets, trained models, and code** developed in this study are **freely available for benchmarking and research use.**

---

## Dataset Access

To request access to the **Mitral Inflow Doppler (MInD)** dataset, please complete the dataset request form below:

[Request Access](/datasets/MInD){: .btn .btn--primary .btn--large}

---

## Project Team

- [Jevgeni Jevsikov](https://twitter.com/intsav_?lang=en-gb)  
- [Elisabeth S. Lane](https://elisabethlane.github.io/)  
- [Professor Massoud Zolgharni](https://www.uwl.ac.uk/staff/massoud-zolgharni)

---

## Reference

Wei, S.-E., Ramakrishna, V., Kanade, T., & Sheikh, Y. (2016).  
**Convolutional Pose Machines.** *CVPR 2016*, pp. 4724–4732.
