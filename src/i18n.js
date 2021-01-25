import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
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
    },

    ja: {
        translation: {
            "Login": "エンター",
            "Logout": "ログアウト",
            "Main": "メイン",
            "Gone": "ゴーン",
            "Looking relatives": "親戚探し",
            "Active searches": "アクティブな検索",
            "Closed searches": "クローズド検索",
            "Statistics": "統計",
            "Language": "言語",
            "Olga Tataurova": "オルガ-タタウロワ",
            "Leonid Shuliak": "レオニード-シュリアック",
            "Andrei Podyslenkau": "アンドレイ-ポドゥスレンコ",
            "If you get lost in the woods": "森の中で迷子になったら",
            "If you get lost in the forest and do not see suitable landmarks, it is best to go out on the water and move downstream. The stream will definitely lead to the river, the river - to the people. If you get lost and know that you will be searched for, stay in one place and make a fire so the search engines will be easier to navigate.": "あなたが森の中で迷子になり、適切なランドマークが見えない場合は、水の上に出て下流に移動するのが最善です。 ストリームは間違いなく川、川につながります-人々に。 あなたが迷子になり、あなたが検索されることを知っている場合は、一つの場所に滞在し、検索エンジンがナビゲートしやすくなるように火を作る。",
            "Rules of behavior of the child, if he is lost": "彼が失われた場合、子供の行動のルール",
            "If the child realized that he was left alone, but his mother was just there, you need to call her loudly. The most important rule that you need to teach your baby do not agree to the suggestions of strangers to go look for parents. However, it is important that the child can ask for help from the seller, representatives of the security service or the police": "子供が一人で放置されていることに気づいたが、母親がちょうどそこにいた場合は、大声で彼女に電話する必要があります。 あなたの赤ちゃんを教えるために必要な最も重要なルールは、親を探しに行く見知らぬ人の提案に同意しません。 しかし、子供が売り手、セキュリティサービスの代表者、または警察から助けを求めることができることが重要です",
            "Rules that will help the elderly": "高齢者を助けるルール",
            "If a person has problems with orientation and sense of space, they should always have identification documents or a special bracelet with their name and address engraved on it. Before leaving, a person should warn where he is going and when he will return approximately. You need to take your phone with you and put it in your inner pocket. When an elderly person has a phone with them, it is possible to keep in touch with them or track their location using a GPS signal.": "人が向きや空間の感覚に問題がある場合は、常に身分証明書または名前と住所が刻まれた特別なブレスレットを持っている必要があります。 出発する前に、人はどこに行くのか、いつ戻るのかを警告する必要があります。 めるために必要な電話にて無料でお届け致します。を取れるように内側のポケットです。 高齢者が電話を持っているときは、GPS信号を使用して連絡を取り合ったり、位置を追跡したりすることができます。",
            "Leave a request": "リクエストを残す",
            "Email": "メール",
            "Password": "パスワード",
            "No account? Register": "アカウントなし？ レジスタ",
            "Go to the main page": "メインページに移動する",
            "Name": "名前",
            "Register": "レジスタ",
            "Already have an account? Login": "既にネットワインのアカウント? ログイン",
            "Search": "検索",
            "Add": "追加",
            "Rows per page": "ページごとの行",
            "from": "から",
            "Status": "ステータス",
            "City": "シティ",
            "Age": "年齢",
            "Date": "日付",
            "Coordinator": "コーディネ",
            "People on the search": "検索している人",
            "Actions": "アクション",
            "Submit": "送信",
            "Adding a search": "検索を追加する",
            "Changing the search": "検索を変更する",
            "Reserve": "リザーブ",
            "Local search": "ローカル検索",
            "Stop. Information verification": "止まれ！. 情報検証",
            "Archive": "アーカイブ",
            "First name Last name": "名姓",
            "Enter full name and surname": "フルネームと姓を入力します",
            "Cancel": "キャンセル",
            "Ok": "送信",
            "Registration": "登録",
            "Year of birth": "生年",
            "Date of loss": "損失の日付",
            "Signs": "サイン",
            "Clothes": "服",
            "Had taken": "撮影していた",
        }
    }
};

const setLanguage = () => {
    localStorage.setItem('language', 'ru');
    return 'ru';
}

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: localStorage.getItem('language') ? localStorage.getItem('language') : setLanguage(),

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });


export default i18n;
