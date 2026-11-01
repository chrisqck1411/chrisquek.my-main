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
      about_p1: 'I am an IT infrastructure specialist with more than 20 years across Malaysia and Singapore, from enterprise server and network support to monitoring and incident management. Today I am turning that experience into free, practical web tools for Malaysian businesses and freelancers, starting with MyBizTools.',
      about_p2: 'Alongside infrastructure work, I also spent several years in retail operations and customer service supervision. That gave me a practical view of how IT systems need to perform on the shop floor.',
      skills_h: 'Skills & Experience',
      sk1_t: 'Monitoring & observability',
      sk1_d: 'Zabbix, Nagios XI, Dynatrace, Checkmk, AS/400 monitoring',
      sk2_t: 'Systems & infrastructure',
      sk2_d: 'Windows (Wintel), RHEL, Solaris, AIX, Active Directory, DHCP, file and print services, multi-site support',
      sk3_t: 'ITSM & ITIL',
      sk3_d: 'Incident, problem and change management; root cause analysis reporting',
      sk4_t: 'Automation & scripting',
      sk4_d: 'PowerShell; server patching automation',
      sk5_t: 'Security & compliance',
      sk5_d: 'SOX-related auditing and remediation',
      sk6_t: 'Leadership & operations',
      sk6_d: 'Supervised teams of 5 to 8; retail store operations and customer service supervision',
      exp_h: 'Experience highlights',
      exp1_r: 'SR Executive, GOT-IT (ITSM)',
      exp1_d: 'Led the migration of AS/400 and Oracle DB monitoring from Nagios XI to Zabbix, and built the AS/400 monitoring foundation as sole owner.',
      exp2_r: 'Apple Certified Technician, then Customer Service Supervisor',
      exp2_d: 'Progressed from iOS and Mac technician to supervising customer service operations at service centres in Melaka and Kuala Lumpur.',
      exp3_date: 'Mar 2003 \u2013 Mar 2010',
      exp3_r: 'Wintel Level 3 support, incident management and service desk',
      exp3_d: 'Standardised APJ server patching through automation, cutting required manpower by 71%. Coordinated cross-team incident escalations and root cause reports.',
      exp_more: 'Earlier roles included system engineer at CSC Malaysia, store supervisor at Challenger Technologies, and IT support in Singapore.',
      sites_h: 'My Sites',
      site1_d: 'Free business and document tools for Malaysian SMEs and freelancers.',
      site2_t: 'Blog',
      site2_d: 'Posts and write-ups.',
      site3_t: 'Resume',
      site3_d: 'My full resume.',
      soon: 'Coming soon',
      contact_h: 'Contact',
      contact_p: 'Reach me by email or through my profiles below. A contact form is coming soon.',
      email_l: 'Email',
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
      about_p1: 'Saya pakar infrastruktur IT dengan pengalaman lebih 20 tahun di Malaysia dan Singapura, merangkumi sokongan pelayan dan rangkaian peringkat perusahaan, pemantauan sistem dan pengurusan insiden. Kini saya menukar pengalaman itu kepada alat web yang percuma dan praktikal untuk perniagaan dan pekerja bebas di Malaysia, bermula dengan MyBizTools.',
      about_p2: 'Selain kerja infrastruktur, saya juga menghabiskan beberapa tahun dalam operasi runcit dan penyeliaan khidmat pelanggan. Pengalaman itu memberi saya pandangan praktikal tentang bagaimana sistem IT perlu berfungsi di lantai kedai.',
      skills_h: 'Kemahiran & Pengalaman',
      sk1_t: 'Pemantauan & kebolehlihatan sistem',
      sk1_d: 'Zabbix, Nagios XI, Dynatrace, Checkmk, pemantauan AS/400',
      sk2_t: 'Sistem & infrastruktur',
      sk2_d: 'Windows (Wintel), RHEL, Solaris, AIX, Active Directory, DHCP, perkhidmatan fail dan cetakan, sokongan berbilang lokasi',
      sk3_t: 'ITSM & ITIL',
      sk3_d: 'Pengurusan insiden, masalah dan perubahan; laporan analisis punca masalah (RCA)',
      sk4_t: 'Automasi & skrip',
      sk4_d: 'PowerShell; automasi tampalan (patching) pelayan',
      sk5_t: 'Keselamatan & pematuhan',
      sk5_d: 'Audit dan tindakan pembetulan berkaitan SOX',
      sk6_t: 'Kepimpinan & operasi',
      sk6_d: 'Menyelia pasukan 5 hingga 8 orang; operasi kedai runcit dan penyeliaan khidmat pelanggan',
      exp_h: 'Pengalaman terpilih',
      exp1_r: 'SR Executive, GOT-IT (ITSM)',
      exp1_d: 'Mengetuai migrasi pemantauan AS/400 dan Oracle DB daripada Nagios XI ke Zabbix, dan membina asas pemantauan AS/400 sebagai pemilik tunggal.',
      exp2_r: 'Juruteknik Bertauliah Apple, kemudian Penyelia Khidmat Pelanggan',
      exp2_d: 'Berkembang daripada juruteknik iOS dan Mac kepada penyelia operasi khidmat pelanggan di pusat servis di Melaka dan Kuala Lumpur.',
      exp3_date: 'Mac 2003 \u2013 Mac 2010',
      exp3_r: 'Sokongan Wintel Tahap 3, pengurusan insiden dan meja bantuan',
      exp3_d: 'Menyeragamkan tampalan pelayan APJ melalui automasi, mengurangkan keperluan tenaga kerja sebanyak 71%. Menyelaras eskalasi insiden antara pasukan dan laporan punca masalah.',
      exp_more: 'Peranan terdahulu termasuk jurutera sistem di CSC Malaysia, penyelia kedai di Challenger Technologies, dan sokongan IT di Singapura.',
      sites_h: 'Laman Saya',
      site1_d: 'Alat perniagaan dan dokumen percuma untuk PKS dan pekerja bebas di Malaysia.',
      site2_t: 'Blog',
      site2_d: 'Catatan dan tulisan.',
      site3_t: 'Resume',
      site3_d: 'Resume lengkap saya.',
      soon: 'Akan datang',
      contact_h: 'Hubungi Saya',
      contact_p: 'Hubungi saya melalui e-mel atau profil saya di bawah. Borang hubungan akan tersedia tidak lama lagi.',
      email_l: 'E-mel',
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
