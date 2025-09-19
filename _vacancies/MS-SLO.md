---
toc: true
toc_sticky: true
author_profile: true
date: 2025-09-17
title: "Analyzing Morphological Alterations of Vessels in Multiple Sclerosis using SLO Images of the Eyes"
permalink: /vacancies/MS-SLO/
supervisory_team:
  - name: "Dr. Nasim Dadashi Serej"
    link: "https://www.uwl.ac.uk/staff/nasim-dadashi-serej"
  - name: "Dr. Raheleh Kafieh"
    link: "https://www.durham.ac.uk/staff/raheleh-kafieh/"
project_description:
  background: |
    Multiple sclerosis (MS), an immune-mediated, demyelinating disease of the central nervous system, is associated with multiple pathological changes within the retina. 
    
    Optical coherence tomography (OCT) investigations have revealed a reduction in the thickness of retinal nerve fiber and ganglionic cell layers, and studies based on fundus photography have shown impaired retinal blood circulation among MS patients. 
    
    However, these findings are not specific to MS, and can be observed in other neurodegenerative and ocular disorders as well. 
    
    This project provides the first study aimed to investigate whether any MS-specific feature can be found within infrared reflectance scanning laser ophthalmoscopy (IR-SLO) images, i.e., monochromatic fundus-like images often taken along with OCT.
  aim: |
    The retinal changes occurring in MS can be effectively tracked through the analysis of IR-SLO images. 
    
    The novel biomarkers of MS proposed in this study, primarily related to retinal vessels, could serve as additional or even substitute diagnostic markers to those currently obtained from time-consuming, costly, and invasive procedures.
  plan: |
    - Apply an age-matching, subject-wise stratified k-fold cross-validation approach to split training, validation, and test datasets, minimizing risk of overfitting.  
    - Apply machine learning models on features obtained from anatomical structures of fundus for MS classification.  
    - Use feature importance methods to calculate each feature’s contribution in the best-performing model.
  candidate_profile: |
    - Strong background in computer science, machine learning, or related field.  
    - Solid programming skills.  
    - Strong analytical ability, problem-solving, communication, and collaboration skills.  
  further_info: |
    This PhD offers a supportive research environment, access to state-of-the-art facilities, collaboration with leading researchers, a competitive stipend, and opportunities for conference participation and publication.
  application_details: |
    - Submit a detailed CV and cover letter outlining research interests and motivation.  
    - Shortlisted candidates will be invited for interview.  
    - **Start dates:** January, May, and September of each academic year.  
    - **Duration:** 3 years.  
contact:
  text: "Supervisory Team"
  link: ""
image: "assets/images/vacancies/MS-SLO/Picture1.png"
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

## Aim
{{ page.project_description.aim }}

## Plan
{{ page.project_description.plan }}

{% if page.image %}
![Project Image]({{ page.image }})
{% endif %}

## Candidate Profile
{{ page.project_description.candidate_profile }}

## Further Information
{{ page.project_description.further_info }}

## Application Details
{{ page.project_description.application_details }}
{% endif %}

{% if page.contact %}
## Contact
{{ page.contact.text }}
{% endif %}
