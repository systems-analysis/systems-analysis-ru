# Report: theme toggle localization for /en

Date: 2026-04-06
Status: completed

## Problem

Theme toggle button showed Russian text ("Тёмная тема" / "Светлая тема") on all English pages in `/en/`.

## Root cause

`css/styles.css` used language-agnostic selectors for `::after` content:
```css
.theme-toggle::after { content: "Тёмная тема"; }
:root.dark .theme-toggle::after { content: "Светлая тема"; }
```

Both RU and EN pages share this CSS file.

## Fix

Added `:lang(en)` overrides in `css/styles.css` (lines 444-450):

```css
:root:lang(en) .theme-toggle::after { content: "Dark theme"; }
:root:lang(en).dark .theme-toggle::after { content: "Light theme"; }
```

## How it works

- All EN pages have `<html lang="en">`, all RU pages have `<html lang="ru">`
- `:lang(en)` selectors have higher specificity than base selectors
- EN overrides apply automatically to header nav toggle, footer toggle, and mobile toggle
- No HTML or JS changes needed

## Files modified

- `css/styles.css` -- 8 lines added (4 CSS rules + whitespace)

## Verification checklist

| State | RU pages | EN pages |
|-------|----------|----------|
| Light theme | "Тёмная тема" | "Dark theme" |
| Dark theme | "Светлая тема" | "Light theme" |

## Not modified

- `css/style.css` -- not linked by any page, left as-is
- `js/main.js` -- does not control button text
- `template/template_rus.html` -- standalone template with inline CSS
- Font toggle ("Arial" / "Georgia") -- language-neutral, no change needed
