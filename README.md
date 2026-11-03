# Учебные проекты Антона

Два проекта в одном репозитории GitHub Pages. Главная страница показывает список проектов.

- [Список проектов](https://ako-develop.github.io/hexlet-vibecoding-pages/): `index.html`.
- [Визитка](https://ako-develop.github.io/hexlet-vibecoding-pages/business-card/): папка `business-card/`.
- [Курс валют и погода](https://ako-develop.github.io/hexlet-vibecoding-pages/dashboard/): папка `dashboard/`.

Settings → Pages → Visit site открывает список проектов. Оба проекта публикуются одним workflow, каждый доступен по собственному адресу.

Локально: `python3 -m http.server 8000`.

Публикация: Settings → Pages → Source → GitHub Actions. Затем Actions → Publish GitHub Pages → Run workflow.

Визитка: HTML и og-теги — `business-card/index.html`; стили — `business-card/styles.css`; обработчик клика и localStorage — `business-card/theme.js`.

Сборка автоматически подставляет публичный адрес в og-теги.

## Форма записи

В `index.html` под блоком описания встроена Яндекс Форма через iframe. Её ширина ограничена колонкой, на телефоне блоки идут друг под другом. Форма использует светлую тему, чтобы её заполнение не прерывалось перезагрузкой при переключении темы страницы.

Проверка: отправить тестовую заявку на опубликованной странице, затем найти её во вкладке «Ответы» в Яндекс Формах. Серверную обработку и хранение ответов выполняет Яндекс.
