(function () {
  'use strict';

  function addFooter() {
    if (!document.body || document.querySelector('.site-footer')) {
      return;
    }

    var style = document.createElement('style');
    style.textContent = [
      '.site-footer {',
      '  box-sizing: border-box;',
      '  position: relative;',
      '  z-index: 1000;',
      '  width: 100%;',
      '  margin-top: 40px;',
      '  padding: 22px 20px;',
      '  border-top: 1px solid rgba(255, 255, 255, 0.14);',
      '  background: #20130e;',
      '  color: #f4efe6;',
      '  font-family: \'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif;',
      '}',
      '.site-footer__links {',
      '  display: flex;',
      '  flex-wrap: wrap;',
      '  justify-content: center;',
      '  gap: 12px 22px;',
      '  margin: 0;',
      '}',
      '.site-footer .site-footer__link {',
      '  display: inline-flex;',
      '  align-items: center;',
      '  min-height: 44px;',
      '  padding: 8px 4px;',
      '  border: 0;',
      '  border-radius: 0;',
      '  background: transparent;',
      '  color: #f6d27a;',
      '  font-size: 1rem;',
      '  font-weight: 700;',
      '  line-height: 1.4;',
      '  text-decoration: none;',
      '  box-shadow: none;',
      '}',
      '.site-footer .site-footer__link:hover {',
      '  background: transparent;',
      '  color: #fff3cf;',
      '  text-decoration: underline;',
      '  text-underline-offset: 4px;',
      '}',
      '.site-footer .site-footer__link:focus-visible {',
      '  outline: 3px solid #f6d27a;',
      '  outline-offset: 4px;',
      '}',
      '.site-footer--overlay {',
      '  position: fixed;',
      '  right: 0;',
      '  bottom: 0;',
      '  left: 0;',
      '  margin: 0;',
      '  padding-top: 14px;',
      '  padding-bottom: 14px;',
      '  background: rgba(32, 19, 14, 0.82);',
      '  -webkit-backdrop-filter: blur(10px);',
      '  backdrop-filter: blur(10px);',
      '}',
      '@media (max-width: 520px) {',
      '  .site-footer {',
      '    margin-top: 28px;',
      '    padding: 16px;',
      '  }',
      '  .site-footer--overlay {',
      '    margin: 0;',
      '  }',
      '}'
    ].join('\n');
    document.head.appendChild(style);

    var footer = document.createElement('footer');
    footer.className = 'site-footer';

    if (window.location.pathname === '/' || document.documentElement.hasAttribute('data-language-router')) {
      footer.className += ' site-footer--overlay';
    }

    var navigation = document.createElement('nav');
    navigation.className = 'site-footer__links';
    navigation.setAttribute('aria-label', 'Social media');

    [
      {
        label: 'Instagram',
        url: 'https://www.instagram.com/magicsketchb00k/'
      },
      {
        label: 'note',
        url: 'https://note.com/toudaisan'
      }
    ].forEach(function (item) {
      var link = document.createElement('a');
      link.className = 'site-footer__link';
      link.href = item.url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = item.label;
      navigation.appendChild(link);
    });

    footer.appendChild(navigation);
    document.body.appendChild(footer);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addFooter);
  } else {
    addFooter();
  }
})();
