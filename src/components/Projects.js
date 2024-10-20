// Projects.js

import JonPhoto from '../images/JonathanFaussetPhotoGallery.jpg';
import JonChron from '../images/JonChron.jpg';
import dsaTrackerImage from '../images/DSATracker.png';
import Weather from '../images/Icon-Weather-Rain.jpg';
import LandonHotel from '../images/LandonHotel.png';
import JonDemo from '../images/JonathanDemo.png';
import qrcode from '../images/QRcode.png';
import rpa from '../images/react_parallax_aircraft.jpg';

export default function Projects() {
    return (
        <section id="projects"
            className="my-20 w-full flex flex-col gap-5 align-center max-w-5xl mx-auto">
            <h2 className="text-5xl text-indigo-500 font-bold text-center transition hover:scale-[102%] hover:shadow-sm">
                My Projects
            </h2>

        {/* DSA Tracker     */}
            <div className="p-10 bg-indigo-200 flex flex-col justify-center items-center 
							gap-5 lg:flex-row max-w-5xl mx-auto shadow transition 
							hover:shadow-xl hover:scale-[105%] w-full">
                <div className="w-80 rounded transition hover:scale-[105%] hover:shadow-sm">
                    <a href=
                        "https://master.d3rbfz5ybzw8fg.amplifyapp.com/"
                        className="w-full h-full" target="_blank">
                        <img src=
                            {dsaTrackerImage}
                            alt="Project 1"
                            className="w-full h-full 
						bg-cover rounded" target="_blank" />
                    </a>
                </div>
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                    <h2 className="font-bold text-3xl text-center transition hover:scale-[105%] ">
                        <a className="hover:underline"
                            href=
                            "https://master.d3rbfz5ybzw8fg.amplifyapp.com/" target="_blank">
                            DSA Progress Tracker
                        </a>
                    </h2>
                    <p>
                        This is a project built on react which tracks your progess learning
                        Data Structures and Algorithms and stores that in the local storage.
                    </p>
                </div>
            </div>

        {/* Sarah Shire - Photo Gallery */}
            <div className="p-10 bg-indigo-200 flex flex-col justify-center items-center gap-5 
							lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl 
							hover:scale-[105%] w-full">
                <div className="w-80 rounded transition hover:scale-[105%] hover:shadow-sm">
                    <a href=
                        "https://master.d2d6sf0i0ht16r.amplifyapp.com/"
                        className="w-full h-full" target="_blank">
                        <img src=
                            {JonPhoto}
                            alt="Project 2"
                            className="w-full h-full bg-cover rounded" />
                    </a>
                </div>
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                    <h2 className="font-bold text-3xl text-center transition hover:scale-[105%] ">
                        <a className="hover:underline" href=
                            "https://master.d2d6sf0i0ht16r.amplifyapp.com/" target="_blank">
                            Photography Gallery
                        </a>
                    </h2>
                    <p>
                        A work in progress, this is a simple and chic photo gallery 
                        using React.js. Contact page to be added soon.
                    </p>
                </div>
            </div>

        {/* Personal Blog - Jonathan's Chronicles */}
            <div className="p-10 bg-indigo-200 flex flex-col justify-center items-center gap-5 
							lg:flex-row max-w-5xl mx-auto shadow transition hover:shadow-xl 
							hover:scale-[105%] w-full">
                <div className="w-80 rounded transition hover:scale-[105%] hover:shadow-sm">
                    <a href=
                        "https://master--jonchron.netlify.app/"
                        className="w-full h-full" target="_blank">
                        <img src=
                            {JonChron}
                            alt="Project 3"
                            className="w-full h-full bg-cover rounded" />
                    </a>
                </div>
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                    <h2 className="font-bold text-3xl text-center transition hover:scale-[105%] ">
                        <a className="hover:underline" href=
                            "https://master--jonchron.netlify.app/" target="_blank">
                            Personal Blog
                        </a>
                    </h2>
                    <p>
                        This is a blog page written in JavaScript and JSX using Gatsby framwork.
                        It utilizes a continious deplyoment on the netlify app.
                    </p>
                </div>
            </div>

        {/* Landon Hotel */}
            <div className="p-10 bg-indigo-200 flex flex-col justify-center items-center gap-5 
							lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl 
							hover:scale-[105%] w-full">
                <div className="w-80 rounded transition hover:scale-[105%] hover:shadow-sm">
                    <a href=
                        "https://master.de0tmva8pq6x6.amplifyapp.com/"
                        className="w-full h-full" target="_blank">
                        <img src=
                            {LandonHotel}
                            alt="Project 2"
                            className="w-full h-full bg-cover rounded" />
                    </a>
                </div>
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                    <h2 className="font-bold text-3xl text-center transition hover:scale-[105%] ">
                        <a className="hover:underline" href=
                            "https://master.de0tmva8pq6x6.amplifyapp.com/" target="_blank">
                            Landon Hotel - Website Clone
                        </a>
                    </h2>
                    <p>
                        This is a clone of the website for the Landon Hotel in West London. The original
                        page can be found at https://www.landonhotel.com. I built this to learn ReactJS
                        and is the first site I built using this framework.
                    </p>
                </div>
            </div>

        {/* Jon Demo V.1.0*/}
            <div className="p-10 bg-indigo-200 flex flex-col justify-center items-center gap-5 
							lg:flex-row max-w-5xl mx-auto shadow transition hover:shadow-xl 
							hover:scale-[105%] w-full">
                <div className="w-80 rounded transition hover:scale-[104%] hover:shadow-sm">
                    <a href=
                        "https://main.d33zr5pqj7f3ln.amplifyapp.com/"
                        className="w-full h-full" target="_blank">
                        <img src=
                            {JonDemo}
                            alt="Project 3"
                            className="w-full h-full bg-cover rounded" />
                    </a>
                </div>
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                    <h2 className="font-bold text-3xl text-center transition hover:scale-[105%] ">
                        <a className="hover:underline" href=
                            "https://main.d33zr5pqj7f3ln.amplifyapp.com/"
                            target="_blank">
                            Resume & Portfolio Site version 1.0
                        </a>
                    </h2>
                    <p>
                        This is my portfolio site v. 1.0, a static website built with HTML, CSS, and JavaScript.<br />
                        This page also acts as my resume and is updated.
                    </p>
                </div>
            </div>

        {/* Local Weather */}
            <div className="p-10 bg-indigo-200 flex flex-col justify-center items-center gap-5 
							lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl 
							hover:scale-[105%] w-full">
                <div className="w-80 rounded transition hover:scale-[105%] hover:shadow-sm">
                    <a href=
                        "https://master.dyn0i5lcp1qs2.amplifyapp.com/"
                        className="w-full h-full" target="_blank">
                        <img src=
                            {Weather}
                            alt="Weather App"
                            className="w-full h-full bg-cover rounded" />
                    </a>
                </div>
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                    <h2 className="font-bold text-3xl text-center transition hover:scale-[105%] ">
                        <a className="hover:underline" href=
                            "https://master.dyn0i5lcp1qs2.amplifyapp.com/" target="_blank">
                            Local Weather
                        </a>
                    </h2>
                    <p>
                        This app locates your position and displays your local weather. 
                    </p>
                </div>
            </div>

        {/* QR Generator */}
            <div className="p-10 bg-indigo-200 flex flex-col justify-center items-center 
							gap-5 lg:flex-row max-w-5xl mx-auto shadow transition 
							hover:shadow-xl hover:scale-[105%] w-full">
                <div className="w-80 rounded transition hover:scale-[105%] hover:shadow-sm">
                    <a href=
                        "https://master.d25rxr59yv6xo2.amplifyapp.com/"
                        className="w-full h-full" target="_blank">
                        <img src=
                            {qrcode}
                            alt="Project 1"
                            className="w-full h-full 
						bg-cover rounded" target="_blank" />
                    </a>
                </div>
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                    <h2 className="font-bold text-3xl text-center transition hover:scale-[105%] ">
                        <a className="hover:underline"
                            href=
                            "https://master.d25rxr59yv6xo2.amplifyapp.com/" target="_blank">
                            QR Generator
                        </a>
                    </h2>
                    <p>
                        A simple and free QR Code Generator for you to use anytime.
                    </p>
                </div>
            </div>

        {/* Aircraft site using Parallax in React */}
            <div className="p-10 bg-indigo-200 flex flex-col justify-center items-center gap-5 
							lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl 
							hover:scale-[105%] w-full">
                <div className="w-80 rounded transition hover:scale-[105%] hover:shadow-sm">
                    <a href=
                        "https://main.d2imdrhasvzmd4.amplifyapp.com/"
                        className="w-full h-full" target="_blank">
                        <img src=
                            {rpa}
                            alt="Project 2"
                            className="w-full h-full bg-cover rounded" />
                    </a>
                </div>
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                    <h2 className="font-bold text-3xl text-center transition hover:scale-[105%] ">
                        <a className="hover:underline" href=
                            "https://main.d2imdrhasvzmd4.amplifyapp.com/" target="_blank">
                            Antique Aircraft using Parallax
                        </a>
                    </h2>
                    <p>
                        A small desktop website using parallax components in a React site.
                    </p>
                </div>
            </div>

        </section>
    );
}
