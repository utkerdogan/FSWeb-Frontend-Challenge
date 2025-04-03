import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const fetchProjects = async () => {
    const res = await axios.get("https://67ee52a2c11d5ff4bf7927d2.mockapi.io/api/v1/projects");
    return res.data;
};

export function Projects() {
    const {data, error, isPending} = useQuery({
        queryKey: ['projects'],
        queryFn: fetchProjects
    })

    if(isPending) return "Loading.."
    if(error) return error.message

    return(

        <div className="max-w-4xl mx-auto p-6">
        <div className="space-y-6">
            {data.map((project) => (
            <div key={project.id} className="bg-white shadow-lg rounded-lg flex dark:bg-gray-800">
                <div className="w-1/2">
                <img src={project.image} className="w-full h-full object-cover" alt={project.name} />
                </div>
                <div className="p-6 w-2/3">
                <h3 className="text-xl font-bold text-blue-700 dark:text-purple-600">{project.name}</h3>
                <p className="text-gray-700 mt-2 dark:text-white">{project.post}</p>
                <div className="flex gap-2 mt-4">
                    <div className="bg-blue-800 text-white px-4 py-2 rounded-lg text-sm dark:bg-purple-900">React</div>
                    <div className="bg-blue-800 text-white px-4 py-2 rounded-lg text-sm dark:bg-purple-900">Redux</div>
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
    );
}