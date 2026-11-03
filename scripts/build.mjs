import { cp, mkdir, readFile, writeFile, rm } from 'node:fs/promises';
const input = process.env.SITE_URL;
if (!input) throw new Error('Укажите SITE_URL — публичный адрес GitHub Pages.');
const url = new URL(input);
if (url.protocol !== 'https:' || url.search || url.hash) throw new Error('SITE_URL должен быть HTTPS-адресом без параметров и якоря.');
const base = url.href.replace(/\/$/, '');
await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });
const html = await readFile('index.html', 'utf8');
const escaped = base.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
await writeFile('dist/index.html', html.replaceAll('__SITE_URL__', escaped));
await cp('business-card', 'dist/business-card', { recursive: true });
const card = await readFile('business-card/index.html', 'utf8');
await writeFile('dist/business-card/index.html', card.replaceAll('__SITE_URL__', `${escaped}/business-card`));
await cp('dashboard', 'dist/dashboard', { recursive: true });
// Сохраняем доступность ранее опубликованных адресов превью Telegram.
await cp('business-card/assets', 'dist/assets', { recursive: true });
await writeFile('dist/.nojekyll', '');
console.log(`Страница подготовлена для ${base}/`);
