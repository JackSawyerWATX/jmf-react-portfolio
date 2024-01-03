// Projects.js

import DjangoBlogImage from '../images/DjangoBlog.png';
import dsaTrackerImage from '../images/DSATracker.png';
import nqIMDb from '../images/NQ-IMDb.png'

export default function Projects() {
    return (
        <section id="projects"
            className="my-20 w-full flex flex-col gap-5 align-center max-w-5xl mx-auto">
            <h2 className="text-5xl text-indigo-500 font-bold text-center">
                My Projects
            </h2>
            <div className="p-10 bg-indigo-200 flex flex-col justify-center items-center 
							gap-5 lg:flex-row max-w-5xl mx-auto shadow transition 
							hover:shadow-xl hover:scale-[102%] w-full">
                <div className="w-80 rounded">
                    <a href=
                        "https://master.d3rbfz5ybzw8fg.amplifyapp.com/"
                        className="w-full h-full" target="_blank">
                        <img src=
                            {dsaTrackerImage}
                            alt="Project 1"
                            className="w-full h-full 
										bg-cover rounded" target="_blank"/>
                    </a>
                </div>
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                    <h2 className="font-bold text-3xl text-center">
                        <a className="hover:underline"
                            href=
                            "https://master.d3rbfz5ybzw8fg.amplifyapp.com/" target="_blank">
                            DSA Progress Tracker
                        </a>
                    </h2>
                    <p>
                        This is a project built on react which tracks your progess learning DSA
                        and stores that in the local storage.
                    </p>
                </div>
            </div>
            <div className="p-10 bg-indigo-200 flex flex-col justify-center items-center gap-5 
							lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl 
							hover:scale-[102%] w-full">
                <div className="w-80 rounded">
                    <a href=
                        "https://master.d2mgrogmmh0zst.amplifyapp.com/"
                        className="w-full h-full" target="_blank">
                        <img src=
                            {nqIMDb}
                            alt="Project 2"
                            className="w-full h-full bg-cover rounded" />
                    </a>
                </div>
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                    <h2 className="font-bold text-3xl text-center">
                        <a className="hover:underline" href=
                            "https://master.d2mgrogmmh0zst.amplifyapp.com/" target="_blank">
                            Not Quite - IMDb
                        </a>
                    </h2>
                    <p>
                        A movie search app, quite a bit more basic than IMDb, 
                        but the information returned is using an IMDb API.
                    </p>
                </div>
            </div>
            <div className="p-10 bg-indigo-200 flex flex-col justify-center items-center gap-5 
							lg:flex-row max-w-5xl mx-auto shadow transition hover:shadow-xl 
							hover:scale-[102%] w-full">
                <div className="w-80 rounded">
                    <a href=
                        "http://django-env.eba-imtfme86.us-west-2.elasticbeanstalk.com/"
                        className="w-full h-full" target="_blank">
                        <img src=
                            {DjangoBlogImage}
                            alt="Project 3"
                            className="w-full h-full bg-cover rounded" />
                    </a>
                </div>
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                    <h2 className="font-bold text-3xl text-center">
                        <a className="hover:underline" href=
                            "http://django-env.eba-imtfme86.us-west-2.elasticbeanstalk.com/" target="_blank">
                            Personal Blog
                        </a>
                    </h2>
                    <p>
                        This is a blog page written in Python using Django framwork.
                    </p>
                </div>
            </div>
        </section>
    );
}
