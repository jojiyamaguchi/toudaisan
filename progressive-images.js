(function () {
  "use strict";

  var observed = new WeakSet();

  function upgrade(image) {
    var fullSource = image.dataset.fullSrc;
    if (!fullSource || image.dataset.fullLoading === "true" || image.dataset.fullLoaded === "true") {
      return;
    }

    image.dataset.fullLoading = "true";
    var preload = new Image();

    preload.onload = function () {
      image.src = fullSource;
      image.dataset.fullLoaded = "true";
      delete image.dataset.fullLoading;
    };

    preload.onerror = function () {
      delete image.dataset.fullLoading;
    };

    preload.src = fullSource;
  }

  var observer = "IntersectionObserver" in window
    ? new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);
          upgrade(entry.target);
        });
      }, { rootMargin: "500px 0px" })
    : null;

  function register(root) {
    var scope = root || document;
    var images = scope.matches && scope.matches("img[data-full-src]")
      ? [scope]
      : scope.querySelectorAll("img[data-full-src]");

    Array.prototype.forEach.call(images, function (image) {
      if (observed.has(image)) return;
      observed.add(image);
      if (observer) observer.observe(image);
      else upgrade(image);
    });
  }

  window.ToudaisanProgressiveImages = {
    register: register,
    upgrade: upgrade
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () { register(document); });
  } else {
    register(document);
  }

  new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      Array.prototype.forEach.call(mutation.addedNodes, function (node) {
        if (node.nodeType === 1) register(node);
      });
    });
  }).observe(document.documentElement, { childList: true, subtree: true });
})();
