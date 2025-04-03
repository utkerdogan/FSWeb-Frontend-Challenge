import {useLanguageContext } from "../contexts/LanguageContext";
import { texts } from "../texts";

export function Footer(){
    const {language} = useLanguageContext();
    return (
    <footer className="w-full bg-gray-100 text-center py-10 pt-16 dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-blue-800 dark:text-purple-900">{texts[language].footerTitle}</h2>
        <p className="text-gray-700 mt-4 dark:text-white">{texts[language].footerDesc}</p>
        <a href="mailto:utukerdogan@gmail.com" className="text-blue-500 mt-2 block text-lg underline">utukerdogan@gmail.com</a>
    </footer>
    )
}