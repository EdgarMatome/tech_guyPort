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
                <p className="about-text">Developer who puts in a lot of effort and has a knack for coming up with elegant solutions quickly.
                 I am a go-getter who is focused, resourceful, and passionate. Regular hackathon and developer meetup participant. 
                 I'm eager to learn. I enjoy a challenge, and I focus on my tasks. I'm open to being proven wrong as a developer.
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
                        <p>: 29</p>
                        <p>: South African</p>
                        <p>: English, Sepedi, IsiZulu</p>
                        <p>: 26 Dartford Drive Parklands, Cape Town</p>
                    </div>
                </div>
                <button className="btn" disabled>Download CV</button>
            </div>
        </div>
    )
}
