import { skillsData } from "../data"
export function SecondPart() {
    return (
        <>
    <div className="bg-white flex flex-row align-center justify-evenly items-center h-[400px] ">
        <h2 className="text-3xl font-bold text-blue-700">Skills</h2>
            <div className="grid grid-cols-2 gap-10 mt-6 text-center">
                {skillsData.map((skill) => (
                <div key={skill.name} className="flex items-center gap-4">
                    <img src={skill.image} className="w-20 h-20" alt={skill.name} />
                    <span className="text-gray-800 text-lg">{skill.name.toUpperCase()}</span>
                </div>
                ))}
            </div>
        </div>
    <div className="h-[400px] w-full bg-blue-800 p-10 flex justify-center items-center text-white">
    <div className="max-w-5xl w-full flex items-center">
        <div className="w-1/3">
            <h2 className="text-3xl font-bold text-lime-300">Profile</h2>
            <h3 className="text-xl font-semibold mt-4">Basic Information</h3>
            <p className="mt-2"><strong>Doğum Tarihi:</strong> 01.01.2002</p>
            <p className="mt-1"><strong>Doğum Şehri:</strong> Istanbul</p>
            <p className="mt-1"><strong>Eğitim Durumu:</strong> Frontend Dev, Bootcamp</p>
            <p className="mt-1"><strong>Tercih Ettiği Rol:</strong> Frontend, UI</p>
        </div>
        <div className="w-1/3 flex justify-center">
            <img src="https://picsum.photos/200/300" alt="Profile" className="rounded-lg shadow-lg" />
        </div>
        <div className="w-1/3">
            <h3 className="text-xl font-semibold">About Me</h3>
            <p className="mt-2 text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, ad! Nisi labore aliquam molestias vero ratione.
            </p>
            <p className="mt-2 text-sm">
            Minima accusamus ratione soluta expedita nihil voluptatem? Dolor quod assumenda quasi temporibus, cumque magnam!
            </p>
        </div>
        </div>
    </div>
    </>
    )
} 