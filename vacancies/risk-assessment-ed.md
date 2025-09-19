---
layout: posts
toc: true
toc_sticky: true
author_profile: true
date: 2025-09-17
title: "AI for Risk Assessment in Emergency Department Presentations"
permalink: /vacancies/risk-assessment-ed/
supervisory_team:
  - name: "Professor Massoud Zolgharni"
    link: "https://www.uwl.ac.uk/staff/massoud-zolgharni"
collaborators:
  - name: "Dr. Naznin Alaei Faradonbeh – Consultant in Emergency Medicine"
    link: "https://orcid.org/0000-0003-4829-5154"
project_description:
  intro: "The emergency department (ED) is a high-pressure, resource-limited environment that manages a wide array of acute presentations, from trauma and cardiac complaints to sepsis and neurological deficits. Accurate and timely risk stratification is vital to prioritize care, allocate resources, and improve outcomes. However, clinical decision-making in the ED often relies on subjective judgment and may lead to diagnostic delays, variability in care, and inappropriate resource utilization."
  background: "Artificial intelligence (AI) offers a transformative opportunity to enhance risk assessment by uncovering hidden patterns in complex and high-volume clinical data. This research project aims to develop and validate AI-powered decision support tools to improve the risk stratification of patients across a spectrum of ED presentations. By leveraging large-scale, multi-institutional datasets, we will build models that guide clinicians in making informed, timely decisions."
  aim: "To develop and evaluate AI-driven diagnostic support systems that stratify risk and predict appropriate clinical pathways for diverse patient presentations in the emergency department."
  objectives:
    - "Use MIMIC-IV-ED, MC-MED, and HCUP NEDS datasets; assess dataset suitability and standardize data across sources."
    - "Develop models for risk stratification and outcome prediction, including supervised learning, time-to-event models, and clustering."
    - "Evaluate model discrimination (AUROC), calibration, and benchmark against existing risk scores and physician judgment."
    - "Publish results, present at conferences, and plan for EHR integration."
  datasets:
    - "MIMIC-IV-ED: 425,000+ ED visits from Beth Israel Deaconess Medical Center."
    - "MC-MED: 118,385 ED visits with physiological waveforms (Stanford, 2020–2022)."
    - "HCUP NEDS: 30M+ annual ED records across 950+ hospitals."
  research_methods:
    - "Retrospective cohort analysis."
    - "Machine learning model training and validation."
    - "Comparative effectiveness and clinical utility analysis."
  dataset_curation: "As part of this PhD project, a customised benchmark dataset, RAPIDS (Risk Assessment and Prediction in Emergency Department Settings), will be curated. It will include prediction targets such as ICU transfer, in-ED mortality, and prolonged length of stay. Input features will align with real-world decision-making processes, creating a benchmark that enables AI systems to be evaluated not only on predictive accuracy, but also on clinical utility and time-efficiency."
  timeline:
    - "Year 1: Literature review, data acquisition and cleaning."
    - "Year 2: Model development and internal validation."
    - "Year 3: Clinical testing, dissemination, thesis completion."
  expected_outcomes:
    - "AI models for robust ED risk stratification."
    - "Benchmarking against clinical scores."
    - "Recommendations for integration into ED workflows."
---

{% if page.supervisory_team %}
## Supervisory Team
{% for s in page.supervisory_team %}
- **[{{ s.name }}]({{ s.link }})**
{% endfor %}
{% endif %}

{% if page.collaborators %}
## Collaborators
{% for c in page.collaborators %}
- **[{{ c.name }}]({{ c.link }})**
{% endfor %}
{% endif %}

{% if page.project_description %}
## Project Description
{{ page.project_description.intro }}

{{ page.project_description.background }}

### Aim
{{ page.project_description.aim }}

### Objectives
{% for o in page.project_description.objectives %}
- {{ o }}
{% endfor %}

### Potential Datasets
{% for d in page.project_description.datasets %}
- {{ d }}
{% endfor %}

### Research Methods
{% for rm in page.project_description.research_methods %}
- {{ rm }}
{% endfor %}

### Planned Dataset Curation: RAPIDS
{{ page.project_description.dataset_curation }}

### Timeline
{% for t in page.project_description.timeline %}
- {{ t }}
{% endfor %}

### Expected Outcomes
{% for eo in page.project_description.expected_outcomes %}
- {{ eo }}
{% endfor %}
{% endif %}

---

**Contact:** [Professor Massoud Zolgharni]({{ page.supervisory_team[0].link }})
