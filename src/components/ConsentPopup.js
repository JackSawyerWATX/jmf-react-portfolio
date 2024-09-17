
// ConsentPopup.js

import React from 'react';
import './index.css'; // Optional CSS file for styling

function ConsentPopup({ onAccept }) {
  return (
    <div className="consent-popup">
      <div className="consent-popup-content">
        <p>
          We use cookies and similar technologies to enhance your browsing experience. <br />
          By clicking "Accept", you agree to our use of tracking technologies as outlined in our &nbsp;
          <a href="/privacy-policy" target="_blank">Privacy Policy</a>.
        </p>
        <button onClick={onAccept}>Accept</button>
      </div>
    </div>
  );
}

export default ConsentPopup;
