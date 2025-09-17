---
layout: posts
toc: true
toc_sticky: true
author_profile: false
date: 2025-09-17
title: "AI for Risk Assessment in Emergency Department Presentations"
collaborators:
  - name: "Dr. Naznin Alaei Faradonbeh"
    link: "https://orcid.org/0000-0003-4829-5154"
    intro: Consultant in Emergency Medicine
    text: The student will work closely with Dr. Faradonbeh to ensure clinical relevance and applicability of the AI models developed throughout the project.
supervisory_team:
  - name: "Professor Massoud Zolgharni"
    link: "https://www.uwl.ac.uk/staff/massoud-zolgharni"
project_description:
  intro: "The emergency department (ED) is a high-pressure, resource-limited environment that manages a wide array of acute presentations, from trauma and cardiac complaints to sepsis and neurological deficits. Accurate and timely risk stratification is vital to prioritize care, allocate resources, and improve outcomes. However, clinical decision-making in the ED often relies on subjective judgment and may lead to diagnostic delays, variability in care, and inappropriate resource utilization."
  background: 
    Artificial intelligence (AI) offers a transformative opportunity to enhance risk assessment by uncovering hidden patterns in complex and high-volume clinical data. This research project aims to develop and validate AI-powered decision support tools to improve the risk stratification of patients across a spectrum of ED presentations. By leveraging large-scale, multi-institutional datasets, we will build models that guide clinicians in making informed, timely decisions.
  research_questions:
    - "How can AI models improve risk stratification accuracy compared to existing clinical scoring systems in emergency department settings?"
    - "What are the key clinical and demographic features that best predict patient outcomes in emergency departments?"
    - "How can AI-driven decision support tools be effectively integrated into existing ED workflows without disrupting clinical practice?"
    - "What is the generalizability of AI models across different hospital systems and patient populations?"
    - "How do AI-based risk assessment tools impact clinical decision-making time and resource allocation in emergency departments?"
  aims:
    - "develop and evaluate AI-driven diagnostic support systems that stratify risk and predict appropriate clinical pathways for diverse patient presentations in the emergency department"
  objectives:
    - title: "Data Acquisition and Preparation"
      steps:
        - "Use MIMIC-IV-ED, MC-MED, and HCUP NEDS datasets"
        - "Assess dataset suitability and standardize data across sources"
        - "Clean, preprocess, and engineer features for analysis"

    - title: "AI Model Development"
      steps: 
        - "Develop models for risk stratification and prediction of outcomes like admission or ICU transfer"
        - "Explore supervised learning, time-to-event models, and unsupervised clustering"
        - "Apply cross-validation, regularization, and sensitivity analysis to enhance robustness"

    - title: "Clinical Validation and Contextualization"
      steps:
        - "Evaluate model discrimination (e.g., AUROC), calibration, and clinical utility"
        - "Benchmark against existing risk scores and physician judgment"
        - "Address generalizability across diverse ED settings"
    - title: "Dissemination and Impact"
      steps:
        - "Publish in high-impact journals"
        - "Present findings at international conferences"
        - "Plan for clinical translation and EHR integration"
  methodology:
    - "Retrospective cohort analysis"
    - "Machine learning model training and validation"
    - "Comparative effectiveness and clinical utility analysis"
  image: "/assets/images/ed-risk-assessment.jpg"
  goals:
    - "Improve diagnostic accuracy"
    - "Enable clinical translation"
potential_datasets:
  - name: "MIMIC-IV-ED"
    description: "Over 425,000 ED visits from 2011-2019 (Beth Israel Deaconess Medical Center)"
  - name: "MC-MED"
    description: "118,385 ED visits with physiological waveforms (Stanford, 2020-2022)"
  - name: "HCUP NEDS"
    description: "30+ million annual ED records across 950+ hospitals"
research_methods:
  - "Supervised learning"
  - "Explainable AI"
planned_dataset_curation: 
  title: "RAPIDS"
  description: 
    - excerpt: "As part of this PhD project, a customised benchmark dataset, RAPIDS (Risk Assessment and Prediction in Emergency Department Settings), will be curated to support the development and evaluation of AI-based risk stratification tools. This dataset will be derived from existing large-scale sources such as MIMIC-IV-ED, MC-MED, and HCUP NEDS."
    - excerpt: "Advised by the clinical partners, the dataset will include clinically relevant prediction targets such as ICU transfer, in-ED mortality, and prolonged length of stay. Input features will be grouped in line with real-world decision-making processes—e.g., lab panels, imaging orders, and triage assessments. The goal is to create a benchmark that enables AI systems to be evaluated not only on predictive accuracy, but also on clinical utility and time-efficiency, supporting their future integration into ED workflows."
