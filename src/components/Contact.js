// Contact.js

import React from 'react';
import SignupForm from './SignupForm';
import './index.css';

export default function Contact() {
    return (
        <section id="contact"
            className="my-40 align-center max-w-5xl mx-auto p-3">
            <h2 className="text-5xl font-bold text-indigo-500 text-center transition hover:scale-[102%] ">
                Contact
            </h2>
            <div className="socialMedia">
                <div className="flex flex-col items-center my-10">
                    <a rel="noreferrer"
                        target="_blank"
                        className="text-center hover:underline transition hover:scale-[105%] hover:shadow-sm"
                        href=
                        "https://github.com/JackSawyerWATX">
                        GitHub:&nbsp;
                        <span className="font-bold">
                            @jacksawyer.206
                        </span>
                    </a>

                    {/* <a rel="noreferrer"
                        target="_blank"
                        className="text-center hover:underline transition hover:scale-[105%] hover:shadow-sm"
                        href=
                        "https://www.instagram.com/jacksawyer.206/">
                        Instagram:
                        <span className="font-bold">
                            @jacksawyer.206
                        </span>
                    </a> */}

                    <a rel="noreferrer"
                        target="_blank"
                        className="text-center hover:underline transition hover:scale-[105%] hover:shadow-sm"
                        href=
                        "https://www.linkedin.com/in/jonathan-fausset-dev/">
                        LinkedIn:&nbsp;
                        <span className="font-bold">
                            Jonathan Fausset
                        </span>
                    </a>

                    <a rel="noreferrer"
                        target="_blank"
                        className="text-center hover:underline transition hover:scale-[105%] hover:shadow-sm"
                        href="mailto:contact@jonathanfausset.com">
                        Email:&nbsp;
                        <span className="font-bold">
                            contact@jonathanfausset.com
                        </span>
                    </a>
                </div>
            </div>
            <div>
                <SignupForm />
            </div>
        </section>
    );
}
