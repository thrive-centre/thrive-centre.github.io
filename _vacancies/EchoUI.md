---
layout: posts
toc: true
toc_sticky: true
author_profile: true
date: 2025-09-17
title: "Designing Adaptive and Explainable User Interfaces for Real-Time AI-Guided Echocardiography"
permalink: /vacancies/EchoUI/
supervisory_team:
  - name: "Professor Massoud Zolgharni"
    link: "https://www.uwl.ac.uk/staff/massoud-zolgharni"
  - name: "Professor Darrel Francis"
    link: "https://www.imperial.ac.uk/people/d.francis"
project_description:
  background: |
    Echocardiography’s diagnostic reliability hinges on image quality, which remains highly operator-dependent. 
    While AI guidance systems can assist image acquisition, existing UIs are often static, non-personalized, 
    and lack explainability—limiting trust and long-term skill development.
  research_questions:
    - "How can adaptive user interfaces improve AI guidance for users of varying expertise?"
    - "What explainable AI (XAI) features foster trust, learning, and autonomy in clinical workflows?"
    - "How do adaptive and explainable UIs compare with conventional static systems in usability, performance, and user experience?"
  aims: 
    - "Design, prototype, and evaluate adaptive and explainable UIs for AI-based real-time image quality feedback in echocardiography."
  objectives:
    - title: "User-Centered Requirements"
      steps:
        - "Define user requirements through interviews with clinicians across skill levels."
    - title: "Prototype Development"
      steps:
        - "Design interface prototypes integrating adaptive logic and explainable feedback."
    - title: "Evaluation"
      steps:
        - "Evaluate performance and usability through controlled simulation-based experiments."
  methodology:
    - "Year 1: Requirements gathering via literature review and clinician interviews."
    - "Year 2: Develop interactive UI prototypes with adaptive/XAI features; conduct formative usability tests."
    - "Year 3: Run a comparative evaluation using a high-fidelity echo simulator, with novice to expert users."
    - "Analyze trust, task performance, skill perception, and usability using mixed methods."
  clinical_partners:
    - "Imperial College London – National Heart and Lung Institute"
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