timeline:
  - title: "Year 1"
    task: "Literature review, data acquisition and cleaning"
  - title: "Year 2"
    task: "Model development and internal validation"
  - title: "Year 3"
    task: "Clinical testing, dissemination, thesis completion"
expected_outcomes:
  - "AI models for robust ED risk stratification"
  - "Benchmarking against clinical scores"
  - "Recommendations for integration into ED workflows"
candidates_profile:
  - title: "Technical Background"
    description: "Strong foundation in machine learning, data science, or biomedical engineering with programming experience in Python/R"
  - title: "Clinical Interest"
    description: "Genuine interest in healthcare applications and emergency medicine, with willingness to engage with clinical partners"
  - title: "Academic Excellence"
    description: "First-class honours degree or equivalent in computer science, engineering, mathematics, or related field"
contact:
  text: "Professor Massoud Zolgharni"
  link: "mailto:massoud.zolgharni@uwl.ac.uk"
---

{% if page.collaborators %}
## Collaborators
{% for c in page.collaborators %}
- {% if c.link %}**[{{ c.name }}]({{ c.link }})**{% else %}**{{ c.name }}**{% endif %}
  {% if c.intro %}_{{ c.intro }}_{% endif %}
  {% if c.text %}<br/>{{ c.text }}{% endif %}
{% endfor %}
{% endif %}

{% if page.supervisory_team %}
## Supervisory Team
{% for s in page.supervisory_team %}
- {% if s.link %}**[{{ s.name }}]({{ s.link }})**{% else %}**{{ s.name }}**{% endif %}
{% endfor %}
{% endif %}

{% if page.project_description %}
## Project Description

{% if page.project_description.intro %}{{ page.project_description.intro }}{% endif %}

{% if page.project_description.background %}  
{{ page.project_description.background }}  
{% endif %}

{% if page.project_description.research_questions %}
### Research Questions
{% for q in page.project_description.research_questions %}
- {{ q }}
{% endfor %}
{% endif %}

{% if page.project_description.aims %}
### Aims
{% for a in page.project_description.aims %}
- {{ a }}
{% endfor %}
{% endif %}

{% if page.project_description.objectives %}
### Objectives
{% for obj in page.project_description.objectives %}
- **{{ obj.title }}**
  {% for step in obj.steps %}
  - {{ step }}
  {% endfor %}
{% endfor %}
{% endif %}

{% if page.project_description.methodology %}
### Methodology
{% for m in page.project_description.methodology %}
- {{ m }}
{% endfor %}
{% endif %}

{% if page.project_description.image %}
![Project image]({{ page.project_description.image }})
{% endif %}

{% if page.project_description.goals %}
### Research Goals
{% for g in page.project_description.goals %}
- {{ g }}
{% endfor %}
{% endif %}
{% endif %}

{% if page.potential_datasets %}
## Potential Datasets
{% for d in page.potential_datasets %}
- **{{ d.name }}** — {{ d.description }}
{% endfor %}
{% endif %}

{% if page.research_methods %}
## Research Methods
{% for r in page.research_methods %}
- {{ r }}
{% endfor %}
{% endif %}

{% if page.planned_dataset_curation %}
## Planned Dataset Curation: {{ page.planned_dataset_curation.title }}
{% for e in page.planned_dataset_curation.description %}
- {{ e.excerpt }}
{% endfor %}
{% endif %}

{% if page.timeline %}
## Timeline
{% for t in page.timeline %}
- **{{ t.title }}**{% if t.task %}: {{ t.task }}{% endif %}
{% endfor %}
{% endif %}

{% if page.expected_outcomes %}
## Expected Outcomes
{% for o in page.expected_outcomes %}
- {{ o }}
{% endfor %}
{% endif %}

{% if page.candidates_profile %}
## Candidate Profile
{% for cp in page.candidates_profile %}
- **{{ cp.title }}:** {{ cp.description }}
{% endfor %}
{% endif %}

{% if page.contact %}
## Contact
{% if page.contact.link %}[{{ page.contact.text }}]({{ page.contact.link }}){% else %}{{ page.contact.text }}{% endif %}
{% endif %}