# Report: migration `operation_reserch` -> `operation_research`

Date: 2026-04-06
Status: completed

## 1. Renamed files (18)

### RU (9)

| Old name | New name |
|----------|----------|
| operation_reserch.html | operation_research.html |
| operation_reserch_as.html | operation_research_as.html |
| operation_reserch_book.html | operation_research_book.html |
| operation_reserch_caa.html | operation_research_caa.html |
| operation_reserch_gv.html | operation_research_gv.html |
| operation_reserch_me.html | operation_research_me.html |
| operation_reserch_model.html | operation_research_model.html |
| operation_reserch_ve.html | operation_research_ve.html |
| operation_reserch_vg.html | operation_research_vg.html |

### EN (9)

| Old name | New name |
|----------|----------|
| en/operation_reserch.html | en/operation_research.html |
| en/operation_reserch_as.html | en/operation_research_as.html |
| en/operation_reserch_book.html | en/operation_research_book.html |
| en/operation_reserch_caa.html | en/operation_research_caa.html |
| en/operation_reserch_gv.html | en/operation_research_gv.html |
| en/operation_reserch_me.html | en/operation_research_me.html |
| en/operation_reserch_model.html | en/operation_research_model.html |
| en/operation_reserch_ve.html | en/operation_research_ve.html |
| en/operation_reserch_vg.html | en/operation_research_vg.html |

Method: `git mv` (preserves git history).

## 2. Updated links in HTML files (41 files, 358 occurrences)

Replacement pattern: `operation_reserch` -> `operation_research` (exact substring).

Files where links were updated:

### Renamed files themselves (18 files, ~295 occurrences)

Each file had internal references updated:
- `<link rel="canonical">`
- `<link rel="alternate" hreflang="ru|en">`
- `<meta property="og:url">`
- JSON-LD: `@id`, `url`, `mainEntityOfPage`
- navigation links to sibling pages
- EN<->RU language switcher

### External referring files (23 files, ~63 occurrences)

| File | Occurrences | Type of links |
|------|------------|---------------|
| index.html | 1 | nav-card link |
| sections.html | 9 | section listing |
| map.html | 9 | sitemap tree |
| methodology_or.html | 3 | cross-references |
| operation.html | 3 | cross-references |
| books.html | 1 | cross-reference |
| action.html | 1 | cross-reference |
| criterion_system.html | 1 | cross-reference |
| data_science.html | 1 | cross-reference |
| management.html | 1 | cross-reference |
| optimization.html | 1 | cross-reference |
| systems_analysis_book.html | 1 | cross-reference |
| en/sections.html | 9 | section listing |
| en/map.html | 9 | sitemap tree |
| en/methodology_or.html | 3 | cross-references |
| en/operation.html | 3 | cross-references |
| en/books.html | 1 | cross-reference |
| en/action.html | 1 | cross-reference |
| en/criterion_system.html | 1 | cross-reference |
| en/data_science.html | 1 | cross-reference |
| en/management.html | 1 | cross-reference |
| en/optimization.html | 1 | cross-reference |
| en/systems_analysis_book.html | 1 | cross-reference |

Note: `en/index.html` already had the correct link `operation_research.html` before migration and was not modified.

## 3. Redirects added to .htaccess

18 RewriteRule entries (9 RU + 9 EN), all 301 permanent, one-to-one.

## 4. Verification results

| Check | Result |
|-------|--------|
| `grep "operation_reserch" *.html` | 0 matches |
| New RU files exist | 9/9 |
| New EN files exist | 9/9 |
| Old RU files removed | confirmed |
| Old EN files removed | confirmed |
| .htaccess redirect rules | 18/18 |
| index.html links correct | confirmed |
| sections.html links correct | confirmed |
| map.html links correct | confirmed |
| operation_research.html SEO meta correct | confirmed (canonical, hreflang, og:url, JSON-LD) |
| systems_research.html not affected | confirmed |

## 5. Remaining risks

| Risk | Status |
|------|--------|
| Cached old URLs in search engines | Mitigated by 301 redirects |
| External backlinks to old URLs | Mitigated by 301 redirects |
| CDN or browser cache serving old pages | Resolves naturally; no action needed |

## 6. Not modified (by design)

- `en/index.html` -- already had correct link
- `systems_research.html` -- different file family, not affected
- PDF assets in `/assets/` -- use hyphens (`operation-research`), not affected
- `project/project.md` -- project documentation, contains old slug for reference
