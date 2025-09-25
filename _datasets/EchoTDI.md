---
layout: default
title: UNITY EchoTDI
permalink: /datasets/EchoTDI/
---

<link rel="stylesheet" href="{{ '/assets/css/datasets.css' | relative_url }}">

<div class="page-wrap" markdown="1">

# UNITY EchoTDI — Automated Multibeat Tissue Doppler Echocardiography Analysis

{: .text-center}
[Download Dataset](#req-data){: .btn .btn--primary .btn--large}
[References](#reference){: .btn .btn--primary .btn--large}

---

## Overview

Tissue Doppler Imaging (TDI) is an echocardiographic technique used to assess **myocardial motion velocities**.  
Manual interpretation is time-consuming and introduces variability in clinical workflow.  

The **UNITY EchoTDI dataset** provides Doppler strips annotated with **S’, E’, and A’ peaks**, enabling benchmarking of automated algorithms for **beat detection** and **keypoint localisation**.

---

## Dataset Description

- **Dataset size**: 280 Doppler strips (5,327 beats) from **48 patients** (mean age 64±11 years).  
- **Views**: Septal and lateral annuli.  
- **Annotations**:  
  - 3 expert cardiologists provided independent annotations.  
  - Consensus of experts used as ground truth.  
- **Resolution**: Cropped beats resized to **192×192 pixels**.  
- **Beats**: Multi-beat Doppler strips of varying lengths included.  
- **Ethics**: Ethical approval obtained; imaging data anonymised.  

**Metadata provided per Doppler strip includes:**  
- Filename (Strip ID)  
- Patient ID (anonymised)  
- Beat count  
- Peak velocity coordinates (S’, E’, A’)  
- Expert annotations (per operator)  

<div align="center">
  <img src="/assets/images/datasets/EchoTDI/data_example.png" alt="TDI example strip" width="70%">
</div>

---

## Request Dataset Access {#req-data}

The **UNITY EchoTDI dataset** will soon be made available for research.  

**To request access, please complete the form below:**  

<form action="https://formspree.io/f/xvojyeao" method="POST">
  <input type="text" name="name" placeholder="Your Name" required><br><br>
  <input type="email" name="email" placeholder="Your Email" required><br><br>
  <input type="text" name="institution" placeholder="Institution/Workplace" required><br><br>
  <input type="text" name="dataset" value="UNITY EchoTDI" readonly><br><br>
  <textarea name="message" rows="5" placeholder="Why do you want access?" required></textarea><br><br>
  <button type="submit" class="btn btn--primary btn--large">Submit</button>
</form>

---

## License

This dataset is licensed under a  
[Creative Commons BY-NC-ND 4.0 International License](http://creativecommons.org/licenses/by-nc-nd/4.0/).

---

## Project Team

- [Elisabeth S. Lane](https://elisabethlane.github.io/)  
- [Jevgeni Jevsikov](https://twitter.com/intsav_?lang=en-gb)  
- [Massoud Zolgharni](https://www.uwl.ac.uk/staff/massoud-zolgharni)  

---

## References {#reference}

- [TDI Beat and Keypoint Detection (Springer)](https://link.springer.com/article/10.1007/s10554-017-1092-4)  
- [Automated Multi-beat TDI Analysis using Deep Neural Networks (Springer)](https://link.springer.com/article/10.1007/s11517-022-02753-3)  

</div>
