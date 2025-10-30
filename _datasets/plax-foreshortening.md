---
layout: default
title: PLAX Foreshortening
permalink: /datasets/plax-foreshortening
---

<link rel="stylesheet" href="{{ '/assets/css/datasets.css' | relative_url }}">

<div class="page-wrap" markdown="1">

# PLAX Foreshortening

{: .text-center}
[Start Labelling →](https://unityimaging.net/manage/uwl-echo-ufumaka-plax-quality-foreshortening){: .btn .btn--primary .btn--large target="_blank"}

---

## Project Overview

We are training an AI to automatically detect and assess the **degree of foreshortening** in echocardiographic videos, specifically in the **Parasternal Long Axis (PLAX)** view.  
To achieve this, we are **ranking videos based on how foreshortened the heart appears**, from the **least foreshortened** to the **most foreshortened**.

In many cases, the difference in foreshortening between two videos may be **minimal**.  
When this occurs, the exact order of ranking is **not critical** — just ensure that the videos with **significant differences** in foreshortening are ranked accurately.

---

## Visual Examples

<div align="center">
  <div style="display: flex; justify-content: center; gap: 40px; flex-wrap: wrap;">
    <img src="/assets/images/datasets/plax-foreshortening/Picture1.jpg" width="40%" alt="Most Foreshortened Example">
    <img src="/assets/images/datasets/plax-foreshortening/Picture2.png" width="40%" alt="Least Foreshortened Example">
  </div>
  <br>
  <h3>
    The image on the left illustrates an example of the
    <a href="https://www.cardioserv.net/applying-geometric-concepts-to-echocardiographic-measurements/" target="_blank">Most Foreshortened</a>,
    while the
    <a href="https://www.pragueicu.com/echo-content/parasternal-long-axis-view-plax" target="_blank">Least Foreshortened</a>
    example is shown on the right.
  </h3>
</div>

---

## Instructional Video

<div align="center">
  <h2>This video explains how to rank echo videos based on the level of foreshortening using the Unity Imaging platform.</h2>
  <br>
  <iframe width="560" height="315"
    src="https://www.youtube.com/embed/y-ZDnpL3y8w?si=rWUuvV1ZbBi1wrDr"
    title="YouTube video player" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
  </iframe>
</div>

---

<div align="center">
  <a href="https://unityimaging.net/manage/uwl-echo-ufumaka-plax-quality-foreshortening"
     class="btn btn--primary btn--large" target="_blank">Start Labelling</a>
</div>

---
