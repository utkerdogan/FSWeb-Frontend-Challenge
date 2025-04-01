import { useDarkModeContext } from "../contexts/DarkModeContext";

export function FirstPart(){

    const { isDarkMode, toggleDarkMode } = useDarkModeContext();

    return (
        <div className={"flex justify-evenly min-h-screen w-screen items-center bg-gradient-to-r from-blue-400 from-60% to-lime-200  dark:from-blue-900 dark:to-lime-600" }>

        <div className="w-1/3 flex flex-col justify-items-start ">
        <h2 className="dark:text-yellow-300 text-4xl pb-40 font-bold text-black">Utku,</h2>
        <h1 className="text-6xl font-bold dark:text-yellow-200 mt-10 leading-tight text-black">
            I am a Frontend Developer...
        </h1>
        <p className="text-black mt-6 max-w-lg text-xl dark:text-white">
            ...who likes to craft solid and scalable frontend products with great user experiences.
        </p>

        <div className="flex gap-6 mt-8">
            <a href="https://github.com/utkerdogan" target="_blank"><button className="bg-white text-black px-6 py-3 rounded-lg  font-medium text-lg">GitHub</button></a>
            <a href="https://www.linkedin.com/in/utku-erdoğan-b602051a8/" target="_blank"><button className="bg-white text-black px-6 py-3 rounded-lg  font-medium text-lg">LinkedIn</button></a>
        </div>
        </div>

        <div className="w-1/3 flex flex-col justify-center text-center items-center">
        <div className="top-6 right-6 flex gap-4">
        <button className="bg-gray-200 text-black px-4 py-2 rounded-lg  text-sm">Türkçe'ye Geç</button>
        <button onClick={toggleDarkMode} className="bg-gray-800 text-white px-4 py-2 rounded-lg  text-sm">{isDarkMode ? "Light Mode" : "Dark Mode"}</button>
        </div>
        <div className="rounded-2xl overflow-hidden w-[420px] h-[420px] bg-white">
            <img
            src="https://picsum.photos/200/300"
            className="w-full h-full object-cover"
            />
        </div>
        </div>
        
    </div>
    
    );
}