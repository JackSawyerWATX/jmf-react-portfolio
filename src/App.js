// App.js

import React, { useState, useEffect } from 'react';

import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ConsentPopup from './components/ConsentPopup';


export default function App() {
	const [showConsentPopup, setShowConsentPopup] = useState(false);
	useEffect(() => {

		const consentGiven = localStorage.getItem('userConsent');
		if (!consentGiven) {
			setShowConsentPopup(true);
		} else {
			// If consent was given, proceed with tracking
			fetch('/track-visitor');
		}

		fetch('https://jonathanfausset.com/track-visitor')  // Use the correct server URL
			.then(response => response.text())
			.then(data => console.log(data))
			.catch(error => console.error('Error:', error));
	}, []);

	const handleAccept = () => {
		localStorage.setItem('userConsent', 'true');
		setShowConsentPopup(false);
			// Proceed with tracking
		fetch('/track-visitor');
	};

	return (
		<>
			{showConsentPopup && <ConsentPopup onAccept={handleAccept} />}
			<Navbar />
			<Hero />
			<About />
			<Skills />
			<Projects />
			<Contact />
			<Footer />
		</>
	);
} 
