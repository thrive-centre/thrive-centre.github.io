---
title: "sclerosis"
toc: false
header:
  overlay_color: "#000"
  overlay_filter: "0.6"
  overlay_image: /assets/images/projects/istockphoto-1086330560-612x612.jpg
  caption: ""
excerpt: "An AI-driven framework for detecting early-stage Multiple Sclerosis using retinal OCT scans, leveraging multiple instance learning, contrastive learning, and federated modelling."
intro:
  - excerpt: >
      This project aims to develop interpretable and generalisable AI models to detect Multiple Sclerosis (MS) using retinal OCT scans, reducing reliance on invasive diagnostics like MRI or lumbar puncture.
  - excerpt: >
      It explores advanced machine learning techniques including multiple instance learning (MIL), contrastive learning, and federated learning to classify retinal changes linked to MS while preserving patient privacy.
---

## Project Description

Multiple Sclerosis (MS) is a chronic, immune-mediated neurodegenerative disease of the central nervous system that often manifests with subtle early symptoms. Early diagnosis is vital but currently relies on invasive, expensive, and time-consuming methods such as brain MRI and lumbar puncture.

This project proposes a **non-invasive, AI-powered diagnostic alternative** based on retinal imaging. Retinal Optical Coherence Tomography (OCT) provides detailed, cross-sectional views of retinal layers—offering a unique window into neurodegeneration, as the retina shares embryological origins with the brain and spinal cord.

## Goals and Innovation

This work aims to establish a **computational framework for early MS detection**, combining:

- **Multiple Instance Learning (MIL)** to enable image-level MS classification using weak (scan-level) labels, accommodating intra-patient variability and noise.
- **Contrastive Learning** to enhance representation learning and boost generalisation across diverse data sources.
- **Attention-Based Pooling** to highlight the most informative regions in the scan for interpretability and clinical insight.
- **Statistical Harmonisation** to address variability introduced by different OCT scanners and acquisition protocols.
- **Federated Learning** to train models collaboratively across multiple institutions without centralising data—preserving privacy and legal compliance.

## Clinical and Technical Impact

This work will:

- Enable **earlier, less invasive screening for MS**, especially for patients with suspected neurodegenerative symptoms but inconclusive MRI or CSF findings.
- **Democratise access** to diagnostic tools using widely available OCT devices in clinics and optometry practices.
- Contribute to **interpretable AI in neurology**, where understanding the basis of predictions is essential for clinical adoption.
- Create a **scalable, federated framework** for deployment across multiple NHS Trusts and global research collaborators.

## Technical Stack

- OCT image preprocessing using retinal layer segmentation and spatial normalisation.
- MIL architecture with instance-level embedding and global bag-level classification.
- Supervised contrastive loss and batch harmonisation modules.
- Federated learning orchestration using secure parameter aggregation protocols.
- Evaluation across public datasets (e.g., OCTAGON, MS-OCT) and prospective data from partner sites.

## Collaborators

- **THRIVE Centre** – University of West London  
- Clinical neurologists and imaging specialists (prospective NHS Trust collaborators)  
- External research data consortia contributing OCT datasets  

---
