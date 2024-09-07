import React, { useState } from "react";
import { createPortal } from "react-dom";

// Create a tooltip component that will render outside the normal flow
function Tooltip({ children, position }) {
    return createPortal(
        <div
            style={{
                position: 'absolute',
                top: position.top,
                left: position.left,
                backgroundColor: '#6366f1', // indigo-500
                color: 'white',
                padding: '8px',
                borderRadius: '4px',
                zIndex: 1000, // Ensures tooltip is on top
                whiteSpace: 'normal',
                minWidth: '150px',
                maxWidth: '250px',
                pointerEvents: 'none',
            }}
        >
            {children}
        </div>,
        document.body // Render outside the normal DOM hierarchy
    );
}

export default function Skills() {
    const skills = [
        { name: "Python", tooltip: "a high-level, general-purpose programming language" },
        { name: "Java", tooltip: "a class-based, object-oriented programming language designed to have as few implementation dependencies as possible" },
        { name: "HTML", tooltip: "HyperText Markup Language is the standard markup language for documents designed to be displayed in a web browser" },
        { name: "CSS", tooltip: "Cascading Style Sheets are used for styling a document written in a markup language such as HTML or XML" },
        { name: "JavaScript", tooltip: "a programming language and core technology of the World Wide Web" },
        { name: "React", tooltip: "an open-source front-end JavaScript library for building user interfaces based on components" },
        { name: "Django", tooltip: "an open-source, Python-based web framework that runs on a web server" },
        { name: "SQL", tooltip: "Structured Query Language is a language used to manage data in a relational database management system" },
        { name: "AWS", tooltip: "Amazon Web Services provides on-demand cloud computing platforms and APIs on a metered, pay-as-you-go basis" }
    ];

    const [tooltip, setTooltip] = useState({ visible: false, content: "", position: { top: 0, left: 0 } });

    const handleMouseOver = (e, skill) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setTooltip({
            visible: true,
            content: skill.tooltip,
            position: {
                top: rect.top + window.scrollY - 10, // Adjust position dynamically
                left: rect.right - 30 // Tooltip to the right of the skill block
            }
        });
    };

    const handleMouseOut = () => {
        setTooltip({ ...tooltip, visible: false });
    };

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
                                        hover:shadow-xl
                                        relative"
                            onMouseOver={(e) => handleMouseOver(e, skill)}
                            onMouseOut={handleMouseOut}
                        >
                            {skill.name}
                        </div>
                    )
                })}
            </div>

            {/* Conditionally render the tooltip */}
            {tooltip.visible && (
                <Tooltip position={tooltip.position}>
                    {tooltip.content}
                </Tooltip>
            )}
        </section>
    )
}
