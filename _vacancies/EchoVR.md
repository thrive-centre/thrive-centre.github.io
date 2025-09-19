---
toc: true
toc_sticky: true
author_profile: true
date: 2025-09-17
title: "Immersive Echocardiography Training in Virtual Reality"
permalink: /vacancies/EchoVR/
supervisory_team:
  - name: "Professor Massoud Zolgharni"
    link: "https://www.uwl.ac.uk/staff/massoud-zolgharni"
  - name: "Dr. Stephen Uzor"
    link: "https://www.uwl.ac.uk/staff/stephen-uzor"
  - name: "Professor Darrel Francis"
    link: "https://www.imperial.ac.uk/people/d.francis"
project_description:
  background: |
    Medical ultrasound education, particularly in echocardiography, is traditionally hands-on and instructor-intensive. 
    However, limited access to real-time scanning experience and expert feedback constrains student learning and the standardization of training.

    Virtual Reality (VR) offers a powerful medium to simulate realistic echocardiographic scenarios, enhancing spatial awareness, probe handling skills, and interpretation in a controlled, repeatable environment.
  research_questions:
    - "How can immersive VR technologies be used to simulate realistic echocardiographic scanning environments?"
    - "What levels of realism and interactivity are necessary to foster clinical competence?"
    - "How can adaptive feedback and AI-driven assessment enhance learning outcomes?"
  aims:
    - "Design, develop, and evaluate a VR-based training platform for echocardiography education."
  objectives:
    - title: "Interactive VR Environment"
      steps:
        - "Develop a fully interactive VR training environment using real echocardiographic data."
    - title: "Probe & Anatomy Simulation"
      steps:
        - "Incorporate simulated probe manipulation and anatomical navigation."
    - title: "Feedback & Assessment"
      steps:
        - "Integrate real-time assessment and feedback mechanisms for learners."
    - title: "Evaluation"
      steps:
        - "Evaluate the effectiveness of the platform in postgraduate training courses."
  methodology:
    - "Co-design the platform with input from clinical educators and sonographers."
    - "Use Unity3D and haptic feedback integration for realism."
    - "Capture and map ultrasound probe trajectories to VR scenes."
    - "Conduct usability studies and learning outcome evaluations with MSc Medical Ultrasound (Echocardiography) students."
  clinical_partners:
    - "Imperial College London – National Heart and Lung Institute"
    - "Affiliated NHS cardiology and echocardiography teams"
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
{% endif %}

