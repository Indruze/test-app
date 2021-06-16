import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
 
import { TRANSLATIONS_EN } from "./en/translations";
import { TRANSLATIONS_NO } from "./no/translations";
 
i18n
 .use(LanguageDetector)
 .use(initReactI18next)
 .init({
   resources: {
     en: {
       translation: TRANSLATIONS_EN
     },
     no: {
       translation: TRANSLATIONS_NO
     }
   }
 });
 
i18n.changeLanguage("no");