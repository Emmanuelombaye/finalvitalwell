# VitalWellRx — public assets

```
public/
├── brand/           # Logos & favicons
│   ├── logo.webp
│   ├── logo-nav.webp
│   ├── icon.svg
│   └── favicon.svg
└── images/
    ├── hero.webp
    ├── category-weight.webp
    ├── vials/       # Product vial art (WebP)
    └── trust/       # Footer compliance badges (WebP)
```

Regenerate optimized WebP assets from PNG/JPG sources:

```bash
npm run optimize-images
```

Source PNGs are not committed; only optimized WebP/SVG ship to production.
