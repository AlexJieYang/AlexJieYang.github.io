# Alex Jie Yang · Academic website

Personal website: https://alexjieyang.github.io

A lightweight academic website built with Jekyll and GitHub Pages.

## Content

- `_data/profile.json`: biography, contact details, research interests, education, service, grants, honors, and the ordered `selected_publications` IDs.
- `_data/publications.json`: the complete bibliography. Keep each publication's `id` stable and unique. Use `year: 0` only when the original record gives no year.
- `_pages/about.md`, `_pages/publications.md`, and `_pages/cv.md`: the homepage, publications page, and CV.
- `_layouts/academic.html` and `_includes/academic/`: the shared layout and components.
- `assets/css/academic.css` and `assets/js/academic.js`: responsive styles, filters, citation copying, and printing.
- `images/profile.jpg` and `images/monogram.svg`: the portrait and site icon.

Each publication stores display fields plus a copyable `citation` and UTF-8 `bibtex` entry. Update these together. Keep corresponding-author asterisks out of citations and BibTeX. Optional `status`, `award`, and `abstract` fields preserve accepted status, awards, and available abstracts. Letter and correspondence items retain their explicit `kind` values. Chinese BibTeX entries preserve names as literal names; use a Unicode-capable bibliography workflow.

The homepage displays selected first-author publications from Nature Biotechnology, Nature, Science, Research Policy, and 情报学报 before the complete bibliography. Selected entries reuse the same records with a `selected-` ID prefix so citation controls remain independent.

The complete bibliography appears on both the homepage and publications page, grouped as English journal articles, English conference papers, and Chinese journal articles. Each group uses `language` and `type` and sorts newest years first. All records remain readable without JavaScript; JavaScript adds search, year/type filters, shareable query URLs, and copy buttons. `_pages/publications.txt` and `_pages/publications.bib` generate downloadable references and BibTeX.

Chinese journal records use publisher and CNKI links. English records can provide `doi` without the resolver prefix or a publisher `url`. Citation exports use the bibliographic fields stored with each record.

## Pages

The site provides a homepage, publications, CV, a 404 page, citation downloads, and a sitemap. The `/about/`, `/about.html`, and `/resume` paths redirect to the corresponding pages.

Publication titles, authors, and identifiers follow their bibliographic sources. CNKI URLIDs are publisher links rather than DOIs.

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

## Static checks

```sh
python tools/check_site.py
node --check assets/js/academic.js
```

GitHub Actions checks bibliographic fields, selected-publication IDs, page routes, and JavaScript syntax. These checks do not build or publish the site.

## Credits

Originally based on [AcademicPages](https://github.com/academicpages/academicpages.github.io) and [Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes). See `LICENSE`.
