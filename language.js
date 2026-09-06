(function () {
  'use strict';

  var STORAGE_KEY = 'toudaisan-language';
  var root = document.documentElement;
  var japanesePath = root.dataset.jaPath;
  var englishPath = root.dataset.enPath;

  if (!japanesePath || !englishPath) {
    return;
  }

  function readPreference() {
    try {
      var value = window.localStorage.getItem(STORAGE_KEY);
      return value === 'ja' || value === 'en' ? value : null;
    } catch (error) {
      return null;
    }
  }

  function savePreference(language) {
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch (error) {
      // The page can still switch languages when storage is unavailable.
    }
  }

  function browserPreference() {
    var languages = navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || ''];

    for (var index = 0; index < languages.length; index += 1) {
      var language = String(languages[index]).toLowerCase();

      if (language === 'ja' || language.indexOf('ja-') === 0) {
        return 'ja';
      }

      if (language === 'en' || language.indexOf('en-') === 0) {
        return 'en';
      }
    }

    return 'ja';
  }

  var requestedLanguage = new URLSearchParams(window.location.search).get('lang');
  if (requestedLanguage !== 'ja' && requestedLanguage !== 'en') {
    requestedLanguage = null;
  }

  if (requestedLanguage) {
    savePreference(requestedLanguage);
  }

  function addNavigationContext(path) {
    var destinationUrl = new URL(path, window.location.origin);
    var currentParameters = new URLSearchParams(window.location.search);

    ['nfc', 'type', 'bonus'].forEach(function (name) {
      if (currentParameters.has(name) && !destinationUrl.searchParams.has(name)) {
        destinationUrl.searchParams.set(name, currentParameters.get(name));
      }
    });

    return destinationUrl.pathname + destinationUrl.search + destinationUrl.hash;
  }

  var selectedLanguage = requestedLanguage || readPreference() || browserPreference();
  var destination = addNavigationContext(selectedLanguage === 'en' ? englishPath : japanesePath);
  var isRouter = root.hasAttribute('data-language-router');
  var pageLanguage = (root.getAttribute('lang') || '').toLowerCase().split('-')[0];

  if (isRouter || pageLanguage !== selectedLanguage) {
    window.location.replace(destination);
    return;
  }

  document.addEventListener('DOMContentLoaded', function () {
    var languageLinks = document.querySelectorAll('[data-set-language]');

    languageLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        var language = link.getAttribute('data-set-language');
        if (language === 'ja' || language === 'en') {
          savePreference(language);
        }
      });
    });
  });
})();
