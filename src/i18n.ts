import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import ru from './locales/ru.json'

const resources = {
	en: {
		default: en
	},
	ru: {
		default: ru,
	}
}

i18n.use(initReactI18next).init({
	resources,
	lng: 'ru',
	fallbackLng: 'ru',
	defaultNS: 'default',
	interpolation: {
		escapeValue: false
	}
})

export default i18n