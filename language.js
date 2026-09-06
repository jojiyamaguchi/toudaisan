(function () {
  'use strict';

  var root = document.documentElement;
  var japanesePath = root.dataset.jaPath;
  var englishPath = root.dataset.enPath;

  if (!japanesePath || !englishPath) {
    return;
  }

  var requestedLanguage = new URLSearchParams(window.location.search).get('lang');
  requestedLanguage = requestedLanguage ? requestedLanguage.toLowerCase() : null;

  if (requestedLanguage === 'jp') {
    requestedLanguage = 'ja';
  }

  if (requestedLanguage !== 'ja' && requestedLanguage !== 'en') {
    requestedLanguage = null;
  }

  function addNavigationContext(path) {
    var destinationUrl = new URL(path, window.location.origin);
    var currentParameters = new URLSearchParams(window.location.search);

    ['nfc', 'type', 'bonus', 'lang'].forEach(function (name) {
      if (currentParameters.has(name) && !destinationUrl.searchParams.has(name)) {
        destinationUrl.searchParams.set(name, currentParameters.get(name));
      }
    });

    return destinationUrl.pathname + destinationUrl.search + destinationUrl.hash;
  }

  var isRouter = root.hasAttribute('data-language-router');
  var pageLanguage = (root.getAttribute('lang') || 'ja').toLowerCase().split('-')[0];

  if (isRouter) {
    var routerLanguage = requestedLanguage || 'ja';
    var routerDestination = addNavigationContext(routerLanguage === 'en' ? englishPath : japanesePath);
    window.location.replace(routerDestination);
    return;
  }

  if (requestedLanguage && pageLanguage !== requestedLanguage) {
    var requestedDestination = addNavigationContext(requestedLanguage === 'en' ? englishPath : japanesePath);
    window.location.replace(requestedDestination);
  }
})();
