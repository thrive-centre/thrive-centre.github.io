---
layout: default
title: UnityLV-MultiX
permalink: /datasets/UnityLV-MultiX/

---

<!-- PAGE STYLES + WRAPPER -->
<style>
  :root{ --primary:#2563eb; --primary-700:#1d4ed8; --border:#e5e7eb; }
  .page-wrap{ max-width:1500px; margin:0 auto; padding:28px; }
  .cat-section{ margin:28px 0; scroll-margin-top:80px; }
  table{ width:100%; border-collapse:collapse; }
  thead th{ background:#f3f4f6; text-align:left; }
  th,td{ padding:10px; border-bottom:1px solid var(--border); vertical-align:top; }
</style>

<div class="page-wrap" markdown="1">

<br style="clear:both;"> -->
<div style="text-align:right; margin:10px 0;">
  <img src="/assets/images/logo/imperial_BHF.png" 
       alt="Project Logos" 
       style="max-width:250px; height:auto; float:right; margin-left:20px;">
</div>


# UnityLV-MultiX Dataset

The images used in this dataset were sourced from the Imperial College Healthcare NHS Trust, comprises 100 apical four-chamber (A4C) echocardiography videos collected in 2019. This dataset features a closely balanced gender distribution, with 47% male and 53% female participants, and a median age of 60 years (interquartile range: 48.5–73.0). For each video, one end-diastolic (ED) frame and one end-systolic (ES) frame were extracted, resulting in a total of 200 images. These images were independently annotated by 11 experts, who were unaware of each other’s annotations. This dataset serves as an independent external test for evaluation purposes.

This unique dataset is publicly released to promote further research in the field and to encourage the validation and benchmarking of deep learning models using multi-expert labelled data. Our goal is to enhance model reliability and generalizability. By offering this resource, we aim to support more rigorous evaluations, enabling researchers to test and refine their models in diverse, complex scenarios. Ultimately, this will help improve the performance and broader application of deep learning technologies in medical echo imaging.

The echocardiograms were acquired during examinations performed by experienced echocardiographers, following standard protocols. Ethical approval was obtained from the Health Regulatory Agency for the anonymised export of large quantities of imaging data. As the data was originally acquired for clinical purposes, individual patient consent was not required.

The dataset (images and labels) is available under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International license. The release of the associated dataset received a Favourable Opinion from the South Central − Oxford C Research Ethics Committee (Integrated Research Application System identifier 279328, 20/SC/0386).

---

## Annotation Examples

<div align="center">
  <img src="/assets/images/datasets/UnityLV-MultiX/pic2.png" width="300">
  <img src="/assets/images/datasets/UnityLV-MultiX/pic3.png" width="300">
</div>

The image on the left illustrates an example of the multi-expert annotations within this dataset, while the corresponding consensus curve is shown on the right.

---

## Dataset Package

The dataset package available for download includes the following:

- An **Images** folder containing 200 images (100 end-diastole and 100 end-systole).  
- **UnityLV_multiX_annotations.json**  
  The file contains annotations for an external test dataset comprising 100 studies. Each study consists of end-diastolic (ED) and end-systolic (ES) frames, annotated by 11 experts.  
  Each study includes two frames: the ED frame appears first, followed by the ES frame.  

  Example:  
02-008cb0fa74df88e44971367a2291e4a2969741e21bafbeffdb27a0b0b72e29d3-0003.png
02-008cb0fa74df88e44971367a2291e4a2969741e21bafbeffdb27a0b0b72e29d3-0041.png


In this example, `02-008cb0fa...` represents the unique identifier for the study (video), while **0003** and **0041** are the frame numbers corresponding to the ED and ES phases, respectively.  

This JSON file contains ([X],[Y]) coordinate tuples for multiple experts. The JSON is organised by image name corresponding to the Images folder. For each image, it has coordinates for each anonymized `userId`.  

- **UnityLV_multiX_consensus_curves.json**  
This file contains the consensus (average) label represented as ([X],[Y]) coordinate tuples for each image in the Images folder. The JSON file is organized by image names, which correspond to the files in the Images folder.

---

<div align="center">
<img src="/assets/images/datasets/UnityLV-MultiX/unityimaging.net_example.png" width="60%">
</div>

The annotation of this dataset was facilitated using [https://data.unityimaging.net](https://data.unityimaging.net).  
The Unity web-based, interactive, real-time annotation platform enables clinical experts across the UK to collaboratively and efficiently label medical images. The platform’s intuitive interface allows experts to annotate key anatomical structures with precision, including critical features such as key points and curves along the endocardial border, as illustrated above. The platform’s accessibility and real-time capabilities facilitate large-scale multi-expert annotations, enhancing the quality and accuracy of labelled datasets for medical image analysis.

---

## Request Access to the Project Dataset

We aim to make the dataset available for research purposes soon.  

**If you wish to request access, please complete the form below:**

<form action="https://formspree.io/f/mpwlgleg" method="POST">
  <input type="text" name="name" placeholder="Your Name" required><br><br>
  <input type="email" name="email" placeholder="Your Email" required><br><br>
  <input type="text" name="institution" placeholder="Institution/Workplace" required><br><br>
  <input type="text" name="dataset" value="UnityLV-MultiX" readonly>
  <textarea name="message" rows="5" placeholder="Please let us know why you would like access to this dataset and what you intend to use it for" required></textarea><br><br>
  <button type="submit">Submit</button>
</form>
</div>