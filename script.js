(function () {
  'use strict';

  var KEY = 'cq-theme';
  var root = document.documentElement;
  var btn = document.getElementById('theme');
  var meta = document.querySelector('meta[name="theme-color"]');

  function current() {
    return root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }

  function paint(theme) {
    root.setAttribute('data-theme', theme);
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#0E1420' : '#F7F9FC');
    if (btn) {
      btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    }
  }

  function save(theme) {
    try {
      window.localStorage.setItem(KEY, theme);
    } catch (e) {
      /* storage unavailable: the page still works, the choice is just not remembered */
    }
  }

  paint(current());

  if (btn) {
    btn.addEventListener('click', function () {
      var next = current() === 'dark' ? 'light' : 'dark';
      paint(next);
      save(next);
    });
  }
})();
