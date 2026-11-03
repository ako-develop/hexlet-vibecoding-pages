// Читаем сохранённую тему до отрисовки страницы, чтобы избежать вспышки.
(() => {
  const key = 'business-card-theme';
  let saved;
  try { saved = localStorage.getItem(key); } catch { /* Хранилище может быть отключено. */ }
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initial = saved === 'light' || saved === 'dark' ? saved : (systemDark ? 'dark' : 'light');
  document.documentElement.dataset.theme = initial;

  document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('theme-toggle');
    function updateButton() {
      const dark = document.documentElement.dataset.theme === 'dark';
      const label = dark ? 'Светлая тема' : 'Тёмная тема';
      button.firstChild.textContent = label + ' ';
      button.setAttribute('aria-label', 'Включить ' + (dark ? 'светлую' : 'тёмную') + ' тему');
      button.setAttribute('aria-pressed', String(dark));
    }
    updateButton();
    // Этот обработчик срабатывает при клике по кнопке.
    button.addEventListener('click', () => {
      const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = next;
      // localStorage сохраняет выбор между посещениями страницы.
      try { localStorage.setItem(key, next); } catch { /* Переключение работает и без сохранения. */ }
      updateButton();
    });
  });
})();
