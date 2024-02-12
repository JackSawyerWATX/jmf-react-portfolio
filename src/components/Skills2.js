// Skills.js 
export default function Skills() {
    const skills = [
        { name: "Python", tooltip: "Python Tooltip" },
        { name: "Java", tooltip: "Java Tooltip" },
        { name: "HTML", tooltip: "HTML Tooltip" },
        { name: "CSS", tooltip: "CSS Tooltip" },
        { name: "JavaScript", tooltip: "JavaScript Tooltip" },
        { name: "React", tooltip: "React Tooltip" },
        { name: "Django", tooltip: "Django Tooltip" },
        { name: "SQL", tooltip: "SQL Tooltip" },
        { name: "AWS", tooltip: "AWS Tooltip" }
    ];

    return (
        <section id="skills" className="px-10 w-full my-40 max-w-5xl mx-auto">
            <h2 className="text-center text-6xl text-indigo-500 font-bold transition hover:scale-[102%] ">
                My Skills...
            </h2>
            <div className="mt-10 flex gap-5 justify-center flex-wrap mx-auto max-w-xl ">
                {skills.map((skill, index) => {
                    return (
                        <div key={index}
                            className="relative cursor-pointer px-12 py-10 
                                        rounded bg-indigo-200 
                                        text-lg 
                                        flex items-center 
                                        justify-center 
                                        font-bold 
                                        shadow-md
                                        transition
                                        hover:scale-[150%]
                                        hover:shadow-xl">
                            {skill.name}
                            <span className="absolute top-full left-1/2 transform -translate-x-1/2 p-1 bg-gray-700 text-white text-xs rounded whitespace-nowrap pointer-events-none opacity-0 transition-opacity duration-300 hover:opacity-100">
                                {skill.tooltip}
                            </span>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
