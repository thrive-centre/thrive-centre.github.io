---
layout: posts
toc: true
toc_sticky: true
author_profile: true
date: 2025-09-17
title: "AI-Enhanced home-based Optical Coherence Tomography for Eye Care"
permalink: /vacancies/home-oct/
collaborators:
  - name: "School of Computing and Engineering"
    link: "https://www.uwl.ac.uk/study/computing-engineering"
  - name: "Durham University - Department of Engineering"
    link: "https://www.durham.ac.uk/departments/academic/engineering/"
supervisory_team:
  - name: "Dr Nasim Dadashi"
    link: "https://www.uwl.ac.uk/staff/nasim-dadashi-serej"
  - name: "Dr Raheleh Kafieh"
    link: "https://www.durham.ac.uk/staff/raheleh-kafieh/"
project_description:
  intro: "Age-related Macular Degeneration (AMD) is a leading cause of vision loss in individuals over 60 and accounts for more than 50% of blindness registrations in the UK. Globally, 196 million people were affected by AMD in 2020, with numbers expected to rise to 288 million by 2040 due to aging populations. Regular monitoring and treatment, such as intraocular injections, are essential to slow disease progression. However, the current model—frequent in-person hospital visits and manual interpretation of Optical Coherence Tomography (OCT) scans—is resource-intensive and places a considerable burden on elderly patients and healthcare systems."
  background: "This project proposes the development of an AI-enhanced home-based OCT solution. This research aims to create a portable, wearable device capable of acquiring retinal images at home. These images will be analysed using advanced AI models to detect disease progression, enabling timely clinical intervention while reducing the need for frequent hospital visits."
  goals:
    - "Develop robust AI models capable of detecting subtle changes in retinal images captured from home-based OCT devices."
    - "Enhance image quality and diagnostic reliability through data standardisation, noise reduction, and deep learning-based image enhancement."
    - "Improve clinical trust by integrating explainable AI (XAI) methods that provide interpretable insights into AI-driven decisions."
    - "Validate the AI framework using real-world datasets and clinical collaboration to assess accuracy, usability, and regulatory readiness."
candidates_profile:
  - title: "Background"
    description: "Experience with computer vision and deep learning frameworks such as Python, PyTorch, or TensorFlow."
  - title: "Skills"
    description: "Knowledge of image processing techniques, particularly in medical imaging and low-quality data enhancement."
  - title: "Clinical Interest"
    description: "Familiarity with clinical data, biomedical signal analysis, and interest in ophthalmology or healthcare AI."
  - title: "Ethics & Explainability"
    description: "Interest in explainable AI and ethical aspects of medical technology, particularly regarding patient safety and clinical adoption."
---

{% if page.collaborators %}
## Collaborators
{% for c in page.collaborators %}
- **[{{ c.name }}]({{ c.link }})**
{% endfor %}
{% endif %}

{% if page.supervisory_team %}
## Supervisory Team
{% for s in page.supervisory_team %}
- **[{{ s.name }}]({{ s.link }})**
{% endfor %}
{% endif %}

{% if page.project_description %}
## Project Description
{{ page.project_description.intro }}

{{ page.project_description.background }}
{% endif %}

{% if page.project_description.goals %}
### Research Goals
{% for g in page.project_description.goals %}
- {{ g }}
{% endfor %}
{% endif %}

{% if page.candidates_profile %}
## Candidate Profile
{% for cp in page.candidates_profile %}
- **{{ cp.title }}:** {{ cp.description }}
{% endfor %}
{% endif %}
