---
toc: true
toc_sticky: true
author_profile: true
date: 2026-02-26
title: "Cross-Scanner Domain Generalisation in Echocardiography via Frequency-Based Style Normalisation"
permalink: /vacancies/Cross-Scanner-Domain-Generalisation-in-Echocardiography/
supervisory_team:
    -   name: "Dr. Eman Alajrami"
        link: "https://www.uwl.ac.uk/staff/eman-alajrami"
    -   name: "Professor Massoud Zolgharni"
        link: "https://www.uwl.ac.uk/staff/massoud-zolgharni"

project_description:
  intro: "Artificial intelligence has demonstrated strong potential in echocardiography, yet real-world deployment remains limited due to cross-scanner variability. Differences in acquisition settings and manufacturer-specific processing lead to domain shift, reducing model performance on unseen scanners. This PhD project investigates frequency-based style normalisation techniques grounded in Fourier analysis to develop scanner-invariant deep learning models for echocardiography. The approach aims to improve robustness across tasks such as classification and segmentation without requiring target-domain data."
aim:
  text: "To develop frequency-domain approaches that improve cross-scanner domain generalisation in echocardiography, enabling robust and scanner-invariant deep learning models."
objectives:
  - "Analyse scanner-induced variability in echocardiography and its frequency characteristics."
  - "Develop frequency-based style normalisation techniques for domain generalisation."
  - "Evaluate performance across classification and segmentation tasks."
  - "Benchmark against conventional augmentation and style transfer methods."
  - "Validate cross-scanner robustness using multi-domain public datasets."
methodology:
  - title: "Literature Review and Dataset Analysis"
    description: "Comprehensive review of domain generalisation methods and analysis of frequency characteristics across echocardiography datasets."
  - title: "Frequency-Based Normalisation"
    description: "Application of Fourier Transform to decompose images into amplitude and phase spectra, enabling controlled amplitude mixing or normalisation to promote scanner invariance."
  - title: "Model Development"
    description: "Integration of frequency-based techniques into deep learning architectures for classification and segmentation."
  - title: "Baseline Comparisons"
    description: "Evaluation against standard spatial augmentation, histogram matching and adversarial style transfer approaches."
  - title: "Cross-Domain Evaluation"
    description: "Leave-one-domain-out experiments across publicly available datasets to assess zero-shot scanner generalisation."
timeline:
  - "Year 1: Literature review, dataset acquisition, statistical and frequency-domain analysis, baseline implementation."
  - "Year 2: Development of frequency-based framework, extensive experimentation across tasks, ablation studies and intermediate publications."
  - "Year 3: Cross-scanner validation, clinical relevance assessment, dissemination of findings and thesis completion."
expected_outcomes:
  - "Development of scanner-invariant deep learning methods for echocardiography."
  - "Improved robustness of AI models across unseen scanner vendors."
  - "A lightweight and scalable framework suitable for real-world clinical deployment."
  - "Theoretical contributions linking frequency characteristics to domain shift in ultrasound imaging."
  - "Peer-reviewed publications in medical imaging and computer vision venues."
---

{% if page.supervisory_team and page.supervisory_team.size > 0 %}
## Supervisory Team
{% for s in page.supervisory_team %}
- **[{{ s.name }}]({{ s.link }})**
{% endfor %}
{% endif %}

{% if page.project_description %}
## Introduction
{{ page.project_description.intro }}
{% endif %}

{% if page.aim %}
## Aim
{{ page.aim.text }}
{% endif %}

{% if page.objectives %}
## Objectives
{% for obj in page.objectives %}
- {{ obj }}
{% endfor %}
{% endif %}

{% if page.methodology %}
## Methodology
{% for m in page.methodology %}
**{{ m.title }}:**  
{{ m.description }}

{% endfor %}
{% endif %}

{% if page.timeline %}
## Timeline
{% for t in page.timeline %}
- {{ t }}
{% endfor %}
{% endif %}

{% if page.expected_outcomes %}
## Expected Outcomes
{% for e in page.expected_outcomes %}
- {{ e }}
{% endfor %}
{% endif %}