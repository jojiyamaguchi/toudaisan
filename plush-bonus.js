(function () {
  'use strict';

  var bonuses = {
    concept: {
      ja: [
        '概念さんにはモデルはいませんが、シルクロードにあったという砂漠の灯台をイメージしています。',
        '概念さんは、新しく灯台ができるとそこに住み着くのだとか。',
        '頭の先が尖っていない概念さんもいます。',
        '概念さんはオシャレ好きで、いろんな色に変わって楽しんでいるようです。',
        '概念さんは、訳があって新しい灯台ができるのを楽しみにしています。'
      ],
      en: [
        'Concept-san has no model, but was imagined as a desert lighthouse said to have stood along the Silk Road.',
        'They say Concept-san takes up residence whenever a new lighthouse is built.',
        'Some Concept-san have no point at the top of their heads.',
        'Concept-san loves fashion and seems to enjoy changing into all kinds of colors.',
        'For reasons of their own, Concept-san looks forward to new lighthouses being built.'
      ]
    }
  };

  var parameters = new URLSearchParams(window.location.search);
  if (parameters.get('nfc') !== '1') {
    return;
  }

  var containers = document.querySelectorAll('[data-plush-bonus]');
  containers.forEach(function (container) {
    var type = container.getAttribute('data-plush-bonus');
    var language = (document.documentElement.lang || 'ja').toLowerCase().split('-')[0];
    var localizedBonuses = bonuses[type] && bonuses[type][language];

    if (!localizedBonuses || !localizedBonuses.length) {
      return;
    }

    var bonusIndex = Number(parameters.get('bonus'));
    if (!Number.isInteger(bonusIndex) || bonusIndex < 0 || bonusIndex >= localizedBonuses.length) {
      bonusIndex = Math.floor(Math.random() * localizedBonuses.length);
    }

    var text = container.querySelector('[data-plush-bonus-text]');
    text.textContent = localizedBonuses[bonusIndex];
    container.hidden = false;

    document.querySelectorAll('[data-set-language]').forEach(function (link) {
      var linkUrl = new URL(link.href, window.location.origin);
      linkUrl.searchParams.set('nfc', '1');
      linkUrl.searchParams.set('type', type);
      linkUrl.searchParams.set('bonus', String(bonusIndex));
      link.href = linkUrl.pathname + linkUrl.search + linkUrl.hash;
    });
  });
})();