---
toc: true
toc_sticky: true
author_profile: true
date: 2025-09-17
title: "Investigation of Ocular Implications in Alport Syndrome (kidney disorder) through Deep Learning"
permalink: /vacancies/alport-syndrome/
supervisory_team:
  - name: "Dr. Nasim Dadashi"
    link: "https://www.uwl.ac.uk/staff/nasim-dadashi-serej"
  - name: "Dr. Raheleh Kafieh"
    link: "https://www.durham.ac.uk/staff/raheleh-kafieh/"
project_description:
  intro: "In this collaborative project focusing on Alport syndrome (AS), we focus on the interplay between this rare genetic disorder, kidney function, and the eyes. AS poses significant risks to vision, necessitating a comprehensive understanding of its impact on the retina."
  background: "By designing state-of-the-art automatic techniques applied to in vivo 3D retinal imaging within one of the largest AS cohorts to date, our goal is to unveil the complete spectrum of retinal alterations associated with this condition, aided by AI models. This insight holds significant promise for early detection, disease monitoring, and treatment strategies, ultimately enhancing patient care and outcomes."
candidates_profile:
  - title: "Technical Background"
    description: "Strong background in machine learning and computer vision, with experience in frameworks such as PyTorch or TensorFlow."
  - title: "Medical Imaging"
    description: "Familiarity with medical imaging analysis."
  - title: "Clinical Interest"
    description: "Interest in digital health innovation and personalized medicine, with an emphasis on real-world clinical impact."
---

{% if page.supervisory_team %}
## Supervisory Team
{% for s in page.supervisory_team %}
{% if s.name %}
- {% if s.link %}**[{{ s.name }}]({{ s.link }})**{% else %}**{{ s.name }}**{% endif %}
{% endif %}
{% endfor %}
{% endif %}

{% if page.project_description %}
## Project Description
{% if page.project_description.intro %}{{ page.project_description.intro }}{% endif %}

{% if page.project_description.background %}{{ page.project_description.background }}{% endif %}
{% endif %}

{% if page.candidates_profile and page.candidates_profile.size > 0 %}
## Candidate Profile
{% for cp in page.candidates_profile %}
{% if cp.title and cp.description %}
- **{{ cp.title }}:** {{ cp.description }}
{% endif %}
{% endfor %}
{% endif %}
