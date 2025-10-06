---
title: "Multibeat Echocardiographic Phase Detection Using Deep Neural Networks"
toc: false
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/landing_page/istockphoto-2194245609-2048x2048.jpg
excerpt: "Automated identification of end-systolic and end-diastolic frames in echocardiographic videos using deep neural networks."
---

<link rel="stylesheet" href="{{ '/assets/css/datasets.css' | relative_url }}">
<div class="page-wrap" markdown="1">

## Introduction

Our team has developed an **automated deep-learning model** that can identify multiple **end-systolic (ES)** and **end-diastolic (ED)** frames in echocardiographic videos of arbitrary length — with performance comparable to human experts, but at a **fraction of the time**.

![Echocardiogram Example](/assets/images/projects/unity/phase_detection/echo.gif)  
*Example echocardiographic video used for model training and evaluation.*

---

## Dataset

We used **three datasets** in this study: one for training/testing, and two for testing only.  
Our own **UNITY EchoPhase dataset** is publicly available and serves as a benchmark for future studies.

It contains 1,000 anonymised echocardiographic videos annotated by two cardiology experts, captured between 2010–2020 from the **Imperial College Healthcare NHS Trust** archives.

[**Access UNITY EchoPhase Dataset →**]({{ '/datasets/EchoPhase' | relative_url }}){: .btn .btn--primary .btn--large}

---

### Dataset Summary

| **Attribute** | **UNITY EchoPhase** |
|----------------|--------------------|
| **Source** | NHS Trust PACS Archives, Imperial College Healthcare |
| **Ultrasound Machines** | Philips iE33 xMATRIX, GE Vivid series |
| **Videos** | 1,000 (2010–2020) |
| **Length** | 1–3 heartbeats |
| **Annotations** | 2 independent expert annotations (ED & ES) |
| **Resolution** | Downsampled to 112×112 pixels |
| **Frame Rate** | 23–102 fps |
| **Format** | DICOM → AVI |
| **Use** | Training & Testing |

---

## Network Architecture

We treat echocardiographic videos as **visual time-series** and employ a **CNN–LSTM hybrid model** to capture both spatial and temporal dependencies.

![Architecture Overview](/assets/images/projects/unity/phase_detection/echo_architecture.png)  
*Overview of the CNN-LSTM framework used for multibeat phase detection.*

### Key Components

1. **CNN Encoder** – Extracts spatial features from individual frames using backbones such as *ResNet50*, *InceptionV3*, *DenseNet*, and *InceptionResNetV2*.  
2. **LSTM Decoder** – Captures temporal relationships across sequential frames to understand cardiac motion.  
3. **Regression Head** – Predicts the probability of ED and ES events for each frame.

---

## Implementation

The models were implemented using **TensorFlow 2.0**, trained on an **NVIDIA GeForce GTX 1080 Ti GPU**.

**Training configuration:**
- **Epochs:** 70  
- **Batch size:** 2  
- **Data split:** 60% training, 20% validation, 20% testing  
- **Augmentation:** Random rotations (±10°), spatial cropping (≤10 px)  
- **Windowing:** 30-frame sliding window, stride 1  

A two-layer LSTM stack was found optimal across all experiments.

[**View Code on GitHub →**](https://github.com/intsav/EchoPhaseDetection){: .btn .btn--primary .btn--large}

---

## Evaluation Metrics

Model performance was measured using the **Average Absolute Frame Difference (aaFD)** — the difference in frames between predicted and true ED/ES events.

![aaFD Metric](/assets/images/projects/unity/phase_detection/aaFD.png)  
*Average Absolute Frame Difference (aaFD) used for temporal error evaluation.*

---

## Results

### PACS Dataset

Manual ED/ES annotation by human experts took an average of **26 ± 11 seconds** per event.  
Our model reduced this to **< 1.5 seconds**, while maintaining expert-level precision.

![Example Predictions](/assets/images/projects/unity/phase_detection/pacs-examples.png)  
*Predicted cardiac phases (ED/ES) compared to expert annotations.*

![PACS Results Table](/assets/images/projects/unity/phase_detection/pacs-results.png)  
*Comparison between model predictions and operator annotations.*

---

### Comparison with Existing Studies

![Reported Results](/assets/images/projects/unity/phase_detection/previously-reported-results.png)  
*Comparison of performance with previously published deep learning approaches.*

Our model outperformed most existing methods while removing pre-processing steps and enabling multi-beat detection in a single long video — a unique capability among published approaches.

---

### MultiBeat Dataset

Five experts annotated the **MultiBeat dataset**; one repeated the process for intra-observer variability evaluation.

![MultiBeat Results](/assets/images/projects/unity/phase_detection/multibeat-results.png)  
*Model versus human operator variability.*

Results:  
- **Intra-observer variability:**  
  - ED: −0.22 ± 2.76  
  - ES: 0.25 ± 3.75  
- **Inter-observer range:**  
  - ED: [−0.87, −5.51] ± [2.29, 4.26]  
  - ES: [−0.97, −3.46] ± [3.67, 4.68]  

Model discrepancies fell *within human inter-observer variability*, proving comparable reliability.

---

### EchoNet Dataset

To validate generalisation, we tested the trained model on the **public EchoNet dataset** (Stanford University) **without retraining**.

Results (9,190 videos):  
- **aaFD:** 2.30 (ED), 3.49 (ES)  
- **Mean frame difference:** 0.16 ± 3.56 (ED), 2.64 ± 3.59 (ES)

Performance was consistent across unseen data, confirming strong generalisation.

---

## Contact

For research queries or dataset access, please contact:  
📧 **[Elisabeth.Lane@uwl.ac.uk](mailto:Elisabeth.Lane@uwl.ac.uk)**

---

## Project Team

- [**Elisabeth S Lane**](https://elisabethlane.github.io/)  
- [**Jevgeni Jevsikov**](https://twitter.com/intsav_?lang=en-gb)  
- [**Neda Azarmehr**](https://www.uwl.ac.uk/staff/neda-azarmehr)  
- [**Professor Massoud Zolgharni**](https://www.uwl.ac.uk/staff/massoud-zolgharni)

---

## References

- [**Multibeat Echocardiographic Phase Detection Using Deep Neural Networks — Computers in Biology and Medicine**](https://www.sciencedirect.com/science/article/abs/pii/S0010482521001670)

---

## License

![Creative Commons License](https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png)  
This work is licensed under a [**Creative Commons Attribution–NonCommercial–NoDerivatives 4.0 International License**](http://creativecommons.org/licenses/by-nc-nd/4.0/).

If you use this dataset or cite the paper, please reference:  
> *Lane, Elisabeth S., Neda Azarmehr, Jevgeni Jevsikov, James P. Howard, Matthew J. Shun-Shin, Graham D. Cole, Darrel P. Francis, and Massoud Zolgharni. "Multibeat echocardiographic phase detection using deep neural networks." Computers in Biology and Medicine 133 (2021): 104373.*
