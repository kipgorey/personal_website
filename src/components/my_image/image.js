import React from 'react';
import myImage from './LinkedinPhoto.png'; // Adjust the path based on your project structure
import './image.css'

const Image = () => {
    return (
        <div>
            <img src={myImage} alt="My Image" className="img" />
        </div>
    );
};

export default Image;
