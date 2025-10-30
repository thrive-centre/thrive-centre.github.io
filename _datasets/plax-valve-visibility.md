---
layout: default
title: PLAX Valve Visibility
permalink: /datasets/plax-valve-visibility
---

<link rel="stylesheet" href="{{ '/assets/css/datasets.css' | relative_url }}">

<div class="page-wrap" markdown="1">

# PLAX Valve Visibility

{: .text-center}
[Start Labelling →](#start-labelling){: .btn .btn--primary .btn--large}

---

## Project Overview

We are training an AI to automatically detect and assess the **clarity of valve visibility** in echocardiographic images, specifically in the **Parasternal Long Axis (PLAX)** view.  
To achieve this, we are **ranking images** based on how clearly each valve — **mitral** or **aortic** — is visible, from the **most clearly visible** to the **least visible**.

In many cases, the difference in visibility between two images may be **minimal**.  
When this occurs, the exact order of ranking is **not critical** — just ensure that the images with **significant differences** in valve visibility are ranked accurately.  
We address the **mitral** and **aortic valves** separately.

---

## Visual Example

<div align="center">
  <img src="/assets/images/datasets/plax-valve-visibility/Picture2.png" alt="PLAX Valve Visibility Example" width="50%">
</div>

---

## Instructional Video

<div align="center">
  <h2>This video explains how to rank the images based on the visibility of the valves using the Unity Imaging platform.</h2>
  <br>
  <iframe width="560" height="315"
    src="https://www.youtube.com/embed/QmN7d-CxF80?si=a9QxYtzKnMV9Ia01"
    title="YouTube video player" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
  </iframe>
</div>

---

## Start Labelling

<div id="start-labelling" align="center" style="display: flex; flex-wrap: wrap; justify-content: center; gap: 40px; margin-bottom: 20px;">

<a href="https://unityimaging.net/compare/uwl-echo-ufumaka-plax-valve-visibility-aortic"
   class="btn btn--primary btn--large" target="_blank">
   Start Labelling Aortic Valve
</a>

<a href="https://unityimaging.net/compare/uwl-echo-ufumaka-plax-valve-visibility-mitral"
   class="btn btn--primary btn--large" target="_blank">
   Start Labelling Mitral Valve
</a>

</div>

---
