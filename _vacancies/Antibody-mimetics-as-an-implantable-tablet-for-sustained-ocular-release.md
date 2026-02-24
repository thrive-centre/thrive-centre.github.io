---
toc: true
toc_sticky: true
author_profile: true
date: 2026-02-23
title: "Antibody mimetics as an implantable tablet for sustained ocular release"
permalink: /vacancies/Antibody-mimetics-as-an-implantable-tablet-for-sustained-ocular-release/
supervisory_team:
  - name: "Dr Hanieh Khalili"
    link: "https://www.uwl.ac.uk/staff/hanieh-khalili"
project_description:
  intro: "Corneal neovascularisation is a major cause of vision impairment, and current topical therapies are often limited by poor ocular penetration and the need for frequent dosing. This PhD project will develop an implantable, Fc-free antibody-mimetic formulation designed to deliver therapeutic payloads locally and continuously, reducing treatment burden while maintaining effective drug exposure at the target site.\n\nThe project will focus on FpF and/or RpR antibody mimetics, formulated as a lyophilised implantable tablet. Lyophilisation will be investigated as a route to enable high-concentration loading (particularly for RpR) and to improve stability and handling during formulation. The lead prototype will be an implant suitable for sub-conjunctival placement, enabling sustained release into ocular tissues for treatment of corneal neovascularisation.\n\nThe PhD candidate will develop and optimise the end-to-end workflow: lyophilisation of RpR/FpF, tablet/implant formulation, and evaluation of release performance. The work will include physicochemical characterisation, stability assessment, and in-vitro testing to establish release kinetics and bioactivity, with the longer-term aim of establishing a practical implant-based delivery strategy for ocular neovascular and inflammatory disease."
contact:
  text: "Professor Hanieh Khalili"
  link: "https://www.uwl.ac.uk/staff/hanieh-khalili"
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
{% endif %}


{% if page.contact %}
## Contact
{% if page.contact.link %}[{{ page.contact.text }}]({{ page.contact.link }}){% else %}{{ page.contact.text }}{% endif %}
{% endif %}