Выполнено по мотивам [макета](<https://www.figma.com/file/CucahHfhUCrkZ9ozvNhayR/Museum-04.09-(Copy)?type=design&node-id=0%3A1&mode=dev>)

## Реализован функционал:
- Адаптивная верстка
- Работа с DOM, в том числе со списками и формами
- Проект написан в соответствии с основными принципами [ООП](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming)
- Все ui элементы реализованы с нуля, в том числе:
    - [Input] 
    - [Select] 
    - [Checkbox] 
- Использованы библиотеки для [слайдера](https://www.npmjs.com/package/swiper) и [карт](https://www.npmjs.com/package/mapbox-gl)
- Реализована ленивая подгрузка (разделы Gallery, Video) на основе [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- Для локального хранения данных использован Local Storage
- Настроена сборка проекта с использованием [vite](https://vite-docs-ru.vercel.app/)
### Дополнительно:
- Использован ***TypeScript*** для добавления статической типизации в проект
- Применен ***Sass*** для удобной работы с стилями
- Настроены ***ESLint*** и ***Prettier*** для обеспечения код-стайла и автоматического форматирования кода
Вот переписанная часть в Markdown:
## Запуск проекта локально:

1. Убедитесь, что у вас установлен [Node.js](https://nodejs.org) и npm (Node Package Manager) на вашем компьютере.
2. Установите зависимости, выполнив следующую команду в командной строке:
```bash
npm install
```
3. Запустите проект в режиме разработки на dev-сервере:
```bash
npm run dev
```
4. Откройте браузер и перейдите по адресу [http://localhost:3000](http://localhost:3000), чтобы просмотреть проект.
### Дополнительные команды:

- Сборка проекта для production:
```bash
npm run build
```
- Предварительный просмотр собранного проекта:
```bash
npm run preview
```
- Запуск ESLint для проверки и исправления стиля кода:
```bash
npm run lint
```
- Форматирование кода с помощью Prettier:
```bash
npm run format
```
