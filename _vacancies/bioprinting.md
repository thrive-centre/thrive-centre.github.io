---
toc: true
toc_sticky: true
author_profile: true
date: 2025-09-19
title: "3D Modelling Human Brain Tissue and Robotically-Guided Drug-Loaded Click Hydrogels Delivery for the Study of Neural Tissue Repair"
permalink: /vacancies/bioprinting/
supervisory_team:
  - name: "Dr Hanieh Khalili"
    link: "https://www.uwl.ac.uk/staff/hanieh-khalili"
  - name: "Dr Gianluca Cidonio"
    link: "https://research.uniroma1.it/researcher/c42932fe91c8233865615801190691540f2bf4b8c61eb995abd1b3ae"
  - name: "Professor Massoud Zolgharni"
    link: "https://www.uwl.ac.uk/staff/massoud-zolgharni"
project_description:
  intro: "This multi-disciplinary PhD project is intended to unravel new approaches for the AI-guided delivery of therapeutics to the brain tissue. Due to the impossibility of assessing the safety and efficacy of therapeutics for brain diseases (e.g., Alzheimer’s disease) and trauma (e.g., accidental damages), there is an increasing need for the fabrication of brain tissue replicas that might emulate the physiological conditions within the human body."
  background: "The engineer of a three-dimensional patient-specific brain construct is attractive, particularly for the possible assessment of functionality for delivery methodologies such as hydrogel-mediated injections. The main aim of this PhD project is to address an urgent unmet clinical need to develop a novel 3D bioprinted brain construct to be used as platform for delivery testing due to AI-driven injections of click hydrogels loaded with therapeutics and the study of release, localisation, safety and efficacy."
  methodology:
    - "Fabrication of click hydrogel in Dr Khalili’s research lab (Biotherapeutic Drug Development)"
    - "AI-guided robotic-assisted injection system in Prof Zolgharni’s lab (IntSaV)"
    - "Collaboration with Dr Cidonio’s Nanotechnologies for Neurosciences (N4N) group at Sapienza University of Rome"
  image: "/assets/images/vacancies/bioprinting/GA.jpg"
funding: "A fully funded PhD studentship (all tuition fees paid) is available for UK and International students. Scholars may contribute to teaching or research up to six hours per week."
application:
  - "Apply via [Jobs.ac.uk](https://www.jobs.ac.uk/job/DMA511/the-vice-chancellors-phd-scholarships)"
  - "Or via [UWL PhD Biomedical Science](https://www.uwl.ac.uk/course/research/biomedical-science?start=1314&option=33)"
  - "State the project title in your application."
requirements:
  - "MPharm or MSc degree (or equivalent) in Pharmaceutical Science, Pharmacy, Chemistry, Bioengineering, or AI/ML."
  - "First-class or 2:1 undergraduate degree (UK standard or equivalent)."
  - "Fluency in English (IELTS 7.0 overall, minimum 6.5 in each component if not native)."
  - "Excellent communication and organisational skills."
  - "Strong academic track record and practical skills (published papers desirable)."
expected_outcomes:
  - "3D bioprinted brain tissue model for therapeutic testing."
  - "AI-guided robotic injection framework."
  - "Publications and collaborations in neural tissue engineering and AI-driven therapeutics."
contact:
  text: "Dr Hanieh Khalili"
  link: "mailto:Hanieh.khalili@uwl.ac.uk"
---

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

{% if page.project_description.methodology %}
### Methodology
{% for m in page.project_description.methodology %}
- {{ m }}
{% endfor %}
{% endif %}

{% if page.project_description.image %}
![Project image]({{ page.project_description.image }})
{% endif %}
{% endif %}

{% if page.funding %}
## Funding
{{ page.funding }}
{% endif %}

{% if page.application %}
## How to Apply
{% for a in page.application %}
- {{ a }}
{% endfor %}
{% endif %}

{% if page.requirements %}
## Requirements
{% for r in page.requirements %}
- {{ r }}
{% endfor %}
{% endif %}

{% if page.expected_outcomes %}
## Expected Outcomes
{% for o in page.expected_outcomes %}
- {{ o }}
{% endfor %}
{% endif %}

{% if page.contact %}
## Contact
[{{ page.contact.text }}]({{ page.contact.link }})
{% endif %}
