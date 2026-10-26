(() => {
  const portrait = document.querySelector('img.portrait[src^="/images/"]');
  if (!portrait) return;

  const modelRow = Array.from(document.querySelectorAll('.fact-row')).find((row) => {
    const label = row.querySelector('dt')?.textContent.trim().toLowerCase();
    return label === 'モデル' || label === 'model';
  });
  if (!modelRow || modelRow.querySelector('.model-figure')) return;

  const portraitUrl = new URL(portrait.getAttribute('src'), window.location.origin);
  const filename = portraitUrl.pathname.split('/').pop() || '';
  const dotIndex = filename.lastIndexOf('.');
  if (dotIndex < 1) return;

  const stem = filename.slice(0, dotIndex).replace(/\d+$/, '');
  const candidates = ['jpg', 'jpeg', 'png'].map(
    (extension) => `/images/${stem}_model.${extension}`
  );
  const isJapanese = document.documentElement.lang.toLowerCase().startsWith('ja');
  const description = isJapanese ? 'モデルとなった灯台' : 'The lighthouse model';
  let candidateIndex = 0;

  const tryNextImage = () => {
    if (candidateIndex >= candidates.length) return;

    const image = document.createElement('img');
    image.className = 'model-photo';
    image.loading = 'lazy';
    image.decoding = 'async';
    image.alt = description;

    image.addEventListener('load', () => {
      const figure = document.createElement('figure');
      figure.className = 'model-figure';
      figure.appendChild(image);

      const caption = document.createElement('figcaption');
      caption.className = 'model-caption';
      caption.textContent = description;
      figure.appendChild(caption);

      const descriptionElement = modelRow.querySelector('dd');
      (descriptionElement || modelRow).appendChild(figure);
    }, { once: true });

    image.addEventListener('error', () => {
      candidateIndex += 1;
      tryNextImage();
    }, { once: true });

    image.src = candidates[candidateIndex];
  };

  tryNextImage();
})();
