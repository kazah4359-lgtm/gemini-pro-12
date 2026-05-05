# Gemini AI Pro 12 месяцев — лендинг

Astro-сайт для продвижения Telegram-бота **@Verif_gemini_pro_bot**, активирующего акцию Google One AI Premium (Gemini AI Pro) на 12 месяцев за 200 ₽.

🌐 **Live**: https://kazah4359-lgtm.github.io/gemini-pro-12/

## Структура

- `/` — главная (лендинг с видео, ценой, фичами, шагами, FAQ)
- `/how-it-works/` — пошаговая инструкция (HowTo schema)
- `/features/` — подробный обзор фич Gemini AI Pro
- `/faq/` — 11 ответов на частые вопросы (FAQPage schema)
- `/guides/` — 3 SEO-гайда:
  - `gemini-pro-12-mes-besplatno` — все способы получить в России
  - `google-one-ai-premium-rossiya` — что такое и как купить
  - `gemini-vs-chatgpt-claude-2026` — сравнение топ-3 подписок

## SEO/GEO

- Schema.org: `WebSite`, `Organization`, `Product`, `Offer`, `Service`, `HowTo` + `HowToStep`, `FAQPage`, `Article`, `CollectionPage`
- `robots.txt` разрешает GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Bingbot, YandexBot
- `llms.txt` — структурированный индекс для LLM-краулеров
- Sitemap генерируется автоматически

## Команды

```bash
npm install        # установить зависимости
npm run dev        # локальный сервер
npm run build      # сборка в dist/
npm run typecheck  # проверка типов
```

## Деплой

GitHub Actions (`.github/workflows/deploy.yml`) автоматически собирает и публикует на GitHub Pages при пуше в `main`.

## Источник правды

Все факты о продукте (цена, фичи, шаги, FAQ) — в `src/data/site.ts`. Меняй там — обновится везде.
