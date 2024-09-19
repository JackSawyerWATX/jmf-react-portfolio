// App.js

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ConsentPopup from './components/ConsentPopup';
import PrivacyPolicyModal from './components/PrivacyPolicyModal';

function App() {
  const [showConsentPopup, setShowConsentPopup] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  useEffect(() => {
    const consentGiven = localStorage.getItem('userConsent');
    console.log('Consent Given:', consentGiven);

    if (!consentGiven) {
      console.log('Consent not given, showing popup');
      setShowConsentPopup(true);
    } else if (consentGiven === 'true') {
      console.log('Consent already given, tracking visitor');
      // Proceed with tracking
      fetch('https://yourserver.com/track-visitor')
        .then(response => response.text())
        .then(data => console.log('Tracking data:', data))
        .catch(error => console.error('Error tracking visitor:', error));
    } else {
      console.log('Consent declined, not tracking');
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('userConsent', 'true');
    setShowConsentPopup(false);
    // Proceed with tracking
    fetch('https://yourserver.com/track-visitor')
      .then(response => response.text())
      .then(data => console.log('Tracking after consent:', data))
      .catch(error => console.error('Error tracking visitor:', error));
  };

  const handleShowPrivacyPolicy = () => {
    setShowPrivacyModal(true);
  };

  const handleClosePrivacyPolicy = () => {
    setShowPrivacyModal(false);
  };

  return (
    <>
      {showConsentPopup && (
        <ConsentPopup onAccept={handleAccept} onShowPrivacyPolicy={handleShowPrivacyPolicy} />
      )}
      <PrivacyPolicyModal isOpen={showPrivacyModal} onClose={handleClosePrivacyPolicy} />
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

export default App;
