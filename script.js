(function () {
  'use strict';

  var STORAGE_KEY = 'cq-lang';

  var T = {
    en: {
      skip: 'Skip to content',
      nav_about: 'About',
      nav_skills: 'Skills',
      nav_sites: 'Sites',
      nav_contact: 'Contact',
      photo_alt: 'Illustrated portrait of Chris Quek',
      hero_role: 'IT Infrastructure & Systems Specialist',
      hero_lead: 'Open to project work and long-term roles, remote or on-site.',
      about_h: 'About',
      skills_h: 'Skills & Experience',
      sites_h: 'My Sites',
      contact_h: 'Contact',
      placeholder: 'Content for this section is added in the next step.',
      title: 'Chris Quek | chrisquek.my'
    },
    ms: {
      skip: 'Langkau ke kandungan',
      nav_about: 'Tentang',
      nav_skills: 'Kemahiran',
      nav_sites: 'Laman',
      nav_contact: 'Hubungi',
      photo_alt: 'Potret ilustrasi Chris Quek',
      hero_role: 'Pakar Infrastruktur IT & Sistem',
      hero_lead: 'Terbuka untuk kerja projek dan peranan jangka panjang, secara jarak jauh atau di lokasi.',
      about_h: 'Tentang Saya',
      skills_h: 'Kemahiran & Pengalaman',
      sites_h: 'Laman Saya',
      contact_h: 'Hubungi Saya',
      placeholder: 'Kandungan bahagian ini akan ditambah pada langkah seterusnya.',
      title: 'Chris Quek | chrisquek.my'
    }
  };

  function readSaved() {
    try {
      var v = window.localStorage.getItem(STORAGE_KEY);
      return v === 'ms' || v === 'en' ? v : null;
    } catch (e) {
      return null;
    }
  }

  function save(lang) {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* storage unavailable: the page still works, the choice is just not remembered */
    }
  }

  function apply(lang) {
    var dict = T[lang] || T.en;

    document.documentElement.lang = lang === 'ms' ? 'ms' : 'en';
    document.title = dict.title;

    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute('data-i18n');
      if (dict[key] !== undefined) nodes[i].textContent = dict[key];
    }

    var alts = document.querySelectorAll('[data-i18n-alt]');
    for (var j = 0; j < alts.length; j++) {
      var akey = alts[j].getAttribute('data-i18n-alt');
      if (dict[akey] !== undefined) alts[j].setAttribute('alt', dict[akey]);
    }

    var buttons = document.querySelectorAll('.lang button');
    for (var k = 0; k < buttons.length; k++) {
      var active = buttons[k].getAttribute('data-lang') === lang;
      buttons[k].setAttribute('aria-pressed', active ? 'true' : 'false');
    }
  }

  function init() {
    var buttons = document.querySelectorAll('.lang button');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function (e) {
        var lang = e.currentTarget.getAttribute('data-lang');
        apply(lang);
        save(lang);
      });
    }
    apply(readSaved() || 'en');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
