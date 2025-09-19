---
layout: posts
toc: true
toc_sticky: true
author_profile: true
date: 2025-09-17
title: "Integrative AI for Medical Diagnosis: Enhancing Interpretation through Text-Image Fusion"
permalink: /vacancies/echo_text_image_fusion/
supervisory_team:
  - name: "Dr. Nasim Dadashi"
    link: "https://www.uwl.ac.uk/staff/nasim-dadashi-serej"
project_description:
  intro: |
    Medical diagnosis is a complex process that relies on a combination of clinical expertise, diagnostic tests, and patient information. 
    However, the current diagnostic approach faces several challenges, including variability in interpretations, limitations of traditional methods, and the increasing volume of medical data.
    
    Integrative AI has emerged as a promising approach to address these challenges and revolutionise the way diseases are diagnosed and treated.
  background: |
    Integrative AI for diagnosis utilises artificial intelligence (AI) to combine information from multiple sources, including text, images, and electronic health records (EHRs), to provide a more comprehensive and accurate diagnosis. 
    
    This approach has the potential to overcome the limitations of traditional methods and improve patient care.
  research_questions:
    - "How can immersive AI techniques simulate realistic medical diagnostic environments?"
    - "What levels of realism and interactivity are necessary to foster clinical competence?"
    - "How can text-image fusion enhance diagnostic interpretation?"
  aims:
    - "Develop and evaluate integrative AI models for diagnosis, focusing on text-image fusion."
  objectives:
    - title: "Text-Image Fusion"
      steps:
        - "Develop novel text-image fusion techniques for medical diagnosis."
        - "Evaluate fusion models vs. traditional methods."
    - title: "Clinical Impact"
      steps:
        - "Investigate the effect of text-image fusion on decision-making and outcomes."
        - "Design trials to test real-world effectiveness."
  case_study: |
    Echocardiography will serve as a primary case study, given its importance in diagnosing heart conditions. 
    The project benefits from collaboration with clinical partners, providing expertise and access to extensive patient datasets. 
    Other medical applications may also be explored where relevant.
  candidate_profile: |
    - Strong background in computer science, machine learning, or related field.  
    - Solid programming skills.  
    - Analytical ability, problem-solving, and good communication.  
  further_info: |
    This PhD offers access to state-of-the-art facilities, collaboration opportunities with leading researchers, a stipend, and support for publications and conferences.
  application_details: |
    Submit a CV and cover letter outlining research interests and motivation.  
    Shortlisted candidates will be invited for interview.  
    **Start dates:** January, May, and September each academic year.  
    **Duration:** 3 years.
contact:
  text: "Dr. Nasim Dadashi"
  link: "https://www.uwl.ac.uk/staff/nasim-dadashi-serej"
---
{% if page.supervisory_team %}
## Principal Supervisor
{% for s in page.supervisory_team %}
- **[{{ s.name }}]({{ s.link }})**
{% endfor %}
{% endif %}

{% if page.project_description %}
## Introduction
{{ page.project_description.intro }}

## Background
{{ page.project_description.background }}

## Research Questions
{% for q in page.project_description.research_questions %}
- {{ q }}
{% endfor %}

## Aim
{% for a in page.project_description.aims %}
- {{ a }}
{% endfor %}

## Objectives
{% for obj in page.project_description.objectives %}
- **{{ obj.title }}**
  {% for step in obj.steps %}
  - {{ step }}
  {% endfor %}
{% endfor %}

## Potential Case Study
{{ page.project_description.case_study }}

## Candidate Profile
{{ page.project_description.candidate_profile }}

## Further Information
{{ page.project_description.further_info }}

## Application Details
{{ page.project_description.application_details }}
{% endif %}

{% if page.contact %}
## Contact
[{{ page.contact.text }}]({{ page.contact.link }})
{% endif %}
