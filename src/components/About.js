// About.js

import collaborate from "../images/collaborationWebDevs.png"

export default function About() {
    return (
        <section
            id="about"
            className="px-10 w-full flex flex-col lg:flex-row py-20 
					align-center bg-indigo-200 max-w-5xl mx-auto">
            <div className="flex-1">
                <img src=
                    {collaborate}
                    alt="About"
                    className="w-full 
                                h-full 
                                bg-cover 
                                transition
                                hover:scale-[102%]" />
            </div>
            <div className="flex-1 
                            flex 
                            flex-col 
                            justify-center 
							items-center 
                            gap-5 
                            px-6">
                <div>
                    <h2 className="text-center 
                                    text-indigo-500 
								    text-5xl 
                                    font-bold
                                    transition
                                    hover:scale-[102%]">
                        About Me :
                    </h2>
                </div>
                <p>
                I am a self-taught developer with a background in marketing and 
                advertising dating back to 2001. While navigating the world of 
                consulting, my journey into the tech realm took a new turn in 
                2022. Since then, I've shifted gears, embracing freelancing as 
                a means to keep my skills sharp and to continually expand my 
                knowledge. This change has provided me with exciting 
                opportunities to explore and grow in the ever-evolving field of 
                technology.
                </p>
                <p>
                My foray into web development started in 2002, where I delved 
                into the intricacies of front-end technologies such as HTML, 
                CSS, and JavaScript. In 2017, I expanded my expertise to 
                include backend languages like Python and Java. The year 2021 
                marked my venture into database management with a focus on SQL. 
                Building on this foundation, I entered the realm of cloud 
                computing in 2022, exploring the vast possibilities offered by 
                AWS.
                </p>
            </div>
        </section>
    );
}
