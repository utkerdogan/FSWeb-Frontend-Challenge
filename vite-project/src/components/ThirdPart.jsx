export function ThirdPart() {
    return( <div className=" w-full flex flex-col items-center bg-lime-400">
    
    <div className="w-full flex justify-center"><h2 className="text-3xl font-bold text-purple-700">Projects</h2></div>
    <div className="mt-6 h-[800px] w-full max-w-4xl flex flex-col gap-8 overflow-auto">
    {["Workintech", "Journey"].map((project) => (
        <div key={project} className="bg-white shadow-lg rounded-lg flex">
        <div className="w-1/3">
            <img src="https://picsum.photos/200/200" alt={project} className="w-full h-full object-cover" />
        </div>
        <div className="p-6 w-2/3">
            <h3 className="text-xl font-bold text-blue-700">{project}</h3>
            <p className="text-gray-700 mt-2">
            A simple, customizable, minimal setup project description that allows users to explore features.
            </p>
            <div className="flex gap-2 mt-4">
            <div className="bg-blue-800 text-white px-4 py-2 rounded-lg text-sm">React</div>
            <div className="bg-blue-800 text-white px-4 py-2 rounded-lg text-sm">Node</div>
            <div className="bg-blue-800 text-white px-4 py-2 rounded-lg text-sm">Styled</div>
            </div>
            <div className="flex gap-4 mt-4 text-blue-600 underline cursor-pointer">
            <span>View Site</span>
            <span>GitHub</span>
            </div>
        </div>
        </div>
    ))}
    </div>
</div>
    )
}