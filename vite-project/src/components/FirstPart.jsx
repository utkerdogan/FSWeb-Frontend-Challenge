
export function FirstPart(){
    return (
        <div className="flex min-h-screen w-screen bg-gradient-to-r from-blue-800 from-60% to-lime-400 p-10 relative items-center">



        <div className="w-1/2 flex flex-col justify-center text-white pl-24">
        <h2 className="text-yellow-300 text-4xl pb-4 font-bold">Utku,</h2>
        <h1 className="text-6xl font-bold text-yellow-200 mt-4 leading-tight">
            I am a Frontend Developer...
        </h1>
        <p className="text-gray-200 mt-6 max-w-lg text-xl">
            ...who likes to craft solid and scalable frontend products with great user experiences.
        </p>

        <div className="flex gap-6 mt-8">
            <button className="bg-white text-black px-6 py-3 rounded-lg  font-medium text-lg">GitHub</button>
            <button className="bg-white text-black px-6 py-3 rounded-lg  font-medium text-lg">LinkedIn</button>
        </div>
        </div>

        <div className="w-1/2 flex flex-col justify-center text-center items-center pr-24">
        <div className="top-6 right-6 flex gap-4">
        <button className="bg-gray-800 text-white px-4 py-2 rounded-lg  text-sm">Dark Mode</button>
        <button className="bg-gray-200 text-black px-4 py-2 rounded-lg  text-sm">Türkçe'ye Geç</button>
        </div>
        <div className="rounded-2xl shadow-lg overflow-hidden w-[420px] h-[420px] bg-white">
            <img
            src="https://picsum.photos/200/300"
            className="w-full h-full object-fit"
            />
        </div>
        </div>
    </div>
    );
}