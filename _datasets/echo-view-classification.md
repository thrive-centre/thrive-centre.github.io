---
layout: default
title: Echo View Classification
permalink: /datasets/echo-view-classification
---

<link rel="stylesheet" href="{{ '/assets/css/datasets.css' | relative_url }}">

<div class="page-wrap" markdown="1">

# Echo View Classification

{: .text-center}
[Start Labelling →](#start-labelling){: .btn .btn--primary .btn--large}

---

## Project Overview

We are training an AI model for **detailed classification of echocardiographic views**, covering **47 distinct categories**.  
Due to the large number of views, some challenging cases may arise.  
For instance, certain views — such as the **apical 3-chamber** and **apical 4-chamber** — can appear similar, making it difficult to determine the correct label.  

Please examine each image carefully to distinguish between these views.  
If an image does **not fit any available category**, select **“None of the above”**.  
If it fits a category but you’re unsure which one, select **“Not sure”**.

---

## Visual Example

<div align="center">
  <img class="img-fluid" src="/assets/images/datasets/echo-view-classification/detection.png" width="50%" alt="Echo View Classification Example">
</div>

---

## Instructional Video

<div align="center">
  <h2>Watch a 1-minute demo video</h2>
  <br>
  <iframe width="560" height="315"
    src="https://www.youtube.com/embed/jmm-CbxU1aw?si=bezR0gN1C4uLsDg6"
    title="YouTube video player" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
  </iframe>
</div>

---

## Start Labelling

<div id="start-labelling" align="center" style="display: flex; flex-wrap: wrap; justify-content: center; gap: 40px; margin-bottom: 20px; max-width: 1200px;">

<a href="https://unityimaging.net/fiducial/uwl-echo-naidoo-view-classification-relabel-apical"
   class="btn btn--primary btn--large" target="_blank">
   Apical Views
</a>

<a href="https://unityimaging.net/fiducial/uwl-echo-naidoo-view-classification-relabel-doppler"
   class="btn btn--primary btn--large" target="_blank">
   Doppler Views
</a>

<a href="https://unityimaging.net/fiducial/uwl-echo-naidoo-view-classification-relabel-mmode"
   class="btn btn--primary btn--large" target="_blank">
   M-mode Views
</a>

<a href="https://unityimaging.net/fiducial/uwl-echo-naidoo-view-classification-relabel-plax"
   class="btn btn--primary btn--large" target="_blank">
   PLAX Views
</a>

<a href="https://unityimaging.net/fiducial/uwl-echo-naidoo-view-classification-relabel-psax"
   class="btn btn--primary btn--large" target="_blank">
   PSAX Views
</a>

<a href="https://unityimaging.net/fiducial/uwl-echo-naidoo-view-classification-relabel-sub"
   class="btn btn--primary btn--large" target="_blank">
   Subcostal / Suprasternal Views
</a>

</div>

---

## View Descriptions

<style>
.table-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
}
.table-section {
  width: 45%;
  margin-bottom: 30px;
}
@media (max-width: 768px) {
  .table-section {
    width: 100%;
  }
}
</style>

<div class="table-row">

<div class="table-section" markdown="1">

### Apical Views

| View | Description |
|------|--------------|
| a2ch-la | Apical 2-chamber, focused on the left atrium |
| a2ch-lv | Apical 2-chamber, focused on the left ventricle |
| a2ch-full | Apical 2-chamber |
| apex | Any apical window, focused on the apex |
| a3ch-la | Apical 3-chamber, focused on the left atrium |
| a3ch-lv | Apical 3-chamber, focused on the left ventricle |
| a3ch-full | Apical 3-chamber |
| a3ch-outflow | Apical 3-chamber, focused on the aortic valve |
| a4ch-la | Apical 4-chamber, focused on the left atrium |
| a4ch-lv | Apical 4-chamber, focused on the left ventricle |
| a4ch-full | Apical 4-chamber |
| a4ch-ias | Apical 4-chamber, focused on the inter-atrial septum |
| a4ch-ra | Apical 4-chamber, focused on the right atrium |
| a4ch-rv | Apical 4-chamber, focused on the right ventricle |
| a5ch-full | Apical 5-chamber |
| a5ch-outflow | Apical 5-chamber, focused on the aortic valve |

</div>

<div class="table-section" markdown="1">

### Doppler Views

| View | Description |
|------|--------------|
| doppler-ao-descending | Spectral Doppler of the descending aorta |
| doppler-mv | Spectral Doppler of the mitral valve |
| doppler-av | Spectral Doppler of the aortic valve |
| doppler-pv | Spectral Doppler of the pulmonary valve |
| doppler-tv | Spectral Doppler of the tricuspid valve |
| doppler-tissue-lateral | Tissue Doppler of the left ventricular lateral wall |
| doppler-tissue-septal | Tissue Doppler of the left ventricular septal wall |
| doppler-tissue-rv | Tissue Doppler of the right ventricular free wall |

</div>

</div>

<div class="table-row">

<div class="table-section" markdown="1">

### PLAX Views

| View | Description |
|------|--------------|
| plax-full-out | Parasternal long-axis, zoomed out |
| plax-full-lv | Parasternal long-axis, focused on the left ventricle |
| plax-full-la | Parasternal long-axis, focused on the left atrium |
| plax-full-rv-ao | Parasternal long-axis, focused on the right ventricle and aorta |
| plax-full-mv | Parasternal long-axis, centered on the mitral valve |
| plax-valves-av | Parasternal long-axis, focused on the aortic valve |
| plax-valves-mv | Parasternal long-axis, focused on the mitral valve |
| plax-tv | Parasternal inflow view including tricuspid valve |

</div>

<div class="table-section" markdown="1">

### PSAX Views

| View | Description |
|------|--------------|
| psax-all | Parasternal short-axis, valve level, including all valves |
| psax-av | Parasternal short-axis, focused on aortic valve |
| psax-tv | Parasternal short-axis, focused on tricuspid valve |
| psax-pv | Parasternal short-axis, focused on pulmonary valve |
| psax-lv-base | Parasternal short-axis, left ventricle base level |
| psax-lv-mid | Parasternal short-axis, left ventricle mid-level |
| psax-lv-apex | Parasternal short-axis, left ventricle apex level |

</div>

</div>

<div class="table-row">

<div class="table-section" markdown="1">

### M-mode Views

| View | Description |
|------|--------------|
| mmode-a4ch-rv | M-mode for measuring TAPSE |
| mmode-ivc | M-mode of the inferior vena cava |
| mmode-plax-mitral | M-mode of the mitral valve in the parasternal long-axis |
| mmode-plax-av | M-mode of the aortic valve in the parasternal long-axis |
| mmode-plax-lv | M-mode of the left ventricle in the parasternal long-axis |

</div>

<div class="table-section" markdown="1">

### Subcostal / Suprasternal Views

| View | Description |
|------|--------------|
| subcostal-heart | Subcostal window, focused on the heart |
| subcostal-ivc | Subcostal window, focused on the inferior vena cava |
| suprasternal | Suprasternal view |

</div>

</div>

---

</div>
