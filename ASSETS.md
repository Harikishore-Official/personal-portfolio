# Assets & Image Sources

This document tracks all external assets used in the portfolio template and their usage rights.

## Image Recommendations

### Profile Images

For professional profile photos, consider using:

- **Unsplash**: [Free high-quality photos](https://unsplash.com/)
- **Pexels**: [Free stock photos](https://www.pexels.com/)
- **Personal Photos**: Your own professional headshots

**Recommended Size**: 600x600px or square aspect ratio

### Project Screenshots

For project showcase images:

- **Screenshots**: Take actual screenshots of your projects
- **Mockups**: Use tools like [Figma](https://www.figma.com/) or [Canva](https://www.canva.com/)
- **Placeholders**: Temporary placeholders while developing

**Recommended Size**: 1200x800px or 3:2 aspect ratio

### Open Graph Image

For social media sharing:

- **Size**: 1200x630px (1.91:1 ratio)
- **Content**: Your name, title, or portfolio highlights
- **Tools**: Canva, Figma, or Photoshop

## Icon Sources

All icons are from **Lucide React**:

- Website: https://lucide.dev/
- License: ISC (permissive)
- Usage: Free for commercial use

## Font Sources

**Inter** from Google Fonts:

- Website: https://fonts.google.com/specimen/Inter
- License: SIL Open Font License
- Usage: Free for commercial use

## Recommended Image Domains

Add these to `next.config.js` if using external images:

```javascript
images: {
  domains: [
    'images.unsplash.com',
    'images.pexels.com',
    'via.placeholder.com'
  ],
}
```

## Attribution

When using images from Unsplash or Pexels, you don't need to credit the photographer (per their licensing), but it's appreciated.

## Placeholder Strategy

During development, use:

1. **Placeholder service**: `via.placeholder.com`
2. **Gradient backgrounds**: Already implemented in components
3. **Initial letters**: Fallback displays first letter of project name

## Final Deployment Checklist

Before deploying to production:

- [ ] Replace all placeholder images with actual assets
- [ ] Optimize images (compress for web)
- [ ] Add OG image (`/public/og-image.jpg`)
- [ ] Verify all images load correctly
- [ ] Check images in both light and dark modes
- [ ] Test image loading on mobile devices
