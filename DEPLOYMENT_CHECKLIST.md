# Deployment Checklist

Use this checklist to ensure your portfolio is production-ready before deployment.

## Pre-Deployment

### Content Customization

- [ ] Update personal information in `config/portfolio.ts`
  - [ ] Name
  - [ ] Role/Title
  - [ ] Bio
  - [ ] Email
  - [ ] Phone
  - [ ] Location

- [ ] Update social links in `config/portfolio.ts`
  - [ ] GitHub
  - [ ] LinkedIn
  - [ ] Twitter
  - [ ] Other social platforms

- [ ] Add your projects in `config/portfolio.ts`
  - [ ] Project titles
  - [ ] Descriptions
  - [ ] Tech stacks
  - [ ] Live URLs
  - [ ] GitHub URLs

- [ ] Update skills in `config/portfolio.ts`
  - [ ] Skill names
  - [ ] Skill levels (0-100)

- [ ] Customize section descriptions
  - [ ] Hero subtitle
  - [ ] About section
  - [ ] Projects description
  - [ ] Contact section

- [ ] Update site configuration
  - [ ] Site URL (important!)
  - [ ] Site description
  - [ ] Site name

### Images & Assets

- [ ] Add profile image (`/public/images/profile.jpg`)
- [ ] Add project images for each featured project
- [ ] Add Open Graph image (`/public/og-image.jpg`) - 1200x630px
- [ ] Optimize all images for web
- [ ] Verify images work in both themes (light/dark)

### Styling & Branding

- [ ] Customize colors in `app/globals.css`
- [ ] Update primary color
- [ ] Update accent color
- [ ] Test color contrast (WCAG AA compliance)
- [ ] Update fonts if desired

### Functionality Testing

- [ ] Test all navigation links
- [ ] Test form submission (contact form)
- [ ] Test theme switching (dark/light mode)
- [ ] Test responsive design on mobile
- [ ] Test responsive design on tablet
- [ ] Test responsive design on desktop
- [ ] Test back-to-top button
- [ ] Test skip-to-content link
- [ ] Verify all external links work

### SEO & Metadata

- [ ] Update title in `app/layout.tsx`
- [ ] Update description
- [ ] Update keywords
- [ ] Verify Open Graph tags
- [ ] Update Twitter card data
- [ ] Update canonical URL
- [ ] Test sitemap generation (`/sitemap.xml`)

### Accessibility

- [ ] Test keyboard navigation
- [ ] Test with screen reader
- [ ] Verify focus indicators are visible
- [ ] Check color contrast ratios
- [ ] Test skip-to-content functionality
- [ ] Verify ARIA labels are present

### Performance

- [ ] Run `npm run build`
- [ ] Verify build succeeds without errors
- [ ] Check Lighthouse scores (aim for 90+)
- [ ] Test image loading performance
- [ ] Check bundle size
- [ ] Enable production mode locally

### Code Quality

- [ ] Run `npm run lint` - no errors
- [ ] Run `npm run format` - code formatted
- [ ] Fix TypeScript errors
- [ ] Remove console logs
- [ ] Remove unused code

### Documentation

- [ ] Update README.md with your info
- [ ] Update CUSTOMIZATION_GUIDE.md
- [ ] Add setup instructions
- [ ] Document custom features added

## Deployment

### Choose Platform

**Vercel (Recommended)**

```bash
npm i -g vercel
vercel
```

**Netlify**

```bash
npm run build
# Upload /out folder
```

**Traditional Hosting**

```bash
npm run build
npm start
```

### Post-Deployment

- [ ] Update `siteConfig.url` in `config/portfolio.ts`
- [ ] Test all URLs
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Test social media previews (Open Graph)
- [ ] Set up analytics (Google Analytics, etc.)
- [ ] Add custom domain (if applicable)
- [ ] Test contact form works in production
- [ ] Monitor error logs

### Final Verification

- [ ] All links work correctly
- [ ] Images load properly
- [ ] Forms submit successfully
- [ ] Navigation is smooth
- [ ] Theme switching works
- [ ] Mobile experience is polished
- [ ] No console errors
- [ ] Lighthouse scores are acceptable
- [ ] Content is accurate and up-to-date
- [ ] Social links point to correct profiles

## Launch

✅ **You're ready to launch!**

Share your portfolio:

- Social media (LinkedIn, Twitter)
- GitHub profile
- Email signature
- Resume
- Business cards

## Monitoring

After launch, monitor:

- Analytics
- Error logs
- Form submissions
- Performance metrics
- User feedback

---

**Need help?** Check the documentation files or open an issue on GitHub.
