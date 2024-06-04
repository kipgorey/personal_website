import React from 'react';
import Navbar from "../navbar/navbar";
import './homepage.css';
import Image from "../my_image/image";
import Email from "../email_button/email";




function HomePage() {
    return (
        <>
        <div className="home-page">
            <Navbar/>

            <h1 className="name-title"> Connor (Kip) Gorey </h1>

            <Image className = "profile-img"></Image>

            <div className="name-title">
                <div className="container">
                    <p> I am a Junior at The University of Southern California studying Computer Science & Business Administration (Double Major). I am passionate about Software Engineering and Machine Learning / AI and am currently open for Summer 2024 Intern Positions in SWE, Data Science or Product Management</p>
                </div>
            </div>

        </div>

        <div className="sectionTwo">
            <div className="text-wrapper">
                <h1 className="contact-info"> Contact Info </h1>

                <div className="hstack">
                    <p className ="contact-info-p"> cgorey@usc.edu</p>
                    <p className="contact-info-p">(650)-422-9294</p>
                </div>



                <div className = "email-container">
                    <Email email={"cgorey@usc.edu"}/>
                </div>

            </div>




        </div>
    </>
    );
}

export default HomePage;