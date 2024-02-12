// Skills.js 
export default function Skills() {
    const skills = [
        { name: "Python", tooltip: "a high-level, general-purpose programming language" },
        { name: "Java", tooltip: "a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible" },
        { name: "HTML", tooltip: "HyperText Markup Language is the standard markup language for documents designed to be displayed in a web browser" },
        { name: "CSS", tooltip: "Cascading Style Sheets is used for styling a document written in a markup language such as HTML or XML" },
        { name: "JavaScript", tooltip: "a programming language and core technology of the World Wide Web" },
        { name: "React", tooltip: "an open-source front-end JavaScript library for building user interfaces based on components" },
        { name: "Django", tooltip: "an open-source, Python-based web framework that runs on a web server" },
        { name: "SQL", tooltip: "Structured Query Language is a language used to manage data in a relational database management system" },
        { name: "AWS", tooltip: "Amazon Web Services provides on-demand cloud computing platforms and APIs on a metered, pay-as-you-go basis" }
    ];

    return (
        <section id="skills"
            className="px-30
                        w-full
                        my-40
                        max-w-5xl
                        mx-auto">
            <h2 className="text-center 
                            text-6xl 
                            text-indigo-500 
                            font-bold 
                            transition 
                            hover:scale-[102%] ">
                My Skills...
            </h2>
            <div className="mt-10 
                            flex 
                            gap-5 
                            justify-center 
							flex-wrap 
                            mx-auto 
                            max-w-lg ">
                {skills.map((skill, index) => {
                    return (
                        <div key={index}
                            className="cursor-pointer px-12 
                                        py-10 
									    rounded 
                                        bg-indigo-200 
                                        text-lg 
									    flex 
                                        items-center 
                                        justify-center 
									    font-bold 
                                        shadow-md
                                        transition
                                        hover:scale-[120%]
                                        hover:shadow-xl">
                            {skill.name}
                            <span className="absolute
                                            top-1/2
                                            left-full
                                            
                                            p-1
                                            bg-indigo-500
                                            text-white
                                            text-xs
                                            rounded
                                            overflow-hidden
                                            whitespace-normal
                                            opacity-100
                                            transition-opacity
                                            duration-300
                                            hover:opacity-100
                                            min-w-48">
                                {skill.tooltip}
                            </span>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}