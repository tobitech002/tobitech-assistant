# TOBI TECH Assistant – AI Dashboard

A dark-themed, mobile-responsive AI-powered dashboard built with Next.js and Tailwind CSS.

## Features

- **Home, Features, Services, About, Contact, Login** sections
- **14-day Free Trial** banner
- **Hamburger menu** for mobile navigation
- **Smart ad previews:** text, image, video
- **Theme toggle** (light/dark)
- **CTA buttons** (Telegram, Email)
- **Responsive design** using Tailwind CSS
- Placeholder handlers for API integrations (GPT, Telegram, etc.)

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   Visit [http://localhost:3000](http://localhost:3000) to view your project.

### Customization

- **Ad images/videos:** Place your own assets in the `public/` folder and update their paths in `app/page.jsx`.
- **API Integration:** Replace dummy handler functions with your actual GPT API and Telegram Bot logic where marked.
- **Contact Info:** Update Telegram and email links in `app/page.jsx`.

## Folder Structure

```
app/
  page.jsx
  globals.css
public/
  [your ad images/videos]
tailwind.config.js
README.md
```

## License

[MIT](LICENSE)

---

**Built with ❤️ by TOBI TECH**
