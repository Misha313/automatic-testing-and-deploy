Сервер для проекта "Место"
=============================
Цель данного проекта - создание сервера для проекта МЕСТО.

## Инструкции по запуску:
- домен сервиса m1han.tk, публичный ip:178.154.224.230

## Технологический стек
- JS
- Фреймворк express
- а так же использовался editorconfig и eslint для форматирования кода.

## версия 0.0.2
- сервер подключается к  MongoDB
- настроенны роуты для пользователей и карточек
- при запросе GET localhost:3000/users сервер вернёт JSON-объект из БД
- при запросе GET localhost:3000/users/8340d0ec33270a25f2413b69  сервер вернет JSON-объект пользователя с переданным идентификатором, если такого пользователя нет, то вернет сообщение «Нет пользователя с таким id»
- при запросе GET localhost:3000/cards сервер вернёт JSON-объект из БД
- при запросе POST  localhost:3000/cards сервер создаст карточку в БД
- при запросе DELETE localhost:3000//cards/:cardId сервер удалит карточку по идентификатору из БД
- при запросе на несуществующий адрес API вернет «Запрашиваемый ресурс не найден»

## Инструкции по запуску:
- Скачать или склонировать репозитори
- Установить зависимости при помощи npm - `npm i`
- Запустить сервер - `npm run start`
- Запустить сервер в development режиме - `npm run dev`
