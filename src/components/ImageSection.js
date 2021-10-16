import React from "react";
import about from "../img/edtech.png";

export const ImageSection = () => {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>I am <span>Edgar Morudu</span></h4>
                <p className="about-text">lorem ssome text lorem ssome text lorem ssome text lorem
                     ssome text lorem ssome text lorem ssome text lorem ssome text
                     lorem ssome text lorem ssome text lorem ssome text lorem ssome text lorem ssome text
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                    </div>
                    <div className="right-section">
                        <p>: Edgar Morudu</p>
                        <p>: 28</p>
                        <p>: South African</p>
                        <p>: English, Sepedi, IsiZulu</p>
                        <p>: 16 upper liesbeek road, Cape Town</p>
                    </div>
                </div>
                <button className="btn" disabled>Download CV</button>
            </div>
        </div>
    )
}
