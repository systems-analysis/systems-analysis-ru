# Report: Microsoft Clarity deployment to all pages

Date: 2026-04-06
Status: completed

## Problem

Microsoft Clarity (ID `w6k4iidqav`) was only present on 2 of 127 pages (`index.html` and `en/index.html`) as inline scripts. The other 125 pages had no Clarity coverage.

## Solution

Created a shared external script `js/clarity-init.js` and deployed it uniformly across all 127 pages.

## 1. Created js/clarity-init.js

- Contains the standard Clarity loader with dedup guard (`if (c[a]) return`)
- Clarity ID: `w6k4iidqav`
- Loads `https://www.clarity.ms/tag/` asynchronously

## 2. Removed inline Clarity blocks

| File | Action |
|------|--------|
| index.html | Replaced 7-line inline block with `<script src="js/clarity-init.js">` |
| en/index.html | Replaced 7-line inline block with `<script src="/js/clarity-init.js">` |

## 3. Added clarity-init.js to 125 regular pages

Insertion point: after Google Analytics `</script>`, before `</body>`.

- 63 RU pages: `<script src="js/clarity-init.js">`
- 62 EN pages: `<script src="../js/clarity-init.js">`

Path difference follows existing convention (RU uses relative `js/`, EN uses `../js/`).

## 4. Updated template

Added Clarity script reference to `template/template_rus.html` before `</body>` for future pages.

## 5. Verification results

| Check | Result |
|-------|--------|
| Pages with clarity-init.js | 127 / 127 |
| Inline Clarity remnants | 0 |
| Double Clarity on any page | 0 |
| Yandex.Metrika intact | 127 / 127 |
| Google Analytics intact | 127 / 127 |
| canonical / hreflang / og:url not affected | confirmed (changes only after GA block, before `</body>`) |

## Files created

- `js/clarity-init.js` (new)

## Files modified

- `index.html` -- inline block replaced with script tag
- `en/index.html` -- inline block replaced with script tag
- 63 RU pages -- Clarity script tag added
- 62 EN pages -- Clarity script tag added
- `template/template_rus.html` -- Clarity script tag added

Total: 129 files modified (127 pages + template + new JS file)

## Limitation

- Clarity functionality not verified with live HTTP requests
- Browser console test recommended after deployment
