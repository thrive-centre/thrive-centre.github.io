---
toc: true
toc_sticky: true
author_profile: true
date: 2026-02-23
title: "AI-Guided Design 3D Ocular Implant using Click Hydrogel"
permalink: /vacancies/AI-Guided-Design-3D-Ocular-Implant-using-Click-Hydrogel/
supervisory_team:
  - name: "Prof Hanieh Khalili"
    link: "https://www.uwl.ac.uk/staff/hanieh-khalili"
  - name: "Prof Massoud Zolgharni"
    link: "https://www.uwl.ac.uk/staff/massoud-zolgharni"
project_description:
  intro: "Long-acting ocular drug delivery remains challenging due to rapid clearance, limited residence time of topical formulations, and the need for repeated injections for some conditions. Click-chemistry hydrogels offer a promising route to form safe, tunable, and minimally invasive implants, but designing an implant that reliably matches target release profiles and anatomical constraints is still largely trial-and-error.\n\nThis PhD project will develop an AI-guided design pipeline for a 3D ocular implant fabricated from click hydrogel. The candidate will build predictive models that link hydrogel composition and crosslinking parameters (e.g., polymer concentration, functional group density, click reaction kinetics) to key performance outcomes such as swelling, mechanical integrity, degradation, and drug-release kinetics. These models will be used to propose implant geometries and material recipes that meet clinically relevant requirements (comfort, stability, ease of implantation, and sustained therapeutic delivery).\n\nThe project will integrate computational design (data-driven optimisation, surrogate modelling, and simulation where appropriate) with experimental validation (hydrogel synthesis, 3D shaping/printing or moulding, mechanical testing, and in-vitro release studies). The outcome will be a reproducible workflow to design and prototype ocular implants with tunable properties, enabling faster iteration and a clearer route toward translational development of long-acting therapies for ocular inflammation and neovascular disease."
contact:
  text: "Prof Hanieh Khalili"
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
