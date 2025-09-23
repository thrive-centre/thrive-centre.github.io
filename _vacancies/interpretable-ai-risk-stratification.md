---
author_profile: true
toc: true
toc_sticky: true
date: 2025-09-23
title: "Interpretable AI Models for Clinical Risk Stratification in Healthcare"
permalink: /vacancies/interpretable-ai-risk-stratification/
supervisory_team:
  - name: "Dr. Nasim Dadashi Serej"
    link: "https://www.uwl.ac.uk/staff/nasim-dadashi-serej"
project_description:
  intro: >
    Artificial intelligence (AI) offers a transformative opportunity to improve patient care in healthcare settings by uncovering subtle and complex patterns in high volume clinical data. However, clinical adoption remains limited, in part due to the lack of transparency in model decision-making and the complexity of features used. 
    This research project aims to develop interpretable, feature-aware AI decision support tools for risk stratification across common conditions in general healthcare. By leveraging multimodal data including structured clinical records, lab results, and imaging summaries we seek to support healthcare professionals in making informed, timely, and equitable decisions at key points in the care pathway. 
    The project will focus not only on model performance but also on the clinical relevance and interpretability of features used in prediction.
  aims:
    - "To develop and evaluate transparent AI models for clinical risk stratification that highlight the importance of input features and support evidence-based decision-making in healthcare applications with defined case studies."
  objectives:
    - title: "Data Acquisition and Integration"
      steps:
        - "Identify and assess suitability of case studies and large-scale datasets."
        - "Harmonise data formats using standard ontologies."
        - "Engineer clinically relevant features across temporal (time series), categorical, and textual data sources."
    - title: "Feature Engineering and Selection"
      steps:
        - "Apply domain-guided feature engineering using demographic, diagnostic, and treatment data."
        - "Use techniques like mutual information, recursive feature elimination, SHAP-based ranking, and Boruta to identify key predictors."
        - "Group features based on clinical relevance (e.g., comorbidities, prior utilisation, lab indicators)."
        - "Evaluate model performance with full vs. reduced feature sets to determine trade-offs."
    - title: "AI Model Development and Evaluation"
      steps:
        - "Develop predictive models for key clinical outcomes."
        - "Explore multimodal and ensemble learning approaches combining tabular, text, and signal data."
        - "Apply robust validation strategies, including temporal cross-validation and external dataset testing."
    - title: "Interpretability and Clinical Utility"
      steps:
        - "Use explainable AI models to interpret model outputs."
        - "Visualise feature contributions at both global and individual-patient levels."
        - "Compare with existing clinical scores and decision tools."
        - "Engage with clinical advisors to assess feature interpretability and workflow integration potential."
  deliverables:
    - "AI models optimised for clinical relevance, interpretability, and performance."
    - "Feature importance rankings with clinical context."
    - "Evidence for streamlined clinical risk scoring based on minimal, high-impact features."
    - "Recommendations for integrating interpretable AI into NHS care pathways."
contact:
  text: "Dr. Nasim Dadashi Serej"
  link: "https://www.uwl.ac.uk/staff/nasim-dadashi-serej"
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

<!-- ### Methodology
{% for m in page.project_description.methodology %}
- {{ m }}
{% endfor %}

## Clinical Partners
{% for c in page.project_description.clinical_partners %}
- {{ c }}
{% endfor %}
{% endif %} -->


{% if page.contact %}
## Contact
{% if page.contact.link %}[{{ page.contact.text }}]({{ page.contact.link }}){% else %}{{ page.contact.text }}{% endif %}
{% endif %}

