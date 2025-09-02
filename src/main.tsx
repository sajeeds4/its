import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.tsx'
import './index.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
// Import Bootstrap JavaScript
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
)

// Optional: react to data-theme changes and keep color-scheme in sync
const rootEl = document.documentElement;
const updateColorScheme = () => {
  const theme = rootEl.getAttribute('data-theme');
  if (theme === 'dark') document.documentElement.style.colorScheme = 'dark';
  else if (theme === 'light') document.documentElement.style.colorScheme = 'light';
};
const mo = new MutationObserver(updateColorScheme);
mo.observe(rootEl, { attributes: true, attributeFilter: ['data-theme'] });
updateColorScheme();

// Export helper for future manual toggles (keeps system default if null)
export function setTheme(theme: 'light' | 'dark' | 'system') {
  const root = document.documentElement;
  localStorage.setItem('theme', theme);
  if (theme === 'light' || theme === 'dark') {
    root.setAttribute('data-theme', theme);
    root.style.colorScheme = theme;
  } else {
    // system
    root.removeAttribute('data-theme');
    const dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    root.style.colorScheme = dark ? 'dark' : 'light';
  }
}
