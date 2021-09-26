import React from "react";
import about from "../img/aboutMe.jpg";

export const ImageSection = () => {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>I am <span>The Tech Guy</span></h4>
                <p className="about-text">lorem ssome text lorem ssome text lorem ssome text lorem
                     ssome text lorem ssome text lorem ssome text lorem ssome text
                     lorem ssome text lorem ssome text lorem ssome text lorem ssome text lorem ssome text
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Address</p>
                        <p>Languages</p>
                        <p>Country</p>
                    </div>
                    <div className="right-section">
                        <p>: The tech guy</p>
                        <p>: 28</p>
                        <p>: South African</p>
                        <p>: 16 upper liesbeek road, Cape Town</p>
                        <p>: English, Sepedi, IsiZulu</p>
                        <p>: South African</p>
                    </div>
                </div>
                <button className="btn">Download CV</button>
            </div>
        </div>
    )
}
