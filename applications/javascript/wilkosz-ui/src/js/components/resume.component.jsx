import React from 'react';
import ReactPDF from 'react-pdf';

const RESUME_TITLE = "JoshuaWilkoszResume.pdf";

const ResumeComponent = ({width}) => {
    return(
    <ReactPDF
        file={RESUME_TITLE}
        width={width}
    />
    )
};

export default ResumeComponent;