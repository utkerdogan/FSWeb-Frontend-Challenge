import { useLanguageContext } from "../contexts/LanguageContext";
import { skillsData } from "../data"
import { texts } from "../texts"

export function SecondPart() {
    const { language } = useLanguageContext();
    return (
        <>
    <div className="bg-white flex flex-row align-center justify-evenly items-center h-[400px] dark:bg-gray-800 second-part">
        <h2 className="text-3xl font-bold text-blue-700 dark:text-purple-800">{texts[language].skills}</h2>
            <div className="grid grid-cols-2 gap-10 mt-6 text-center">
                {skillsData.map((skill) => (
                <div key={skill.name} className="flex items-center gap-4">
                    <img src={skill.image} className="w-20 h-20" alt={skill.name} />
                    <span className="text-gray-800 text-lg dark:text-white">{skill.name.toUpperCase()}</span>
                </div>
                ))}
            </div>
        </div>
    <div className="h-[50%] w-full bg-blue-900 p-10 flex justify-center items-center text-white dark:bg-purple-800 ">
    <div className="max-w-5xl w-full flex items-center gap-5 profile-container ">
        <div className="w-1/3">
            <h2 className="text-3xl font-bold text-lime-600 dark:text-black">{texts[language].profile}</h2>
            <h3 className="text-xl font-semibold mt-4">{texts[language].info}</h3>
            <p className="mt-2"><strong>{texts[language].info1}</strong> 01.01.2002</p>
            <p className="mt-1"><strong>{texts[language].info2}</strong> Istanbul</p>
            <p className="mt-1"><strong>{texts[language].info3}</strong> Frontend Dev, Bootcamp</p>
            <p className="mt-1"><strong>{texts[language].info4}</strong> Frontend, UI</p>
        </div>
        <div className="w-1/3 flex justify-center profile-image2">
            <img src="../public/assets/utku2.png" className="rounded-full w-[250px] object-contain" />
        </div>
        <div className="w-1/3">
            <h3 className="text-xl font-semibold">{texts[language].about}</h3>
            <p className="mt-2 text-sm">
            {texts[language].aboutDesc}
            </p>
        </div>
        </div>
    </div>
    </>
    )
} 