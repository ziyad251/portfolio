# Mahammad Ziyad – Portfolio

Personal portfolio website of Mahammad Ziyad, a Computer Science student and software developer.

The site is a single page with these sections: About, Projects, Experience, Education & Achievements, and Contact.

## Tech

- React 19 and Vite
- Tailwind CSS v4
- lucide-react icons
- EmailJS for the contact form

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The output goes to `dist/`.

## Contact form

The form sends messages through EmailJS. Copy `.env.example` to `.env` and fill in:

```
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

Set the same variables on your hosting platform.

## Editing content

- Contact details (email, GitHub, LinkedIn): `src/data/profile.js`
- Page sections: `src/sections/`
- Navigation and footer: `src/layout/`
