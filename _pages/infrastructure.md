---
title: "Resources"
layout: splash
permalink: /infrastructure/
header:
  overlay_color: "#000"
  overlay_filter: "0.6"
  overlay_image: /assets/images/landing_page/istockphoto-2024513576-2048x2048.jpg
  actions:
  caption: ""
excerpt: "We carry out our research using cutting-edge facilities and advanced resources that enable innovation in digital health, diagnostics, and therapeutics."
intro: 
  - excerpt: >
      THRIVE is built on a foundation of cutting-edge infrastructure designed to accelerate translational healthcare innovation. From high-performance computing and advanced medical imaging to bespoke data annotation platforms and biotherapeutic laboratories, our facilities empower interdisciplinary teams to move seamlessly from discovery to impact.
  - excerpt: >
      Central to our mission is secure, ethically governed access to clinical data and biobanking resources, enabling scalable, reproducible, and patient-centred research at regional, national, and global levels.

feature_row:
  - image_path: assets/images/infrastructure/istockphoto-497603996-612x612.jpg
    alt: "High-Performance Computing"
    title: "High-Performance Computing"
    excerpt: "GPU clusters and scalable systems for biomedical data analysis."
    link: "/infrastructure/#hpc"

  - image_path: assets/images/infrastructure/istockphoto-1289523973-612x612.jpg
    alt: "Data Labelling Platforms"
    title: "Data Labelling Platforms"
    excerpt: "Secure tools for expert annotation of clinical data."
    link: "/infrastructure/#data-labeling"

  - image_path: assets/images/infrastructure/istockphoto-1730823257-612x612.jpg
    alt: "Biobanks"
    title: "Biobanks"
    excerpt: "Curated biospecimens and health datasets for research."
    link: "/infrastructure/#biobanks"

  - image_path: assets/images/infrastructure/istockphoto-2143486801-612x612.jpg
    alt: "3D Bioprinting Suite"
    title: "3D Bioprinting Suite"
    excerpt: "Fabrication of tissue scaffolds and organ models."
    link: "/infrastructure/#bioprinting"

  - image_path: assets/images/infrastructure/istockphoto-1278644484-612x612.jpg
    alt: "Biotherapeutic Facilities"
    title: "Biotherapeutic Facilities"
    excerpt: "Labs for antibody engineering and protein expression."
    link: "/infrastructure/#biotherapeutic"

  - image_path: assets/images/infrastructure/istockphoto-1184471397-612x612.jpg
    alt: "Medical Imaging"
    title: "Medical Imaging"
    excerpt: "Advanced ultrasound, cardiac echo, and optical systems."
    link: "/infrastructure/#imaging"
    

feature_row2:
  - image_path: assets/images/infrastructure/istockphoto-497603996-612x612.jpg
    alt: "High-Performance Computing"
    title: "High-Performance Computing"
    excerpt: >
      We provide GPU clusters, high-capacity storage, and cloud-integrated systems for scalable biomedical data analysis and model training. These resources enable rapid AI model development, large-scale data processing, and secure handling of clinical datasets for translational healthcare research.

feature_row3:
  - image_path: assets/images/infrastructure/istockphoto-1289523973-612x612.jpg
    alt: "Data Labelling Platforms"
    title: "Data Labelling Platforms"
    excerpt: >
        A suite of secure, purpose-built platforms for expert annotation of clinical signals and images. These tools support collaborative workflows and integrate with both cloud and NAS environments.<br><br>
        – <a href="https://unityimaging.net/" target="_blank">Unity</a>: browser-based annotation of echocardiographic sequences<br>
        – <a href="https://www.pulsenote.net/" target="_blank">PulseNote</a>: multimodal annotation of biological signals such as ECG and EEG

feature_row4:
  - image_path: assets/images/infrastructure/istockphoto-1730823257-612x612.jpg
    alt: "Biobanks"
    title: "Biobanks"
    excerpt: >
      Our well-curated biobanks and structured health datasets provide researchers with ethically governed access to biospecimens, imaging, and linked clinical data.<br><br>
      – <a href="/datasets/" target="_blank">Explore our Biobank project</a>

feature_row5:
  - image_path: assets/images/infrastructure/istockphoto-2143486801-612x612.jpg
    alt: "3D Bioprinting Suite"
    title: "3D Bioprinting Suite"
    excerpt: >
        Our bioprinting facility enables the fabrication of tissue scaffolds and organ models to support regenerative medicine and therapeutic development. These technologies are used in conjunction with imaging and drug delivery platforms.

feature_row6:
  - image_path: assets/images/infrastructure/istockphoto-1278644484-612x612.jpg
    alt: "Biotherapeutic Facilities"
    title: "Biotherapeutic Facilities"
    excerpt: "Our biotherapeutic labs include clean benches, incubators, and protein purification systems to support advanced cell culture, antibody engineering, and therapeutic development."

feature_row7:
  - image_path: assets/images/infrastructure/istockphoto-1184471397-612x612.jpg
    alt: "Medical Imaging"
    title: "Medical Imaging"
    excerpt: "We support imaging innovation through advanced ultrasound, cardiac echo, and optical systems—integrated with AI-driven analytics for translational research."
---

{% include feature_row id="intro" type="center" %}
{% include feature_row %}

<div id="hpc">
  {% include feature_row id="feature_row2" type="left" %}
</div>

<div id="data-labeling">
  {% include feature_row id="feature_row3" type="right" %}
</div>

<div id="biobanks">
  {% include feature_row id="feature_row4" type="left" %}
</div>

<div id="bioprinting">
  {% include feature_row id="feature_row5" type="right" %}
</div>

<div id="biotherapeutic">
  {% include feature_row id="feature_row6" type="left" %}
</div>

<div id="imaging">
  {% include feature_row id="feature_row7" type="center" %}
</div>



