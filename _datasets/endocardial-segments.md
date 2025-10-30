---
layout: default
title: A4C Endocardial Segments
permalink: /datasets/endocardial-segments
---

<link rel="stylesheet" href="{{ '/assets/css/datasets.css' | relative_url }}">

<div class="page-wrap" markdown="1">

# A4C Endocardial Segments

{: .text-center}
[Start Labelling →](#start-labelling){: .btn .btn--primary .btn--large}

---

## Project Overview

We are training an AI to automatically detect and assess the clarity of **endocardial segment visibility** in echocardiographic images, specifically in the **apical four-chamber (A4C)** view.  
To achieve this, we are **ranking images based on how clearly the endocardial segments are visible**, from the **clearest** to the **least visible**.

In many cases, the difference in segment visibility between two images may be **minimal**.  
When this occurs, the exact order of ranking is **not critical** — just ensure that the images with **significant differences** in segment visibility are ranked accurately.

---

## Interactive Segment Map

<div align="center">
  <h3>Click on each segment in the image to start annotating or use the buttons provided below.</h3>
  <img src="/assets/images/datasets/endocardial-segments/A4C_segments(3).jpg" alt="A4C Endocardial Segments" usemap="#workmap" width="40%">
  <map name="workmap">
    <area shape="poly" coords="189,132,188,102,203,94,231,91,262,101" href="https://unityimaging.net/compare/uwl-echo-zolgharni-biobank-a4c-endo-segments-apex" target="_blank">
    <area shape="poly" coords="202,197,231,193,225,158,223,131,226,122,226,119,189,135,195,146,197,172" href="https://unityimaging.net/compare/uwl-echo-zolgharni-biobank-a4c-endo-segments-apical-septal" target="_blank">
    <area shape="poly" coords="291,172,322,151,267,101,230,117,232,121,257,136" href="https://unityimaging.net/compare/uwl-echo-zolgharni-biobank-a4c-endo-segments-apical-lateral" target="_blank">
    <area shape="poly" coords="203,200,233,195,247,250,219,256" href="https://unityimaging.net/compare/uwl-echo-zolgharni-biobank-a4c-endo-segments-mid-inferoseptal" target="_blank">
    <area shape="poly" coords="324,153,293,173,334,237,370,212,346,179" href="https://unityimaging.net/compare/uwl-echo-zolgharni-biobank-a4c-endo-segments-mid-antlateral" target="_blank">
    <area shape="poly" coords="220,259,235,309,256,304,255,283,248,252" href="https://unityimaging.net/compare/uwl-echo-zolgharni-biobank-a4c-endo-segments-basal-inferoseptal" target="_blank">
    <area shape="poly" coords="371,214,335,238,357,281,361,298,397,285,394,264,382,233" href="https://unityimaging.net/compare/uwl-echo-zolgharni-biobank-a4c-endo-segments-basal-anterolateral" target="_blank">
  </map>
</div>

---

## Instructional Video

<div align="center">
  <h2>This video explains how to rank the images based on endocardial segment visibility using the Unity Imaging platform.</h2>
  <br>
  <iframe width="560" height="315"
    src="https://www.youtube.com/embed/8HcDXukH06E?si=yoc2S-alJNJikEqp"
    title="YouTube video player" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
  </iframe>
</div>

---

## Start Labelling

<div id="start-labelling" align="center" style="display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; margin-bottom: 20px;">

<a href="https://unityimaging.net/compare/uwl-echo-zolgharni-biobank-a4c-endo-segments-apex" class="btn btn--primary btn--large" target="_blank">Apex</a>

<a href="https://unityimaging.net/compare/uwl-echo-zolgharni-biobank-a4c-endo-segments-apical-septal" class="btn btn--primary btn--large" target="_blank">Apical Septal</a>

<a href="https://unityimaging.net/compare/uwl-echo-zolgharni-biobank-a4c-endo-segments-apical-lateral" class="btn btn--primary btn--large" target="_blank">Apical Lateral</a>

<a href="https://unityimaging.net/compare/uwl-echo-zolgharni-biobank-a4c-endo-segments-mid-inferoseptal" class="btn btn--primary btn--large" target="_blank">Mid Inferoseptal</a>

<a href="https://unityimaging.net/compare/uwl-echo-zolgharni-biobank-a4c-endo-segments-mid-antlateral" class="btn btn--primary btn--large" target="_blank">Mid Antlateral</a>

<a href="https://unityimaging.net/compare/uwl-echo-zolgharni-biobank-a4c-endo-segments-basal-inferoseptal" class="btn btn--primary btn--large" target="_blank">Basal Inferoseptal</a>

<a href="https://unityimaging.net/compare/uwl-echo-zolgharni-biobank-a4c-endo-segments-basal-anterolateral" class="btn btn--primary btn--large" target="_blank">Basal Anterolateral</a>

</div>

---
