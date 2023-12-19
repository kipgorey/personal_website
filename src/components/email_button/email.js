import React from 'react';
import './email.css'

const EmailButton = ({ email }) => {
    const handleEmailClick = () => {
        // Use the mailto link to open the default email client
        window.location.href = `mailto:${email}`;

        // Alternatively, if you want to open Gmail with a pre-filled compose window
        // window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`);
    };

    return (
        <button className="email-button" id="contact" onClick={handleEmailClick}>
            Send An Email
        </button>
    );
};

export default EmailButton;
