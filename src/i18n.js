// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend) // para cargar traducciones desde archivos
  .use(LanguageDetector) // para detectar el idioma del navegador
  .use(initReactI18next) // pasar i18n al React-i18next
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false, // evita el escape de los caracteres de interpolación
    },
  });

export default i18n;
