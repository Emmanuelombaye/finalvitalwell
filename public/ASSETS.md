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
    ├── cards/       # Homepage feature & step card images (WebP)
    ├── vials/       # Product vial art (WebP)
    └── trust/       # Footer compliance badges (WebP)
```

Regenerate homepage card images and hero:

```bash
npm run build-home-images
```

Regenerate optimized WebP assets from PNG/JPG sources:

```bash
npm run optimize-images
```

Only optimized WebP/SVG ship to production.
