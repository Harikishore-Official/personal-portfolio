# Portfolio Setup Guide

This guide will help you quickly set up and customize your portfolio website.

## 📁 Project Structure

```
portfolio-nextjs/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── navigation.tsx       # Navigation bar
│   ├── ui/                 # Reusable UI components
│   └── sections/           # Page sections
│       ├── hero.tsx        # Hero section
│       ├── about.tsx       # About section
│       ├── projects.tsx    # Projects section
│       ├── contact.tsx    # Contact section
│       └── footer.tsx     # Footer
├── lib/                    # Utility functions
│   └── utils.ts           # Helper utilities
├── types/                  # TypeScript definitions
│   └── index.ts          # Type definitions
├── public/                # Static assets
└── tailwind.config.ts     # Tailwind configuration
```

## 🎨 Customization Checklist

### 1. Personal Information

- [ ] Update name and title in `components/sections/hero.tsx`
- [ ] Add your profile photo in `components/sections/about.tsx`
- [ ] Update bio and personal description
- [ ] Customize skills list with your expertise
- [ ] Update contact information in `components/sections/contact.tsx`

### 2. Projects

- [ ] Edit projects array in `components/sections/projects.tsx`
- [ ] Add your actual project details
- [ ] Replace project images with your own
- [ ] Update project links (live and GitHub URLs)

### 3. Social Media & Links

- [ ] Update GitHub, LinkedIn, Twitter links in navigation
- [ ] Update social links in hero section
- [ ] Update social links in footer
- [ ] Add your email and contact details

### 4. SEO & Metadata

- [ ] Update metadata in `app/layout.tsx`
- [ ] Add your actual Open Graph image
- [ ] Update site description and keywords
- [ ] Customize Twitter card data

### 5. Styling

- [ ] Customize colors in `app/globals.css`
- [ ] Update Tailwind config if needed
- [ ] Adjust spacing and typography
- [ ] Add your brand colors

### 6. Content

- [ ] Replace placeholder text throughout
- [ ] Add your actual work history
- [ ] Include relevant project descriptions
- [ ] Add meaningful alt text for images

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Manual Build

```bash
npm run build
npm start
```

## 📝 Notes

- All sections are modular and can be easily modified
- Dark mode is supported and follows system preference
- All components are accessible and responsive
- Form handling can be connected to your backend
- Images should be added to the `public` folder

## 🔧 Development Tips

- Use `npm run dev` for development
- Use `npm run lint` to check code quality
- Use `npm run format` to format code
- Check browser console for any errors
- Test dark/light mode switching
- Test on different screen sizes

## 📧 Need Help?

Refer to the main README.md for more information or check the component files for inline comments.
