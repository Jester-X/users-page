import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const translationsEn = {
  header: {
    title: "Users",
    lang: {
      en: "English",
      ua: "Ukrainian",
      ru: "Russian",
    },
  },
  users: {
    userModal: {
      title: "Info",
      editForm: {
        name: "Name",
        age: "Age",
        email: "Email",
        address: "Address",
        deleteBtn: "Delete",
        editBtn: "Edit",
        applyBtn: "Apply",
        cancelBtn: "Cancel",
        placeholder: {
          name: "Vlados",
          address: "Kyiv, Awesome street, 19",
        },
      },
    },
    refreshBtn: "Refresh",
    newUserBtn: "New User",
    formModal: {
      name: "Name",
      age: "Age",
      email: "Email",
      address: "Address",
      resetBtn: "Reset",
      createBtn: "Create",

      placeholder: {
        name: "Vlados",
        address: "Kyiv, Awesome street, 19",
      },
    },
  },
  filterMenu: {
    title: "Filter Menu",
    filterForm: {
      name: "Name",
      age: "Age",
      email: "Email",
      address: "Address",
      resetBtn: "Reset",
      searchBtn: "Search",
      placeholder: {
        name: "Vlados",
        address: "Kyiv, Awesome street, 19",
      },
    },
  },
  preloader: "Loading...",
  validate: {
      required: "Field is required",
      email: "Invalid Email",
      age: "Invalid Age",
      submitEmail: "Email already exists"
  }
};
const translationsUa = {
  header: {
    title: "Користувачі",
    lang: {
      en: "Англійська",
      ua: "Українська",
      ru: "Російська",
    },
  },
  users: {
    userModal: {
      title: "Інформація",
      editForm: {
        name: "Ім'я",
        age: "Вік",
        email: "Пошта",
        address: "Адреса",
        deleteBtn: "Видалити",
        applyBtn: "Застосувати",
      cancelBtn: "Відмінити",
        editBtn: "Змінити",
        placeholder: {
          name: "Владос",
          address: "Київ, Класнюча вулиця 19",
        },
      },
    },
    refreshBtn: "Оновити",
    newUserBtn: "Додати",
    formModal: {
      name: "Ім'я",
      age: "Вік",
      email: "Пошта",
      address: "Адреса",
      resetBtn: "Оновити",
      createBtn: "Створити",
      placeholder: {
        name: "Владос",
        address: "Київ, Класнюча вулиця, 19",
      },
    },
  },
  filterMenu: {
    title: "Фільтри",
    filterForm: {
      name: "Ім'я",
      age: "Вік",
      email: "Пошта",
      address: "Адреса",
      resetBtn: "Скинути",
      searchBtn: "Пошук",
      placeholder: {
        name: "Владос",
        address: "Київ, Класнюча вулиця, 19",
      },
    },
  },
  preloader: "Завантаження...",
  validate: {
    required: "Поле обов'язкове",
    email: "Невірна пошта",
    age: "Невірний Вік",
    submitEmail: "Користувач уже існує"
}
};
const translationsRu = {
  header: {
    title: "Пользователи",
    lang: {
      en: "Английский",
      ua: "Украинский",
      ru: "Русский",
    },
  },
  users: {
    userModal: {
      title: "Информация",
      editForm: {
        name: "Имя",
        age: "Возраст",
        email: "Почта",
        address: "Адрес",
        deleteBtn: "Удалить",
        editBtn: "Изменить",
        applyBtn: "Применить",
      cancelBtn: "Отменить",
        placeholder: {
          name: "Владос",
          address: "Киев, Суперская улица 19",
        },
      },
    },
    refreshBtn: "Обновить",
    newUserBtn: "Добавить",
    formModal: {
      name: "Имя",
      age: "Возраст",
      email: "Почта",
      address: "Адрес",
      resetBtn: "Обновить",
      createBtn: "Создать",
      placeholder: {
        name: "Владос",
        address: "Киев, Суперская улица, 19",
      },
    },
  },
  filterMenu: {
    title: "Фильтры",
    filterForm: {
      name: "Имя",
      age: "Возраст",
      email: "Почта",
      address: "Адрес",
      resetBtn: "Сброс",
      searchBtn: "Поиск",
      placeholder: {
        name: "Владос",
        address: "Киев, Суперская Улица, 19",
      },
    },
  },
  preloader: "Загрузка...",
  validate: {
    required: "Поле обязательное",
    email: "Неправилная Почта",
    age: "Неправильный Возраст",
    submitEmail: "Пользователь уже существует"
}
};

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationsEn },
    ua: { translation: translationsUa },
    ru: { translation: translationsRu },
  },
  lang: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
