# Одностраничное приложение (SPA) для конвертирования валют

### Стек приложения: 
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)  ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)  ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)  ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)  ![RxJS](https://img.shields.io/badge/rxjs-%23B7178C.svg?style=for-the-badge&logo=reactivex&logoColor=white)  ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)


### Для получения текущих курсов были использованы следующие открытые API:

- <span style="font-size:larger;">[Ipinfo](https://ipinfo.io/)</span> - Для определения страны пользователя
- <span style="font-size:larger;">[REST Countries](https://restcountries.com/)</span> - Для определения информаци о стране пользователя
- <span style="font-size:larger;">[ExchangeRate](https://www.exchangerate-api.com/)</span> - Предоставляет API для работы с конвертацией валют 


### Порядок локального запуска приложения:

1. Создаем папку на рабочем столе и клонируем туда репозиторий:
   
    ```bush
    https://github.com/Rail-G/Converter.git
    ```
2. В папке с проектом создаем .env файл и добавляем туда необходимые токены:
    ```bush
    VITE_IPINFO_TOKEN = 'token'
    VITE_EXCHANGERATE_TOKEN = 'token'
    ```
    - Для получения `VITE_IPINFO_TOKEN`, заходим на сайт [Ipinfo](https://ipinfo.io/) и регистрируемся/авторизовываемся. Переходим в Dashborad, нажимаем API token и копируем токен.
    - Для получения `VITE_EXCHANGERATE_TOKEN`, заходим на сайт [ExchangeRate](https://www.exchangerate-api.com/) и регистрируемся/авторизовываемся, после копируем токен.
3. Устанавливаем зависимости:
    ```bush
    npm install
    ```
4.  По желанию можно запустить проект в режиме разработки: 
    ```bush
    npm run dev
    ```
    Или в режиме режиме готового приложения:
    ```bush
    npm run build
    npm run preview
    ```
    