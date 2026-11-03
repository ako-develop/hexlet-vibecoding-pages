# Учебные проекты Антона

[Открыть сайт](https://ako-develop.github.io/hexlet-vibecoding-pages/)

```text
index.html                 главная со списком проектов
business-card/
  index.html               визитка и форма записи
  styles.css               оформление визитки
  theme.js                 переключение темы
  assets/preview.png       превью Telegram
  README.md                описание визитки
dashboard/
  index.html               курс валют и погода
  README.md                источники данных и проверка
scripts/build.mjs          общая сборка
.github/workflows/pages.yml публикация GitHub Pages
```

## Проекты

- [Визитка](https://ako-develop.github.io/hexlet-vibecoding-pages/business-card/): тема, превью Telegram и Яндекс Форма. Подробности в `business-card/README.md`.
- [Курс валют и погода](https://ako-develop.github.io/hexlet-vibecoding-pages/dashboard/): USD, EUR, температура, осадки и обновление из внешних API. Подробности в `dashboard/README.md`.

Каждый проект хранит свои файлы в своей папке. Общая главная содержит только ссылки на проекты. В репозитории находятся только публичные файлы сайта.

## Локально

Из корня репозитория в PowerShell:

```powershell
$env:SITE_URL = 'https://ako-develop.github.io/hexlet-vibecoding-pages'
node scripts/build.mjs
python -m http.server 8000 --directory dist
```

Открой `http://localhost:8000/`. Сторонние зависимости Node.js не требуются. Сборка `dist/` игнорируется Git.

## Публикация

Settings → Pages → Source: **GitHub Actions**. Push в `main` запускает workflow **Publish GitHub Pages**. Кнопка **Visit site** открывает общую главную; у каждого проекта свой адрес внутри сайта.

Сборка подставляет публичный адрес визитки в og-теги. Прежний адрес `/assets/preview.png` сохраняется в сборке для ранее отправленных ссылок; исходный файл один — `business-card/assets/preview.png`.
