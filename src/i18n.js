import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Link from "@material-ui/core/Link";
import * as React from "react";

const resources = {
    ru: {
        translation: {
            "Login": "Войти",
            "Logout": "Выйти",
            "Main": "Главная",
            "Gone": "Пропали",
            "Looking relatives": "Ищут родственников",
            "Active searches": "Активные поиски",
            "Closed searches": "Закрытые поиски",
            "Statistics": "Статистика",
            "Language": "Язык",
            "Olga Tataurova": "Ольга Татаурова",
            "Leonid Shuliak": "Леонид Шуляк",
            "Andrei Podyslenkau": "Андрей Подысленков",
            "If you get lost in the woods": "Если Вы заблудились в лесу",
            "If you get lost in the forest and do not see suitable landmarks, it is best to go out on the water and move downstream. The stream will definitely lead to the river, the river - to the people. If you get lost and know that you will be searched for, stay in one place and make a fire so the search engines will be easier to navigate.": "Если заблудились в лесу и не видите подходящих ориентиров, лучше всего «выходить на воду» и двигаться вниз по течению. Ручей обязательно выведет к реке, река - к людям. Если заблудились и знаете, что вас будут искать, оставайтесь на одном месте и разведите костер — так поисковикам легче будет сориентироваться.",
            "Rules of behavior of the child, if he is lost": "Правила поведения ребенка, если он потерялся",
            "If the child realized that he was left alone, but his mother was just there, you need to call her loudly. The most important rule that you need to teach your baby do not agree to the suggestions of strangers to go look for parents. However, it is important that the child can ask for help from the seller, representatives of the security service or the police": "Если ребенок понял, что остался один, а его мама просто была рядом, нужно громко позвать ее. Самое главное правило, которому нужно научить малыша: не соглашайтесь на предложения незнакомых людей пойти искать родителей. Однако важно, чтобы ребенок мог обратиться за помощью к продавцу, представителям службы безопасности или полиции",
            "Rules that will help the elderly": "Правила, которые помогут пожилому человеку",
            "If a person has problems with orientation and sense of space, they should always have identification documents or a special bracelet with their name and address engraved on it. Before leaving, a person should warn where he is going and when he will return approximately. You need to take your phone with you and put it in your inner pocket. When an elderly person has a phone with them, it is possible to keep in touch with them or track their location using a GPS signal.": "Если у человека есть проблемы с ориентацией и чувством пространства, при нем всегда должны быть документы, удостоверяющие личность, или специальный браслет с выгравированными фамилией и адресом. Перед уходом человек должен предупреждать, куда идет и когда примерно вернется. Нужно брать с собой телефон и класть его во внутренний карман. Когда у пожилого человека с собой телефон, с ним есть возможность поддерживать связи или отслеживать его местоположение с помощью GPS-сигнала.",
            "Leave a request": "Оставить заявку",
            "Email": "Электронная почта",
            "Password": "Пароль",
            "No account? Register": "Нет аккаунта? Зарегистрироваться",
            "Go to the main page": "На главную",
            "Name": "Имя",
            "Register": "Зарегистрироваться",
            "Already have an account? Login": "Уже есть аккаунт? Войти",
            "Search": "Поиск",
            "Add": "Добавить",
            "Rows per page": "Строк на странице",
            "from": "из",
            "Status": "Статус",
            "City": "Город",
            "Age": "Возраст",
            "Date": "Дата",
            "Coordinator": "Координатор",
            "People on the search": "Людей на поиске",
            "Actions": "Действия",
            "Submit": "Применить",
            "Adding a search": "Добавление поиска",
            "Changing the search": "Изменение поиска",
            "Reserve": "Резерв",
            "Local search": "Поиск на месте",
            "Stop. Information verification": "Стоп. Проверка информации",
            "Archive": "Архив",
            "First name Last name": "Фамилия Имя Отчество",
            "Enter full name and surname": "Введите полное имя и фамилию",
            "Cancel": "Отмена",
            "Ok": "Применить",
            "Registration": "Регистрация",
            "Year of birth": "Год рождения",
            "Date of loss": "Дата пропажи",
            "Signs": "Приметы",
            "Clothes": "Одежда",
            "Had taken": "С собой",
        }
    },

    en: {
        translation: {
            "Reserve": "Reserve",
            "Local search": "Local search",
            "Stop. Information verification": "Stop. Information verification",
            "Archive": "Archive",
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: localStorage.getItem('language') || 'ru',

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });


export default i18n;
