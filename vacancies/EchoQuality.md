---
layout: posts
toc: true
toc_sticky: true
author_profile: ture
date: 2025-09-17
title: "AI-Driven Assessment of Echocardiographic Image Quality"
permalink: /vacancies/EchoQuality/
supervisory_team:
  - name: "Professor Massoud Zolgharni"
    link: "https://www.uwl.ac.uk/staff/massoud-zolgharni"
  - name: "Professor Darrel Francis"
    link: "https://www.imperial.ac.uk/people/d.francis"
project_description:
  background: |
    Echocardiographic image quality plays a critical role in the reliability and accuracy of clinical interpretation. 
    However, image acquisition is highly operator-dependent, and suboptimal image quality can compromise diagnostic outcomes.  

    There is an unmet need for automated, real-time assessment tools that can evaluate and flag poor-quality echocardiographic images at the point of acquisition.
  research_questions:
    - "Can machine learning algorithms be trained to assess image quality in echocardiography automatically?"
    - "What visual features or quality metrics correlate most strongly with expert evaluations?"
    - "How can automated image quality scoring be integrated into clinical workflows for immediate feedback?"
  aims: 
    - "Develop an AI model capable of automatically assessing echocardiographic image quality."
  objectives:
    - title: "Define Metrics"
      steps:
        - "Define clinical and visual metrics for image quality with expert input."
    - title: "Dataset Development"
      steps:
        - "Develop a quality-annotated dataset based on expert reviews."
    - title: "Model Development"
      steps:
        - "Train and evaluate deep learning models to classify and score image quality."
    - title: "Integration"
      steps:
        - "Integrate quality assessment with downstream diagnostic pipelines."
  methodology:
    - "Collaborate with clinical experts to define grading criteria and label datasets."
    - "Apply convolutional neural networks (CNNs) and attention-based models to evaluate static and video-mode echo data."
    - "Benchmark model performance against expert-level scoring."
    - "Perform ablation studies to identify critical image features."
  clinical_partners:
    - "Imperial College London – School of Medicine"
contact:
  text: "Professor Massoud Zolgharni"
  link: "https://www.uwl.ac.uk/staff/massoud-zolgharni"
---

{% if page.supervisory_team %}
## Supervisory Team
{% for s in page.supervisory_team %}
- **[{{ s.name }}]({{ s.link }})**
{% endfor %}
{% endif %}

{% if page.project_description %}
## Background
{{ page.project_description.background }}

{% if page.project_description.research_questions %}
### Research Questions
{% for q in page.project_description.research_questions %}
- {{ q }}
{% endfor %}
{% endif %}

{% if page.project_description.aims %}
### Aim
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

{% if page.project_description.clinical_partners %}
## Clinical Partners
{% for c in page.project_description.clinical_partners %}
- {{ c }}
{% endfor %}
{% endif %}
{% endif %}

{% if page.contact %}
## Contact
{% if page.contact.link %}[{{ page.contact.text }}]({{ page.contact.link }}){% else %}{{ page.contact.text }}{% endif %}
{% endif %}
