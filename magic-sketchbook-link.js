(function () {
  'use strict';

  var profile = document.querySelector('.profile-page');

  if (!profile || profile.querySelector('[data-magic-sketchbook-invitation]')) {
    return;
  }

  var isEnglish = (document.documentElement.lang || 'ja').toLowerCase().split('-')[0] === 'en';
  var title = isEnglish
    ? 'Open the Magic Sketchbook (Go to the Home Page)'
    : '魔法のスケッチブックを開いてみよう(Topページに移動します)';
  var buttonLabel = isEnglish
    ? 'Open the Magic Sketchbook and go to the home page'
    : '魔法のスケッチブックを開いてトップページへ移動する';

  var style = document.createElement('style');
  style.textContent = [
    '.magic-sketchbook-invitation {',
    '  --sketchbook-page-width: min(190px, calc((100vw - 64px) / 2));',
    '  width: 100%;',
    '  margin-top: 8px;',
    '  padding: 32px 0 12px;',
    '  border-top: 1px solid var(--line, #dedbd4);',
    '  text-align: center;',
    '}',
    '.magic-sketchbook-title {',
    '  margin: 0 0 22px;',
    '  color: var(--heading, #2c3e50);',
    '  font-size: clamp(1.1rem, 3.5vw, 1.35rem);',
    '  line-height: 1.6;',
    '}',
    '.magic-sketchbook-stage {',
    '  position: relative;',
    '  width: calc(var(--sketchbook-page-width) * 2);',
    '  height: calc(var(--sketchbook-page-width) * 1.5);',
    '  margin: 0 auto;',
    '  perspective: 1200px;',
    '}',
    '.magic-sketchbook-book {',
    '  position: absolute;',
    '  inset: 0;',
    '  transform: translateX(-25%);',
    '  transform-style: preserve-3d;',
    '  will-change: transform;',
    '}',
    '.magic-sketchbook-invitation.is-opening .magic-sketchbook-book {',
    '  animation: magic-sketchbook-center 1.8s cubic-bezier(0.45, 0.04, 0.16, 1) forwards;',
    '}',
    '.magic-sketchbook-page {',
    '  position: absolute;',
    '  top: 0;',
    '  right: 0;',
    '  width: 50%;',
    '  height: 100%;',
    '  overflow: hidden;',
    '  border-radius: 0 7px 7px 0;',
    '  background: #c9a875;',
    '  box-shadow: 0 16px 38px rgba(45, 24, 12, 0.24);',
    '  opacity: 0;',
    '  transform: rotateY(-1deg);',
    '  transform-origin: left center;',
    '  transition: opacity 120ms ease;',
    '}',
    '.magic-sketchbook-invitation.is-opening .magic-sketchbook-page {',
    '  opacity: 1;',
    '}',
    '.magic-sketchbook-page::after,',
    '.magic-sketchbook-cover-back::after {',
    '  position: absolute;',
    '  inset: 0;',
    '  z-index: 2;',
    '  pointer-events: none;',
    '  content: "";',
    '}',
    '.magic-sketchbook-page::after {',
    '  background: linear-gradient(to right, rgba(57, 30, 14, 0.18), transparent 10%);',
    '}',
    '.magic-sketchbook-cover-back::after {',
    '  background: linear-gradient(to left, rgba(57, 30, 14, 0.18), transparent 10%);',
    '}',
    '.magic-sketchbook-page img,',
    '.magic-sketchbook-cover-face img {',
    '  display: block;',
    '  width: 100%;',
    '  height: 100%;',
    '  object-fit: cover;',
    '  user-select: none;',
    '  -webkit-user-drag: none;',
    '}',
    '.magic-sketchbook-cover {',
    '  position: absolute;',
    '  top: 0;',
    '  left: 50%;',
    '  z-index: 3;',
    '  width: 50%;',
    '  height: 100%;',
    '  margin: 0;',
    '  padding: 0;',
    '  border: 0;',
    '  border-radius: 7px;',
    '  background: transparent;',
    '  box-shadow: 0 16px 42px rgba(30, 13, 6, 0.34);',
    '  cursor: pointer;',
    '  transform: rotateY(0deg);',
    '  transform-origin: left center;',
    '  transform-style: preserve-3d;',
    '  will-change: transform;',
    '  -webkit-tap-highlight-color: transparent;',
    '}',
    '.magic-sketchbook-cover-face {',
    '  position: absolute;',
    '  inset: 0;',
    '  overflow: hidden;',
    '  border-radius: inherit;',
    '  backface-visibility: hidden;',
    '  -webkit-backface-visibility: hidden;',
    '}',
    '.magic-sketchbook-cover-front {',
    '  transform: translateZ(1px);',
    '}',
    '.magic-sketchbook-cover-back {',
    '  border-radius: 7px 0 0 7px;',
    '  background: #c9a875;',
    '  transform: rotateY(180deg) translateZ(1px);',
    '}',
    '.magic-sketchbook-invitation.is-opening .magic-sketchbook-cover {',
    '  animation: magic-sketchbook-open 1.8s cubic-bezier(0.45, 0.04, 0.16, 1) forwards;',
    '}',
    '.magic-sketchbook-hitarea {',
    '  position: absolute;',
    '  top: 0;',
    '  left: 25%;',
    '  z-index: 10;',
    '  display: block;',
    '  width: 50%;',
    '  height: 100%;',
    '  border-radius: 7px;',
    '  cursor: pointer;',
    '  touch-action: manipulation;',
    '  -webkit-tap-highlight-color: transparent;',
    '}',
    '.magic-sketchbook-hitarea:focus-visible {',
    '  outline: 4px solid var(--accent, #f6d27a);',
    '  outline-offset: 5px;',
    '}',
    '.magic-sketchbook-invitation.is-opening .magic-sketchbook-hitarea {',
    '  pointer-events: none;',
    '}',
    '.magic-sketchbook-spine {',
    '  position: absolute;',
    '  top: 1%;',
    '  bottom: 1%;',
    '  left: 50%;',
    '  z-index: 4;',
    '  width: 2px;',
    '  background: linear-gradient(to right, rgba(33, 15, 7, 0.4), rgba(255, 221, 160, 0.2), rgba(33, 15, 7, 0.4));',
    '  box-shadow: 0 0 8px rgba(32, 13, 5, 0.3);',
    '  opacity: 0;',
    '  transform: translateX(-50%);',
    '  transition: opacity 260ms ease 1.2s;',
    '}',
    '.magic-sketchbook-invitation.is-opening .magic-sketchbook-spine {',
    '  opacity: 1;',
    '}',
    '@keyframes magic-sketchbook-center {',
    '  from { transform: translateX(-25%); }',
    '  to { transform: translateX(0); }',
    '}',
    '@keyframes magic-sketchbook-open {',
    '  from {',
    '    transform: rotateY(0deg);',
    '    box-shadow: 0 16px 42px rgba(30, 13, 6, 0.34);',
    '  }',
    '  to {',
    '    transform: rotateY(-180deg);',
    '    box-shadow: -8px 14px 32px rgba(30, 13, 6, 0.2);',
    '  }',
    '}',
    '@media (prefers-reduced-motion: reduce) {',
    '  .magic-sketchbook-invitation.is-opening .magic-sketchbook-book,',
    '  .magic-sketchbook-invitation.is-opening .magic-sketchbook-cover {',
    '    animation: none;',
    '  }',
    '}',
  ].join('\n');
  document.head.appendChild(style);

  var invitation = document.createElement('section');
  invitation.className = 'magic-sketchbook-invitation';
  invitation.setAttribute('data-magic-sketchbook-invitation', '');
  invitation.innerHTML = [
    '<h2 class="magic-sketchbook-title">' + title + '</h2>',
    '<div class="magic-sketchbook-stage">',
    '  <div class="magic-sketchbook-book">',
    '    <div class="magic-sketchbook-page" aria-hidden="true">',
    '      <img src="/MagicSketchbookPageR.png" alt="">',
    '    </div>',
    '    <div class="magic-sketchbook-spine" aria-hidden="true"></div>',
    '    <div class="magic-sketchbook-cover" aria-hidden="true">',
    '      <span class="magic-sketchbook-cover-face magic-sketchbook-cover-front">',
    '        <img src="/MagicSketchbookCover.png" alt="">',
    '      </span>',
    '      <span class="magic-sketchbook-cover-face magic-sketchbook-cover-back" aria-hidden="true">',
    '        <img src="/MagicSketchbookPageL.png" alt="">',
    '      </span>',
    '    </div>',
    '  </div>',
    '  <a class="magic-sketchbook-hitarea" href="/" aria-label="' + buttonLabel + '"></a>',
    '</div>',
  ].join('');
  profile.appendChild(invitation);

  var cover = invitation.querySelector('.magic-sketchbook-cover');
  var hitarea = invitation.querySelector('.magic-sketchbook-hitarea');
  var hasOpened = false;
  var hasNavigated = false;
  var fallbackTimer;

  function goHome() {
    if (hasNavigated) {
      return;
    }

    hasNavigated = true;
    window.clearTimeout(fallbackTimer);
    window.location.assign('/');
  }

  function openSketchbook(event) {
    if (event) {
      event.preventDefault();
    }

    if (hasOpened) {
      return;
    }

    hasOpened = true;
    hitarea.setAttribute('aria-disabled', 'true');

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      goHome();
      return;
    }

    invitation.classList.add('is-opening');
    cover.addEventListener('animationend', function (event) {
      if (event.animationName === 'magic-sketchbook-open') {
        goHome();
      }
    }, { once: true });
    fallbackTimer = window.setTimeout(goHome, 2200);
  }

  hitarea.addEventListener('click', openSketchbook);
  hitarea.addEventListener('touchend', openSketchbook, { passive: false });
})();
