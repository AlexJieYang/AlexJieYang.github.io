# Alex Jie Yang · Academic website

Personal website: https://alexjieyang.github.io

A lightweight academic website built with Jekyll and GitHub Pages.

## Update content

- `_data/profile.json`: biography, contact details, research interests, education, service, grants, honors, and the ordered `selected_publications` IDs.
- `_data/publications.json`: the complete bibliography. Keep each publication's `id` stable and unique. Use `year: 0` only when the original record gives no year.
- `_pages/about.md`, `_pages/publications.md`, and `_pages/cv.md`: the homepage, publications page, and CV.
- `_layouts/academic.html` and `_includes/academic/`: the shared layout and components.
- `assets/css/academic.css` and `assets/js/academic.js`: responsive styles, filters, citation copying, and printing.
- `images/profile.jpg` and `images/monogram.svg`: the portrait and site icon.

Each publication stores display fields plus a copyable `citation` and UTF-8 `bibtex` entry. Update these together. Keep corresponding-author asterisks out of citations and BibTeX. Optional `status`, `award`, and `abstract` fields preserve accepted status, awards, and available abstracts. Letter and correspondence items retain their explicit `kind` values. Chinese BibTeX entries preserve names as literal names; use a Unicode-capable bibliography workflow.

The homepage displays selected first-author publications from Nature Biotechnology, Nature, Science, Research Policy, and 情报学报 before the complete bibliography. Selected entries reuse the same records with a `selected-` ID prefix so citation controls remain independent.

The complete bibliography appears on both the homepage and publications page, grouped as English journal articles, English conference papers, and Chinese journal articles. Each group uses `language` and `type` and sorts newest years first. All records remain readable without JavaScript; JavaScript adds search, year/type filters, shareable query URLs, and copy buttons. `_pages/publications.txt` and `_pages/publications.bib` generate downloadable references and BibTeX.

Chinese journal records omit DOI fields, DOI status messages, DOI links, and DOI information in citations and BibTeX. Non-DOI publisher and CNKI links are retained. For English records, store `doi` without the resolver prefix and use `doi_status` to distinguish verified, unresolved, unverified, and no-doi-found records.

## Source records

`_data/doi_audit.json` preserves the historical 2026-11-06 audit of 64 records, including identifiers deliberately omitted from the current Chinese bibliography. `_pages/doi-audit.json` retains its existing `/files/doi-audit.json` endpoint for reference. Recheck titles and authors against authoritative sources before changing an English DOI; do not infer identifiers or treat CNKI URLIDs as DOIs.

The genuine abstract formerly stored in a sample publication file is preserved as `pub-18.abstract`. Unused AcademicPages sample pages, collections, comments, theme assets, fonts, map tooling, and sample bibliography generators have been removed. The current site retains its homepage, publications, CV, 404 page, citation downloads, sitemap, and `/about/`, `/about.html`, and `/resume` redirects.

## Local preview

Install Ruby and Bundler, then run:

```sh
bundle install
bundle exec jekyll serve --config _config.yml,_config.dev.yml
```

To check the production build:

```sh
JEKYLL_ENV=production bundle exec jekyll build --trace
```

The public site uses the repository's existing GitHub Pages deployment. It loads no external font, icon library, or JavaScript framework and supports keyboard navigation, reduced-motion preferences, and print styles.

## Credits

Originally based on [AcademicPages](https://github.com/academicpages/academicpages.github.io) and [Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes). See `LICENSE`.
