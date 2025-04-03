import { useDarkModeContext } from "../contexts/DarkModeContext";
import { useLanguageContext } from "../contexts/LanguageContext";
import { texts } from "../texts";

export function FirstPart(){

    const { isDarkMode, toggleDarkMode } = useDarkModeContext();
    const { language, toggleLanguage } = useLanguageContext();

    
    return (
        <div className={"flex justify-evenly min-h-screen w-screen items-center bg-gradient-to-r dark:from-purple-800 from-55% dark:to-green-900  from-blue-900 to-lime-600" }>

        <div className="w-1/3 flex flex-col justify-items-start ">
        <h2 className="text-yellow-300 text-4xl pb-40 font-bold dark:text-black">Utku,</h2>
        <h1 className="text-6xl font-bold text-yellow-200 mt-10 leading-tight dark:text-black">
        {texts[language].greeting}
        </h1>
        <p className="mt-6 max-w-lg text-xl text-white">
        {texts[language].description}
        </p>

        <div className="flex gap-6 mt-8">
            <a href="https://github.com/utkerdogan" target="_blank"><button className="bg-white text-black px-6 py-3 rounded-lg  font-medium text-lg dark:bg-black dark:text-white flex items-center gap-2"><img src={
            isDarkMode
            ? "https://img.icons8.com/?size=100&id=467&format=png&color=ffffff"
            : "https://img.icons8.com/?size=100&id=467&format=png&color=000000"
        } className="h-[30px]"></img>GitHub</button></a>
            
            <a href="https://www.linkedin.com/in/utku-erdoğan-b602051a8/" target="_blank"><button className="bg-white text-black rounded-lg  font-medium text-lg dark:bg-black dark:text-white flex items-center gap-2"><img src={
            isDarkMode
            ? "https://img.icons8.com/?size=100&id=98960&format=png&color=ffffff"
            : "https://img.icons8.com/?size=100&id=98960&format=png&color=000000"
        } className="h-[30px]"></img>LinkedIn</button></a>
        </div>
        </div>

        <div className="h-screen w-1/3 flex flex-col justify-evenly items-center">
        <div className="flex  gap-4">
        <button className="bg-white text-black px-4 py-2 rounded-lg  text-sm dark:bg-gray-800 dark:text-white" onClick={toggleLanguage}>{language === "en" ? "Türkçe'ye Geç" : "Switch to English"}</button>
        <button onClick={toggleDarkMode} className="bg-gray-800 text-white px-4 py-2 rounded-lg  text-sm dark:bg-white dark:text-black">{isDarkMode ? "Light Mode" : "Dark Mode"}</button>
        </div>
        <div className="rounded-2xl overflow-hidden w-[420px] h-[420px]">
            <img
            src="../assets/utku1.png"
            className="w-full h-full object-cover"
            />
        </div>
        </div>
        
    </div>
    
    );
}