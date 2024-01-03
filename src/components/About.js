// About.js 
export default function About() {
    return (
        <section
            id="about"
            className="px-10 w-full flex flex-col lg:flex-row py-20 
					align-center bg-indigo-200 max-w-5xl mx-auto">
            <div className="flex-1">
                <img src=
                    "https://media.geeksforgeeks.org/img-practice/Asset1-1641910145.svg"
                    alt="About"
                    className="w-full h-full bg-cover" />
            </div>
            <div className="flex-1 flex flex-col justify-center 
							items-center gap-5 px-6">
                <div>
                    <h2 className="text-center text-indigo-500 
								text-5xl font-bold">
                        About Me :
                    </h2>
                </div>
                <p>
                I am a self-taught developer with a background in marketing and 
                advertising dating back to 2001. My journey into the tech world 
                began before my consulting career, which unfortunately came to 
                an end in 2022 due to a layoff. Since then, I've embraced 
                freelancing as a way to not only keep my skills sharp but also 
                to continually expand my knowledge.
                </p>
                <p>
                My foray into web development started in 2002, where I delved 
                into the intricacies of front-end technologies such as HTML, 
                CSS, and JavaScript. In 2017, I expanded my expertise to 
                include backend languages like Python and Java. The year 2021 
                marked my venture into database management with a focus on SQL. 
                Building on this foundation, I entered the realm of cloud 
                computing in 2022, exploring the vast possibilities offered by 
                AWS."
                </p>
            </div>
        </section>
    );
}
