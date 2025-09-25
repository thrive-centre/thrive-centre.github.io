---
layout: default
title: UNITY MInD
permalink: /datasets/MInD
---

<link rel="stylesheet" href="{{ '/assets/css/datasets.css' | relative_url }}">

<div class="page-wrap" markdown="1">

# UNITY MInD — Mitral Inflow Doppler Dataset

{: .text-center}
[Download Dataset](#req-data){: .btn .btn--primary .btn--large}
[Code Repository](#code-repo){: .btn .btn--primary .btn--large}
[References](#reference){: .btn .btn--primary .btn--large}

---

## Overview

The **UNITY MInD dataset** provides Doppler echocardiography images of mitral inflow, a key measure for evaluating **diastolic function**.  

Transmitral Doppler traces capture two main phases of ventricular filling:  
- **E-wave**: early ventricular filling  
- **A-wave**: atrial contraction  

These measurements are widely used in clinical decision-making but are usually performed manually, which can be **time-consuming and subjective**.  
The MInD dataset offers annotated Doppler studies to support research into automated analysis, standardisation of measurements, and improved reproducibility.

---

## Dataset Description

- **Source**: Imperial College Healthcare NHS Trust echocardiogram database  
- **Size**: 500 Doppler examinations  
- **Acquisition**: GE and Philips ultrasound equipment, performed by experienced echocardiographers  
- **Annotations**: Cardiologists manually marked E- and A-wave peak coordinates  
- **Format**: DICOM images, zero-padded to 1024×1024 pixels for consistency  
- **Ethics**: Approved by the Health Regulatory Agency (IRAS ID: 243023)  
- **Data split**:  
  - 400 studies for training  
  - 100 studies for testing  

---

## Example

![Mitral inflow example](/assets/images/datasets/MInD/dataset_sample2.png)  
*Sample Doppler inflow image with annotated E- and A-wave peaks.*

---

## Dataset Access {#req-data}

The **UNITY MInD dataset** will be made available for research use.  

**To request access, please complete the form below:**  

<form action="https://formspree.io/f/xvojdbaa" method="POST">
  <input type="text" name="name" placeholder="Your Name" required><br><br>
  <input type="email" name="email" placeholder="Your Email" required><br><br>
  <input type="text" name="institution" placeholder="Institution/Workplace" required><br><br>
  <input type="text" name="dataset" value="UNITY MInD" readonly>
  <textarea name="message" rows="5" placeholder="Please let us know why you would like access to this dataset and what you intend to use it for" required></textarea><br><br>
  <button type="submit" class="btn btn--primary btn--large">Submit</button>
</form>

---

## License

This dataset is released under a  
[Creative Commons BY-NC-ND 4.0 International License](http://creativecommons.org/licenses/by-nc-nd/4.0/).

---

## Project Team

- [Jevgeni Jevsikov] 
- [Elisabeth S Lane]  
- [Massoud Zolgharni](https://www.uwl.ac.uk/staff/massoud-zolgharni)  

---
</div>