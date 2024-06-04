import React from 'react';
import Navbar from "../navbar/navbar";
import './resume.css';
import PDFViewer from "../PDF/pdfViewer";
import BackgroundPage from "../Background/background";

function Resume() {
    return (
        <>

        <div className="homepage">
            <Navbar/>


            <h1 className = "page-title"> Resume </h1>

            <a href="https://purple-franny-96.tiiny.site" className="link">
                <button className="button-77" role="button"> Go to Tiny Url Resume </button>
            </a>
        </div>
        </>
    );
}


export default Resume;