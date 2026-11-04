---
layout: academic
title: "Publications"
description: "Journal articles, letters, correspondence, and conference papers by Alex Jie Yang. Search by title, author, journal, or year."
permalink: /publications/
---
<div class="container publications-page">
  <header class="page-intro"><p class="eyebrow">Research output</p><h1>Publications</h1><p>Journal articles, perspectives, and conference papers.</p><a class="text-link" href="{{ '/files/publications.txt' | relative_url }}" download="Alex-Jie-Yang-Publications.txt">Download publication list <span aria-hidden="true">↓</span></a></header>
  <form class="publication-filters" data-publication-filters role="search" aria-label="Filter publications" hidden>
    <div class="search-field"><label for="publication-search">Search publications</label><input id="publication-search" name="q" type="search" placeholder="Title, author, journal, or keyword…" autocomplete="off" aria-controls="publication-list"></div>
    <div><label for="publication-year">Year</label><select id="publication-year" name="year" aria-controls="publication-list"><option value="">All years</option>{% assign years = site.data.publications | map: 'year' | uniq | sort | reverse %}{% for year in years %}<option value="{{ year }}">{% if year > 0 %}{{ year }}{% else %}Not specified{% endif %}</option>{% endfor %}</select></div>
    <div><label for="publication-type">Type</label><select id="publication-type" name="type" aria-controls="publication-list"><option value="">All types</option><option value="journal">Journal & commentary</option><option value="conference">Conference papers</option></select></div>
    <button class="reset-filters" type="reset" hidden>Clear filters</button>
  </form>
  <div class="results-meta"><p id="publication-count" role="status" aria-live="polite" aria-atomic="true">{{ site.data.publications | size }} publications</p><p>Years follow the bibliographic record · <abbr title="No date">n.d.</abbr> = year not specified</p></div>
  <ol id="publication-list" class="publication-list">{% assign papers = site.data.publications | sort: 'year' | reverse %}{% for paper in papers %}{% include academic/publication.html paper=paper %}{% endfor %}</ol>
  <div class="no-results" data-no-results hidden><h2>No publications found</h2><p>Try another keyword, year, or publication type.</p><button class="button" type="button" data-clear-filters>Clear all filters</button></div>
  <noscript><p class="helper-text">All publications are shown. Enable JavaScript to search and filter this list.</p></noscript>
</div>
