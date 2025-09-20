---
layout: single
title: UNITY EchoPhase — Multibeat Echocardiographic Phase Detection
author_profile: true
permalink: /datasets/EchoPhase
toc: true
toc_sticky: true
---

<!-- # UNITY EchoPhase — Multibeat Echocardiographic Phase Detection -->

Our team has developed an automated model capable of identifying multiple **end-systolic (ES)** and **end-diastolic (ED)** frames in echocardiographic videos of arbitrary length with performance indistinguishable from human experts, but with significantly shorter processing time.  

---

## Dataset

We used **three datasets** in this study:  
- 1 for training & testing (PACS-dataset)  
- 2 for testing only (MultiBeat-dataset, EchoNet-dataset)  

We have made our **PACS patient dataset and models publicly available**, thereby providing a benchmark for future studies and allowing for external validation of our approach.  

Additionally, we used annotations (ground-truth) from several cardiologist experts, allowing for the examination of **inter- and intra-observer variability**.  

---

## Dataset Summary

| Attribute | PACS-dataset | MultiBeat-dataset | EchoNet-dataset |
|-----------|--------------|-------------------|-----------------|
| **Source** | Made **public** for this study (NHS Trust PACS Archives, Imperial College Healthcare) | **Private** (St Mary’s Hospital) | **Public** (Stanford University Hospital, [EchoNet](https://echonet.github.io/dynamic)) |
| **Ultrasound machine** | Philips Healthcare (iE33 xMATRIX) | GE Healthcare (Vivid.i) and Philips (iE33 xMATRIX) | Siemens Healthineers (Acuson SC2000), Philips (iE33, Epiq 5G, Epiq 7C) |
| **# Videos/Patients** | 1,000 | 40 | 10,030 |
| **Length of videos** | 1–3 heartbeats | ≥10 heartbeats | 1 heartbeat |
| **Ground-truth** | 2 annotations by 2 experts | 6 annotations by 5 experts (1 twice) | 1 annotation |
| **Original size** | (300–768)×(400–1024) | 422×636 | 112×112 |
| **Frame rate (fps)** | 23–102 | 52–80 | 50 |
| **Format** | DICOM | DICOM | AVI |
| **Use** | Training / Testing | Testing | Testing |

---

## Network Architecture

We adopted **Long-term Recurrent Convolutional Networks (CNN+LSTM)** for analysing echocardiographic videos as visual time-series.  

**Model components:**  
1. **CNN unit** — encodes spatial information per frame (ResNet50, InceptionV3, DenseNet, InceptionResNetV2 used)  
2. **LSTM units** — decode temporal information across frames (1–4 stacked layers explored)  
3. **Regression unit** — predicts ED/ES frame locations per timestep  

The model is spatially and temporally deep, capable of processing multi-beat sequences.  

---

## Implementation

- Framework: **TensorFlow 2.0**  
- Hardware: **NVIDIA GTX 1080 Ti GPU**  
- Training: **70 epochs**, batch size = 2  
- Augmentation: rotation (±10°), cropping (0–10 px)  
- Data split (PACS): **60% train / 20% validation / 20% test**  
- Sliding window: **30 frames** with stride 1 for prediction  

Code is available here:  
👉 [GitHub – EchoPhaseDetection](https://github.com/intsav/EchoPhaseDetection)  

---

## Evaluation Metrics

Performance measured via **Average Absolute Frame Difference (aaFD)** between predicted vs. annotated ED/ES frames.  

Also reported:  
- Signed mean error (μ)  
- Standard deviation (σ)  

---

## Results

- **PACS-dataset:**  
  - Human annotation: **26±11s per event**  
  - Model prediction: **<1.5s per event (GPU)**  
  - Model performance comparable to inter-observer variability.  

- **MultiBeat-dataset:**  
  - Annotated by 5 experts (1 twice for intra-observer variability).  
  - Model discrepancy falls **within the range of inter-observer variability**.  

- **EchoNet-dataset:**  
  - Tested on **9,190 videos** (after exclusions).  
  - Results:  
    - aaFD = 2.30 (ED), 3.49 (ES)  
    - Mean frame difference = 0.16±3.56 (ED), 2.64±3.59 (ES)  

---

## Request Dataset Access

We have made the **PACS-dataset** public for benchmarking.  

The dataset includes:  
- 1,000 videos (different patients, 2010–2020)  
- Ethical approval from the Health Regulatory Agency (IRAS ID XXXX)  
- ED and ES labels from two independent cardiology experts  

**If you wish to request access, please complete the form below:**  

<form action="https://formspree.io/f/xvojyeao" method="POST">
  <input type="text" name="name" placeholder="Your Name" required><br><br>
  <input type="email" name="email" placeholder="Your Email" required><br><br>
  <input type="text" name="institution" placeholder="Institution/Workplace" required><br><br>
  <input type="text" name="dataset" value="EchoPhase (PACS)" readonly>
  <textarea name="message" rows="5" placeholder="Please let us know why you would like access to this dataset and what you intend to use it for" required></textarea><br><br>
  <button type="submit" class="btn-custom">Submit</button>
</form>
<style>
.btn-custom {
  background-color: #0078D7;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
}
.btn-custom:hover {
  background-color: #005a9e;
}
</style>

---

## License

This work is licensed under a  
[Creative Commons BY-NC-ND 4.0 International License](http://creativecommons.org/licenses/by-nc-nd/4.0/).  

**Citation:**  
Lane, Elisabeth S., Neda Azarmehr, Jevgeni Jevsikov, James P. Howard, Matthew J. Shun-Shin, Graham D. Cole, Darrel P. Francis, and Massoud Zolgharni.  
*"Multibeat echocardiographic phase detection using deep neural networks."*  
Computers in Biology and Medicine 133 (2021): 104373.  

---

## Project Team

- [Elisabeth S Lane](https://elisabethlane.github.io/)  
- [Jevgeni Jevsikov](https://twitter.com/intsav_?lang=en-gb)  
- [Neda Azarmehr](https://www.uwl.ac.uk/staff/neda-azarmehr)  
- [Massoud Zolgharni](https://www.uwl.ac.uk/staff/massoud-zolgharni)  

---

## References

- [Multibeat Echocardiographic Phase Detection Using Deep Neural Networks — Computers in Biology and Medicine](https://www.sciencedirect.com/science/article/abs/pii/S0010482521001670)  
