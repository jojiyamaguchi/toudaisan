(() => {
  const portrait = document.querySelector('img.portrait[src^="/images/"]');
  if (!portrait) return;

  const factRows = Array.from(document.querySelectorAll('.fact-row'));
  const locationLabels = [
    '住んでいるところ',
    '住んでるところ',
    'where he lives',
    'where she lives',
    'where they live',
    'home',
    'モデル',
    'model'
  ];
  const targetRow = factRows.find((row) => {
    const label = row.querySelector('dt')?.textContent.trim().toLowerCase();
    return locationLabels.includes(label);
  }) || factRows[0];
  if (!targetRow || targetRow.querySelector('.model-figure')) return;

  const portraitUrl = new URL(portrait.getAttribute('src'), window.location.origin);
  const filename = portraitUrl.pathname.split('/').pop() || '';
  const dotIndex = filename.lastIndexOf('.');
  if (dotIndex < 1) return;

  const stem = filename.slice(0, dotIndex).replace(/\d+$/, '');
  const candidates = ['jpg', 'jpeg', 'png'].map(
    (extension) => `/images/${stem}_model.${extension}`
  );
  const isJapanese = document.documentElement.lang.toLowerCase().startsWith('ja');
  const description = isJapanese ? '住んでいるところ' : 'Where this character lives';
  let candidateIndex = 0;

  const tryNextImage = () => {
    if (candidateIndex >= candidates.length) return;

    const image = document.createElement('img');
    image.className = 'model-photo';
    image.loading = 'eager';
    image.decoding = 'async';
    image.alt = description;

    image.addEventListener('load', () => {
      const figure = document.createElement('figure');
      figure.className = 'model-figure';
      figure.appendChild(image);


      const descriptionElement = targetRow.querySelector('dd');
      (descriptionElement || targetRow).appendChild(figure);
    }, { once: true });

    image.addEventListener('error', () => {
      candidateIndex += 1;
      tryNextImage();
    }, { once: true });

    image.src = candidates[candidateIndex];
  };

  tryNextImage();
})();
