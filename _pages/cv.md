---
layout: academic
title: "Curriculum vitae"
description: "Academic background, publications, service, research support, and honors of Alex Jie Yang."
permalink: /cv/
redirect_from:
  - /resume
---
<div class="container cv-page">
  <header class="page-intro heading-with-link"><div><p class="eyebrow">Curriculum vitae</p><h1>Alex Jie Yang <span class="cv-cn" lang="zh">杨杰</span></h1><p>{{ site.data.profile.school }} · {{ site.data.profile.institution }}</p><span class="email-text">{{ site.data.profile.email | escape }}</span> <span class="inline-separator">/</span> <a href="https://orcid.org/{{ site.data.profile.orcid }}">ORCID {{ site.data.profile.orcid }}</a> <span class="inline-separator">/</span> <a href="{{ site.data.profile.official_homepage | escape }}">Official NJU profile</a></div><button class="button button-outline print-button" type="button" data-print hidden>Print / save PDF <span aria-hidden="true">↗</span></button></header>
  <section class="detail-section" aria-labelledby="background-title"><div class="section-label"><p class="eyebrow">Academic background</p><h2 id="background-title">Education & visits</h2></div><div class="section-content"><dl class="education-list">{% for item in site.data.profile.education %}<div><dt>{{ item.dates }}</dt><dd><strong>{{ item.institution | escape }}</strong><span>{{ item.detail | escape }}</span></dd></div>{% endfor %}</dl></div></section>
  <section class="detail-section" aria-labelledby="cv-research"><div class="section-label"><h2 id="cv-research">Research interests</h2></div><div class="section-content"><p>Science of science · Network science · Scientific innovation · Computational social science</p></div></section>
  <section class="detail-section" aria-labelledby="cv-pubs"><div class="section-label"><h2 id="cv-pubs">Publications</h2></div><div class="section-content"><p>The complete list of journal articles, letters, correspondence, and conference papers is available on the publications page.</p><div class="cv-links"><a class="text-link" href="{{ '/publications/' | relative_url }}">Browse all publications ↗</a><a class="text-link" href="{{ '/files/publications.txt' | relative_url }}" download>Download bibliography ↓</a></div></div></section>
  <section class="detail-section" aria-labelledby="cv-service"><div class="section-label"><h2 id="cv-service">Academic service</h2></div><div class="section-content">{% include academic/service.html %}</div></section>
  <section class="detail-section" aria-labelledby="cv-grants"><div class="section-label"><h2 id="cv-grants">Grants & projects</h2></div><div class="section-content">{% include academic/grants.html %}</div></section>
  <section class="detail-section" aria-labelledby="cv-honors"><div class="section-label"><h2 id="cv-honors">Honors & awards</h2></div><div class="section-content">{% include academic/honors.html %}</div></section>
  <section class="detail-section" aria-labelledby="cv-contact"><div class="section-label"><h2 id="cv-contact">Contact</h2></div><div class="section-content"><p>{{ site.data.profile.school }}<br>{{ site.data.profile.institution }}<br>{{ site.data.profile.location }}</p><p><span class="email-text">{{ site.data.profile.email | escape }}</span><br><a href="tel:+8618011129689">{{ site.data.profile.phone }}</a></p></div></section>
</div>
