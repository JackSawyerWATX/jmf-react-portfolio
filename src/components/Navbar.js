// Navbar.js 
export default function Navbar() {
    return (
        <nav className="w-full px-5 sm:px-10 py-5 shadow-xl 
						backdrop-blur-lg fixed top-0 z-10">
            <div className="container flex flex-col lg:flex-row 
							gap-5 justify-between w-full 
							items-center max-w-5xl mx-auto">
                                
                <a href="#hero" className="text-3xl text-indigo-500 font-bold">
                    Jonathan Fausset
                </a>

                <ul className="flex gap-3 align-center p-1 flex-wrap">
                    <li>
                        <a className="text-sm sm:text-base px-2 lg:px-5 
									py-2 transition rounded hover:text-white 
									hover:bg-blue-600"
                            href="#about">
                            About
                        </a>
                    </li>

                    <li>
                        <a className="text-sm sm:text-base px-2 lg:px-5 py-2 
									transition rounded hover:text-white 
									hover:bg-blue-600"
                            href="#skills">
                            Skills
                        </a>
                    </li>

                    <li>
                        <a className="text-sm sm:text-base px-2 lg:px-5 py-2 
									transition rounded hover:text-white 
									hover:bg-blue-600"
                            href="#projects">
                            Projects
                        </a>
                    </li>

                    <li>
                        <a className="text-sm sm:text-base px-2 lg:px-5 py-2 
									transition rounded hover:text-white 
									hover:bg-blue-600"
                            href="#contact">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
