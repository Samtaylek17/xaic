(function () {
  'use strict';

  function loadPartial(url, targetId) {
    var target = document.getElementById(targetId);
    if (!target) return Promise.resolve();

    return fetch(url)
      .then(function (response) {
        if (!response.ok) throw new Error('Failed to load ' + url);
        return response.text();
      })
      .then(function (html) {
        target.innerHTML = html;
      })
      .catch(function () {
        target.innerHTML =
          '<p class="partial-error">Unable to load site navigation. Please use a local server (see README).</p>';
      });
  }

  function setActiveNav() {
    var page = document.body.getAttribute('data-page');
    if (!page) return;

    var links = document.querySelectorAll('.site-nav a[data-nav]');
    for (var i = 0; i < links.length; i++) {
      var link = links[i];
      if (link.getAttribute('data-nav') === page) {
        link.classList.add('is-active');
        link.setAttribute('aria-current', 'page');
      }
    }
  }

  function initMobileNav() {
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.querySelector('.site-nav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', function () {
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', expanded ? 'false' : 'true');
      nav.classList.toggle('is-open');
      document.body.classList.toggle('nav-open');
    });

    var navLinks = nav.querySelectorAll('a');
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener('click', function () {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
        document.body.classList.remove('nav-open');
      });
    }
  }

  function initFadeIn() {
    document.body.classList.add('is-loaded');
  }

  document.addEventListener('DOMContentLoaded', function () {
    Promise.all([
      loadPartial('partials/header.html', 'site-header'),
      loadPartial('partials/footer.html', 'site-footer')
    ]).then(function () {
      setActiveNav();
      initMobileNav();
      initFadeIn();
    });
  });
})();
