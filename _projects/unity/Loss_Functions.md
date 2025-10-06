---
title: "Influence of Loss Function on Left Ventricular Volume and Ejection Fraction Estimation in Deep Neural Networks"
toc: false
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/landing_page/istockphoto-2194245609-2048x2048.jpg
excerpt: "Evaluating how different loss functions affect left ventricular segmentation, volume, and ejection fraction estimation using U-Net on echocardiographic data."
---

## Project Introduction

Quantification of the **left ventricle (LV)** shape is critical in evaluating cardiac function from 2D echocardiographic images.  
This study investigates the impact of **different loss functions** on the optimisation of the **U-Net model** for LV segmentation.

Our results reveal that the **choice of loss function** plays a significant role in achieving accurate LV volume measurements — even when traditional segmentation metrics like Dice coefficient show minimal change.

---

## Dataset

![Dataset Example](/assets/images/projects/unity/Loss_Functions/dataset_sample1.PNG)

*Fig. 1. Example from the dataset.*

A total of **1,224 apical 4-chamber echocardiographic videos** (2015–2016) were collected from **Imperial College Healthcare NHS Trust’s** database.  
Images were acquired using **GE** and **Philips** ultrasound systems by experienced echocardiographers following standard protocols.

- **Ethics:** Approved by the Health Regulatory Agency (IRAS ID: 243023)  
- **Development dataset:** 2,600 images, annotated by experts using the [Unity Imaging Platform](https://unityimaging.net)  
- **Testing dataset:** 100 videos from 2019, with 200 frames (end-diastolic & end-systolic)  
- Each image was annotated by **11 human experts**, and the **consensus annotation** was used as ground truth.

---

## Method

![U-Net Model](/assets/images/projects/unity/Loss_Functions/Unet_model.PNG)

*Fig. 2. U-Net architecture used in this study.*

The **U-Net** model was implemented in **TensorFlow** and trained on an **NVIDIA RTX3090 GPU**.

The following **loss functions** were evaluated, covering three categories:

- **Distribution-based:** Binary Cross Entropy (BCE)  
- **Region-based:** Dice, Tversky, Focal Tversky  
- **Compound:** BCE + Dice  

After training, model performance was evaluated using both **segmentation metrics** and **domain-specific cardiac metrics**:

- **Dice Coefficient (DC)** and **Hausdorff Distance (HD)** for segmentation  
- **Volume Error** and **Ejection Fraction (EF)** for clinical relevance  

Volumes were computed using **Simpson’s method**, and EF was calculated as:  

\[
EF = \frac{EDV - ESV}{EDV}
\]

where *EDV* = end-diastolic volume, *ESV* = end-systolic volume.

---

## Experiment Results and Discussion

![Results Tables and Example Images](/assets/images/projects/unity/Loss_Functions/results_table.PNG)

![Example Segmentation Results](/assets/images/projects/unity/Loss_Functions/results_imgs.PNG)

*Fig. 3. End-diastolic (left) and end-systolic (right) images showing ground-truth (red) and predicted (green) borders.*

**Key Observations:**

- Minimal variation in **Dice coefficient (DSC)** and **Hausdorff distance (HD)** across all loss functions  
- Significant differences observed in **Average Volume Error**, showing that segmentation metrics alone are insufficient for evaluating cardiac performance  
- BCE + Dice achieved high DSC but exhibited large volume errors  
- Large volume errors can sometimes offset in EF computation, as seen in the example above (volume error = **17.6 ml**, EF error = **2.38%**)  

These findings highlight that **traditional metrics (DSC, HD)** may not fully capture clinical accuracy when the goal is **accurate EF estimation**.

Future work focuses on assessing the **generalizability of loss functions** across different echocardiographic datasets to improve clinical applicability in LV function estimation.

---

## Project Team

- [**Preshen Naidoo**](https://www.linkedin.com/in/preshen-n-190350a5/)  
- [**Dr. Eman Alajrami**](https://www.researchgate.net/profile/Eman-Alajrami)  
- [**Elisabeth S. Lane**](https://elisabethlane.github.io/)  
- [**Dr. Jevgeni Jevsikov**](https://twitter.com/intsav_?lang=en-gb)  
- [**Professor Massoud Zolgharni**](https://www.uwl.ac.uk/staff/massoud-zolgharni)

