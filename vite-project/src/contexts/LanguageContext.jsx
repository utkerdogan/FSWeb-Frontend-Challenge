import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
const [language, setLanguage] = useLocalStorage("language", "en");

const toggleLanguage = () => {
    const newLanguage = language === "en" ? "tr" : "en";
    setLanguage(newLanguage);
};

return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
        {children}
    </LanguageContext.Provider>
);
};

export const useLanguageContext = () => useContext(LanguageContext);
