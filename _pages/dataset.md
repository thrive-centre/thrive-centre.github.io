---
layout: default
title: 
permalink: /datasets/
---
<!-- ---
layout: single
title: 
author_profile: true
permalink: /datasets/
toc: true
toc_sticky: true
--- -->
<!-- layout: single
title: Datasets
author_profile: true
permalink: /datasets/
toc: true
toc_sticky: true
--- -->

<!-- <style>
  :root{ --primary:#2563eb; --primary-700:#1d4ed8; --border:#e5e7eb; }
  .page-wrap{ max-width:1500px; margin:0 auto; padding:28px; }
  .cat-section{ margin:28px 0; scroll-margin-top:80px; }
  table{ width:100%; border-collapse:collapse; }
  thead th{ background:#f3f4f6; text-align:left; }
  th,td{ padding:10px; border-bottom:1px solid var(--border); vertical-align:top; }
  .btn.btn--primary.btn--large {
  background-color: #007bff;   /* Bright blue */
  color: #fff !important;      /* White text */
  border-radius: 8px;          /* Rounded corners */
  padding: 12px 28px;          /* Larger button */
  font-size: 18px;             /* Bigger text */
  text-decoration: none;
  display: inline-block;
  transition: background-color 0.2s ease;
}

.btn.btn--primary.btn--large:hover {
  background-color: #0056b3;   /* Darker blue on hover */
}

</style> -->
<link rel="stylesheet" href="{{ '/assets/css/datasets.css' | relative_url }}">
<div class="page-wrap" markdown="1">


<div style="display:flex; justify-content:center; align-items:center; gap:50px; margin:30px 0;">
  <img src="/assets/images/logo/bhf.png" 
       alt="British Heart Foundation" 
       style="height:70px; min-width:120px; object-fit:contain;">
  <img src="/assets/images/uwl-logo.png" 
       alt="University of West London" 
       style="height:70px; object-fit:contain;">
  <img src="/assets/images/logo/imperial.png" 
       alt="Imperial College London" 
       style="height:70px; object-fit:contain;">
  <img src="/assets/images/logo/nhs.png" 
       alt="NHS" 
       style="height:70px; object-fit:contain;">
</div>


{: .text-center}
# Unity Biobank  

{: .text-center}
*“The Best Data, Annotated by the Best Experts”*  

{: .text-center}
Creating a unique **AI-targeted biobank of expertise**, supported by the  
[BHF](https://www.bhf.org.uk/), [BSE](https://www.bsecho.org/), and [NIHR](https://www.nihr.ac.uk/).  

{: .text-center}
[Open Projects](#open-projects){: .btn .btn--primary .btn--large}
[Available Datasets](#completed-projects){: .btn .btn--primary .btn--large}


---

## Description  

We are building the **UK's largest and most diverse open-access biobank of echocardiographic images and annotations**.  
This collaborative effort fuels the development of AI algorithms that revolutionise cardiac care through improved image processing, acquisition, and interpretation.  

---

## Project Goals  

- Establish the largest UK open-access biobank of echocardiographic images.  
- Support AI research in **image processing, acquisition, and interpretation**.  
- Ensure diversity and quality in annotated datasets.  

---

## Methods  

**Active Learning**  
We select cases using active learning, prioritising uncertain or informative samples.  
This reduces annotation effort while maximising AI model improvement.  
👉 [Read more (CMPB 2024)](https://doi.org/10.1016/j.cmpb.2024.108111)  

**Quality Ranking**  
For image quality projects, we apply the **Glicko-2 rating system**, originally designed for competitive games, to dynamically rank image quality from expert feedback.  
👉 [Read more (JMAI 2022)](https://doi.org/10.21037%2Fjmai-22-55)  

**Unity Labelling Platform**  
Accessible across **Safari (macOS/iOS)** and **Chrome (Windows/Linux/Android)**.  
Secure Google login required.  
👉 [unityimaging.net](https://unityimaging.net)  

---

## Who Should Participate?  

- **Echocardiographers**: Expertise in interpretation.  
- **Cardiologists**: Assess diagnostic impact of foreshortening, border visibility, etc.  
- **Sonographers**: Provide acquisition expertise and optimisation insights.  

---

## Your Role  

- **Review echocardiographic videos/images** presented in structured projects.  
- **Assess & Rank** according to project guidelines (training videos provided).  
- **Provide feedback (optional)** to refine annotation protocols.  

---

## Work With Us  

- **Contribute to groundbreaking research** in cardiac imaging AI.  
- **Earn competitive compensation** for your time and expertise.  
- **Flexible schedule** — work remotely, set your hours.  
- **Make a real difference** in patient care worldwide.  
- **Expand your professional network** by collaborating with leading experts.  
- **Enhance your skills** in annotation and medical imaging.  

---

## Open Projects  {#open-projects}  

## Image Quality – A4C View  
- [Foreshortening](foreshortening.html)  
- [Alignment/Rotation](Orientation.html)  
- [Endocardial Segments](endocardial_borders.html)  
- [Valve Visibility](Valve_visibility.html)  

## Image Quality – PLAX View  
- [Foreshortening](PLAX_Foreshortening.html)  
- [Alignment/Rotation](PLAX_Orientation.html)  
- [Valve Visibility](PLAX_Valve_visibility.html)  

## Image Classification  
- [View Detection](view-detection.html) — Echo view classification  

---

## Completed Projects {#completed-projects}  

**Available datasets (images and labels):**  

- [TTE47](/datasets/TTE47) — Dataset Card & Reference Gallery 
- [UnityLV-MultiX](/datasets/UnityLV-MultiX)  — Multi-vendor, Multi-view Left Ventricular Echocardiography Dataset
- [UNITY EchoPhase](/datasets/EchoPhase) — Multibeat Echocardiographic Phase Detection  
- [UNITY MInD](/datasets/MInD)  — Mitral Inflow Doppler Dataset
- [UNITY EchoTDI](/datasets/EchoTDI)  — Automated Multibeat Tissue Doppler Echocardiography Analysis


---

## Code Repositories 
All datasets and supporting code are available at our GitHub:  
👉 [github.com/intsav](https://github.com/intsav)  

---

## Contact  

**Professor Massoud Zolgharni**  
University of West London  
📧 [Massoud.Zolgharni@uwl.ac.uk](mailto:Massoud.Zolgharni@uwl.ac.uk)  

**Professor Darrel Francis**  
Imperial College London  
📧 [d.francis@imperial.ac.uk](mailto:d.francis@imperial.ac.uk)  


