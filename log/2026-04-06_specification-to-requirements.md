# Report: migration `specification.html` -> `requirements.html`

Date: 2026-04-06
Status: completed

## 1. Renamed files (2)

| Old name | New name |
|----------|----------|
| specification.html | requirements.html |
| en/specification.html | en/requirements.html |

Method: `git mv`.

## 2. Updated links (14 files, 31 occurrences)

Replacement pattern: `specification.html` -> `requirements.html` (exact filename, not bare word).

### Inside renamed files (2 files, 17 occurrences)

Updated in each file:
- `<link rel="canonical">`
- `<link rel="alternate" hreflang="ru|en">`
- `<meta property="og:url">`
- JSON-LD: `@id`, `url`, `mainEntityOfPage`
- EN<->RU language switcher

### External referring files (12 files, 14 occurrences)

| File | Occ. | Link type |
|------|------|-----------|
| sections.html | 1 | section listing |
| en/sections.html | 1 | section listing |
| map.html | 1 | sitemap |
| en/map.html | 1 | sitemap |
| management_se.html | 2 | cross-references |
| en/management_se.html | 2 | cross-references |
| systems_engineering.html | 1 | cross-reference |
| en/systems_engineering.html | 1 | cross-reference |
| conception.html | 1 | cross-reference |
| en/conception.html | 1 | cross-reference |
| life_cycle.html | 1 | cross-reference |
| en/life_cycle.html | 1 | cross-reference |

Not affected: `index.html`, `en/index.html` (no links to this page).

## 3. Redirects added to .htaccess

```
RewriteRule ^specification\.html$ /requirements.html [R=301,L]
RewriteRule ^en/specification\.html$ /en/requirements.html [R=301,L]
```

## 4. Content word "specification" preserved

The English word "specification" appears as content text in 3 files:
- en/chernyak_method.html (2 occurrences)
- en/mathmodeling_process.html (2 occurrences)
- en/operation_research_gv.html (3 occurrences)

These were NOT modified because the replacement pattern targeted only `specification.html` (with `.html` suffix), not the bare word.

Verified after migration: all 7 content occurrences intact.

## 5. Verification results

| Check | Result |
|-------|--------|
| `grep "specification.html" *.html` | 0 matches |
| New RU file exists | requirements.html -- yes |
| New EN file exists | en/requirements.html -- yes |
| Old files removed | confirmed |
| .htaccess redirects | 2 rules present |
| canonical in requirements.html | `https://systems-analysis.ru/requirements.html` |
| canonical in en/requirements.html | `https://systems-analysis.ru/en/requirements.html` |
| hreflang ru<->en correct | confirmed both directions |
| og:url updated | confirmed both files |
| sections.html link | `requirements.html` |
| map.html link | `requirements.html` |
| Content word "specification" intact | confirmed in 3 EN files |

## 6. Limitation

- .htaccess redirects verified by file content, not live HTTP test.
