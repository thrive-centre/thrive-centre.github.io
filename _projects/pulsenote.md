---
title: "PulseNote"
toc: false
# permalink : /projects/echoforge/
header:
  overlay_color: "#000"
  overlay_filter: "0.6"
  overlay_image: /assets/images/projects/ECG.jpeg
  caption: ""
excerpt: "A comprehensive web-based annotation platform designed for physiological time series signal analysis"
---
# PulseNote

![PulseNote Logo](/assets/images/projects/PulseNote.jpg){: .align-center}

## Overview

PulseNote is a comprehensive web-based annotation platform designed for physiological time series signal analysis, with a primary focus on electrocardiogram (ECG) data labelling. The platform addresses the critical infrastructure gap in collaborative bio-signal annotation, enabling researchers and clinicians to efficiently create high-quality datasets for machine learning applications.

## Key Features

### Multi-Modal Signal Support
- Native support for multiple signal formats (WFDB, EDF, JSON, CSV)
- Flexible data import and export capabilities
- Compatible with standard physiological signal databases

### Collaborative Annotation
- Real-time multi-user collaboration
- Role-based access control (Administrator, Privileged, Normal)
- Conflict resolution mechanisms for concurrent annotations
- User authentication and project management

### Versatile Annotation Types
- **Point-based annotations**: Mark specific events or features
- **Interval selection**: Label temporal segments
- **Angle measurement**: Quantify morphological characteristics
- **Region-based annotations**: Define complex patterns

### Customizable Layouts
Seven specialized visualization layouts optimized for different annotation tasks:
- Standard multi-lead view
- Single-lead focused view
- Comparison view for multiple signals
- Feature extraction view
- And more...

### 🔍 Interactive Visualization
- Zoomable, scrollable signal plots using Plotly.js
- High-performance rendering for long-duration recordings
- Responsive design for various screen sizes
- Touch screen support (in development)

### AI Integration (in development)
- Display machine learning model predictions
- Interactive learning environment for clinician training
- Active learning workflows for efficient annotation
- Model verification and validation support

### Quality Assurance
- Inter-rater reliability assessment tools
- Automated consistency checking
- Expert review workflows for challenging cases
- Annotation versioning and history tracking

## Current Deployment

PulseNote is actively supporting multiple research projects with Multiple clinical research teams collaborating.

![Main Page Screenshot](/assets/images/projects/pulsenote-main.png){: .align-center}


## Use Cases

### Clinical Research
- Rare cardiac arrhythmia detection (Brugada syndrome, Long QT)
- ECG feature extraction and validation
- Multi-center data collection and standardization

### Machine Learning Development
- Dataset curation for deep learning models
- Active learning and model-in-the-loop annotation
- Ground truth validation for AI systems

### Medical Education
- Interactive ECG interpretation training
- Comparison of expert and AI interpretations
- Wiki framework for educational resources

## Technical Architecture

- **Frontend**: Pure JavaScript with Plotly.js for visualization
- **Backend**: Flask REST API with WebSocket support
- **Database**: MongoDB for flexible schema management
- **Authentication**: Firebase framework
- **Future Migration**: Django backend, Svelte frontend (planned)

## Annotation Workflows

### Point Selection
*Precise R-peak detection and landmark annotation*

### Interval Labelling
*Temporal segment annotation for arrhythmia episodes*

### Angle Measurement
*Quantitative morphology assessment (β angle measurement for Brugada patterns)*

![Annotation Layout](/assets/images/projects/pulsenote-layout.png){: .align-center}

## Getting Started

### For Researchers
1. Create a project with custom annotation schema
2. Upload your signal data in supported formats
3. Invite collaborators with appropriate access levels
4. Begin annotation with built-in quality controls
5. Export labeled datasets for analysis

### For Clinicians
1. Access assigned projects through secure login
2. Review interactive signal visualizations
3. Apply clinical expertise for accurate labelling
4. Compare interpretations with AI predictions
5. Participate in expert review workflows

## Educational Features

- **Interactive Guide**: Step-by-step tutorials for new users
- **Wiki Framework**: Upload and share educational documents
- **User-Friendly Interface**: Intuitive design based on clinician feedback
- **Iterative Improvements**: Regular updates based on user needs

## Performance Metrics

Based on usability testing:
- **Average loading time**: 0.13 minutes per 10-second ECG segment
- **User satisfaction**: High ratings for interface intuitiveness
- **Collaboration efficiency**: Significant reduction in annotation time through multi-user workflows

## Roadmap

### Near-Term Enhancements
- Automated quality checking algorithms
- Batch processing capabilities
- Enhanced touch screen support
- Advanced statistical reporting

### Long-Term Vision
- Integration with learning frameworks
- Support for additional biosignal types (EEG, EMG)
- Cloud-native architecture for scalability
- Mobile application development

## Research Impact

PulseNote is actively supporting:
- PhD research in AI-based arrhythmia detection
- Multi-institutional collaborative studies
- Advancement of rare disease research through efficient dataset creation

## Community and Support

PulseNote is developed as part of THRIVE is a broader research initiative to advance AI applications in cardiac electrophysiology. The platform emphasizes:
- Open collaboration across institutions
- Standardized annotation protocols
- High-quality dataset creation
- Reproducible research practices

---

## Contact and Collaboration

For access, collaboration opportunities, or technical inquiries, please contact the research team.

---

*PulseNote - Advancing biosignal research through collaborative, intelligent annotation*
