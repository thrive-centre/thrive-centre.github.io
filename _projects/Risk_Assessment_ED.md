---
title: "AI for Risk Assessment in Emergency Department Presentations"
toc: false
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/projects/er.jpg
excerpt: "Developing AI-powered diagnostic support tools for real-time risk stratification in the emergency department."
---

## Supervisory & Collaboration Team

**Principal Supervisor**  
- [Professor Massoud Zolgharni](https://www.uwl.ac.uk/staff/massoud-zolgharni) – University of West London  

**Clinical Collaborator**  
- [Dr. Naznin Alaei Faradonbeh](https://orcid.org/0000-0003-4829-5154) – Consultant in Emergency Medicine  

The student will work closely with Dr. Faradonbeh to ensure clinical relevance and applicability of the AI models developed throughout the project.  

---

## Introduction

The emergency department (ED) is a high-pressure, resource-limited environment that manages a wide range of acute presentations—from trauma and cardiac complaints to sepsis and neurological deficits.  

Accurate and timely **risk stratification** is vital for prioritizing care, allocating resources, and improving outcomes. However, decision-making in the ED often relies on **subjective clinical judgment**, leading to variability and potential delays.  

**Artificial Intelligence (AI)** provides a transformative opportunity by identifying hidden patterns in complex, high-volume data. This project develops and validates **AI-powered decision support tools** to improve risk stratification across diverse ED presentations.  

---

## Aim

To develop and evaluate **AI-driven diagnostic support systems** that stratify risk and predict clinical pathways for diverse patient presentations in the ED.  

---

## Objectives

### 1. Data Acquisition and Preparation
- Use **MIMIC-IV-ED, MC-MED, and HCUP NEDS** datasets  
- Standardize and clean data across sources  
- Engineer features for clinical relevance  

### 2. AI Model Development
- Build models for risk stratification and outcome prediction (e.g., admission, ICU transfer)  
- Explore supervised learning, time-to-event models, and unsupervised clustering  
- Apply cross-validation, regularization, and sensitivity analysis  

### 3. Clinical Validation and Contextualization
- Evaluate discrimination (AUROC), calibration, and clinical utility  
- Benchmark against existing risk scores and physician judgment  
- Assess generalizability across diverse EDs  

### 4. Dissemination and Impact
- Publish in high-impact journals  
- Present at international conferences  
- Plan clinical translation and **EHR integration**  

---

## Potential Datasets

- **MIMIC-IV-ED**: 425,000+ ED visits (Beth Israel Deaconess Medical Center, 2011–2019)  
- **MC-MED**: 118,385 ED visits with physiological waveforms (Stanford, 2020–2022)  
- **HCUP NEDS**: 30M+ annual ED records across 950+ hospitals  

---

## Research Methods

- Retrospective cohort analysis  
- Machine learning model development & validation  
- Comparative effectiveness and clinical utility analysis  

---

## Planned Dataset Curation: RAPIDS

A customised benchmark dataset called **RAPIDS** (Risk Assessment and Prediction in Emergency Department Settings) will be curated.  

Derived from large-scale sources ([MIMIC-IV-ED](https://physionet.org/content/mimic-iv-ed/2.0/), [MC-MED](https://physionet.org/content/mc-med/1.0.0/), [HCUP NEDS](https://www.hcup-us.ahrq.gov/nedsoverview.jsp)), RAPIDS will include:  

- Prediction targets: ICU transfer, in-ED mortality, prolonged length of stay  
- Grouped features reflecting real-world decision-making (labs, imaging orders, triage assessments)  

This benchmark will enable evaluation of AI models on **predictive accuracy, clinical utility, and time efficiency**, supporting integration into ED workflows.  

---

## Timeline

- **Year 1**: Literature review, data acquisition & cleaning  
- **Year 2**: Model development & validation  
- **Year 3**: Clinical testing, dissemination, thesis completion  

---

## Expected Outcomes

- AI models for robust ED risk stratification  
- Benchmarking against clinical risk scores  
- Recommendations for integration into ED workflows  

---

📩 Contact: [Professor Massoud Zolgharni](https://www.uwl.ac.uk/staff/massoud-zolgharni)  
