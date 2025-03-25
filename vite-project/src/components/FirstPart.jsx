
export function FirstPart(){
    return (
        <div className="flex justify-evenly min-h-screen w-screen bg-gradient-to-r from-blue-800 from-60% to-lime-400  items-center ">

        <div className="w-1/3 flex flex-col justify-items-start ">
        <h2 className="text-yellow-300 text-4xl pb-40 font-bold">Utku,</h2>
        <h1 className="text-6xl font-bold text-yellow-200 mt-10 leading-tight">
            I am a Frontend Developer...
        </h1>
        <p className="text-gray-200 mt-6 max-w-lg text-xl">
            ...who likes to craft solid and scalable frontend products with great user experiences.
        </p>

        <div className="flex gap-6 mt-8">
            <a href="https://github.com/utkerdogan" target="_blank"><button className="bg-white text-black px-6 py-3 rounded-lg  font-medium text-lg">GitHub</button></a>
            <a href="https://www.linkedin.com/in/utku-erdoğan-b602051a8/" target="_blank"><button className="bg-white text-black px-6 py-3 rounded-lg  font-medium text-lg">LinkedIn</button></a>
        </div>
        </div>

        <div className="w-1/3 flex flex-col justify-center text-center items-center">
        <div className="top-6 right-6 flex gap-4">
        <button className="bg-gray-800 text-white px-4 py-2 rounded-lg  text-sm">Dark Mode</button>
        <button className="bg-gray-200 text-black px-4 py-2 rounded-lg  text-sm">Türkçe'ye Geç</button>
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