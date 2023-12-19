import React from 'react';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './navbar.css';

const ScrollLink = () => {
    const navigate = useNavigate();

    const scrollToContact = () => {
        // Use navigate to navigate to the desired page
        navigate('/'); // Replace '/desired-page' with the actual path of the desired page

        // Scroll to the 'contact' element after a short delay (adjust the delay as needed)
        setTimeout(() => {
            const element = document.getElementById('contact');
            if (element) {
                window.scrollTo({
                    top: element.offsetTop,
                    behavior: 'smooth',
                });
            }
        }, 500); // Delay of 500 milliseconds before scrolling
    };

    return (
        <li>
            <Link onClick={scrollToContact}>Contact</Link>
        </li>
    );
};

export default ScrollLink;
