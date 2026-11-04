# Alex Jie Yang · Academic website

Personal website: https://alexjieyang.github.io

The site remains compatible with GitHub Pages and Jekyll. The homepage, publication list, and CV share a lightweight academic layout; the original AcademicPages layouts and archived pages remain available.

## Update content

- `_data/profile.json`: biography, contact details, research themes, featured publication IDs, academic background, service, grants, and honors.
- `_data/publications.json`: the complete bibliography. Keep each publication's `id` stable and unique. Use `year: 0` only when the original record gives no year.
- `_pages/about.md`, `_pages/publications.md`, and `_pages/cv.md`: page structure.
- `_includes/academic/`: shared components.
- `assets/css/academic.css` and `assets/js/academic.js`: responsive styles, publication filters, and printing.
- `_data/navigation.yml`: navigation used by the retained AcademicPages layouts.

Each publication stores its complete `citation` alongside display fields (`title`, `authors`, `reference`, `year`, `type`, `kind`, and `doi`). Use `doi` without the `https://doi.org/` prefix; leave it empty when no DOI is supplied. Optional `status` and `award` fields distinguish accepted papers and awards. Letter and correspondence items have explicit `kind` values.

The homepage selects records by ID. The CV links to the same full publication list, and `_pages/publications.txt` generates the downloadable bibliography from those records. Update the data once to keep these views consistent. All publication records render without JavaScript; JavaScript adds search, year/type filters, and shareable query URLs.

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

GitHub Actions runs this build for pull requests. The public site continues to use its existing GitHub Pages deployment.

The three academic pages load no external font, icon library, or JavaScript framework. They use the existing profile photo, support keyboard navigation and reduced-motion preferences, and include canonical URLs, social metadata, and Person structured data.

## Credits

Legacy layouts are based on [AcademicPages](https://github.com/academicpages/academicpages.github.io) and [Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes). See `LICENSE`.
