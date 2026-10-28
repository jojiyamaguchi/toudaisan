(function () {
  'use strict';

  var bonuses = {
    bradleyshead: {
      ja: [
        'とっても優しい灯台さん。かつて、自分の灯台を見ながらスケッチしていた少年の影響で、赤カブのピクルスのサンドイッチが好き。',
        '灯台さんは、ネズミくらいの大きさ、人くらいの大きさ、灯台くらいの大きさ、と自由に大きさを変えられる。でも大きいのは疲れるみたい。',
        '実は、双子の兄弟がいる。',
        '灯台さんはいろんな世界に現れているようだ。'
      ],
      en: [
        'A very gentle Mr. Lighthouse. Influenced by a boy who once sketched while looking at his lighthouse, he likes sandwiches made with pickled red turnip.',
        'Mr. Lighthouses can freely change their size—from mouse-sized, to human-sized, to lighthouse-sized. But being big seems to tire them out.',
        'He actually has a twin brother.',
        'Mr. Lighthouse seems to appear in many different worlds.'
      ]
    },
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
    },
    ancestor: {
      ja: [
        'ご先祖さまのモフモフには灯台さんと似た灯りが隠れている。',
        '古文書に書かれた妖怪「やみてらし」に似てるとの声も。',
        '毛を剃ったら灯台さんにそっくりなんだと、本人は主張している。',
        '灯台さん達は、本人がご先祖さまだというのだからそうに違いない、というスタンス。'
      ],
      en: [
        'Hidden inside the Ancestor’s fluff is a light much like the ones carried by the Mr. Lighthouses.',
        'Some say the Ancestor resembles “Yamiterashi,” a yokai described in an ancient manuscript.',
        'The Ancestor insists that without all that fur, they would look just like a Mr. Lighthouse.',
        'The Mr. Lighthouses take the view that if the Ancestor says they are their ancestor, then it must be true.'
      ]
    },
    ishikari: {
      ja: [
        'イシカリ灯台さんはたくましい海の男！だけど荒っぽいことはちょっと苦手だ！',
        'イシカリ灯台さんはいろんなロープワークを知っている。いつか使う時がきっとくる！',
        'イシカリ灯台さんはロープワークの練習の合間にちょっとマクラメ編みもやってみたりする。',
        'イシカリ灯台さんは釣りを見るのが好きだが、魚に触るのはちょっと苦手。',
        'イシカリ灯台さんは釣り人の魚をそっと逃がしたりして、怒られたことがある。'
      ],
      en: [
        'Ishikari is a rugged man of the sea! But rough-and-tumble things are not really his strong suit!',
        'Ishikari knows all kinds of ropework. Someday, the chance to use it will surely come!',
        'Between ropework practice sessions, Ishikari sometimes tries a little macramé too.',
        'Ishikari likes watching people fish, but he is not very comfortable touching fish.',
        'Ishikari has gotten in trouble for quietly letting anglers’ fish escape.'
      ]
    },
    amedee: {
      ja: [
        'アメデ灯台さんは背が高くて、実は力も強い。',
        'アメデ灯台さんは超南国育ち。「天国に一番近い島」ともいわれる所に住んでいる。',
        'アメデ灯台さんは、白いワンピースのドレスがお気に入り。',
        'アメデ灯台さんは本当は腕相撲がとても強いけど、内緒にしてる。'
      ],
      en: [
        'Amédée is tall—and surprisingly strong.',
        'Amédée grew up in the deep tropics. She lives in a place sometimes called “the island closest to heaven.”',
        'Amédée’s favorite outfit is a white dress.',
        'Amédée is actually very good at arm wrestling, but she keeps it a secret.'
      ]
    },
    arahisa: {
      ja: [
        'アラヒサ灯台さんはリングを「手すり」と呼ぶとちょっと機嫌悪くなる。',
        'アラヒサ灯台さんのリングは冬には暖かいマフラーの代わりになるらしい。',
        'アラヒサ灯台さんが夜怪しく光って浮いているのを見たという人もいる。',
        'アラヒサ灯台さんは釣りをしてる人を見るのが好き。',
        'アラヒサ灯台さんは拝まれるとちょっと困った表情になる…らしい。'
      ],
      en: [
        'Arahisa gets a little grumpy if you call the ring a “handrail.”',
        'Arahisa’s ring apparently doubles as a warm scarf in winter.',
        'Some people say they have seen Arahisa floating and glowing mysteriously at night.',
        'Arahisa likes watching people fish.',
        'When people pray to Arahisa, a slightly troubled expression appears… apparently.'
      ]
    },
    burnham: {
      ja: [
        'チビはフリスビーが好き。',
        'チビが住んでいる灯台は満ち潮になると海の中になっちゃう。',
        '引き潮の時は歩いて灯台から出入りする。',
        '満ち潮の時は泳いで灯台から出入りする。',
        'チビは撫でてもらうのが好き。',
        'チビは舌をしまうのが得意ではない。'
      ],
      en: [
        'Chibi loves playing Frisbee.',
        'At high tide, the lighthouse where Chibi lives ends up surrounded by the sea.',
        'At low tide, Chibi walks in and out of the lighthouse.',
        'At high tide, Chibi swims in and out of the lighthouse.',
        'Chibi loves being petted.',
        'Chibi is not very good at keeping his tongue in his mouth.'
      ]
    },
    lighthousebaby: {
      ja: [
        '灯台の赤ちゃんの大好物は、赤カブのピクルスのサンドイッチ。',
        '灯台の赤ちゃんが暮らす海辺の町には立派な灯台と、小さな防波堤灯台がいくつかあります。',
        '灯台の赤ちゃんは、盲導犬のパピーウォーカーをやっているウォーカー夫妻の家に寝泊まりしています。',
        '灯台の赤ちゃんはウォーカーさんの家で寝ることが多いけど、ほかのお家や、外で寝ちゃうこともあります。そういう時、町の人はそっと寝かしてあげて、ウォーカーさんが心配しないように連絡だけ入れておきます。',
        'ウォーカーさんは盲導犬のパピーウォーカーで、たくさん盲導犬を育ててきた。灯台の赤ちゃんのお世話も引き受けた。',
        '灯台の赤ちゃんはウォーカーさんの家で2頭の盲導犬を引退した犬たちと一緒に暮らしている。',
        'ウォーカーさんの犬たちはとても優しくて大きくて、灯台の赤ちゃんを乗せて歩いたりしてくれる。犬の背中に乗っていると、灯台の赤ちゃんはすぐに寝てしまう。',
        '灯台の赤ちゃんは、町の大きな灯台の下で見つかった。だから灯台の赤ちゃんと呼ばれている。',
        '灯台の赤ちゃんには足が３本ある。安定感抜群。',
        '町の人たちは最初、灯台の赤ちゃんを気味悪がった。でもウォーカーさんの奥さんは「だって赤ちゃんでしょう！？」と言って反対を一切聞かず保護した。町の人たちもそんなウォーカーさんを見て次第に受け入れてくれた。'
      ],
      en: [
        "Lighthouse Baby's favorite food is a sandwich made with pickled red turnip.",
        'The seaside town where Lighthouse Baby lives has one magnificent lighthouse and several small breakwater lighthouses.',
        'Lighthouse Baby stays with Mr. and Mrs. Walker, who raise guide-dog puppies.',
        "Lighthouse Baby often sleeps at the Walkers' house, but sometimes falls asleep at someone else's home or outdoors. When that happens, the townspeople let the baby sleep peacefully and simply contact the Walkers so they will not worry.",
        'The Walkers are guide-dog puppy walkers and have raised many future guide dogs. They also took on the care of Lighthouse Baby.',
        "At the Walkers' house, Lighthouse Baby lives with two retired guide dogs.",
        "The Walkers' dogs are very gentle and very big. They even carry Lighthouse Baby around on their backs. Whenever Lighthouse Baby rides on a dog's back, the baby quickly falls asleep.",
        "Lighthouse Baby was found beneath the town's large lighthouse. That is why everyone calls the baby Lighthouse Baby.",
        'Lighthouse Baby has three legs—excellent stability.',
        'At first, the townspeople were unsettled by Lighthouse Baby. But Mrs. Walker said, “But it is a baby, is it not!?” and took the baby in without listening to any objections. Seeing the Walkers care for the baby, the townspeople gradually came to accept Lighthouse Baby.'
      ]
    }
  };

  window.toudaisanPlushBonuses = bonuses;

  if (!document.querySelector('[data-plush-bonus]')) {
    return;
  }

  var STORAGE_KEY = 'toudaisan-plush-bonus';
  var parameters = new URLSearchParams(window.location.search);
  var storedBonus = null;

  try {
    storedBonus = JSON.parse(window.sessionStorage.getItem(STORAGE_KEY));
  } catch (error) {
    storedBonus = null;
  }

  if (parameters.get('nfc') === '1') {
    storedBonus = {
      type: (parameters.get('type') || 'concept').toLowerCase(),
      bonus: Number(parameters.get('bonus'))
    };

    try {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(storedBonus));
    } catch (error) {
      // The bonus can still be displayed for this page view.
    }
  }

  if (!storedBonus || typeof storedBonus.type !== 'string') {
    return;
  }

  var containers = document.querySelectorAll('[data-plush-bonus]');
  containers.forEach(function (container) {
    var type = container.getAttribute('data-plush-bonus');

    if (storedBonus.type !== type) {
      return;
    }

    var language = (document.documentElement.lang || 'ja').toLowerCase().split('-')[0];
    var localizedBonuses = bonuses[type] && bonuses[type][language];

    if (!localizedBonuses || !localizedBonuses.length) {
      return;
    }

    var bonusIndex = Number(storedBonus.bonus);
    if (!Number.isInteger(bonusIndex) || bonusIndex < 0 || bonusIndex >= localizedBonuses.length) {
      bonusIndex = Math.floor(Math.random() * localizedBonuses.length);
      storedBonus.bonus = bonusIndex;

      try {
        window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(storedBonus));
      } catch (error) {
        // The selected bonus still remains visible for this page view.
      }
    }

    var text = container.querySelector('[data-plush-bonus-text]');
    text.textContent = localizedBonuses[bonusIndex];
    container.hidden = false;
  });

  if (parameters.has('nfc') || parameters.has('type') || parameters.has('bonus')) {
    ['nfc', 'type', 'bonus', 'lang'].forEach(function (name) {
      parameters.delete(name);
    });

    var cleanQuery = parameters.toString();
    var cleanUrl = window.location.pathname
      + (cleanQuery ? '?' + cleanQuery : '')
      + window.location.hash;

    window.history.replaceState(null, '', cleanUrl);
  }
})();
