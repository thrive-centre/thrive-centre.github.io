---
layout: default
title: UNITY EchoPhase
permalink: /datasets/EchoPhase
---

<link rel="stylesheet" href="{{ '/assets/css/datasets.css' | relative_url }}">

<div class="page-wrap" markdown="1">

# UNITY EchoPhase — Multibeat Echocardiographic Phase Detection

{: .text-center}
[Download Dataset](#req-data){: .btn .btn--primary .btn--large}
[Code Repository](https://github.com/intsav/EchoPhaseDetection){: .btn .btn--primary .btn--large}
[Trained Model](/projects/echoforge){: .btn .btn--primary .btn--large}
[References](#reference){: .btn .btn--primary .btn--large}

---

## Overview

The **UNITY EchoPhase dataset** provides echocardiographic videos annotated with key cardiac phases — **end-systolic (ES)** and **end-diastolic (ED)**.  
These phases are essential for calculating heart function measures such as ejection fraction, chamber volume, and myocardial strain.  

The dataset enables research into automated phase detection and provides a benchmark resource for validating methods against expert human annotations.

---

## Important Information about the Dataset

We took a **large random sample of echocardiographic studies (2010–2020)** from *Imperial College Healthcare NHS Trust’s echocardiogram database*.  

- **Ethical approval** was obtained from the Health Regulatory Agency for the anonymised export of imaging data.  
- **Patient consent** was not required since data had originally been acquired for clinical purposes.  
- **Acquisition**: Images were collected during examinations by experienced echocardiographers, following standard protocols on GE and Philips ultrasound systems.  
- **Inclusion criteria**: Only studies with full demographic data, and without intravenous contrast administration.  
- **Anonymisation**: Automated pipeline removed all patient-identifiable information.  
- **View selection**: A CNN (developed in-house) detected different echo views, isolating **apical 4-chamber (A4C)**.  
- **Dataset size**: 1,000 anonymised videos of varying lengths were randomly selected.  
- **Annotation process**:  
  - Two accredited cardiologists independently selected **ED** and **ES** frames.  
  - Each was blinded to the other’s choices.  
  - A custom annotation tool mimicking echo hardware (trackball/arrow navigation) was used.  
  - This setup replicates clinical workflow for Biplane Simpson’s measurements.  
- **Resolution**: All sequences were **downsampled to 112×112 pixels** via cubic interpolation.  

---

## Label Metadata

Each video in the dataset is accompanied by a structured label file:  

- **Op1** → Operator 1 annotations (used for training/testing the model).  
- **Op2** → Operator 2 annotations (used for evaluation of observer variability).  
- **AVIname** → The anonymised video filename.  
- **Number of Frames** → Total frame count per video.  
- **Training/Testing** → Indicates the dataset split.  
- **Beats** → Up to 4 beats annotated per file (extended beat labels available on request).  
- **Missing cells** → Indicate either:  
  - The first frame of interest was an ES frame, or  
  - The annotator did not select a frame.  

**Example Label File Preview:**  

![Example Labels](/assets/images/datasets/EchoPhase/labels-example.png)
---

## Dataset Summary

| Attribute | UNITY EchoPhase |
|-----------|-----------------|
| **Source** | NHS Trust PACS Archives, Imperial College Healthcare |
| **Ultrasound machines** | Philips iE33 xMATRIX, GE Vivid series |
| **Size** | 1,000 videos (2010–2020) |
| **Video length** | 1–3 heartbeats |
| **Annotations** | 2 independent expert annotations (ED & ES) |
| **Resolution** | (300–768)×(400–1024), downsampled to 112×112 |
| **Frame rate** | 23–102 fps |
| **Format** | DICOM → AVI |
| **Use** | Training & Testing |

---

## Request Dataset Access {#req-data}

The **UNITY EchoPhase dataset** has been made available for research and benchmarking.  

It includes:  
- 1,000 anonymised echocardiographic videos  
- Frame-level ED and ES labels from two cardiology experts  
- Metadata describing operators, beats, and training/testing splits  

**To request access, please complete the form below:**  

<form action="https://formspree.io/f/xvojyeao" method="POST">
  <input type="text" name="name" placeholder="Your Name" required><br><br>
  <input type="email" name="email" placeholder="Your Email" required><br><br>
  <input type="text" name="institution" placeholder="Institution/Workplace" required><br><br>
  <input type="text" name="dataset" value="UNITY EchoPhase" readonly>
  <textarea name="message" rows="5" placeholder="Please let us know why you would like access to this dataset and what you intend to use it for" required></textarea><br><br>
  <button type="submit" class="btn btn--primary btn--large">Submit</button>
</form>

---

## License

This dataset is licensed under a  
[Creative Commons BY-NC-ND 4.0 International License](http://creativecommons.org/licenses/by-nc-nd/4.0/).

---

## Project Team

- [Elisabeth S Lane](https://elisabethlane.github.io/)  
- [Jevgeni Jevsikov](https://twitter.com/intsav_?lang=en-gb)  
- [Neda Azarmehr](https://www.uwl.ac.uk/staff/neda-azarmehr)  
- [Massoud Zolgharni](https://www.uwl.ac.uk/staff/massoud-zolgharni)  

---

## References {#reference}

- [Multibeat Echocardiographic Phase Detection Using Deep Neural Networks — Computers in Biology and Medicine](https://www.sciencedirect.com/science/article/abs/pii/S0010482521001670)

</div>

