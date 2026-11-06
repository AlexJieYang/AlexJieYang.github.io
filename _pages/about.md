---
layout: academic
title: "Alex Jie Yang (杨杰)"
description: "Alex Jie Yang studies science of science, scientific innovation, research teams, and knowledge networks at Nanjing University."
permalink: /
home: true
redirect_from:
  - /about/
  - /about.html
---
<div class="container">
  <section class="hero" aria-labelledby="profile-name">
    <div class="hero-copy">
      <p class="eyebrow"><span class="eyebrow-line" aria-hidden="true"></span>Science of science & innovation</p>
      <h1 id="profile-name">Alex Jie Yang<span class="hero-cn" lang="zh">杨杰</span></h1>
      <p class="affiliation"><a href="{{ site.data.profile.school_url }}">{{ site.data.profile.school }}</a><br><a href="{{ site.data.profile.institution_url }}">{{ site.data.profile.institution }}</a> <span class="location">· {{ site.data.profile.location }}</span></p>
      <p class="hero-intro">{{ site.data.profile.intro }}</p>
      <div class="hero-actions"><a class="button" href="#publications">Browse publications <span aria-hidden="true">↓</span></a><a class="text-link" href="{{ '/cv/' | relative_url }}">Curriculum vitae <span aria-hidden="true">→</span></a></div>
      <div class="profile-links" aria-label="Academic profiles"><span class="email-text">{{ site.data.profile.email | escape }}</span><span aria-hidden="true">/</span><a href="https://orcid.org/{{ site.data.profile.orcid }}">ORCID</a><span aria-hidden="true">/</span><a href="{{ site.data.profile.researchgate }}">ResearchGate</a><span aria-hidden="true">/</span><a href="{{ site.data.profile.github }}">GitHub</a></div>
    </div>
    <figure class="hero-photo"><div class="photo-frame"><img src="{{ '/images/profile.png' | relative_url }}" width="1224" height="921" alt="Alex Jie Yang standing in an art gallery" fetchpriority="high" decoding="async"></div><figcaption><span>Alex Jie Yang <span lang="zh">/ 杨杰</span></span><span>Science · People · Ideas</span></figcaption></figure>
  </section>
  <section id="research" class="research-section" aria-labelledby="research-title">
    <div class="section-heading"><p class="eyebrow">Research interests</p><h2 id="research-title">How does science advance?</h2><p class="section-description">Studying the structures and dynamics behind scientific discovery.</p></div>
    <div class="research-grid">{% for topic in site.data.profile.topics %}<article class="research-topic"><span class="topic-number" aria-hidden="true">{{ topic.number }}</span><h3>{{ topic.title | escape }}</h3><p>{{ topic.description | escape }}</p><a class="text-link" href="{{ '/publications/' | relative_url }}?q={{ topic.query | url_encode }}">Related work <span aria-hidden="true">↗</span><span class="sr-only"> on {{ topic.title | escape }}</span></a></article>{% endfor %}</div>
  </section>
  <section id="publications" class="selected-section" aria-labelledby="publications-title">
    <div class="section-heading"><p class="eyebrow">Complete bibliography</p><h2 id="publications-title">All publications</h2><p class="section-description">Journal articles, perspectives, and conference papers. Open “Cite this paper” for a copyable reference or BibTeX entry.</p></div>
    {% include academic/publication-list.html heading_level=3 %}
  </section>
  <section id="service" class="detail-section" aria-labelledby="service-title"><div class="section-label"><p class="eyebrow">Academic community</p><h2 id="service-title">Service</h2></div><div class="section-content">{% include academic/service.html %}</div></section>
  <section id="grants" class="detail-section" aria-labelledby="grants-title"><div class="section-label"><p class="eyebrow">Research support</p><h2 id="grants-title">Grants & projects</h2></div><div class="section-content">{% include academic/grants.html %}</div></section>
  <section id="honors" class="detail-section" aria-labelledby="honors-title"><div class="section-label"><p class="eyebrow">Recognition</p><h2 id="honors-title">Honors & awards</h2></div><div class="section-content">{% include academic/honors.html %}</div></section>
  <section id="contact" class="contact-section" aria-labelledby="contact-title"><div><p class="eyebrow">Contact</p><h2 id="contact-title">Let’s connect.</h2><p>For research inquiries and academic correspondence.</p></div><div class="contact-details"><span class="contact-email">{{ site.data.profile.email | escape }}</span><p>{{ site.data.profile.school }}<br>{{ site.data.profile.institution }} · {{ site.data.profile.location }}</p><details class="disclosure"><summary>Phone</summary><a href="tel:+8618011129689">{{ site.data.profile.phone }}</a></details></div></section>
</div>
