/* Runs before the page paints, so a saved dark theme shows from the first frame (no white flash). */
try {
  if (localStorage.getItem('cq-theme') === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
} catch (e) {}
