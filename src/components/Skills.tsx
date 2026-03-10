import { data } from "../data/data";

const Skills = () => {
    return (
        <div className="flex gap-2 py-4 flex-wrap ">
            {data.skills.map((s) => (<span key={s.name} className=" border border-violet-500 rounded-full px-2 py-1 text-xs bg-violet-500/20 text-violet-300 "> {s.name} </span>))}
        </div>
    )
}

export default Skills