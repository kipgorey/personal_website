import React from 'react';
import { Document, Page } from 'react-pdf';


const PDFViewer = () => {

    return(

        <Document file= "public/Resume.pdf">
            <Page pageNumber={1} />
        </Document>
    );

};

export default PDFViewer;