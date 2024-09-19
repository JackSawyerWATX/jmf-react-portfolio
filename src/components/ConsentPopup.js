
// ConsentPopup.js

import React from 'react';
import './index.css';

function ConsentPopup({ onAccept, onShowPrivacyPolicy }) {
    return (
        <div className="consent-popup">
            <div className="consent-popup-content">
                <p>
                    We use cookies and similar technologies to enhance your browsing experience. <br />
                    By clicking "Accept", you agree to our use of tracking technologies as
                    outlined in our Privacy Policy.
                </p>
                <div className='popupButtons'>
                    <button onClick={onAccept}>Accept</button>
                </div>
                <div className='popupButtons'>
                    <button onClick={onShowPrivacyPolicy}>Privacy Policy</button>
                </div>
            </div>
        </div>
    );
}

export default ConsentPopup;
