---
title: "EchoForge"
toc: false
layout: splash
permalink: /projects/echoforge-html/
header:
  overlay_color: "#000"
  overlay_filter: "0.6"
  overlay_image: /assets/images/projects/istockphoto-2147671579-612x612.jpg
  caption: ""
excerpt: "Use AI for echocardiography, with or without coding. Analyse echo videos through an easy-to-use web interface, or download the same pretrained models and run them from Python."
---

<style>
:root {
  --blue: #0068B3;
  --blue-deep: #00508A;
  --ink: #3D4144;
  --ink-strong: #23272A;
  --link: #2F7D95;
  --line: #E1E6E8;
  --soft: #F2F6F9;
  --white: #FFFFFF;
  --navy: #0C2236;
  --font: -apple-system, "system-ui", Roboto, "Segoe UI", "Helvetica Neue", "Lucida Grande", Arial, sans-serif;
  --mono: ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace;
}
.in { max-width: 1040px; margin: 0 auto; }
section { padding-block: 64px 0; }
.intro { max-width: 68ch; display: grid; gap: 10px; margin-bottom: 28px; }
.intro p { color: var(--ink); }
.rule { border: 0; border-top: 1px solid var(--line); margin: 0; }

.ways { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px; }
.way { border: 1px solid var(--line); border-top: 4px solid var(--blue); padding: 26px; display: grid; gap: 12px; align-content: start; min-width: 0; }
.way.studio { background: var(--soft); }
.way .eg { font-size: 0.92rem; }
.way .eg b { color: var(--ink-strong); }
.way .cta { margin-top: 6px; }

.cards { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px; }
.card { border: 1px solid var(--line); border-top: 4px solid var(--blue); background: var(--white); display: grid; grid-template-rows: auto 1fr; min-width: 0; }
.thumb { background: var(--navy); padding: 12px; border-bottom: 1px solid var(--line); }
.thumb svg { width: 100%; height: 120px; display: block; }
.body { padding: 20px; display: grid; gap: 10px; align-content: start; }
.tag { font: 700 0.72rem/1 var(--font); letter-spacing: 0.08em; text-transform: uppercase; color: var(--blue); }
.io { font-size: 0.9rem; display: grid; grid-template-columns: auto 1fr; gap: 2px 12px; margin-top: 4px; }
.io dt { color: var(--ink-strong); font-weight: 700; }
.io dd { margin: 0; }
.stat { font-size: 0.9rem; background: var(--soft); padding: 8px 12px; border-left: 3px solid var(--blue); }
.stat b { color: var(--ink-strong); }
.more { font-weight: 700; font-size: 0.92rem; margin-top: 4px; color: var(--link); }
.more::after { content: " →"; }
.new { display: inline-block; font: 700 0.65rem/1 var(--font); letter-spacing: 0.08em; text-transform: uppercase; background: var(--blue); color: var(--white); padding: 4px 6px; margin-left: 8px; vertical-align: middle; }

