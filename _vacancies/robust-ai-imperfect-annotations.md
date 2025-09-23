---
author_profile: true
toc: true
toc_sticky: true
date: 2025-09-23
title: "Learning from Imperfect Annotations: Robust and Efficient Deep Learning for Medical Imaging Analysis"
permalink: /vacancies/robust-ai-imperfect-annotations/
supervisory_team:
  - name: "Dr. Eman Alajrami"
    link: ""
project_description:
  intro: >
    This project addresses the critical challenge of imperfect annotations in medical imaging datasets, including scarce labels, weak supervision, and noisy or incorrect annotations. 
    These imperfections significantly limit the development and deployment of robust and generalisable AI models in clinical practice. 
    This PhD project aims to explore novel deep learning techniques that can learn effectively under these imperfect annotation conditions, reducing the dependency on exhaustive expert labelling and improving model trustworthiness. 
    The project will also investigate how these techniques can generalise across different medical imaging modalities and clinical tasks, ensuring broader applicability and real-world impact.
  aims:
    - "To develop robust and annotation-efficient deep learning methods that can handle scarce, weak, and noisy labels in medical imaging datasets and generalise across diverse imaging domains."
  objectives:
    - "Investigate and categorise types of annotation imperfections (e.g., label noise, sparsity, uncertainty) common in medical imaging."
    - "Develop deep learning models that are resilient to label noise and capable of learning from unreliable or conflicting annotations."
    - "Explore annotation-efficient learning strategies such as self-supervised learning, one/few-shot learning, and active learning."
    - "Ensure generalizability of the proposed methods across different medical imaging modalities (e.g., radiology, pathology, dermatology) and tasks (e.g., classification, segmentation, detection)."
    - "Collaborate with clinical experts to validate the practicality and reliability of the developed solutions."
  methodology:
    - "Noise-Robust Learning: noise modelling, loss correction, and confident learning."
    - "Self-Supervised & Semi-Supervised Learning: contrastive learning, pretext tasks."
    - "Few-Shot & One-Shot Learning: metric learning, prototype-based networks."
    - "Active Learning: selecting informative samples for annotation."
    - "Cross-Domain Validation: evaluating across modalities and tasks."
    - "Evaluation: benchmarking on public and clinical datasets with expert validation."
  timeline:
    - title: "Year 1"
      task: "Literature review, data acquisition and cleaning"
    - title: "Year 2"
      task: "Model development and internal validation"
    - title: "Year 3"
      task: "Clinical testing, dissemination, thesis completion"
  expected_outcomes:
    - "Reduce annotation burden in medical imaging, lowering costs and time for dataset creation."
    - "Enable scalable and accessible AI tools that can be deployed in real-world clinical settings."
    - "Develop robust deep learning models resistant to noisy and limited data."
    - "Accelerate safe AI deployment in healthcare."
    - "Create generalisable models across multiple medical domains."
contact:
  text: "Dr. Eman Alajrami"
  link: ""
---

{% if page.supervisory_team and page.supervisory_team.size > 0 %}
## Supervisory Team
{% for s in page.supervisory_team %}
- **[{{ s.name }}]({{ s.link }})**
{% endfor %}
{% endif %}

{% if page.project_description %}
{% if page.project_description.intro and page.project_description.intro != blank %}
## Introduction
{{ page.project_description.intro }}
{% endif %}

{% if page.project_description.aims and page.project_description.aims.size > 0 %}
## Aim
{% for a in page.project_description.aims %}
- {{ a }}
{% endfor %}
{% endif %}

{% if page.project_description.objectives and page.project_description.objectives.size > 0 %}
## Objectives
{% for obj in page.project_description.objectives %}
- {{ obj }}
{% endfor %}
{% endif %}

{% if page.project_description.methodology and page.project_description.methodology.size > 0 %}
## Methodology
{% for m in page.project_description.methodology %}
- {{ m }}
{% endfor %}
{% endif %}

{% if page.project_description.timeline and page.project_description.timeline.size > 0 %}
## Timeline
{% for t in page.project_description.timeline %}
- **{{ t.title }}**: {{ t.task }}
{% endfor %}
{% endif %}

{% if page.project_description.expected_outcomes and page.project_description.expected_outcomes.size > 0 %}
## Expected Outcomes
{% for o in page.project_description.expected_outcomes %}
- {{ o }}
{% endfor %}
{% endif %}
{% endif %}

{% if page.contact %}
## Contact
{% if page.contact.link and page.contact.link != blank %}[{{ page.contact.text }}]({{ page.contact.link }}){% else %}{{ page.contact.text }}{% endif %}
{% endif %}


<!-- {% if page.supervisory_team %}
## Supervisory Team
{% for s in page.supervisory_team %}
- **[{{ s.name }}]({{ s.link }})**
{% endfor %}
{% endif %}

{% if page.project_description %}
## Background
{{ page.project_description.background }}

### Research Questions
{% for q in page.project_description.research_questions %}
- {{ q }}
{% endfor %}

### Aim
{% for a in page.project_description.aims %}
- {{ a }}
{% endfor %}

### Objectives
{% for obj in page.project_description.objectives %}
- **{{ obj.title }}**
  {% for step in obj.steps %}
  - {{ step }}
  {% endfor %}
{% endfor %}

### Methodology
{% for m in page.project_description.methodology %}
- {{ m }}
{% endfor %}

## Clinical Partners
{% for c in page.project_description.clinical_partners %}
- {{ c }}
{% endfor %}
{% endif %}


{% if page.contact %}
## Contact
{% if page.contact.link %}[{{ page.contact.text }}]({{ page.contact.link }}){% else %}{{ page.contact.text }}{% endif %}
{% endif %} -->

