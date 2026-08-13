---
author_profile: true
toc: true
toc_sticky: true
date: 2026-08-13
title: "Evidence-Grounded and Uncertainty-Aware Vision-Language Models for Reliable Chest X-Ray Interpretation and Report Generation"
permalink: /vacancies/evidence-grounded-uncertainty-aware-vlm-chest-xray/
supervisory_team:
  - name: "Dr. Nasser Matoorianpour"
    link: "https://www.uwl.ac.uk/staff/nasser-matoorianpour"
  - name: "Dr. Sama Aleshaiker"
    link: "https://www.uwl.ac.uk/staff/sama-aleshaiker"
  - name: "Dr. Eman Alajrami"
    link: "https://www.uwl.ac.uk/staff/eman-alajrami"
project_description:
  intro: >
    Vision-language models (VLMs) show strong potential for automated chest X-ray interpretation and radiology report generation. However, their reliability remains limited by hallucinated findings, incorrect localisation, poor confidence calibration, and reduced robustness across datasets and rare abnormalities. 
    This PhD project will develop an evidence-grounded and uncertainty-aware VLM framework that links generated findings to relevant image regions and uses uncertainty estimates to identify and control unreliable predictions. 
    The research will focus on improving factual reliability, localisation accuracy, uncertainty calibration, and generalisability in AI-assisted chest X-ray interpretation and report generation.

  aims:
    - "To develop an evidence-grounded and uncertainty-aware vision-language framework for chest X-ray interpretation and report generation, with improved factual reliability, localisation accuracy, uncertainty calibration, and robustness across different datasets."

  objectives:
    - "Develop methods for spatially grounding radiological findings within chest X-ray images."
    - "Develop a VLM-based framework that links generated report statements to corresponding visual evidence."
    - "Investigate uncertainty estimation and calibration at the level of individual clinical findings."
    - "Develop mechanisms for detecting, flagging, revising, or suppressing unsupported or unreliable generated findings."
    - "Evaluate the proposed framework for factual accuracy, hallucination reduction, generalisability, and reliability."
    - "Investigate performance across common and rare thoracic abnormalities and under cross-dataset distribution shifts."

  methodology:
    - "Baseline Development and Benchmarking: Existing chest X-ray classification, localisation, segmentation, and VLM-based report-generation approaches will be implemented or reproduced to establish baseline performance."
    - "Visual Evidence Grounding: Methods will be developed to identify clinically relevant anatomical or pathological regions and associate these regions with corresponding clinical findings."
    - "Evidence-Grounded Report Generation: Spatially grounded information will be integrated into a medical VLM so that report generation is conditioned on both global image information and relevant local visual evidence."
    - "Uncertainty-Aware Hallucination Control: Uncertainty will be combined with visual grounding to determine whether generated findings are sufficiently supported by the image."
    - "Evaluation and Generalisation: The complete framework will be compared with baseline and state-of-the-art methods using internal and cross-dataset evaluation, ablation studies, rare-abnormality analysis, and robustness testing."

  timeline:
    - title: "Year 1"
      task: "Literature review, dataset selection and preparation, implementation of baseline methods, benchmarking, and initial development of visual grounding approaches."
    - title: "Year 2"
      task: "Development of the evidence-grounded VLM framework, region-to-finding alignment methods, uncertainty estimation, and hallucination-control mechanisms."
    - title: "Year 3"
      task: "Cross-dataset evaluation, rare-abnormality and robustness analysis, comprehensive ablation studies, comparison with state-of-the-art methods, publications, and thesis preparation."

  expected_outcomes:
    - "A novel evidence-grounded VLM framework for reliable chest X-ray interpretation and report generation."
    - "A finding-level uncertainty and hallucination-control mechanism for identifying and managing unsupported clinical statements."
    - "A comprehensive evaluation of robustness, factual reliability, and generalisation across publicly available chest X-ray datasets."
    - "Improved alignment between generated clinical findings and supporting visual evidence."
    - "Reproducible research outputs contributing to trustworthy AI in medical imaging."
    - "Peer-reviewed publications contributing to research in medical imaging, computer vision, vision-language models, and trustworthy AI."

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