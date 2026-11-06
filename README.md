# Alex Jie Yang · Academic website

Personal website: https://alexjieyang.github.io

The site remains compatible with GitHub Pages and Jekyll. The homepage, publication list, and CV share a lightweight academic layout; the original AcademicPages layouts and archived pages remain available.

## Update content

- `_data/profile.json`: biography, contact details, research themes, academic background, service, grants, and honors.
- `_data/publications.json`: the complete bibliography. Keep each publication's `id` stable and unique. Use `year: 0` only when the original record gives no year.
- `_pages/about.md`, `_pages/publications.md`, and `_pages/cv.md`: page structure.
- `_includes/academic/`: shared components.
- `assets/css/academic.css` and `assets/js/academic.js`: responsive styles, publication filters, citation copying, and printing.
- `_data/navigation.yml`: navigation used by the retained AcademicPages layouts.

Each publication stores a complete, copyable `citation` and UTF-8 `bibtex` entry alongside display fields (`title`, `authors`, `reference`, `year`, `type`, `kind`, and `doi`). Keep corresponding-author asterisks out of citations and BibTeX. Use `doi` without the `https://doi.org/` prefix; leave it empty when no DOI is verified. Optional `status` and `award` fields distinguish accepted papers and awards. Letter and correspondence items have explicit `kind` values. Chinese BibTeX entries preserve names as literal names; use a Unicode-capable bibliography workflow.

The homepage and publications page render the complete bibliography through `_includes/academic/publication-list.html`; neither truncates the list. The CV links to the same records. `_pages/publications.txt` and `_pages/publications.bib` generate downloadable references and BibTeX. Update each record's display fields, citation, and BibTeX together to keep all views consistent. All publications and citation disclosures work without JavaScript; JavaScript adds search, year/type filters, shareable query URLs, and copy buttons with a manual-selection fallback.

## DOI audit

The 2026-11-06 audit covers all 64 records. It confirms 50 DOI identifiers, including 19 additions: 47 resolve through doi.org; three are printed by the journal but return 404 from the DOI resolver. These three records retain the identifier and link to their official publisher pages. Fourteen records have no authoritative DOI verified; this does not prove that no DOI exists.

`_data/doi_audit.json` records sources, resolution results, and notes, and `_pages/doi-audit.json` publishes it at `/files/doi-audit.json`. Each publication has `doi_checked` and `doi_status`: `verified`, `unresolved` (publisher-confirmed identifier with failed resolution), `no-doi-found`, or `unverified`. Optional `url` supplies an official paper page when no DOI resolves. Recheck title and authors against an authoritative source before changing a DOI; do not infer identifiers from neighboring articles or treat CNKI URLIDs as DOIs.

## Local preview

Install Ruby and Bundler, then run:

```sh
bundle install
bundle exec jekyll serve
```

Open the URL printed by Jekyll. To check the production build:

```sh
JEKYLL_ENV=production bundle exec jekyll build --trace
```

The public site uses its existing GitHub Pages build and deployment.

The three academic pages load no external font, icon library, or JavaScript framework. They use the existing profile photo, support keyboard navigation and reduced-motion preferences, and include canonical URLs, social metadata, and Person structured data.

## Credits

Legacy layouts are based on [AcademicPages](https://github.com/academicpages/academicpages.github.io) and [Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes). See `LICENSE`.
