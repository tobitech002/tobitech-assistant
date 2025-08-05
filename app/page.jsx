"use client";
import { useState } from "react";

const DUMMY_ADS = [
  {
    type: "text",
    content: "Boost your business with AI-powered ad copy. Try now!",
  },
  {
    type: "image",
    content: "/ad-sample.jpg", // Replace with real ad image URL
  },
  {
    type: "video",
    content: "/ad-preview.mp4", // Replace with real ad video URL
  },
];

const CTA_TELEGRAM = "https://t.me/your_telegram_bot"; // <-- Insert Telegram Bot link here
const CTA_EMAIL = "mailto:support@tobitech.com"; // <-- Insert support email here

export default function HomePage() {
  const [theme, setTheme] = useState("dark");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [adIndex, setAdIndex] = useState(0);

  const handleThemeToggle = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    document.documentElement.classList.toggle("dark");
  };

  const handleLogin = () => {
    // Placeholder: Connect GPT API Login here
    alert("Login handler (connect GPT API here)");
  };

  const handleAdPreview = () => {
    setAdIndex((prev) => (prev + 1) % DUMMY_ADS.length);
  };

  const handleTelegram = () => {
    // Placeholder: Connect Telegram here
    window.open(CTA_TELEGRAM, "_blank");
  };

  const handleEmail = () => {
    // Placeholder: Connect Email here
    window.open(CTA_EMAIL, "_blank");
  };

  // Theme classes
  const bg = theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900";
  const section = "max-w-2xl mx-auto py-12 px-4";

  // Dummy ad preview
  const renderAd = () => {
    const ad = DUMMY_ADS[adIndex];
    if (ad.type === "text") return <div className="text-lg">{ad.content}</div>;
    if (ad.type === "image")
      return (
        <img
          src={ad.content}
          alt="Smart Ad"
          className="mx-auto rounded-lg shadow-lg max-h-40"
        />
      );
    if (ad.type === "video")
      return (
        <video controls className="mx-auto rounded-lg shadow-lg max-h-40">
          <source src={ad.content} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    return null;
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${bg}`}>
      {/* Navbar */}
      <header className="w-full sticky top-0 z-20 shadow-md">
        <nav className="flex items-center justify-between px-4 py-3 md:px-12 bg-opacity-80 backdrop-blur dark:bg-gray-900/80 bg-white/80">
          <div className="text-2xl font-bold tracking-tight">
            TOBI TECH Assistant
          </div>
          <div className="md:hidden">
            <button
              className="focus:outline-none"
              aria-label="Open menu"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={
                    mobileMenu
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            {["Home", "Features", "Services", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
            <button
              className="px-4 py-2 rounded bg-primary text-white hover:bg-primary-dark transition"
              onClick={handleLogin}
            >
              Login
            </button>
            <button
              className="ml-2 p-2 rounded bg-gray-700 text-white hover:bg-gray-600"
              onClick={handleThemeToggle}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? "🌙" : "☀️"}
            </button>
          </div>
        </nav>
        {/* Mobile menu */}
        {mobileMenu && (
          <div className="md:hidden bg-gray-900/95 text-white py-6 space-y-4 px-8">
            {["Home", "Features", "Services", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-lg"
                onClick={() => setMobileMenu(false)}
              >
                {item}
              </a>
            ))}
            <button
              className="w-full mt-2 px-4 py-2 rounded bg-primary text-white"
              onClick={handleLogin}
            >
              Login
            </button>
            <button
              className="w-full mt-2 px-4 py-2 rounded bg-gray-700 text-white"
              onClick={handleThemeToggle}
            >
              {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
            </button>
          </div>
        )}
      </header>

      {/* Free Trial Banner */}
      <div className="w-full bg-primary text-white py-3 text-center font-semibold">
        🎁 14-day Free Trial – Unlock all AI features now!
      </div>

      {/* Sections */}
      <main>
        {/* Home Section */}
        <section id="home" className={section}>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Welcome to TOBI TECH Assistant
          </h1>
          <p className="mb-6 text-lg">
            Your all-in-one AI-powered dashboard for business growth, marketing, and productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleTelegram}
              className="px-6 py-3 bg-teal-600 hover:bg-teal-700 rounded text-white font-medium"
            >
              Join Telegram
            </button>
            <button
              onClick={handleEmail}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded text-white font-medium"
            >
              Email Us
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className={section}>
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <ul className="grid md:grid-cols-2 gap-5">
            <li>AI-powered chat & dashboard</li>
            <li>Smart ad copy, image, and video generation</li>
            <li>Marketing automations</li>
            <li>Real-time analytics</li>
            <li>Business and productivity tools</li>
            <li>Secure cloud storage</li>
          </ul>
        </section>

        {/* Services Section */}
        <section id="services" className={section}>
          <h2 className="text-2xl font-semibold mb-4">Services</h2>
          <div className="grid md:grid-cols-3 gap-7">
            <div className="bg-gray-800 dark:bg-gray-700 rounded p-5 shadow">
              <h3 className="font-bold mb-2">Ad Generation</h3>
              <p>Generate ad text, images, and videos powered by AI.</p>
            </div>
            <div className="bg-gray-800 dark:bg-gray-700 rounded p-5 shadow">
              <h3 className="font-bold mb-2">Business Automation</h3>
              <p>Automate tasks, leads, and follow-ups with GPT-based tools.</p>
            </div>
            <div className="bg-gray-800 dark:bg-gray-700 rounded p-5 shadow">
              <h3 className="font-bold mb-2">Analytics</h3>
              <p>Track campaign & business performance in real-time.</p>
            </div>
          </div>
        </section>

        {/* Smart Ad Previews */}
        <section className={section}>
          <h2 className="text-2xl font-semibold mb-3">Smart Ad Preview</h2>
          <div className="flex flex-col items-center gap-4">
            <div className="w-full flex justify-center">{renderAd()}</div>
            <button
              className="mt-2 px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark"
              onClick={handleAdPreview}
            >
              Next Ad Preview
            </button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className={section}>
          <h2 className="text-2xl font-semibold mb-4">About</h2>
          <p>
            TOBI TECH Assistant leverages the latest AI technologies to empower businesses, entrepreneurs, and marketers with tools for growth, automation, and productivity.
          </p>
        </section>

        {/* Contact Section */}
        <section id="contact" className={section}>
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              // Placeholder: handle contact form submission (connect to backend/API)
              alert("Contact form submitted (connect API here)");
            }}
          >
            <input
              type="text"
              required
              placeholder="Name"
              className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600"
            />
            <input
              type="email"
              required
              placeholder="Email"
              className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600"
            />
            <textarea
              required
              placeholder="Your message"
              className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600"
              rows={4}
            />
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} TOBI TECH Assistant. All rights reserved.
      </footer>
    </div>
  );
}

// Tailwind Custom Colors (add to tailwind.config.js)
// theme: {
//   extend: {
//     colors: {
//       primary: "#6366f1", // indigo-500
//       "primary-dark": "#4f46e5", // indigo-600
//     },
//   },
// },
