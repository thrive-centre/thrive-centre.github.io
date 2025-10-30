---
layout: default
title: A4C Valve Visibility
permalink: /datasets/valve-visibility
---

<link rel="stylesheet" href="{{ '/assets/css/datasets.css' | relative_url }}">

<div class="page-wrap" markdown="1">

# A4C Valve Visibility

{: .text-center}
[Start Labelling →](#start-labelling){: .btn .btn--primary .btn--large}

---

## Project Overview

We are training an AI to automatically detect and assess the **clarity of valve visibility** in echocardiographic images, specifically in the **apical four-chamber (A4C)** view.  
To achieve this, we are **ranking images** based on how clearly the **mitral** or **tricuspid valves** are visible — from the **clearest** to the **least visible**.

In many cases, the difference in visibility between two images may be **minimal**.  
When this occurs, the exact order of ranking is **not critical** — just ensure that images with **significant differences** in valve visibility are ranked accurately.

---

## Visual Example

<div align="center">
  <img src="/assets/images/datasets/valve-visibility/valves_.png" alt="Valve Visibility Example" width="75%">
</div>

---

## Instructional Video

<div align="center">
  <h2>This video explains how to rank the images based on valve visibility using the Unity Imaging platform.</h2>
  <br>
  <iframe width="560" height="315"
    src="https://www.youtube.com/embed/lKzjMzN2siU?si=JGuDmWeMojOYWFpS"
    title="YouTube video player" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
  </iframe>
</div>

---

## Start Labelling

<div id="start-labelling" align="center" style="display: flex; flex-wrap: wrap; justify-content: center; gap: 40px; margin-bottom: 20px;">

<a href="https://unityimaging.net/compare/uwl-echo-zolgharni-biobank-a4c-valve-visibility-mitral" 
   class="btn btn--primary btn--large" target="_blank">
   Start Labelling Mitral Valve
</a>

<a href="https://unityimaging.net/compare/uwl-echo-zolgharni-biobank-a4c-valve-visibility-tricuspid" 
   class="btn btn--primary btn--large" target="_blank">
   Start Labelling Tricuspid Valve
</a>

</div>

---
