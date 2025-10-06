---
title: "Development of Optimisation-Based Approaches for Speckle Tracking"
toc: false
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/landing_page/istockphoto-2194245609-2048x2048.jpg
excerpt: "An optimisation-based block matching algorithm for speckle tracking in echocardiography, enabling accurate displacement estimation and strain analysis."
---

## Introduction

Our team has developed an **optimised-based block matching (BM) algorithm** to perform speckle tracking iteratively.  
In this project, a new displacement estimation method is introduced by formulating the tracking as an **optimisation problem** that jointly penalises **intensity disparity** and **motion discontinuity** — making it more robust to signal decorrelation than previous approaches.  

The speckle tracking algorithm combines the BM algorithm with a **smoothness constraint** for a neighbourhood of kernels.  
The proposed technique was evaluated using both **healthy** and **ischaemic** cases.

---

## Dataset

![Echocardiogram Example](/assets/images/projects/unity/speckle_tracking/dataset.PNG)  
*Example synthetic echocardiogram used for algorithm evaluation.*

We used a **publicly available synthetic echocardiographic dataset** with known ground-truth (exact solutions) from several major vendors:  
**GE, Hitachi-Aloka, Esaote, Philips, Samsung, Siemens, and Toshiba.**

To obtain realistic speckle texture for each vendor, scattering amplitude was sampled from **2D real clinical recordings** as templates.  
An **electromechanical cardiac model** was then used to relocate scatterers within the myocardium to simulate realistic motion.  
Synthetic probe settings such as **scan depth**, **focus depth**, and **beam density** were defined in collaboration with vendors under NDA.

[**Download the dataset →**](https://ieeexplore.ieee.org/document/8234682)

---

## Methods

### Standard Block Matching

Classic **BM** begins by placing a window (kernel) on one frame and searching for the most similar pattern in the next frame using a similarity metric such as **Sum of Squared Differences (SSD)**.  
Each kernel represents a cluster of speckles acting as a **trackable fingerprint**.  

In the reference frame (time *t₀*), the region of interest (blue square) is defined; in the next frame (*t₁*), the algorithm searches for the best match.  
The resulting displacement vector estimates motion between frames. Repeating this across the sequence yields a **dense displacement map**.  

![BM Tracking Example](/assets/images/projects/unity/speckle_tracking/fig1.PNG)  
*Fig. 1 — Speckle tracking using BM, showing region matching across frames.*

This process repeats over the image sequence to generate a vector field across space and time.

### Proposed Optimisation-Based Block Matching Approach

A new displacement estimation method formulates the tracking as an **optimisation problem** that jointly penalises:
1. **Intensity disparity** between kernels  
2. **Motion discontinuity** between neighbours  

This minimises the cost function and enforces a smooth, realistic motion field.

**Tracking Parameters**
- Kernel size: **11×11 pixels**  
- Spacing: **1 pixel** (dense solution)  
- Iterations: **20**  
- Regularisation parameter λ = **0.3**  
- Neighbourhood: **45×45 kernels**

Larger λ values over-regularise motion, producing overly uniform fields; smaller values favour local variations.  
A threshold for convergence was applied when additional iterations produced negligible updates.

![Optimisation Flowchart](/assets/images/projects/unity/speckle_tracking/fig2.PNG)  
*Fig. 2 — Flowchart showing steps in the proposed optimisation-based tracking algorithm.*

---

## Results

### Displacement Vector Field

The algorithm generated a **dense displacement field** for all vendor datasets.  
Figure 3 shows an example A4C view from a healthy Siemens sequence at **peak systole**, alongside the corresponding ground truth.

![A4C Example](/assets/images/projects/unity/speckle_tracking/fig3.PNG)  
*Fig. 3 — Example A4C view from the Siemens sequence during rapid ejection (peak systole).*

The optimised BM method reduces noise and discontinuities compared to standard BM, producing smoother displacement maps more consistent with physiological motion.

![Error Boxplots](/assets/images/projects/unity/speckle_tracking/fig4.PNG)  
*Fig. 4 — Boxplots of error for healthy Siemens sequences.*

Displacement error distributions across all vendors show the proposed approach yields significantly lower variance and bias.

---

### Regional and Global Strain Measurements

Using estimated displacement fields, **regional (segmental) longitudinal strain values** were calculated.  

![Strain Violin Plots](/assets/images/projects/unity/speckle_tracking/fig6.PNG)  
*Fig. 6 — Top: LV segmentation regions overlaid on A4C view.  
Bottom: Violin plots of error in segmental strain for healthy Siemens data.*

The plots show mean (black line) and median (green line) values; boxes represent quartiles, and whiskers indicate 2.5%–97.5% percentiles.  
Results confirm strong agreement with ground-truth strain values.

---

## Observations

- The **optimised BM** approach provides superior **motion continuity** and **noise resilience**.  
- Displacement and strain errors are consistently **lower** than standard BM.  
- Outputs demonstrate accuracy sufficient for **clinical-grade speckle tracking** analysis.

---

## Project Team

- [**Neda Azarmehr**](https://www.uwl.ac.uk/staff/neda-azarmehr)  
- [**Professor Massoud Zolgharni**](https://www.uwl.ac.uk/staff/massoud-zolgharni)

---

## References

- [Development of Optimisation-Based Approaches for Speckle Tracking — *Medical & Biological Engineering & Computing*](https://link.springer.com/article/10.1007/s11517-020-02142-8)

---

<!-- {: .btn .btn--primary .btn--large} -->
[Read Full Paper →](https://link.springer.com/article/10.1007/s11517-020-02142-8)
