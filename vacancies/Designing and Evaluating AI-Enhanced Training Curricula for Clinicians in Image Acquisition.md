---
layout: posts
toc: true
toc_sticky: true
author_profile: false
date: 2025-09-17
title: "Designing and Evaluating AI-Enhanced Training Curricula for Clinicians in Image Acquisition"
permalink: /vacancies/Designing and Evaluating AI-Enhanced Training Curricula for Clinicians in Image Acquisition/
collaborators:
  - text: "This project will involve close collaboration with clinical partners to select and develop case studies based on feasibility and clinical relevance."
supervisory_team:
  - text: "The successful candidate will be supervised by a multidisciplinary team from THRIVE, with expertise in AI, medical imaging, and medical education."
project_description:
  intro: "This three-year PhD project will address the significant bottleneck in scaling ultrasound training, which is currently a highly operator-dependent and resource-intensive process. Leveraging existing AI technologies from our lab, the research will shift the focus from algorithm development to the pedagogical science of teaching with AI. The core work involves designing, implementing, and evaluating a structured teaching curriculum that integrates AI-guided feedback to accelerate training for novice clinicians. The project will use controlled studies to compare the effectiveness of AI-enhanced courses against traditional expert-led training, and will develop objective competency frameworks using AI-derived metrics. This research has the potential to provide a scalable model for medical education, particularly in low-resource settings."
candidates_profile:
  - title: "Background"
    description: "A background in one of computer science, biomedical engineering, or related fields."
  - title: "Interests"
    description: "An interest in clinical training, AI in healthcare, or clinical education innovation."
  - title: "Skills"
    description: "Strong analytical and organisational skills."
  - title: "Collaboration"
    description: "Ability to work collaboratively with clinicians, educators, and technical teams."
  - title: "Experience"
    description: "Prior experience in simulation, medical imaging, or education research is desirable but not essential."
---

{% if page.collaborators %}
## Collaborators
{% for c in page.collaborators %}
{{ c.text }}
{% endfor %}
{% endif %}

{% if page.supervisory_team %}
## Supervisory Team
{% for s in page.supervisory_team %}
{{ s.text }}
{% endfor %}
{% endif %}

{% if page.project_description %}
## Project Description
{{ page.project_description.intro }}
{% endif %}

{% if page.candidates_profile %}
## Candidate Profile
{% for cp in page.candidates_profile %}
- **{{ cp.title }}:** {{ cp.description }}
{% endfor %}
{% endif %}

