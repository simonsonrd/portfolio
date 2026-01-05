// Main JS for Portfolio: nav toggle, theme toggle, year
(function () {
  const docEl = document.documentElement;

  // Mobile menu toggle
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('open', !expanded);
    });
  }

  // Year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Theme preference
  const THEME_KEY = 'portfolio_theme';
  const themeBtn = document.getElementById('theme-toggle');

  function applyTheme(theme) {
    if (theme === 'light' || theme === 'dark') {
      docEl.setAttribute('data-theme', theme);
    } else {
      docEl.removeAttribute('data-theme');
    }
  }

  function getSystemPreference() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function getInitialTheme() {
    try {
      return localStorage.getItem(THEME_KEY) || '';
    } catch (_) { return ''; }
  }

  let current = getInitialTheme();
  if (!current) { current = ''; } // '' = follow system
  applyTheme(current);

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const system = getSystemPreference();
      const next = current === 'dark' ? 'light' : current === 'light' ? '' : 'dark';
      current = next;
      applyTheme(current);
      try {
        if (current) localStorage.setItem(THEME_KEY, current); else localStorage.removeItem(THEME_KEY);
      } catch (_) {}
    });
  }
})();
