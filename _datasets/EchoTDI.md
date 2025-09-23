---
layout: default
title: UNITY EchoTDI
permalink: /datasets/EchoTDI/
---

<link rel="stylesheet" href="{{ '/assets/css/datasets.css' | relative_url }}">

<div class="page-wrap" markdown="1">

# UNITY EchoTDI - Automated Multibeat Tissue Doppler Echocardiography Analysis Using Deep Neural Networks

{: .text-center}
[Download Datasets](#req-data){: .btn .btn--primary .btn--large}
<!-- [Go directly to Code Repositories ](#code-repo){: .btn .btn--primary .btn--large} -->
[References](#reference){: .btn .btn--primary .btn--large}

---

## Abstract
Tissue Doppler Imaging (TDI) is an essential echocardiographic technique for the non-invasive assessment of myocardial blood velocity.  
Interpretation by trained experts is time-consuming and disruptive to workflow.  

This study presents an automated deep learning model, trained and tested on Doppler strips of arbitrary length, capable of rapid beat detection and Cartesian coordinate localisation of peak velocities with accuracy indistinguishable from human experts — but with **greater speed**.

---

## Introduction
TDI uses Doppler principles to measure myocardial motion velocities.  
Guidelines recommend averaging peak velocity measurements over ≥3 consecutive beats.  

However, echocardiographers often manually select “representative” beats, introducing variability and possible diagnostic errors.  

A reliable automated system could:  
- Save time  
- Standardise measurement protocols  
- Improve outcomes by averaging over more beats  

<div align="center">
  <img src="/assets/images/datasets/EchoTDI/data_example.png" alt="TDI example strip" width="70%">
</div>

---

## Method
- **Dataset**: 280 Doppler strips (5,327 beats) from 48 patients (mean age 64±11), septal & lateral annuli  
- **Annotations**: 3 expert clinicians; consensus used as ground truth  
- **Architecture**:  
  - **(A)** Heartbeat detection using **Mask R-CNN** (ResNet101 backbone)  
  - **(B1–B3)** Cropped beats resized (192×192) and input into CNN heatmap regression models predicting **S’, E’, A’** peak velocities  

<div align="center">
  <img src="/assets/images/datasets/EchoTDI/pipeline.jpg" alt="Pipeline" width="70%">
</div>

---

## Results & Discussion
- Manual annotation time: **4.76 sec (25 beats)**  
- Model inference: **0.18 ms (25 beats)**  
- Errors were within **inter-observer variability**, but far faster  

<div align="center">
  <img src="/assets/images/datasets/EchoTDI/plots.png" alt="Plots" width="80%">
</div>

---

### Bland–Altman Bias ± SD (cm/s)

| Model / Expert                | Septal S’ | Septal E’ | Septal A’ | Lateral S’ | Lateral E’ | Lateral A’ |
|-------------------------------|-----------|-----------|-----------|------------|------------|------------|
| **Human performance**         |           |           |           |            |            |            |
| Exp 1,2 vs Expert 3           | 0.13±0.59 | -0.18±0.59 | -0.06±0.84 | 0.33±0.91  | 0.15±0.92  | 0.11±0.84  |
| Exp 1,3 vs Expert 2           | 0.06±0.50 | -0.22±0.60 | 0.29±0.70  | 0.33±0.87  | 0.12±0.80  | 0.17±0.75  |
| Exp 2,3 vs Expert 1           | -0.19±0.63 | -0.04±0.56 | -0.24±0.69 | -0.66±0.94 | -0.27±0.77 | -0.27±0.78 |
| Expert consensus              | -0.14±0.67 | 0.06±0.70  | -0.08±0.90 | -0.44±1.10 | -0.19±0.97 | -0.17±0.92 |

| **Machine performance**       |           |           |           |            |            |            |
| Exp 1,2 vs Model 3            | -0.01±0.82 | -0.42±1.00 | -0.11±0.85 | 0.59±0.93  | 0.08±1.32  | 0.38±1.87  |
| Exp 1,3 vs Model 2            | 0.04±0.93  | 0.15±0.94  | 0.44±0.98  | 0.50±0.93  | 0.19±1.10  | 0.21±1.66  |
| Exp 2,3 vs Model 1            | -0.12±0.97 | -0.17±0.94 | -0.15±0.99 | -0.11±1.02 | -0.04±0.93 | -0.04±1.35 |
| Expert consensus vs Model     | -0.07±0.78 | -0.22±0.92 | -0.02±0.88 | -0.38±0.81 | -0.06±0.84 | 0.19±1.38  |

---

## Dataset Request {#req-data}  
We aim to make the dataset available for research purposes soon.  

**Request access by completing the form below:**

<form action="https://formspree.io/f/xvojyeao" method="POST">
  <input type="text" name="name" placeholder="Your Name" required><br><br>
  <input type="email" name="email" placeholder="Your Email" required><br><br>
  <input type="text" name="institution" placeholder="Institution/Workplace" required><br><br>
  <input type="text" name="dataset" value="TDI" readonly><br><br>
  <textarea name="message" rows="5" placeholder="Why do you want access?" required></textarea><br><br>
  <button type="submit" class="btn btn--primary btn--large">Submit</button>
</form>


---

## Project Team
- [Elisabeth S. Lane](https://elisabethlane.github.io/)  
- [Jevgeni Jevsikov](https://twitter.com/intsav_?lang=en-gb)  
- [Massoud Zolgharni](https://www.uwl.ac.uk/staff/massoud-zolgharni)  

---

## References {#reference}
- [TDI Beat and Keypoint Detection (Springer)](https://link.springer.com/article/10.1007/s10554-017-1092-4)  
- [Automated Multi-beat TDI Analysis using Deep Neural Networks (Springer)](https://link.springer.com/article/10.1007/s11517-022-02753-3)  
