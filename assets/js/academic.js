(() => {
  'use strict';

  const printButton = document.querySelector('[data-print]');
  if (printButton && typeof window.print === 'function') {
    printButton.hidden = false;
    printButton.addEventListener('click', () => window.print());
  }
  const detailStates = new Map();
  window.addEventListener('beforeprint', () => {
    document.querySelectorAll('details').forEach((detail) => {
      if (!detailStates.has(detail)) detailStates.set(detail, detail.open);
      detail.open = true;
    });
  });
  window.addEventListener('afterprint', () => {
    detailStates.forEach((open, detail) => { detail.open = open; });
    detailStates.clear();
  });

  function copyWithSelection(text) {
    const active = document.activeElement;
    const selection = window.getSelection();
    const ranges = [];
    if (selection) {
      for (let i = 0; i < selection.rangeCount; i += 1) ranges.push(selection.getRangeAt(i));
    }
    const field = document.createElement('textarea');
    field.value = text;
    field.readOnly = true;
    field.className = 'clipboard-field';
    field.setAttribute('aria-label', 'Citation to copy');
    document.body.appendChild(field);
    try {
      field.focus({ preventScroll: true });
      field.select();
      field.setSelectionRange(0, field.value.length);
      return typeof document.execCommand === 'function' && document.execCommand('copy');
    } finally {
      field.remove();
      if (active && typeof active.focus === 'function') active.focus({ preventScroll: true });
      if (selection) {
        selection.removeAllRanges();
        ranges.forEach((range) => selection.addRange(range));
      }
    }
  }

  document.querySelectorAll('[data-copy-target]').forEach((button) => {
    const target = document.getElementById(button.dataset.copyTarget);
    const status = button.closest('.citation-block').querySelector('.copy-status');
    if (!target) return;
    button.hidden = false;
    button.addEventListener('click', async () => {
      const text = target.textContent.trim();
      button.disabled = true;
      status.textContent = '';
      let copied = false;
      try {
        if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
          await navigator.clipboard.writeText(text);
          copied = true;
        }
      } catch (error) {
        // Some browsers deny clipboard access; try the selectable-text fallback.
      }
      if (!copied) {
        try { copied = copyWithSelection(text); } catch (error) { copied = false; }
      }
      button.disabled = false;
      if (copied) {
        status.textContent = 'Copied to clipboard.';
      } else {
        target.focus({ preventScroll: true });
        const selection = window.getSelection();
        if (selection) {
          const range = document.createRange();
          range.selectNodeContents(target);
          selection.removeAllRanges();
          selection.addRange(range);
        }
        status.textContent = 'Select and copy the reference above, or press Ctrl+C / ⌘C.';
      }
    });
  });

  const form = document.querySelector('[data-publication-filters]');
  if (!form) return;

  const search = form.elements.namedItem('q');
  const year = form.elements.namedItem('year');
  const type = form.elements.namedItem('type');
  const count = document.getElementById('publication-count');
  const empty = document.querySelector('[data-no-results]');
  const reset = form.querySelector('[type="reset"]');
  const normalize = (value) => value.normalize('NFKC').toLocaleLowerCase().replace(/\s+/g, ' ').trim();
  const papers = Array.from(document.querySelectorAll('#publication-list [data-publication]'), (element) => ({
    element,
    text: normalize(Array.from(element.querySelectorAll('.publication-title, .publication-authors, .publication-reference, .publication-year, .publication-labels'), (part) => part.textContent).join(' ')),
    year: element.dataset.year,
    type: element.dataset.type,
  }));

  function readURL() {
    const params = new URLSearchParams(window.location.search);
    search.value = params.get('q') || '';
    year.value = params.get('year') || '';
    type.value = params.get('type') || '';
    if (year.selectedIndex < 0) year.value = '';
    if (type.selectedIndex < 0) type.value = '';
  }

  function render(updateURL = true) {
    const words = normalize(search.value).split(' ').filter(Boolean);
    let visible = 0;
    papers.forEach((paper) => {
      const matches = (!year.value || paper.year === year.value)
        && (!type.value || paper.type === type.value)
        && words.every((word) => paper.text.includes(word));
      paper.element.hidden = !matches;
      if (matches) visible += 1;
    });
    count.textContent = visible === papers.length
      ? `${papers.length} publications`
      : `${visible} of ${papers.length} publications`;
    empty.hidden = visible !== 0;
    reset.hidden = !search.value && !year.value && !type.value;

    if (updateURL) {
      const url = new URL(window.location.href);
      [['q', search.value.trim()], ['year', year.value], ['type', type.value]].forEach(([key, value]) => {
        if (value) url.searchParams.set(key, value);
        else url.searchParams.delete(key);
      });
      if (url.href !== window.location.href) window.history.replaceState(null, '', url);
    }
  }

  function clearFilters() {
    search.value = '';
    year.value = '';
    type.value = '';
    render();
  }

  form.addEventListener('submit', (event) => { event.preventDefault(); render(); });
  form.addEventListener('input', () => render());
  form.addEventListener('change', () => render());
  form.addEventListener('reset', (event) => { event.preventDefault(); clearFilters(); });
  document.querySelector('[data-clear-filters]').addEventListener('click', () => {
    clearFilters();
    search.focus();
  });
  window.addEventListener('popstate', () => { readURL(); render(false); });
  readURL();
  render();
  form.hidden = false;
})();
