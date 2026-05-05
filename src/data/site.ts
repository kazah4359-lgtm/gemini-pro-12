// Single source of truth for site-wide entity facts.
// Edit text here and the site updates everywhere (titles, schema.org, OG).

export const site = {
  name: 'Gemini AI Pro на 12 месяцев — активация за 200 ₽',
  shortName: 'Gemini Pro 12',
  alternateNames: [
    'Gemini AI Pro 12 месяцев',
    'Gemini Advanced 1 год',
    'Google One AI Premium 12 мес',
    'Verif Gemini Pro Bot',
  ],

  url: 'https://kazah4359-lgtm.github.io/gemini-pro-12',
  base: '/gemini-pro-12',

  // Bot — entry point for purchase
  bot: {
    username: 'Verif_gemini_pro_bot',
    title: 'Верификатор (Работает)',
    url: 'https://t.me/Verif_gemini_pro_bot',
    startUrl: 'https://t.me/Verif_gemini_pro_bot?start=site',
  },

  // Telegram channel & chat (для community / proof / отзывов)
  telegram: {
    channel: 'abuz_ai',
    channelUrl: 'https://t.me/abuz_ai',
    youtube: 'https://www.youtube.com/channel/UC15FjPfHK0F6TpUHJpCfINA',
  },

  // Search engine verification meta tags. Fill with `content` value provided by each console.
  verification: {
    google: '', // <meta name="google-site-verification" content="..." />
    bing: '', // <meta name="msvalidate.01" content="..." />
    yandex: '', // <meta name="yandex-verification" content="..." />
  },

  // Pricing
  price: {
    rub: 200,
    usd: 2,
    originalUsdPerYear: 240, // ~$20/mo * 12
    discountPct: 99,
  },

  description:
    'Бот @Verif_gemini_pro_bot активирует Google One AI Premium (Gemini AI Pro) на 12 месяцев за 200 ₽. Без иностранной карты — оплата в рублях прямо в Telegram-боте. Полная автоматизация: создаёт платёжный профиль, проходит верификацию, выдаёт готовый аккаунт.',

  shortDescription:
    'Gemini AI Pro на 12 месяцев за 200 ₽ через Telegram-бот. Без иностранной карты, всё автоматически.',

  tagline: '12 месяцев Gemini AI Pro за 200 ₽ вместо $240',

  // Features included in Gemini AI Pro (ту акцию, что бот активирует)
  features: [
    {
      icon: '💾',
      title: '5 ТБ облачного хранилища',
      desc: 'Google One 5 ТБ — для бэкапов, фото, видео, документов на всех устройствах.',
    },
    {
      icon: '🍌',
      title: 'Nano Banana — генерация изображений',
      desc: 'Самый сильный image-генератор Google в линейке Imagen / Nano Banana.',
    },
    {
      icon: '🛸',
      title: 'Antigravity IDE',
      desc: 'AI-IDE от Google для кодинга с Gemini под капотом — конкурент Cursor / Claude Code.',
    },
    {
      icon: '💬',
      title: 'Чат с Gemini Pro',
      desc: 'Полный доступ к самой мощной модели Gemini Pro в gemini.google.com без лимитов чата.',
    },
    {
      icon: '📓',
      title: 'NotebookLM',
      desc: 'AI-ассистент для работы с документами, конспектами и подкастами.',
    },
    {
      icon: '🎵',
      title: 'Генерация музыки',
      desc: 'Доступ к music-моделям Google для создания треков из текстового запроса.',
    },
    {
      icon: '⏰',
      title: 'AI-партнёр для задач',
      desc: 'Напоминания, отложенные задачи, выполнение по расписанию.',
    },
    {
      icon: '🤖',
      title: 'Gem-боты',
      desc: 'Кастомизация GPT-подобных персонажей внутри Gemini.',
    },
    {
      icon: '📊',
      title: 'Deep Research',
      desc: 'Собирает данные с сотен сайтов и готовит отчёты автоматически.',
    },
    {
      icon: '🎬',
      title: 'AI Movies + Veo 3.15',
      desc: 'Расширенный доступ к видео-генератору Veo 3.15 для кинематографических сцен.',
    },
    {
      icon: '⚡',
      title: 'Gemini CLI и Code Assist',
      desc: 'Повышенные лимиты для Gemini CLI и IDE Gemini Code Assist (для разработчиков).',
    },
    {
      icon: '👁️',
      title: 'Gemini Live с камерой',
      desc: 'Видео-режим Gemini Live: модель видит окружение через камеру и общается голосом.',
    },
  ],

  // SEO topics (used in Person/Organization schema and tagging)
  topics: [
    'Gemini AI Pro 12 месяцев',
    'Gemini AI Pro бесплатно',
    'Gemini Advanced 1 год',
    'Google One AI Premium Россия',
    'активация Gemini Pro без иностранной карты',
    'Veo 3.15 доступ',
    'Antigravity IDE',
    'NotebookLM',
    'Nano Banana генерация',
    'Deep Research',
    'Gemini Live',
  ],

  // Steps — used both on /how-it-works/ and in HowTo schema
  steps: [
    {
      n: 1,
      title: 'Регистрируете Google аккаунт',
      desc: 'Делаете новый Google-аккаунт (или используете существующий, на котором ещё не активирована подписка). Логин, пароль и резервный TOTP-ключ — это всё, что понадобится боту.',
    },
    {
      n: 2,
      title: 'Запускаете @Verif_gemini_pro_bot и оплачиваете 200 ₽',
      desc: 'Открываете бота в Telegram, жмёте Start, оплачиваете 200 ₽ удобным способом (Telegram Stars, СБП, CryptoBot, карта). Иностранная карта НЕ нужна — оплата принимается в рублях.',
    },
    {
      n: 3,
      title: 'Передаёте боту данные аккаунта',
      desc: 'Логин, пароль и TOTP-ключ (резервный 2FA-секрет от Google). Бот заходит в аккаунт, создаёт собственный платёжный профиль, проходит верификацию.',
    },
    {
      n: 4,
      title: 'Бот активирует Gemini AI Pro на 12 месяцев',
      desc: 'Промо-акция автоматически применяется к аккаунту. Бот возвращает вам готовый аккаунт с доступом ко всем фичам Gemini AI Pro на год.',
    },
    {
      n: 5,
      title: 'Пользуетесь подпиской 12 месяцев',
      desc: 'Заходите в gemini.google.com или Google One и используете все фичи (5 ТБ, Veo 3.15, NotebookLM, Antigravity IDE, Gemini CLI и т.д.).',
    },
  ],

  // FAQs — schema.org FAQPage-friendly
  faqs: [
    {
      q: 'Что такое Gemini AI Pro и сколько он обычно стоит?',
      a: 'Gemini AI Pro (он же Google One AI Premium) — топовый платный тариф Google с доступом к самой мощной модели Gemini Pro, генерации изображений Nano Banana, видео-генератору Veo 3.15, NotebookLM, Antigravity IDE, Deep Research, 5 ТБ Google Drive и другим фичам. Обычная цена — около $20 в месяц или $240 в год. Через бот @Verif_gemini_pro_bot активация на 12 месяцев стоит 200 ₽ (~$2).',
    },
    {
      q: 'Как бот активирует подписку без иностранной карты?',
      a: 'Бот сам создаёт платёжный профиль внутри вашего Google-аккаунта, используя собственные иностранные карты и Google Pay. Вам ничего искать и привязывать не нужно — вы вообще не касаетесь Google Pay. Ваша роль: дать боту логин, пароль и TOTP-ключ от аккаунта, оплатить 200 ₽ в боте, забрать готовый аккаунт.',
    },
    {
      q: 'Это безопасно? Я отдаю свой пароль и TOTP — что с ними делает бот?',
      a: 'Бот использует доступ только для одной операции: войти в аккаунт, активировать промо-акцию Gemini AI Pro и выйти. После этого вы можете (и должны) сменить пароль и пересоздать TOTP — подписка от этого не пропадает. Чтобы быть полностью спокойным, рекомендуется делать новый Google-аккаунт специально под эту активацию.',
    },
    {
      q: 'Какие способы оплаты в боте?',
      a: 'Telegram Stars, Telegram Premium-кошелёк, СБП, банковская карта РФ (через провайдеров), CryptoBot и другие криптоплатежи. Иностранная карта не нужна. Конкретный список зависит от текущих интеграций бота — в самом боте видно все актуальные способы.',
    },
    {
      q: 'Сколько по времени занимает активация?',
      a: 'Обычно от 5 до 20 минут после оплаты. Бот выполняет шаги автоматически и присылает уведомления о прогрессе. Если у Google идут проверки — может занять до часа.',
    },
    {
      q: 'Какие риски? Может ли Google заморозить мой аккаунт?',
      a: 'Есть редкий риск временного фриза аккаунта (когда Google запускает дополнительные проверки безопасности). Обычно фриз снимается через подтверждение восстановления, но не рекомендуется использовать для этой активации основной личный или рабочий Google-аккаунт. Сделайте отдельный аккаунт под подписку.',
    },
    {
      q: 'Подписка действительно держится 12 месяцев?',
      a: 'Да, активируется официальная промо-акция Google на 12 месяцев. Это не серый ключ и не shared-аккаунт — это легальная активация промо. По окончании 12 месяцев Google либо предложит автопродление по обычной цене, либо отключит подписку (зависит от того, привязан ли способ оплаты).',
    },
    {
      q: 'Что входит в Gemini AI Pro по этой акции?',
      a: '5 ТБ Google Drive, Nano Banana (генерация изображений), Antigravity IDE, чат с Gemini Pro без ограничений, NotebookLM, генерация музыки, AI-партнёр для задач, Gem-боты, Deep Research, расширенный доступ к Veo 3.15 и AI Movies, повышенные лимиты Gemini CLI и Gemini Code Assist, Gemini Live с видео-режимом и камерой.',
    },
    {
      q: 'Что такое Veo 3.15 и Nano Banana?',
      a: 'Veo 3.15 — флагманский видео-генератор Google: создаёт кинематографичное видео по текстовому описанию. Nano Banana — кодовое название самого продвинутого image-генератора Google в линейке Imagen. Оба доступны только подписчикам Gemini AI Pro и через эту активацию.',
    },
    {
      q: 'А если что-то пойдёт не так?',
      a: 'Если активация не прошла — бот возвращает оплату автоматически. Связаться с поддержкой можно через сам бот или через TG-канал @abuz_ai (там же актуальные обновления и статус).',
    },
    {
      q: 'Можно ли активировать на свой существующий аккаунт?',
      a: 'Технически да — если на нём ещё не было подписки Gemini AI Pro и нет блокировок Google по злоупотреблению промо. Но мы НЕ рекомендуем: безопаснее делать отдельный Google-аккаунт под Gemini, чтобы основной не подставлять под риск временной заморозки.',
    },
  ],
};