.split { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 32px 48px; align-items: center; }
.code { background: var(--navy); color: #DCE9F3; border-radius: 4px; position: relative; min-width: 0; }
.code pre { margin: 0; padding: 18px 20px; overflow-x: auto; font: 400 0.9rem/1.7 var(--mono); }
.links { display: flex; flex-wrap: wrap; gap: 8px 24px; margin-top: 14px; font-weight: 700; font-size: 0.95rem; }

.flow { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 0; list-style: none; padding: 0; margin: 0; }
.flow li { background: var(--soft); padding: 18px 16px 18px 22px; position: relative; display: grid; gap: 4px; align-content: start; }
.flow li + li { border-left: 3px solid var(--white); }
.flow li::after { content: ""; position: absolute; right: -10px; top: 50%; margin-top: -10px; border: 10px solid transparent; border-left-color: var(--soft); border-right: 0; z-index: 2; }
.flow li:last-child::after { display: none; }
.flow b { color: var(--ink-strong); }
.flow span { font-size: 0.88rem; }
.flow code, .note code, p code { font: 400 0.88em var(--mono); background: var(--soft); padding: 1px 5px; border-radius: 3px; }
.flow li.end { background: var(--blue); color: var(--white); }
.flow li.end b { color: var(--white); }
.flow li.end::after { display: none; }
.note { margin-top: 14px; font-size: 0.92rem; }

.loop { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; margin-top: 4px; font-weight: 700; font-size: 0.95rem; color: var(--ink-strong); }
.loop span.i { background: var(--soft); border: 1px solid var(--line); padding: 8px 14px; }
.loop span.a { color: var(--blue); }

.cols { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 40px; }
.cols > div { min-width: 0; display: grid; gap: 12px; align-content: start; }
.cols ul { margin: 0; padding-left: 1.2em; display: grid; gap: 6px; }
.collab { background: var(--soft); padding: 28px; border-left: 4px solid var(--blue); display: grid; gap: 14px; }
.collab .cta { margin-top: 4px; }
.research { margin-top: 32px; font-size: 0.9rem; border-top: 1px solid var(--line); padding-top: 18px; max-width: 80ch; }

.cta { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 26px; }
.btn { display: inline-flex; align-items: center; min-height: 44px; padding: 0 22px; font: 700 0.92rem/1 var(--font); text-decoration: none; border-radius: 4px; border: 2px solid var(--white); cursor: pointer; transition: filter 0.2s ease; }
.btn.blue { background: var(--blue); border-color: var(--blue); color: var(--white); }
.btn.blue.line2 { background: transparent; color: var(--blue); border-color: var(--blue); }
.btn:hover { filter: brightness(0.94); }

h2 { font-size: clamp(1.45rem, 2.6vw, 1.85rem); font-weight: 700; }
h3 { font-size: 1.2rem; font-weight: 700; }
a { color: var(--link); text-decoration: none; text-underline-offset: 3px; }

@media (max-width: 860px) {
  .ways, .cards, .split, .cols { grid-template-columns: minmax(0, 1fr); }
  .flow { grid-template-columns: minmax(0, 1fr); }
  .flow li + li { border-left: 0; border-top: 3px solid var(--white); }
  .flow li::after { display: none; }
  section { padding-block: 48px; }
}
</style>

<main class="in">
  <section id="ways">
    <div class="intro">
      <h2>Two ways to use EchoForge</h2>
      <p>Both run on the same underlying models, so a result in Studio can be reproduced in Python.</p>
    </div>
    <div class="ways">
      <article class="way studio">
        <p class="tag">No coding needed <span class="new">Launching soon</span></p>
        <h3>EchoForge Studio</h3>
        <p>Select an echocardiographic video, choose an analysis, and get the result. Studio runs the models needed behind the scenes, so you pick the measurement, not the algorithm.</p>
        <p class="eg"><b>Example:</b> A4C video → LV volumes and ejection fraction</p>
        <p class="eg">Results let you inspect the steps behind them, such as ED/ES frames and LV contours.</p>
        <div class="cta"><a class="btn blue" href="https://www.thrive-centre.com/echoforge-studio/">Open EchoForge Studio</a></div>
      </article>
      <article class="way">
        <p class="tag">For researchers and developers</p>
        <h3>Python library</h3>
        <p>Download pretrained models, load them by name, and build them into your own research pipelines. Documentation, weights and evaluation for every model are on GitHub.</p>
        <p class="eg"><b>Example:</b> run LV segmentation from Python</p>
        <div class="cta"><a class="btn blue line2" href="https://github.com/thrive-centre/EchoForge">Python library on GitHub</a></div>
      </article>
    </div>
  </section>

  <section id="models">
    <div class="intro">
      <h2>Models in the library</h2>
      <p>Each card is a task. The model behind it is named above the title, which is the name to use in code and in citations.</p>
    </div>
    <div class="cards">
      <article class="card">
        <div class="thumb"><svg viewBox="0 0 300 120" role="img" aria-label="Echo frame classified as A4C"><rect x="20" y="10" width="120" height="100" rx="3" fill="#0A1722" stroke="#4E7FA6"/><path d="M80 14 L34 96 A60 60 0 0 0 126 96 Z" fill="none" stroke="#6E93B3" stroke-opacity="0.7"/><text x="156" y="48" font-family="ui-monospace, Menlo, monospace" font-size="12" fill="#9FB6C9">predicted view</text><rect x="156" y="58" width="104" height="30" rx="3" fill="#123B5E" stroke="#5CB6F2"/><text x="168" y="78" font-family="ui-monospace, Menlo, monospace" font-size="14" fill="#E8F1F8">A4C</text></svg></div>
        <div class="body">
          <p class="tag">Model: EchoFine</p>
          <h3>Echo view classification</h3>
          <p>Identifies the echocardiographic view from a 2D image, and doubles as a feature extractor for other echo tasks.</p>
          <dl class="io"><dt>Input</dt><dd>Echo image</dd><dt>Output</dt><dd>One of 47 views</dd><dt>Data</dt><dd>TTE47</dd></dl>
          <p class="stat"><b>94.1%</b> accuracy on the TTE47 test split</p>
          <a class="more" href="https://github.com/thrive-centre/EchoForge/blob/main/echoforge/classification/models/EchoFine/README.md">EchoFine documentation</a>
        </div>
      </article>
      <article class="card">
        <div class="thumb"><svg viewBox="0 0 300 120" role="img" aria-label="Left ventricle segmentation overlay"><path d="M150 8 L70 108 A110 110 0 0 0 230 108 Z" fill="#0A1722" stroke="#4E7FA6"/><ellipse cx="142" cy="66" rx="24" ry="40" transform="rotate(8 142 66)" fill="#2F9BE0" fill-opacity="0.4" stroke="#5CB6F2" stroke-width="2.5"/></svg></div>
        <div class="body">
          <p class="tag">Model: EchoLVSNet</p>
          <h3>Left ventricular segmentation</h3>
          <p>Delineates the left ventricular cavity, the starting point for quantitative measures of cardiac structure and function.</p>
          <dl class="io"><dt>Input</dt><dd>A4C echo frame</dd><dt>Output</dt><dd>LV mask</dd><dt>Tested</dt><dd>Clinical and public datasets</dd></dl>
          <p class="stat"><b>Dice 0.91</b> on EchoNet-Dynamic, <b>0.94</b> on CAMUS</p>
          <a class="more" href="https://github.com/thrive-centre/EchoForge/blob/main/echoforge/segmentation/models/echolvsnet/README.md">EchoLVSNet documentation</a>
        </div>
      </article>
      <article class="card">
        <div class="thumb"><svg viewBox="0 0 300 120" role="img" aria-label="Phase curve with ED and ES markers"><path d="M20 30 C60 30 70 90 110 90 C150 90 160 30 200 30 C240 30 250 90 290 90" fill="none" stroke="#5CB6F2" stroke-width="3"/><circle cx="20" cy="30" r="5" fill="#5CB6F2"/><circle cx="200" cy="30" r="5" fill="#5CB6F2"/><circle cx="110" cy="90" r="5" fill="#0C2236" stroke="#5CB6F2" stroke-width="2.5"/><g font-family="ui-monospace, Menlo, monospace" font-size="12" fill="#9FB6C9"><text x="14" y="18">ED</text><text x="194" y="18">ED</text><text x="104" y="114">ES</text></g></svg></div>
        <div class="body">
          <p class="tag">Model: EchoPDNet</p>
          <h3>Cardiac phase detection</h3>
          <p>Finds end-diastolic and end-systolic frames and tracks cardiac phase across multibeat sequences.</p>
          <dl class="io"><dt>Input</dt><dd>Echo video</dd><dt>Output</dt><dd>ED/ES frames, phase curve</dd></dl>
          <p class="stat"><b>About 1.5 s</b> per clip, with a mean error under 1 frame against cardiologists on the PACS set</p>
          <a class="more" href="https://github.com/thrive-centre/EchoForge/blob/main/echoforge/phasedetection/models/echopdnet/README.md">EchoPDNet documentation</a>
        </div>
      </article>
      <article class="card">
        <div class="thumb"><svg viewBox="0 0 300 120" role="img" aria-label="Ejection fraction per beat"><g font-family="ui-monospace, Menlo, monospace" font-size="13" fill="#E8F1F8"><text x="24" y="52">EF = (EDV − ESV) / EDV</text><text x="24" y="80" fill="#9FB6C9">per beat, from one cine</text></g></svg></div>
        <div class="body">
          <p class="tag">Pipeline: EchoPDNet + EchoLVSNet <span class="new">New</span></p>
          <h3>Ejection fraction estimation</h3>
          <p>Chains phase detection and LV segmentation with a disk-summation volume estimate to give EF from a single clip.</p>
          <dl class="io"><dt>Input</dt><dd>One A4C cine, DICOM or video</dd><dt>Output</dt><dd>EF per beat, mean and median</dd></dl>
          <a class="more" href="https://github.com/thrive-centre/EchoForge/blob/main/echoforge/ef_pipeline/README.md">Pipeline documentation</a>
        </div>
      </article>
    </div>
    <p class="note">Also in the library: EchoSDNet (single-heart versus dual-heart frames), further EchoFine backbones, and eight TTE47 baseline classifiers for benchmarking. The full list is in the repository.</p>
  </section>

  <section id="interface">
    <div class="split">
      <div style="display:grid;gap:10px">
        <h2>One interface for every model</h2>
        <p>Change the model name to switch task. Weights download when first needed and are cached locally for reuse in your own pipelines.</p>
        <div class="links">
          <a href="https://github.com/thrive-centre/EchoForge#-installation">Installation guide</a>
          <a href="https://github.com/thrive-centre/EchoForge">All models</a>
          <a href="https://huggingface.co/thrive-2025">Weights on Hugging Face</a>
        </div>
      </div>
      <div class="code"><pre id="c1"><span class="c"># pick any registered model by name</span>
from echoforge import load_model

model = load_model("EchoFine_classifier")</pre></div>
    </div>
  </section>

  <section id="pipelines">
    <div class="intro">
      <h2>From single models to complete pipelines</h2>
      <p>EchoForge is built so that models compose. In Studio, choosing ejection fraction runs this chain for you. In Python, you can call the pipeline or run each model on its own. It is the first pipeline to ship.</p>
    </div>
    <ol class="flow">
      <li><b>Echo cine</b><span>DICOM or video, A4C view</span></li>
      <li><b>EchoPDNet</b><span>ED and ES frames for every beat</span></li>
      <li><b>EchoLVSNet</b><span>LV mask on each ED and ES frame</span></li>
      <li class="end"><b>EF</b><span>Per beat, with mean and median</span></li>
    </ol>
    <p class="note">View identification with EchoFine will sit in front of this chain as more of the pipeline is automated.</p>
  </section>

  <section id="data">
    <div class="intro">
      <h2>Models and data together</h2>
      <p>EchoForge models are developed and validated with datasets that are available to the community. This closes the loop: models improve with more benchmarks, and data becomes more useful with better models.</p>
    </div>
    <div class="loop" aria-label="Research loop"><span class="i">Data</span><span class="a">→</span><span class="i">Annotation</span><span class="a">→</span><span class="i">Model development</span><span class="a">→</span><span class="i">Benchmarking</span><span class="a">→</span><span class="i">Reuse</span></div>
    <div class="links"><a href="https://www.thrive-centre.com/datasets">Explore THRIVE datasets</a><a href="https://www.thrive-centre.com/datasets/TTE47">TTE47</a></div>
  </section>

  <section id="next">
    <div class="cols">
      <div>
        <h2>Growing EchoForge</h2>
        <ul>
          <li>Image quality assessment, starting with an A4C rotation model, released with its paper</li>
          <li>Anatomical landmark detection</li>
          <li>Further quantitative measurements built on the existing pipeline</li>
        </ul>
        <p>New models are added as THRIVE research projects mature and are validated.</p>
      </div>
      <div class="collab">
        <h2>Work with us</h2>
        <p>We want to hear from clinical, academic and industry groups who can evaluate models on new populations, benchmark new methods, contribute models or data, or take EchoForge into clinical and educational tools.</p>
        <div class="cta">
          <a class="btn blue" href="https://github.com/thrive-centre/EchoForge">Contribute on GitHub</a>
        </div>
        <p>Collaboration enquiries: info@thrive-centre.com</p>
      </div>
    </div>
    <p class="research">EchoForge, including Studio and the Python library, is provided for research and development. The models are released under a CC BY-NC-SA 4.0 licence. Results must not be used for clinical diagnosis or patient-management decisions unless the relevant model and application have received the necessary clinical validation and regulatory approval.</p>
  </section>
</main>

<script>
document.querySelectorAll('.copy').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var el = document.getElementById(btn.dataset.target);
    var done = function (m) { btn.textContent = m; setTimeout(function () { btn.textContent = 'Copy'; }, 1600); };
    var fallback = function () {
      var r = document.createRange(); r.selectNodeContents(el);
      var s = window.getSelection(); s.removeAllRanges(); s.addRange(r); done('Selected');
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(el.innerText).then(function () { done('Copied'); }, fallback);
    } else { fallback(); }
  });
});
</script>
