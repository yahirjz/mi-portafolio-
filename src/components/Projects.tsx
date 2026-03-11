import { data } from "../data/data";
import ProjectsCard from "./ProjectCard";

const Projects = () => {
    return(
        <section id="proyectos" className="flex gap-4 py-50 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto px-20">
            {data.projects.map((p)=>( 
                <ProjectsCard
                    key={p.title}
                    img={p.img}
                    title={p.title}
                    description={p.description}
                    tech={p.tech}
                    github={p.github}
                    live={p.live}
                />
                ))
            }
        </section>
    )
}
export default Projects;