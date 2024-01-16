import React, { useState, useEffect } from 'react';

const SignupForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    useEffect(() => {
        // Load Email.js script when the component mounts
        const script = document.createElement('script');
        script.src = 'https://cdn.emailjs.com/dist/email.min.js';
        script.async = true;
        document.head.appendChild(script);

        script.onload = () => {
            // Initialize Email.js with your actual user ID
            window.emailjs.init("b0CK_C22smCz86ew3");
        };

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        // Send form data using Email.js
        window.emailjs.send("default_service", "template_t3pday4", formData)
            .then(function (response) {
                console.log("Email sent successfully", response);
                // Handle success, e.g., show a success message
            }, function (error) {
                console.log("Email failed to send", error);
                // Handle error, e.g., show an error message
            });
    };

    return (
        <div className="flex items-center justify-center">
            <form className="max-w-md text-center">
                <p>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        className="w-full border p-2 custom-background placeholder-text-color"
                        placeholder="What's Your Name?"
                        required class="border p-1" 
                        rows="1"
                        style={{ backgroundColor: '#c7d2fe', width: '125%' }}>
                    </input>
                </p>
                <p>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        className="w-full md:w-64 border p-2 custom-background placeholder-text-color"
                        placeholder="What's Your email?"
                        required class="border p-1" 
                        rows="1"
                        style={{ backgroundColor: '#c7d2fe', width: '125%'}}>
                    </input>
                </p>
                <div className="mb-4">
                    <textarea 
                        id="message" 
                        name="message" 
                        className="w-full border p-2 custom-background placeholder-text-color" 
                        placeholder="What's Your message?"
                        rows="4" 
                        
                        style={{ backgroundColor: '#c7d2fe', width: '135%'}}
                        onChange={handleChange}>
                    </textarea>
                </div>
                <div className="text-center">
                    <button 
                        type="button" 
                        className="hover:outline bg-indigo-500 text-white py-2 px-4" 
                        onClick={handleSubmit}>Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SignupForm;
