# Joseph Kacvinsky - Cybersecurity Portfolio

A modern, responsive portfolio website built with Astro and Tailwind CSS, showcasing cybersecurity expertise, certifications, and professional experience.

## Features

- **Modern Design**: Clean, professional layout with cybersecurity-themed elements
- **Responsive**: Fully responsive design that works on all devices
- **Interactive Components**: Hover effects, smooth scrolling, and engaging animations
- **Blog Support**: Markdown-powered blog for sharing insights and expertise
- **Contact Form**: Professional contact form for inquiries
- **Certification Showcase**: Dedicated section for professional certifications
- **Technical Skills**: Comprehensive display of tools and platforms experience

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone or download this repository
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:4321`

### Building for Production

Build the site for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navigation.astro
│   │   ├── Hero.astro
│   │   ├── CoreCompetencies.astro
│   │   ├── TechnicalTools.astro
│   │   ├── Certifications.astro
│   │   ├── Blog.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── content/
│   │   └── blog/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Customization

### Content Updates

- **Personal Information**: Update the Hero component with your details
- **Skills and Tools**: Modify the TechnicalTools component to reflect your expertise
- **Certifications**: Update the Certifications component with your credentials
- **Contact Information**: Update contact details in the Contact and Footer components

### Styling

The site uses Tailwind CSS for styling with custom color variables defined in the config:

- `cyber-blue`: #7ecbff
- `cyber-dark`: #0a2342
- `cyber-light`: #eaf6ff
- `cyber-accent`: #1e3a5c

### Blog Posts

Add new blog posts by creating Markdown files in `src/content/blog/` with the following frontmatter:

```markdown
---
title: "Your Post Title"
date: "YYYY-MM-DD"
tags: ["tag1", "tag2"]
excerpt: "Brief description of the post"
---

Your content here...
```

## Deployment

### GitHub Pages

1. Update the `site` and `base` values in `astro.config.mjs`
2. Build the project: `npm run build`
3. Deploy the `dist/` folder to your hosting provider

### Vercel/Netlify

These platforms can automatically deploy Astro projects. Simply connect your repository and they'll handle the build process.

## Technologies Used

- **Astro**: Static site generator
- **Tailwind CSS**: Utility-first CSS framework
- **TypeScript**: Type-safe JavaScript
- **Markdown**: Content management for blog posts

## License

This project is open source and available under the MIT License.

## Contact

Joseph Kacvinsky - Joseph@Kacvinsky.Work
LinkedIn: https://www.linkedin.com/in/joseph-kacvinsky/
GitHub: https://github.com/ReQuiem2099
