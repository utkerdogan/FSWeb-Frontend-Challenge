import { useLanguageContext } from "../contexts/LanguageContext";
import {Projects} from "../services/projectData"
import { texts } from "../texts";

export function ThirdPart() {
    const { language } = useLanguageContext();
    return( 
    <div className=" w-full flex flex-col items-center bg-lime-600 dark:bg-green-700">
    <div className="w-full flex justify-center"><h2 className="text-3xl font-bold text-blue-900 dark:text-purple-800 mt-5">{texts[language].projects}</h2></div>
    <div className="mt-6 h-[800px] w-full max-w-4xl flex flex-col gap-8 overflow-auto">
    <Projects/>
    </div>
</div>
    )
}