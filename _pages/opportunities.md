---
permalink: /opportunities/
title: "Opportunities"
excerpt: "Explanatory details"
author_profile: true
toc: false
last_modified_at: 2026-06-30T11:59:26-04:00
---


THRIVE is committed to training the next generation of leaders in translational healthcare research.
Beyond its interdisciplinary research programmes, THRIVE offers comprehensive PhD and MSc opportunities for students from diverse backgrounds, including biomedical sciences, engineering, computing, and clinical disciplines.

Our training pathways prepare researchers to lead in areas such as artificial intelligence, biotherapeutics, medical imaging, and health systems innovation.

Through hands-on research, expert supervision, and cross-sector collaboration, THRIVE equips students with the skills to translate discovery into meaningful healthcare impact—whether in academia, industry, or clinical practice.



<a href="/vacancies/vacancies/" target="_blank">List of available PhD projects</a>  
<a href="https://www.intsav.com/internship.html" target="_blank">List of available Internship projects</a>  
<a href="https://www.intsav.com/MSc.html" target="_blank">List of available MSc projects</a>  
<a href="https://www.intsav.com/UG.html" target="_blank">List of available Undergraduate projects</a>




{% capture details-1 %}
You should have an honours degree (2:2 or above) from a UK university or equivalent in computing or other STEM-based disciplines, with a significant level of computing and programming. 

We will also consider equivalent professional qualifications or a relevant HND provided you can demonstrate relevant work experience. In this case you will have to complete an interview with your application and some optional modules may not be available without a first degree in computing. All applications are considered individually. 

[Apply here](https://www.uwl.ac.uk/course/postgraduate/artificial-intelligence)
{% endcapture %}


{% capture details-2 %}
The minimum entry requirements for a research degree are:

- **Undergraduate**: a good first degree (First Class or Upper Second Class), or equivalent qualification in a relevant field
- **Postgraduate**: a Masters Degree (MA, MSc, MBA or MRes) with Merit, or equivalent postgraduate or research experience.  


[Apply here](https://www.uwl.ac.uk/course/research/translational-medicine)
{% endcapture %}

{% capture details-3 %}
The minimum entry requirements for a research degree are:

- **Undergraduate**: a good first degree (First Class or Upper Second Class), or equivalent qualification in a relevant field
- **Postgraduate**: a Masters Degree (MA, MSc, MBA or MRes) with Merit, or equivalent postgraduate or research experience. 

[Apply here](https://www.uwl.ac.uk/course/research/computer-science)
{% endcapture %}






{% capture details-10 %}
We're looking for undergraduate and graduate students interested in:

- **Machine Learning Research**: Work on cutting-edge ML algorithms
- **Natural Language Processing**: Develop language models and chatbots  
- **Computer Vision**: Image recognition and processing projects

**Requirements:**
- Strong programming skills in Python
- Knowledge of TensorFlow or PyTorch
- GPA 3.5 or higher

[Apply here](/apply) | [Contact Dr. Smith](mailto:smith@university.edu)
{% endcapture %}


{% capture details-11 %}
## You can add a header

You can add text within a collapsed section.

[A local link to home](/)


[An external link](https://example.com)

And even codes:
```python
print("Hello World")
```
## Full-Stack Development Position

Join our team building the next generation of web applications!

**What you'll do:**
- Build responsive web interfaces
- Develop REST APIs
- Work with modern frameworks like React and Node.js

**Qualifications:**
- Experience with JavaScript, HTML, CSS
- Familiarity with Git version control
- Portfolio of previous projects

```javascript
// Example of what you might work on
const api = {
  endpoint: '/api/v1/opportunities',
  method: 'GET'
};
```

**Apply by:** December 15th, 2025


{% endcapture %}

<div id="opportunities">
<details> <summary>MSc Artificial Intelligence</summary> {{ details-1 | markdownify }} </details>
<details> <summary>PhD Translational Medicine</summary> {{ details-2 | markdownify }} </details>
<details> <summary>PhD Computer Science</summary> {{ details-3 | markdownify }} </details>
</div>

<style>
/* Enhanced details animation styles */
details {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1em;
  margin-bottom: 1em;
  background-color: #f9f9f9;
  transition: all 0.3s ease;
  overflow: hidden;
}

details:hover {
  border-color: #999;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

details summary {
  font-weight: bold;
  cursor: pointer;
  outline: none;
  padding: 0.5em 0;
  transition: all 0.2s ease;
  position: relative;
}

details summary:hover {
  color: #0066cc;
}

/* Arrow animation */
details summary::marker {
  content: '';
}

details summary::before {
  content: '▶';
  display: inline-block;
  margin-right: 0.5em;
  transition: transform 0.3s ease;
  color: #666;
}

details[open] summary::before {
  transform: rotate(90deg);
  color: #0066cc;
}

/* Content animation */
details > *:not(summary) {
  animation: slideDown 0.3s ease-out;
  transform-origin: top;
}

details:not([open]) > *:not(summary) {
  animation: slideUp 0.2s ease-in;
}

/* Keyframe animations */
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
    max-height: 0;
  }
  to {
    opacity: 1;
    transform: translateY(0);
    max-height: 1000px;
  }
}

@keyframes slideUp {
  from {
    opacity: 1;
    transform: translateY(0);
    max-height: 1000px;
  }
  to {
    opacity: 0;
    transform: translateY(-10px);
    max-height: 0;
  }
}

/* Smooth height transition alternative (more reliable) */
details .content-wrapper {
  overflow: hidden;
  transition: max-height 0.3s ease, opacity 0.3s ease;
}

/* Active state styling */
details[open] {
  border-color: #0066cc;
  background-color: #f0f7ff;
}

</style>

<script>
document.addEventListener('DOMContentLoaded', () => {
  const detailsList = document.querySelectorAll('details');

  detailsList.forEach((targetDetail) => {
    targetDetail.addEventListener('toggle', () => {
      if (targetDetail.open) {
        detailsList.forEach((detail) => {
          if (detail !== targetDetail && detail.open) {
            detail.removeAttribute('open');
          }
        });
      }
    });
  });
});
</script>
