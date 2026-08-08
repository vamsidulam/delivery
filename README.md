# DeliveryBusiness Website

Professional website for DeliveryBusiness - a food ordering platform powered by WhatsApp.

## Features

- ✅ Clean, responsive design
- ✅ Privacy Policy page (required for Meta/WhatsApp API)
- ✅ User Data Deletion page (required for Meta/WhatsApp API)
- ✅ Mobile-friendly navigation
- ✅ Professional SaaS/food-tech styling
- ✅ React + TypeScript + Tailwind CSS
- ✅ Fast and lightweight

## Tech Stack

- React 19
- TypeScript
- Tailwind CSS 4
- React Router 7
- Vite 8

## Getting Started

### Install dependencies

```bash
yarn install
```

### Run development server

```bash
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
yarn build
```

### Preview production build

```bash
yarn preview
```

## Deployment

### Deploy to Vercel

1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

or

```bash
npm i -g vercel
vercel
```

### Deploy to Netlify

1. Push to GitHub
2. Import project in Netlify
3. Deploy automatically

or

```bash
npm install netlify-cli -g
netlify deploy --prod
```

## Project Structure

```
delivery/
├── public/
│   └── _redirects          # SPA routing for Netlify
├── src/
│   ├── components/
│   │   ├── Header.tsx      # Navigation header
│   │   └── Footer.tsx      # Site footer
│   ├── pages/
│   │   ├── Home.tsx        # Home page
│   │   ├── PrivacyPolicy.tsx    # Privacy Policy
│   │   └── DataDeletion.tsx     # Data Deletion Request
│   ├── App.tsx             # Main app with routing
│   ├── main.tsx            # App entry point
│   └── index.css           # Tailwind imports
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── vercel.json             # SPA routing for Vercel
```

## Pages

### Home (`/`)
- Company introduction
- Feature highlights
- Call-to-action buttons

### Privacy Policy (`/privacy-policy`)
- Comprehensive privacy policy
- Required for Meta/WhatsApp Cloud API
- Professional legal-style content

### Data Deletion (`/data-deletion`)
- User data deletion request form
- Required for Meta/WhatsApp Cloud API
- Clear process explanation

## Contact

Email: [vamsidulam11@gmail.com](mailto:vamsidulam11@gmail.com)

## License

MIT

---

Built for Meta/WhatsApp Cloud API compliance.
