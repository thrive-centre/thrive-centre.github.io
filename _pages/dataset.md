---
layout: default
title: 
permalink: /datasets/
---

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
<!-- 
## Open Projects  {#open-projects}  

## Image Quality – A4C View  
- [Foreshortening](/datasets/foreshortening)  
- [Alignment/Rotation](/datasets/orientation)  
- [Endocardial Segments](/datasets/endocardial-segments)  
- [Valve Visibility](/datasets/valve-visibility)  

## Image Quality – PLAX View  
- [Foreshortening](/datasets/plax-foreshortening)  
- [Alignment/Rotation](/datasets/plax-orientation)  
- [Valve Visibility](/datasets/plax-valve-visibility)
- [Phase Timing Detection](/datasets/phase-timing-detection-plax)  

## Image Classification  
- [View Detection](/datasets/echo-view-classification) — Echo view classification   -->

<!-- --- -->
## Open Projects {#open-projects}

<div class="text-center">
  <!-- <h2>OPEN PROJECTS</h2> -->
  <p>You can participate in any of the on-going projects</p>
</div>

<style>
.project-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin: 30px auto;
}
.project-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.08);
  width: 220px;
  text-align: center;
  transition: all 0.3s ease;
}
.project-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 4px 16px rgba(0,0,0,0.12);
}
.project-card img {
  width: 100%;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  height: 160px;
  object-fit: cover;
}
.project-card a {
  display: block;
  padding: 12px;
  color: #007bff;
  font-weight: 600;
  text-decoration: none;
}
.project-card a:hover {
  color: #0056b3;
}
.section-title {
  font-size: 22px;
  font-weight: 700;
  margin-top: 40px;
  margin-bottom: 10px;
}
</style>

---

### Image Quality – A4C View

<div class="project-grid">

<div class="project-card">
  <img src="/assets/images/datasets/Foreshortening/Foreshortening(2).jpg" alt="Foreshortening">
  <a href="/datasets/foreshortening">Foreshortening</a>
</div>

<div class="project-card">
  <img src="/assets/images/datasets/orientation/anti_clockwise.png" alt="Alignment/Rotation">
  <a href="/datasets/orientation">Alignment/Rotation</a>
</div>

<div class="project-card">
  <img src="/assets/images/datasets/endocardial-segments/Borders.jpg" alt="Endocardial Segments">
  <a href="/datasets/endocardial-segments">Endocardial Segments</a>
</div>

<div class="project-card">
  <img src="/assets/images/datasets/valve-visibility/valves_(2).png" alt="Valve Visibility">
  <a href="/datasets/valve-visibility">Valve Visibility</a>
</div>

</div>

---

### Image Quality – PLAX View

<div class="project-grid">

<div class="project-card">
  <img src="/assets/images/datasets/plax-foreshortening/Picture1.jpg" alt="Foreshortening">
  <a href="/datasets/plax-foreshortening">Foreshortening</a>
</div>

<div class="project-card">
  <img src="/assets/images/datasets/plax-orientation/normal.png" alt="Alignment/Rotation">
  <a href="/datasets/plax-orientation">Alignment/Rotation</a>
</div>

<div class="project-card">
  <img src="/assets/images/datasets/plax-valve-visibility/Picture2.png" alt="Valve Visibility">
  <a href="/datasets/plax-valve-visibility">Valve Visibility</a>
</div>

<div class="project-card">
  <img src="/assets/images/datasets/phase-timing-detection-plax/01-0a0e5fd3ca9604ff0a7462ba64f92c246129b8cedd17a4a63cd197d6857666fe.gif" alt="Phase Timing Detection">
  <a href="/datasets/phase-timing-detection-plax">Phase Timing Detection</a>
</div>

</div>

---

### Image Classification

<div class="project-grid">

<div class="project-card">
  <img src="/assets/images/datasets/echo-view-classification/classification.png" alt="View Detection">
  <a href="/datasets/echo-view-classification">View Detection</a>
  <p style="font-size: 14px; color: #444;">Echo view classification</p>
</div>

</div>
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


