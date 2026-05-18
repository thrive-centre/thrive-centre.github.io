---
layout: default
title: UNITY-ROT
permalink: /datasets/ROT
---

<link rel="stylesheet" href="{{ '/assets/css/datasets.css' | relative_url }}">

<div class="page-wrap" markdown="1">



# UNITY-ROT Dataset


{: .text-center}
[Download Datasets](#req-data){: .btn .btn--primary .btn--large}
<!-- [References](#reference){: .btn .btn--primary .btn--large} -->

The UNITY-ROT dataset is a publicly available benchmark for assessing rotational misalignment in apical four-chamber (A4C) echocardiographic images. The dataset was curated from real-world transthoracic echocardiography studies acquired at Imperial College Healthcare NHS Trust under Health Research Authority approval for the anonymised export of clinical imaging data.

The source database contains heterogeneous echocardiographic studies acquired across a broad patient population using ultrasound systems from multiple vendors. This diversity was intentionally preserved, as rotational misalignment is influenced by patient anatomy, acoustic windows, probe positioning, acquisition protocols, and operator variability. The aim of this dataset is therefore to reflect the variability encountered in routine clinical echocardiography rather than a narrowly curated set of idealised examples.

Studies were acquired by experienced sonographers following standard clinical imaging protocols. All patient-identifiable metadata were removed prior to export. Ethical approval was obtained for the anonymised use of the imaging data originally collected during routine clinical care.

The UNITY-ROT benchmark was designed to support reproducible evaluation of AI systems for echocardiographic rotational alignment assessment. The dataset includes expert-ranked images and independent multi-expert evaluation sets to facilitate robust benchmarking of clockwise–anti-clockwise alignment prediction models.

The dataset and associated annotations are intended to support future research into echocardiographic quality assessment, representation learning, ranking-based supervision, and clinically meaningful evaluation of alignment models.

---

## Dataset Overview

Candidate apical-view videos were first identified using an automated echocardiographic view classification framework. Three A4C-related subview categories were retained for this study:

- **A4CH-Full** — 4,080 videos  
- **A4CH Left Atrium (A4CH-LA)** — 3,079 videos  
- **A4CH Left Ventricle (A4CH-LV)** — 3,744 videos  

<div align="center">
  <img src="/assets/images/datasets/ROT/subviews.png" width="80%">
</div>

Representative examples of the three retained A4C-related subview categories are shown above.  
A4CH-Full contains the complete four-chamber view, while A4CH-LA and A4CH-LV focus predominantly on the left atrium and left ventricle respectively.

---

## Data Preparation Pipeline

Each video contained between one and three cardiac cycles. Representative frames were automatically selected using a cardiac phase detection model. For every video:

- One end-diastolic (ED) frame was extracted  
- One end-systolic (ES) frame was extracted  
- Two intermediate frames were sampled midway between ED and ES  

This resulted in four representative frames per video, capturing cardiac morphology across different phases of the cardiac cycle.

To prioritise informative examples and reduce redundant annotation effort, a diversity-based sample selection strategy was applied. Features extracted from the representative frames were aggregated into video-level embeddings using a CNN feature extractor. Principal Component Analysis (PCA) followed by clustering was then used to identify representative videos spanning the observed appearance distribution.

The most visually diverse and representative cases were prioritised for expert annotation.

---

## Annotation and Ranking Protocol

<div align="center">
<img src="/assets/images/datasets/ROT/pipeline.png" width="90%">
</div>

The annotation protocol was designed to capture rotational alignment as a relative ranking problem rather than as an isolated absolute score.

Following diversity-based selection:

- 200 A4CH-Full videos were selected  
- 100 A4CH-LA videos were selected  
- 100 A4CH-LV videos were selected  

This produced a total of **400 videos** for annotation.

Four representative frames were extracted from each video, yielding **1,600 images** for expert annotation.

The images were annotated by a pool of **25 clinical experts** using our custom-built web-based annotation platform:

<div align="center">
<a href="https://unityimaging.net/">https://unityimaging.net/</a>
</div>

Experts were presented with randomly shuffled batches of six images and asked to reorder them from:

- **Most anti-clockwise**  
to  
- **Most clockwise**

according to perceived A4C rotational alignment.

This drag-and-drop multiple-image ranking strategy enabled experts to directly compare images instead of assigning isolated numerical scores. Relative ranking was selected because it provides robust consensus generation while reducing inter-observer variability.

The Unity platform dynamically updated four internal variables throughout the annotation process:

- **Ranking** — current image ordering within the dataset  
- **Rating** — continuous alignment score ranging from anti-clockwise to clockwise rotation  
- **View count** — number of times an image had been annotated  
- **Volatility** — measure of annotation disagreement and instability  

Images with low annotation counts or high disagreement were prioritised for further review until sufficient consensus was achieved.

Expert annotations were aggregated to produce:

- Consensus-based global rankings  
- Continuous rotational alignment ratings  

---

## Development and Evaluation Datasets

The annotated development dataset comprised:

- **1,600 images**
- extracted from **400 videos**

The dataset was divided into three non-overlapping subsets:

- **Training set** — 1,300 images  
- **Internal validation set** — 200 images  
- **Internal testing set** — 100 images  

To prevent data leakage, images originating from the same echocardiographic study were restricted to a single subset.

---

## Independent Expert Evaluation Sets

For final evaluation against expert consensus, three additional independent evaluation sets were curated.

Each evaluation set contained:

- **30 randomly selected A4CH-Full images**
- entirely excluded from development and training datasets

Each set was independently ranked by **10 clinical experts**, who reordered the images from most anti-clockwise to most clockwise according to perceived rotational alignment.

These independent expert rankings were aggregated into consensus rankings for benchmarking model performance against human expert agreement.

This evaluation strategy provides a clinically meaningful assessment of rotational alignment prediction models.

---

## Annotation Interface

Clinical experts annotated images using the Unity Imaging platform through a drag-and-drop ranking interface. Images were presented in shuffled batches and reordered from most anti-clockwise to most clockwise according to perceived rotational alignment.

The annotation workflow and ranking strategy are illustrated in Figure 2.

---

## Dataset Package

The dataset package available for download includes:

- Development dataset images  
- Independent evaluation images  
- Consensus ranking labels  
- Continuous rotational alignment scores  
- Multi-expert ranking annotations  
- Metadata describing dataset splits and evaluation subsets  

---

## Benchmark Results

**Benchmark evaluation results and pretrained models will be released alongside the public dataset release.**

---

<!-- ## References {#reference} -->



---

## Request Access to the Project Dataset {#req-data}

**If you wish to request access, please complete the form below:**

<form action="https://formspree.io/f/mpwlgleg" method="POST">
  <input type="text" name="name" placeholder="Your Name" required><br><br>
  <input type="email" name="email" placeholder="Your Email" required><br><br>
  <input type="text" name="institution" placeholder="Institution/Workplace" required><br><br>
  <input type="text" name="dataset" value="UNITY-ROT" readonly>
  <textarea name="message" rows="5" placeholder="Please let us know why you would like access to this dataset and what you intend to use it for" required></textarea><br><br>
  <button type="submit" class="btn btn--primary btn--large">Submit</button>
</form>
