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

  /* Contact form */
  var openBtn = document.getElementById('open-form');
  var panel = document.getElementById('contact-panel');
  var form = document.getElementById('contact-form');
  var closeBtn = document.getElementById('close-form');
  var statusEl = document.getElementById('form-status');
  var sendBtn = document.getElementById('send-btn');
  var nameEl = document.getElementById('f-name');
  var emailEl = document.getElementById('f-email');
  var msgEl = document.getElementById('f-message');
  var trap = document.getElementById('botcheck');

  if (!openBtn || !panel || !form) return;

  function setStatus(text, kind) {
    statusEl.textContent = text;
    statusEl.className = 'status' + (kind ? ' ' + kind : '');
  }

  function openPanel() {
    panel.hidden = false;
    openBtn.setAttribute('aria-expanded', 'true');
    var calm = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    panel.scrollIntoView({ behavior: calm ? 'auto' : 'smooth', block: 'nearest' });
    nameEl.focus({ preventScroll: true });
  }

  function closePanel() {
    panel.hidden = true;
    openBtn.setAttribute('aria-expanded', 'false');
    openBtn.focus();
  }

  openBtn.addEventListener('click', function () {
    if (panel.hidden) openPanel(); else closePanel();
  });

  closeBtn.addEventListener('click', closePanel);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !panel.hidden) closePanel();
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (trap && trap.checked) return;

    var name = nameEl.value.trim();
    var email = emailEl.value.trim();
    var message = msgEl.value.trim();

    if (!name || !email || !message) {
      setStatus('Fill in your name, email, and message.', 'error');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('Enter a valid email address.', 'error');
      emailEl.focus();
      return;
    }

    setStatus('Sending\u2026', '');
    sendBtn.disabled = true;

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    })
      .then(function (r) {
        return r.json().then(function (j) { return { ok: r.ok, json: j }; });
      })
      .then(function (res) {
        if (res.ok && res.json && res.json.success) {
          form.reset();
          setStatus('Message sent. I will reply by email.', 'ok');
        } else {
          throw new Error('send failed');
        }
      })
      .catch(function () {
        setStatus('Your message did not send. Try again, or email hello@chrisquek.my.', 'error');
      })
      .then(function () {
        sendBtn.disabled = false;
      });
  });
})();
