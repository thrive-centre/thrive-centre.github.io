---
title: "Active Learning for Creating a Biobank of Expert Annotations in Echocardiography"
toc: false
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/landing_page/istockphoto-2194245609-2048x2048.jpg
excerpt: "Reducing annotation cost and effort in echocardiography using deep learning and active learning strategies."
---

## Projects Introduction

This projects addresses the challenge of scarce annotations using **deep learning** and **active learning (AL)** techniques to reduce annotation costs and efforts while maintaining high segmentation accuracy and improving clinical workflow efficiency.

This work presents several AL methods contributing to cost-effective medical image annotation, including ensemble-based AL, semi-supervised AL (SSAL), and clustering-based diversity sampling.

The outcome of these studies led to the creation of a **biobank of echocardiographic images**, ranking samples by diversity so that clinicians label only the most informative data—maximising AI model improvement with minimal manual effort.

---

## Dataset

![Sample Image from the Unity Dataset](/assets/images/projects/unity/Efficient_Annotations/Sample_image.png)

*Fig. 1 A sample image from the Unity dataset.*

Three echocardiographic datasets were used for experimentation: **CAMUS**, **Unity**, and **Consensus**.

- **CAMUS dataset:**  
  Public, fully annotated dataset for 2D echocardiographic assessment.  
  Details: [CAMUS Challenge](https://www.creatis.insa-lyon.fr/Challenge/camus/index.html)

- **Unity dataset:**  
  Private dataset of 1,224 apical four-chamber echocardiogram videos from Imperial College Healthcare NHS Trust’s database.  
  Ethically approved (IRAS ID 243023). Contains 2,800 labelled images (70% train, 15% validation, 15% test).

- **Consensus dataset:**  
  Testing dataset of 100 A4C videos (200 ED and ES frames) labelled by 11 experts.  
  The mean annotation served as the ground truth for robust benchmarking.

---

## Network Architecture

![Bayesian U-Net Architecture](/assets/images/projects/unity/Efficient_Annotations/Unet_no_num.jpeg)

*Fig. 2 The customised Bayesian U-Net architecture.*

The **Monte Carlo Dropout (MCD) U-Net** with a depth of 5 was used for Bayesian active learning in LV segmentation tasks.  
Dropout layers enabled uncertainty estimation.  
TensorFlow was used for implementation on an Nvidia RTX3090 GPU.

---

## Study 1: Active Learning for Left Ventricle Segmentation

This study evaluated existing AL strategies (uncertainty and representativeness-based methods), establishing a strong baseline for further experiments.

**Datasets:** CAMUS and Unity  
**Framework:** Pool-based AL with iterative model retraining.  
**Uncertainty Methods:** Pixel-wise, Max Entropy, MCD Ensemble (Entropy, Variance, BALD)

**Implementation:**  
- Framework: TensorFlow + Keras  
- Loss: Binary Cross-Entropy  
- Optimiser: Adam (lr = 0.0001)  
- Epochs: 200 (early stopping, patience=10)  
- Batch size: 8  

**Results:**  
Max Entropy achieved **97.7%** of full dataset performance on CAMUS using **25%** of data, and **~99%** on Unity using **20%** of labels.

![AL Results on CAMUS and Unity](/assets/images/projects/unity/Efficient_Annotations/Merge_unc_5.jpg)
*Fig. 3 Active learning performance on CAMUS and Unity datasets.*

More details: [ScienceDirect Paper](https://www.sciencedirect.com/science/article/pii/S016926072400107X)  


---

## Study 2: Ensemble-Based Active Learning

This study explored ensemble-based AL using **different loss functions and architectures**.

**Approaches:**
- MCD Ensemble  
- Multi-Architecture Ensemble (U-Net, ResUNet, ResUNet++)  
- Multi-Loss Ensemble (BCE, Dice, BCE+Dice)

**Results:**  
- Multi-loss ensemble achieved >98% of full performance with <30% data on CAMUS.  
- On Unity, 98% performance was reached with only **7%** labelled samples.

![CAMUS Ensemble Results](/assets/images/projects/unity/Efficient_Annotations/Picture3.jpg)
*Ensemble-based AL results on CAMUS dataset.*

![Unity Ensemble Results](/assets/images/projects/unity/Efficient_Annotations/Picture4.jpg)
*Ensemble-based AL results on Unity dataset.*

More details: [Frontiers in Physiology, 2023](https://www.pure.ed.ac.uk/ws/portalfiles/portal/409667993/9782832512319_1_.PDF#page=103)  


---

## Study 3: Semi-Supervised Active Learning (SSAL)

This study proposes a **semi-supervised AL** framework to reduce manual annotation requirements by leveraging reliable pseudo-labels.

**Key Idea:**  
Select pseudo-labels from mid-range uncertainty images, validate reliability via threshold variance, and combine with expert annotations for retraining.

**Results:**  
Achieved **99% accuracy using only 7%** labelled data — reducing annotation effort by up to **93%**.

![SSAL Results](/assets/images/projects/unity/Efficient_Annotations/Picture5.png)
*Fig. 4 SSAL results showing efficient annotation performance.*

More details: [OpenReview Paper](https://openreview.net/pdf?id=g9T6yLuMJR)  


---

## Study 4: Diversity Sampling using Clustering-Based AL

Introduced an optimised clustering-based AL method using **Fuzzy C-Means (FCM)** to improve diversity sampling compared to Greedy K-Center and random sampling.

**Highlights:**
- Used PCA for feature-space dimensionality reduction.  
- Combines diversity and uncertainty for optimal image selection.  
- Results pending publication.

---

## Future Work

Future research directions include:
- Integrating AL with Semi-/Self-Supervised Learning for low-label settings  
- Developing verification methods for pseudo-label quality  
- Tackling noisy labels via robust AL-integrated denoising

---

## projects Team

- [**Professor Massoud Zolgharni**](https://www.uwl.ac.uk/staff/massoud-zolgharni)  
- [**Dr Nasim Dadashi Serej**](https://www.uwl.ac.uk/staff/nasim-dadashi-serej)  
- [**Dr Eman Alajrami**](https://www.researchgate.net/profile/Eman-Alajrami)  
- [**Dr Jevgeni Jevsikov**](https://twitter.com/intsav_?lang=en-gb)

---
