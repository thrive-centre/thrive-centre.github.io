# TTE47 — Dataset Card & Reference Gallery

> **TTE47** is a dataset derived from a random sample of real-world echocardiographic studies collected at **Imperial College Healthcare NHS Trust**, comprising a total of **91,139 images**. Ethical approval for the study was granted by the Health Research Authority (Integrated Research Application System **IRAS** identifier: **243023**). Only studies with complete demographic information and without intravenous contrast were included.

Each image was manually annotated by a cardiologist (“**Expert 1**”) via a web-based platform (<https://unityimaging.net/>) and assigned to one of **47 predefined categories**. The dataset was divided into **training (76,589)**, **validation (9,103)**, and **test (5,447)** sets, with **no patient or study overlap** between splits. The echocardiograms were obtained from **19,169 unique studies**.

Two additional clinical experts independently annotated the test set. These experts were **blinded** to the original labels and to each other’s annotations. Unlike Expert 1, who was required to assign **exactly one label** to each image, Experts 2 and 3 were allowed to select **“not sure”** when appropriate. The test set was intentionally sized to ensure reliable evaluation while remaining feasible for detailed multi-expert annotation across all 47 views.

The **test subset**, containing **5,447 images** with annotations from all three experts, is released under the **Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International** license. Release of the dataset was approved by the **South Central – Oxford C Research Ethics Committee** (IRAS ID: **279328**, REC reference: **20/SC/0386**). Due to data governance restrictions, the **training set cannot be made public**, but **pre-trained and fine-tuned model weights** are provided.

---

## Contents

- [Demographics](#demographics)
- [Data splits by view (counts)](#data-splits-by-view-counts)
- [Reference Gallery (47 Classes)](#reference-gallery-47-classes)
  - [Apical](#apical)
  - [PLAX](#plax)
  - [PSAX](#psax)
  - [M-mode](#m-mode)
  - [Subcostal &amp; Suprasternal](#subcostal--suprasternal)
  - [Doppler](#doppler)
- [License &amp; Ethics](#license--ethics)
- [Contact / Access](#contact--access)

---

## Demographics

> **Demographic profile of the TTE47 dataset**, encompassing a diverse adult population with representation across multiple age groups, BMI categories, and sexes.  


<table>
  <thead>
    <tr>
      <th>Category</th>
      <th>Group</th>
      <th>N</th>
      <th>%</th>
    </tr>
  </thead>
  <tbody>
    <!-- Age groups -->
    <tr><td rowspan="6"><strong>Age</strong></td><td>18–29</td><td>—</td><td>—</td></tr>
    <tr><td>30–39</td><td>—</td><td>—</td></tr>
    <tr><td>40–49</td><td>—</td><td>—</td></tr>
    <tr><td>50–59</td><td>—</td><td>—</td></tr>
    <tr><td>60–69</td><td>—</td><td>—</td></tr>
    <tr><td>70+</td><td>—</td><td>—</td></tr>
    <!-- BMI -->
    <tr><td rowspan="5"><strong>BMI</strong></td><td>&lt;18.5 (Underweight)</td><td>—</td><td>—</td></tr>
    <tr><td>18.5–24.9 (Normal)</td><td>—</td><td>—</td></tr>
    <tr><td>25.0–29.9 (Overweight)</td><td>—</td><td>—</td></tr>
    <tr><td>30.0–34.9 (Obesity I)</td><td>—</td><td>—</td></tr>
    <tr><td>&ge;35.0 (Obesity II+)</td><td>—</td><td>—</td></tr>
    <!-- Sex -->
    <tr><td rowspan="3"><strong>Sex</strong></td><td>Female</td><td>—</td><td>—</td></tr>
    <tr><td>Male</td><td>—</td><td>—</td></tr>
    <tr><td>Other/Unreported</td><td>—</td><td>—</td></tr>
  </tbody>
</table>

---

## Data splits by view (counts)

> **Distribution of echocardiographic view classes** across the training, validation, and test sets in **TTE47**.

<table>
  <thead>
    <tr>
      <th>View</th>
      <th>Training</th>
      <th>Validation</th>
      <th>Testing</th>
      <th>Total</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>a2ch-full</td><td>2931</td><td>349</td><td>209</td><td>3489</td></tr>
    <tr><td>a2ch-la</td><td>1936</td><td>230</td><td>138</td><td>2304</td></tr>
    <tr><td>a2ch-lv</td><td>2987</td><td>355</td><td>213</td><td>3555</td></tr>
    <tr><td>a3ch-full</td><td>3561</td><td>424</td><td>254</td><td>4239</td></tr>
    <tr><td>a3ch-la</td><td>1622</td><td>193</td><td>115</td><td>1930</td></tr>
    <tr><td>a3ch-lv</td><td>1926</td><td>229</td><td>137</td><td>2292</td></tr>
    <tr><td>a3ch-outflow</td><td>637</td><td>75</td><td>45</td><td>757</td></tr>
    <tr><td>a4ch-full</td><td>3353</td><td>399</td><td>239</td><td>3991</td></tr>
    <tr><td>a4ch-ias</td><td>1319</td><td>157</td><td>94</td><td>1570</td></tr>
    <tr><td>a4ch-la</td><td>2733</td><td>325</td><td>195</td><td>3253</td></tr>
    <tr><td>a4ch-lv</td><td>2495</td><td>297</td><td>178</td><td>2970</td></tr>
    <tr><td>a4ch-ra</td><td>1713</td><td>204</td><td>122</td><td>2039</td></tr>
    <tr><td>a4ch-rv</td><td>1236</td><td>147</td><td>88</td><td>1471</td></tr>
    <tr><td>a5ch-full</td><td>753</td><td>89</td><td>53</td><td>895</td></tr>
    <tr><td>a5ch-outflow</td><td>786</td><td>93</td><td>56</td><td>935</td></tr>
    <tr><td>apex</td><td>723</td><td>86</td><td>51</td><td>860</td></tr>
    <tr><td>doppler-ao</td><td>1489</td><td>177</td><td>106</td><td>1772</td></tr>
    <tr><td>doppler-av</td><td>2587</td><td>308</td><td>184</td><td>3079</td></tr>
    <tr><td>doppler-mv</td><td>1701</td><td>202</td><td>121</td><td>2024</td></tr>
    <tr><td>doppler-pv</td><td>1776</td><td>211</td><td>126</td><td>2113</td></tr>
    <tr><td>doppler-tissue-lateral</td><td>1120</td><td>133</td><td>80</td><td>1333</td></tr>
    <tr><td>doppler-tissue-rv</td><td>780</td><td>92</td><td>55</td><td>927</td></tr>
    <tr><td>doppler-tissue-septal</td><td>1034</td><td>123</td><td>73</td><td>1230</td></tr>
    <tr><td>doppler-tv</td><td>1902</td><td>226</td><td>135</td><td>2263</td></tr>
    <tr><td>mmode-a4ch-rv</td><td>1592</td><td>189</td><td>113</td><td>1894</td></tr>
    <tr><td>mmode-ivc</td><td>1159</td><td>138</td><td>82</td><td>1379</td></tr>
    <tr><td>mmode-plax-av</td><td>1374</td><td>163</td><td>98</td><td>1635</td></tr>
    <tr><td>mmode-plax-lv</td><td>492</td><td>58</td><td>35</td><td>585</td></tr>
    <tr><td>mmode-plax-mitral</td><td>768</td><td>91</td><td>54</td><td>913</td></tr>
    <tr><td>plax-full-la</td><td>1123</td><td>133</td><td>80</td><td>1336</td></tr>
    <tr><td>plax-full-lv</td><td>1799</td><td>214</td><td>128</td><td>2141</td></tr>
    <tr><td>plax-full-mv</td><td>1307</td><td>155</td><td>93</td><td>1555</td></tr>
    <tr><td>plax-full-out</td><td>1509</td><td>179</td><td>107</td><td>1795</td></tr>
    <tr><td>plax-full-rv-ao</td><td>961</td><td>114</td><td>68</td><td>1143</td></tr>
    <tr><td>plax-tv</td><td>1688</td><td>201</td><td>120</td><td>2009</td></tr>
    <tr><td>plax-valves-av</td><td>2000</td><td>238</td><td>142</td><td>2380</td></tr>
    <tr><td>plax-valves-mv</td><td>1841</td><td>219</td><td>131</td><td>2191</td></tr>
    <tr><td>psax-all</td><td>2097</td><td>249</td><td>149</td><td>2495</td></tr>
    <tr><td>psax-tv</td><td>1335</td><td>159</td><td>95</td><td>1589</td></tr>
    <tr><td>psax-av</td><td>2125</td><td>253</td><td>151</td><td>2529</td></tr>
    <tr><td>psax-pv</td><td>1868</td><td>222</td><td>133</td><td>2223</td></tr>
    <tr><td>psax-lv-base</td><td>1437</td><td>171</td><td>102</td><td>1710</td></tr>
    <tr><td>psax-lv-mid</td><td>1669</td><td>198</td><td>119</td><td>1986</td></tr>
    <tr><td>psax-lv-apex</td><td>1627</td><td>193</td><td>116</td><td>1936</td></tr>
    <tr><td>subcostal-heart</td><td>1212</td><td>144</td><td>86</td><td>1442</td></tr>
    <tr><td>subcostal-ivc</td><td>849</td><td>101</td><td>60</td><td>1010</td></tr>
    <tr><td>suprasternal</td><td>1657</td><td>197</td><td>118</td><td>1972</td></tr>
  </tbody>
  <tfoot>
    <tr>
      <th>Total</th>
      <th>76589</th>
      <th>9103</th>
      <th>5447</th>
      <th>91139</th>
    </tr>
  </tfoot>
</table>

---

## Reference Gallery (47 Classes)

Below are **6 major categories**. Click a category to reveal its table of **TTE47** views.  

<style>
button {
  background-color: #0078D7;
  color: white;
  border: none;
  padding: 8px 14px;
  margin: 4px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
}
button:hover {
  background-color: #005a9e;
}
</style>

<!-- Quick-jump "buttons" -->
<p align="center">
  <a href="#apical"><button>Apical</button></a>
  <a href="#plax"><button>PLAX</button></a>
  <a href="#psax"><button>PSAX</button></a>
  <a href="#m-mode"><button>M-mode</button></a>
  <a href="#subcostal--suprasternal"><button>Subcostal &amp; Suprasternal</button></a>
  <a href="#doppler"><button>Doppler</button></a>
</p>


### <a id="apical"></a>Apical (16 views)

  <table>
    <thead>
      <tr><th>Image</th><th>View Name</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr>
        <td><a href="/assets/images/classification-b-dataset/01_a2ch-full.png" target="_blank"><img src="/assets/images/classification-b-dataset/01_a2ch-full.png" alt="a2ch-full" width="180"></a></td>
        <td><code>a2ch-full</code></td>
        <td>Apical 2-chamber, covering the depth of the whole of the LV and LA</td>
      </tr>
      <tr>
        <td><a href="/assets/images/classification-b-dataset/02_a2ch-la.png" target="_blank"><img src="/assets/images/classification-b-dataset/02_a2ch-la.png" alt="a2ch-la" width="180"></a></td>
        <td><code>a2ch-la</code></td>
        <td>A2CH with Doppler near MV/LA <strong>or</strong> 2D not covering full LV depth</td>
      </tr>
      <tr>
        <td><a href="/assets/images/classification-b-dataset/03_a2ch-lv.png" target="_blank"><img src="/assets/images/classification-b-dataset/03_a2ch-lv.png" alt="a2ch-lv" width="180"></a></td>
        <td><code>a2ch-lv</code></td>
        <td>A2CH covering the whole depth of the LV, but not the whole depth of the LA</td>
      </tr>
      <tr>
        <td><a href="/assets/images/classification-b-dataset/04_a3ch-full.png" target="_blank"><img src="/assets/images/classification-b-dataset/04_a3ch-full.png" alt="a3ch-full" width="180"></a></td>
        <td><code>a3ch-full</code></td>
        <td>Apical 3-chamber, covering the whole depth of the LV and the LA</td>
      </tr>
      <tr>
        <td><a href="/assets/images/classification-b-dataset/05_a3ch-la.png" target="_blank"><img src="/assets/images/classification-b-dataset/05_a3ch-la.png" alt="a3ch-la" width="180"></a></td>
        <td><code>a3ch-la</code></td>
        <td>A3CH with Doppler near MV/LA <strong>or</strong> 2D not covering full LV</td>
      </tr>
      <tr>
        <td><a href="/assets/images/classification-b-dataset/06_a3ch-lv.png" target="_blank"><img src="/assets/images/classification-b-dataset/06_a3ch-lv.png" alt="a3ch-lv" width="180"></a></td>
        <td><code>a3ch-lv</code></td>
        <td>A3CH covering the whole depth of the LV, but not the whole depth of the LA</td>
      </tr>
      <tr>
        <td><a href="/assets/images/classification-b-dataset/07_a3ch-outflow.png" target="_blank"><img src="/assets/images/classification-b-dataset/07_a3ch-outflow.png" alt="a3ch-outflow" width="180"></a></td>
        <td><code>a3ch-outflow</code></td>
        <td>A3CH emphasizing LVOT (colour focused on LVOT or limited b&w of LVOT area)</td>
      </tr>
      <tr>
        <td><a href="/assets/images/classification-b-dataset/08_a4ch-full.png" target="_blank"><img src="/assets/images/classification-b-dataset/08_a4ch-full.png" alt="a4ch-full" width="180"></a></td>
        <td><code>a4ch-full</code></td>
        <td>Apical 4-chamber showing the full depth of all four chambers (no LV/RV focus)</td>
      </tr>
      <tr>
        <td><a href="/assets/images/classification-b-dataset/09_a4ch-ias.png" target="_blank"><img src="/assets/images/classification-b-dataset/09_a4ch-ias.png" alt="a4ch-ias" width="180"></a></td>
        <td><code>a4ch-ias</code></td>
        <td>Apical 4-chamber, focused on the inter-atrial septum</td>
      </tr>
      <tr>
        <td><a href="/assets/images/classification-b-dataset/10_a4ch-la.png" target="_blank"><img src="/assets/images/classification-b-dataset/10_a4ch-la.png" alt="a4ch-la" width="180"></a></td>
        <td><code>a4ch-la</code></td>
        <td>A4CH with Doppler near MV/LA <strong>or</strong> 2D covering full LA, not full LV</td>
      </tr>
      <tr>
        <td><a href="/assets/images/classification-b-dataset/11_a4ch-lv.png" target="_blank"><img src="/assets/images/classification-b-dataset/11_a4ch-lv.png" alt="a4ch-lv" width="180"></a></td>
        <td><code>a4ch-lv</code></td>
        <td>A4CH covering the whole depth of the LV, not the whole depth of the LA</td>
      </tr>
      <tr>
        <td><a href="/assets/images/classification-b-dataset/12_a4ch-ra.png" target="_blank"><img src="/assets/images/classification-b-dataset/12_a4ch-ra.png" alt="a4ch-ra" width="180"></a></td>
        <td><code>a4ch-ra</code></td>
        <td>Apical 4-chamber focused on the right atrium, or colour Doppler on TV/RA</td>
      </tr>
      <tr>
        <td><a href="/assets/images/classification-b-dataset/13_a4ch-rv.png" target="_blank"><img src="/assets/images/classification-b-dataset/13_a4ch-rv.png" alt="a4ch-rv" width="180"></a></td>
        <td><code>a4ch-rv</code></td>
        <td>Apical 4-chamber focused on the right ventricle</td>
      </tr>
      <tr>
        <td><a href="/assets/images/classification-b-dataset/14_a5ch-full.png" target="_blank"><img src="/assets/images/classification-b-dataset/14_a5ch-full.png" alt="a5ch-full" width="180"></a></td>
        <td><code>a5ch-full</code></td>
        <td>Apical 5-chamber from apex to back of the atria, <strong>no</strong> LVOT colour</td>
      </tr>
      <tr>
        <td><a href="/assets/images/classification-b-dataset/15_a5ch-outflow.png" target="_blank"><img src="/assets/images/classification-b-dataset/15_a5ch-outflow.png" alt="a5ch-outflow" width="180"></a></td>
        <td><code>a5ch-outflow</code></td>
        <td>A5CH including LVOT; may lack full depth <strong>or</strong> has LVOT colour</td>
      </tr>
      <tr>
        <td><a href="/assets/images/classification-b-dataset/16_apex.png" target="_blank"><img src="/assets/images/classification-b-dataset/16_apex.png" alt="apex" width="180"></a></td>
        <td><code>apex</code></td>
        <td>Any apical window whose depth is insufficient to reach the mitral ring</td>
      </tr>
    </tbody>
  </table>

<!-- </details> -->

### <a id="plax"></a>PLAX (8 views)

  <table>
    <thead>
      <tr><th>Image</th><th>View Name</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr>
        <td><a href="/assets/images/classification-b-dataset/25_plax-full-la.png" target="_blank"><img src="/assets/images/classification-b-dataset/25_plax-full-la.png" alt="plax-full-la" width="180"></a></td>
        <td><code>plax-full-la</code></td>
        <td>Parasternal long-axis, sector covers whole LA; intended for LA measurements</td>
      </tr>
      <tr>
        <td><a href="/assets/images/classification-b-dataset/26_plax-full-lv.png" target="_blank"><img src="/assets/images/classification-b-dataset/26_plax-full-lv.png" alt="plax-full-lv" width="180"></a></td>
        <td><code>plax-full-lv</code></td>
        <td>PLAX with imaging sector covering LV but not the whole LA</td>
      </tr>
      <tr>
        <td><a href="/assets/images/classification-b-dataset/27_plax-full-mv.png" target="_blank"><img src="/assets/images/classification-b-dataset/27_plax-full-mv.png" alt="plax-full-mv" width="180"></a></td>
        <td><code>plax-full-mv</code></td>
        <td>PLAX centered on MV (heavy zoom losing LA/LV parts or MV colour)</td>
      </tr>
      <tr>
        <td><a href="/assets/images/classification-b-dataset/28_plax-full-out.png" target="_blank"><img src="/assets/images/classification-b-dataset/28_plax-full-out.png" alt="plax-full-out" width="180"></a></td>
        <td><code>plax-full-out</code></td>
        <td>Zoomed-out PLAX</td>
      </tr>
      <tr>
        <td><a href="/assets/images/classification-b-dataset/29_plax-full-rv-ao.png" target="_blank"><img src="/assets/images/classification-b-dataset/29_plax-full-rv-ao.png" alt="plax-full-rv-ao" width="180"></a></td>
        <td><code>plax-full-rv-ao</code></td>
        <td>Focus on RV &amp; aorta or colour Doppler over RV/AV/Aorta</td>
      </tr>
      <tr>
        <td><a href="/assets/images/classification-b-dataset/30_plax-tv.png" target="_blank"><img src="/assets/images/classification-b-dataset/30_plax-tv.png" alt="plax-tv" width="180"></a></td>
        <td><code>plax-tv</code></td>
        <td>Parasternal inflow view including tricuspid valve</td>
      </tr>
      <tr>
        <td><a href="/assets/images/classification-b-dataset/31_plax-valves-av.png" target="_blank"><img src="/assets/images/classification-b-dataset/31_plax-valves-av.png" alt="plax-valves-av" width="180"></a></td>
        <td><code>plax-valves-av</code></td>
        <td>PLAX focused on the aortic valve</td>
      </tr>
      <tr>
        <td><a href="/assets/images/classification-b-dataset/32_plax-valves-mv.png" target="_blank"><img src="/assets/images/classification-b-dataset/32_plax-valves-mv.png" alt="plax-valves-mv" width="180"></a></td>
        <td><code>plax-valves-mv</code></td>
        <td>PLAX focused on the mitral valve</td>
      </tr>
    </tbody>
  </table>



### <a id="psax"></a>PSAX (7 views)


  <table>
    <thead>
      <tr><th>Image</th><th>View Name</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr>
        <td><a href="/assets/images/classification-b-dataset/33_psax-all.png" target="_blank"><img src="/assets/images/classification-b-dataset/33_psax-all.png" alt="psax-all" width="180"></a></td>
        <td><code>psax-all</code></td>
        <td>Valve level, field of view covers TV/AV/PV positions</td>
      </tr>
      <tr>
        <td><a href="/assets/images/classification-b-dataset/34_psax-tv.png" target="_blank"><img src="/assets/images/classification-b-dataset/34_psax-tv.png" alt="psax-tv" width="180"></a></td>
        <td><code>psax-tv</code></td>
        <td>Focused on tricuspid valve</td>
      </tr>
      <tr>
        <td><a href="/assets/images/classification-b-dataset/35_psax-av.png" target="_blank"><img src="/assets/images/classification-b-dataset/35_psax-av.png" alt="psax-av" width="180"></a></td>
        <td><code>psax-av</code></td>
        <td>Focused on aortic valve</td>
      </tr>
      <tr>
        <td><a href="/assets/images/classification-b-dataset/36_psax-pv.png" target="_blank"><img src="/assets/images/classification-b-dataset/36_psax-pv.png" alt="psax-pv" width="180"></a></td>
        <td><code>psax-pv</code></td>
        <td>Focused on pulmonary valve</td>
      </tr>
      <tr>
        <td><a href="/assets/images/classification-b-dataset/37_psax-lv-base.png" target="_blank"><img src="/assets/images/classification-b-dataset/37_psax-lv-base.png" alt="psax-lv-base" width="180"></a></td>
        <td><code>psax-lv-base</code></td>
        <td>Left ventricle base level</td>
      </tr>
      <tr>
        <td><a href="/assets/images/classification-b-dataset/38_psax-lv-mid.png" target="_blank"><img src="/assets/images/classification-b-dataset/38_psax-lv-mid.png" alt="psax-lv-mid" width="180"></a></td>
        <td><code>psax-lv-mid</code></td>
        <td>Left ventricle mid level</td>
      </tr>
      <tr>
        <td><a href="/assets/images/classification-b-dataset/39_psax-lv-apex.png" target="_blank"><img src="/assets/images/classification-b-dataset/39_psax-lv-apex.png" alt="psax-lv-apex" width="180"></a></td>
        <td><code>psax-lv-apex</code></td>
        <td>Left ventricle apex level</td>
      </tr>
    </tbody>
  </table>



### <a id="m-mode"></a>M-mode (5 views)


  <table>
    <thead>
      <tr><th>Image</th><th>View Name</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr>
        <td><a href="/assets/images/classification-b-dataset/40_mmode-a4ch-rv.png" target="_blank"><img src="/assets/images/classification-b-dataset/40_mmode-a4ch-rv.png" alt="mmode-a4ch-rv" width="180"></a></td>
        <td><code>mmode-a4ch-rv</code></td>
        <td>M-mode for measuring TAPSE</td>
      </tr>
      <tr>
        <td><a href="/assets/images/classification-b-dataset/41_mmode-ivc.png" target="_blank"><img src="/assets/images/classification-b-dataset/41_mmode-ivc.png" alt="mmode-ivc" width="180"></a></td>
        <td><code>mmode-ivc</code></td>
        <td>M-mode of the inferior vena cava</td>
      </tr>
      <tr>
        <td><a href="/assets/images/classification-b-dataset/42_mmode-plax-av.png" target="_blank"><img src="/assets/images/classification-b-dataset/42_mmode-plax-av.png" alt="mmode-plax-av" width="180"></a></td>
        <td><code>mmode-plax-av</code></td>
        <td>M-mode of the aortic valve in PLAX</td>
      </tr>
      <tr>
        <td><a href="/assets/images/classification-b-dataset/43_mmode-plax-lv.png" target="_blank"><img src="/assets/images/classification-b-dataset/43_mmode-plax-lv.png" alt="mmode-plax-lv" width="180"></a></td>
        <td><code>mmode-plax-lv</code></td>
        <td>M-mode in PLAX focused on LV walls</td>
      </tr>
      <tr>
        <td><a href="/assets/images/classification-b-dataset/44_mmode-plax-mitral.png" target="_blank"><img src="/assets/images/classification-b-dataset/44_mmode-plax-mitral.png" alt="mmode-plax-mitral" width="180"></a></td>
        <td><code>mmode-plax-mitral</code></td>
        <td>M-mode in PLAX focused on the mitral valve</td>
      </tr>
    </tbody>
  </table>



### <a id="subcostal--suprasternal"></a>Subcostal & Suprasternal (3 views)

  <table>
    <thead>
      <tr><th>Image</th><th>View Name</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr>
        <td><a href="/assets/images/classification-b-dataset/45_subcostal-heart.png" target="_blank"><img src="/assets/images/classification-b-dataset/45_subcostal-heart.png" alt="subcostal-heart" width="180"></a></td>
        <td><code>subcostal-heart</code></td>
        <td>Subcostal window, focused on the heart</td>
      </tr>
      <tr>
        <td><a href="/assets/images/classification-b-dataset/46_subcostal-ivc.png" target="_blank"><img src="/assets/images/classification-b-dataset/46_subcostal-ivc.png" alt="subcostal-ivc" width="180"></a></td>
        <td><code>subcostal-ivc</code></td>
        <td>Subcostal window, focused on the inferior vena cava</td>
      </tr>
      <tr>
        <td><a href="/assets/images/classification-b-dataset/47_suprasternal.png" target="_blank"><img src="/assets/images/classification-b-dataset/47_suprasternal.png" alt="suprasternal" width="180"></a></td>
        <td><code>suprasternal</code></td>
        <td>Suprasternal view</td>
      </tr>
    </tbody>
  </table>



### <a id="doppler"></a>Doppler (8 views)

  <table>
    <thead>
      <tr><th>Image</th><th>View Name</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr>
        <td><a href="/assets/images/classification-b-dataset/17_doppler-ao.png" target="_blank"><img src="/assets/images/classification-b-dataset/17_doppler-ao.png" alt="doppler-ao" width="180"></a></td>
        <td><code>doppler-ao</code></td>
        <td>Spectral Doppler of the descending aorta</td>
      </tr>
      <tr>
        <td><a href="/assets/images/classification-b-dataset/18_doppler-av.png" target="_blank"><img src="/assets/images/classification-b-dataset/18_doppler-av.png" alt="doppler-av" width="180"></a></td>
        <td><code>doppler-av</code></td>
        <td>Spectral Doppler of the aortic valve</td>
      </tr>
      <tr>
        <td><a href="/assets/images/classification-b-dataset/19_doppler-mv.png" target="_blank"><img src="/assets/images/classification-b-dataset/19_doppler-mv.png" alt="doppler-mv" width="180"></a></td>
        <td><code>doppler-mv</code></td>
        <td>Spectral Doppler of the mitral valve</td>
      </tr>
      <tr>
        <td><a href="/assets/images/classification-b-dataset/20_doppler-pv.png" target="_blank"><img src="/assets/images/classification-b-dataset/20_doppler-pv.png" alt="doppler-pv" width="180"></a></td>
        <td><code>doppler-pv</code></td>
        <td>Spectral Doppler of the pulmonary valve</td>
      </tr>
      <tr>
        <td><a href="/assets/images/classification-b-dataset/21_doppler-tissue-lateral.png" target="_blank"><img src="/assets/images/classification-b-dataset/21_doppler-tissue-lateral.png" alt="doppler-tissue-lateral" width="180"></a></td>
        <td><code>doppler-tissue-lateral</code></td>
        <td>Tissue Doppler of the LV lateral wall</td>
      </tr>
      <tr>
        <td><a href="/assets/images/classification-b-dataset/22_doppler-tissue-rv.png" target="_blank"><img src="/assets/images/classification-b-dataset/22_doppler-tissue-rv.png" alt="doppler-tissue-rv" width="180"></a></td>
        <td><code>doppler-tissue-rv</code></td>
        <td>Tissue Doppler of the RV free wall</td>
      </tr>
      <tr>
        <td><a href="/assets/images/classification-b-dataset/23_doppler-tissue-septal.png" target="_blank"><img src="/assets/images/classification-b-dataset/23_doppler-tissue-septal.png" alt="doppler-tissue-septal" width="180"></a></td>
        <td><code>doppler-tissue-septal</code></td>
        <td>Tissue Doppler of the LV septal wall</td>
      </tr>
      <tr>
        <td><a href="/assets/images/classification-b-dataset/24_doppler-tv.png" target="_blank"><img src="/assets/images/classification-b-dataset/24_doppler-tv.png" alt="doppler-tv" width="180"></a></td>
        <td><code>doppler-tv</code></td>
        <td>Spectral Doppler of the tricuspid valve</td>
      </tr>
    </tbody>
  </table>



---

## License & Ethics

- **License (test subset):** CC BY-NC-SA 4.0  
- **IRAS approvals:** 243023 (dataset derivation), 279328 (test subset release)  
- **REC reference:** 20/SC/0386  
- **Data governance:** Training split not public; **pre-trained/fine-tuned weights** available.

---

## Contact / Access

<hr>

<h2>Request Access to the Project Dataset</h2>

<p>We aim to make the dataset available for research purposes soon.</p>
<p><strong>If you wish to request access, please complete the form below:</strong></p>

<form action="https://YOUR_BACKEND_ENDPOINT_OR_FORM_SERVICE_URL" method="POST">
  <input type="text" name="name" placeholder="Your Name" required><br><br>
  <input type="email" name="email" placeholder="Your Email" required><br><br>
  <input type="text" name="institution" placeholder="Institution/Workplace" required><br><br>
  <textarea name="message" rows="5" placeholder="Please let us know why you would like access to this dataset and what you intend to use it for" required></textarea><br><br>
  <button type="submit">Submit</button>
</form>

