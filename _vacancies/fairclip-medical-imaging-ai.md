---
author_profile: true
toc: true
toc_sticky: true
date: 2026-07-12
title: "Towards Fair Medical Imaging AI: FairCLIP – A Fairness-Aware Contrastive Pretraining Framework for Medical Imaging Foundation Models"
permalink: /vacancies/fairclip-medical-imaging-ai/

supervisory_team:
  - name: "Dr. Eman Alajrami"
    link: "https://www.uwl.ac.uk/staff/eman-alajrami"
  - name: "Professor Massoud Zolgharni"
    link: "https://www.uwl.ac.uk/staff/massoud-zolgharni"

project_description:
  intro: >
    Medical imaging foundation models are increasingly being adopted across radiography, computed tomography (CT), magnetic resonance imaging (MRI), echocardiography, and other clinical imaging domains. Despite their impressive performance, growing evidence suggests that these models can exhibit demographic and subgroup biases, leading to unequal performance across different patient populations. This PhD project aims to develop **FairCLIP**, a fairness-aware contrastive pretraining framework that mitigates bias during representation learning rather than after model training. By investigating how demographic information is encoded within foundation models, the research seeks to develop equitable, robust, and clinically reliable AI systems for medical imaging. The project will primarily focus on either echocardiography or chest X-ray imaging, with additional datasets used to evaluate generalisability across imaging modalities and clinical applications.

  aims:
    - "To develop and validate a fairness-aware contrastive pretraining framework that reduces subgroup performance disparities while preserving clinical accuracy, robustness, and generalisability across diverse medical imaging tasks and patient populations."

  objectives:
    - "Investigate how demographic and subgroup information is encoded during contrastive pretraining of medical imaging foundation models."
    - "Benchmark existing fairness mitigation strategies at the data, representation, and post-processing levels."
    - "Design, implement, and evaluate the FairCLIP fairness-aware contrastive pretraining framework."
    - "Assess fairness-performance trade-offs across different clinical tasks and patient populations."
    - "Evaluate the transferability of FairCLIP across institutions, imaging modalities, model architectures, and downstream applications."
    - "Investigate how fairness-aware pretraining influences model interpretability and clinical decision-making."

  methodology:
    - "Literature Review & Scoping: Review foundation models, contrastive learning, and AI fairness to define the research scope, fairness criteria, and evaluation framework."
    - "Data & Baseline Development: Curate suitable public and institutional datasets, analyse subgroup representation and metadata, and establish baseline foundation models."
    - "Bias Analysis & Benchmarking: Perform embedding analysis, layer-wise probing, subgroup evaluation, and interpretability studies to identify sources of demographic bias and benchmark existing fairness interventions."
    - "FairCLIP Development: Design, implement, and evaluate a fairness-aware contrastive pretraining framework with comprehensive ablation studies and fairness-performance analysis."
    - "Generalisation & Validation: Validate FairCLIP across institutions, patient populations, imaging modalities, and downstream clinical tasks while assessing interpretability and clinical utility."

  timeline:
    - title: "Year 1"
      task: "Literature review, dataset selection, baseline model development, and initial bias analysis."
    - title: "Year 2"
      task: "Design, implementation, benchmarking, and evaluation of the FairCLIP framework."
    - title: "Year 3"
      task: "Cross-domain validation, interpretability analysis, publications, thesis writing, and dissemination."

  expected_outcomes:
    - "Development of FairCLIP, a fairness-aware contrastive pretraining framework for medical imaging foundation models."
    - "Reduction of subgroup performance disparities across patient populations, healthcare institutions, and imaging domains."
    - "Improved generalisation of fairness-aware representations across unseen datasets, modalities, model architectures, and clinical tasks."
    - "New insights into how demographic and subgroup information is encoded within medical imaging representation spaces."
    - "An open and reproducible benchmarking framework for evaluating fairness in medical imaging AI."
    - "High-quality peer-reviewed publications in medical imaging, computer vision, trustworthy AI, and healthcare AI."

contact:
  text: "Dr. Eman Alajrami"
  link: "https://www.uwl.ac.uk/staff/eman-alajrami"
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

