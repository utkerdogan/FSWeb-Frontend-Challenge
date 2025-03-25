export function SecondPart() {
    return (
        <div className="bg-white flex flex-row align-center justify-evenly items-center h-[300px] ">
        <div className="flex items-start h-full pt-8"><h2 className="text-3xl font-bold text-purple-700 ">Skills</h2></div>
        <div className="grid grid-cols-2 gap-10">

        <div className="flex flex-col gap-4 ">
            <div className="flex items-center ">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" className="w-14 h-14" alt="JavaScript" />
                <span className="text-gray-800 ">JAVASCRIPT</span>
            </div>
            <div className="flex items-center ">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" className="w-14 h-14" alt="React" />
                <span className="text-gray-800 ">REACT</span>
            </div>
            <div className="flex items-center ">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png" className="w-14 h-14" alt="Redux" />
                <span className="text-gray-800 ">REDUX</span>
            </div>
            </div>

            <div className="flex flex-col gap-4">
            <div className="flex items-center ">
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" className="w-14 h-14" alt="Node.js" />
                <span className="text-gray-800 ">NODE</span>
            </div>
            <div className="flex items-center ">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" className="w-14 h-14" alt="VS Code" />
                <span className="text-gray-800 ">VS CODE</span>
            </div>
            <div className="flex items-center ">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" className="w-14 h-14" alt="Figma" />
                <span className="text-gray-800 ">FIGMA</span>
            </div>
            </div>
        </div>
    </div>
    )
} 