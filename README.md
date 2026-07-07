# FlowSync AI

A modern, animated SaaS landing page for an AI-powered project management platform — built with React, Vite, Tailwind CSS v4, and Framer Motion.

🔗 **Live Demo:** https://saas-dashboard-navy-one.vercel.app/
📦 **GitHub Repo:** https://github.com/samanjaved198-glitch/SAAS-DASHBOARD.git

> Replace the two links above with your actual Netlify production URL and GitHub repository URL before submitting.

---

##  Features

- **Landing sections** — Hero, Trusted Companies, Features, Statistics, Product Showcase, Pricing, Plan Comparison, Testimonials, Blog, FAQ, Contact, Footer
- **Authentication** — Email/password and Google sign-in modal (Firebase)
- **Dark / Light mode** — Full theme switching across every section
- **Search & Filter** — Live FAQ search, Blog category filtering
- **Charts & Analytics** — Animated growth chart on the Statistics section
- **Toast notifications** — Real-time feedback for auth, contact form, and newsletter actions
- **Empty & error states** — Graceful fallbacks for no-results and crashed sections (React Error Boundary)
- **Performance** — Route-level code splitting (`React.lazy` + `Suspense`), lazy-loaded images with skeleton placeholders, optimized WebP assets
- **Accessibility** — Linked form labels, keyboard focus states, semantic heading hierarchy, ARIA attributes
- **Fully responsive** — Mobile, tablet, laptop, and desktop layouts
- **Initial page loader** — Branded splash animation on first load

---

##  Tech Stack

| Category | Technology |
|---|---|
| Framework | React 19 + Vite |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Forms | React Hook Form |
| Auth / Backend | Firebase |
| Icons | Lucide React, React Icons |
| Notifications | React Hot Toast |
| Carousel | Swiper |
| Linting | ESLint |

---

##  Project Structure

```
flowsync-ai/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/            # Images and optimized WebP assets
│   ├── components/
│   │   ├── auth/          # Login/Signup modal
│   │   ├── blog/
│   │   ├── comparison/
│   │   ├── common/        # Shared reusable components (Button, EmptyState, ErrorBoundary, etc.)
│   │   ├── contact/
│   │   ├── faq/
│   │   ├── features/
│   │   ├── footer/
│   │   ├── hero/
│   │   ├── navbar/
│   │   ├── pricing/
│   │   ├── showcase/
│   │   ├── statistics/
│   │   └── testimonials/
│   ├── context/           # Auth & Theme context providers
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

##  Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone 

# Move into the project folder
cd flowsync-ai

# Install dependencies
npm install
```

### Running Locally

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### Building for Production

```bash
npm run build
```

### Linting

```bash
npm run lint
```

---

##  Deployment

This project is deployed on **Vercel**. Any push to the main branch triggers an automatic rebuild and deploy.

To deploy your own copy:
1. Push this repo to your own GitHub account.
2. Connect the repo to Netlify (or Vercel).
3. Set the build command to `npm run build` and the publish directory to `dist`.

---

##  Screenshots
<img width="1358" height="632" alt="01-hero" src="https://github.com/user-attachments/assets/c53fa3cd-08b5-4963-ad37-827d6f50291b" />
<img width="1330" height="612" alt="02-features" src="https://github.com/user-attachments/assets/98afaef0-1089-43c1-a91b-5d8da654c36c" />
<img width="1348" height="677" alt="03-showcase" src="https://github.com/user-attachments/assets/c4018fd5-6a72-4da9-a5a5-62e59f111736" />
<img width="1348" height="656" alt="04-pricing" src="https://github.com/user-attachments/assets/8fff2106-4613-406b-aee5-bc9646f6a4ba" />
<img width="1352" height="630" alt="05-testimonials" src="https://github.com/user-attachments/assets/f6606fe8-efd7-431c-8025-40e30afc7c51" />
<img width="460" height="482" alt="11-auth-modal (1)" src="https://github.com/user-attachments/assets/c6bc50ed-0909-436b-807b-0c5770384c40" />
<img width="1351" height="674" alt="06-faq" src="https://github.com/user-attachments/assets/ebf03035-e1f5-431f-84e8-9017d2c66b8c" />
<img width="1334" height="610" alt="07-blog" src="https://github.com/user-attachments/assets/8c4ffac4-3671-440e-bdef-5033b154cccf" />
<img width="1324" height="676" alt="08-contact" src="https://github.com/user-attachments/assets/55ca80a0-493f-44e5-bd73-11cbca06c89a" />
<img width="1363" height="665" alt="09-footer" src="https://github.com/user-attachments/assets/7d558217-8233-4480-85aa-a97515791464" />
<img width="428" height="558" alt="10-ai-chat-widget" src="https://github.com/user-attachments/assets/48c1fcb5-74c3-49ef-987d-e1163749d421" />
## Author

**saman javed**
Frontend Development Intern Teyzixcore

---

##  License

This project was built for internship/educational purposes and is not licensed for commercial use.
