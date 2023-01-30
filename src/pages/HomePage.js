import React from "react";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Typed from "react-typed";
import Particles from "react-particles-js";

export const HomePage = () => {
    return (
       
        <div className="HomeWrapper">
           
        <div className="HomePage">
        <Particles
            params={{
                particles:{
                    number:{
                        value:70,
                        density:{
                            enable:true,
                            value_area:900
                        }
                    },
                    shape:{
                        type: "circle",
                        stroke:{
                            width: 6,
                            color: "#05F0FF"
                        }
                    }
                }
            }}
        
        />
        
            <section className="hero">
                <h1 className="hero-text">
                    Software Developer
                    <span> Frontend Developer</span><br/>
                <Typed
                 className="typed-text"
                 strings={["Software Developer", "Web developer", "Mobile Developer", "UI/UX Developer" ]}
                 typeSpeed={40}
                 backSpeed={60}
                 loop
                />
                </h1>
                <p className="h-sub-text">
                    I am a Software developer From Cape Town, I enjoy 
                    building everything from small businesses sites to rich interactive web pps.
                </p>
                <div className="icons">
                    <Link  className="icon-holder">
                        <FontAwesomeIcon icon={faFacebook} className="icon fb" />
                    </Link>
                    <Link className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh"/>
                    </Link>
                    <Link className="icon-holder">
                        <FontAwesomeIcon icon={faTwitter} className="icon tw"/>
                    </Link>
                </div>
            </section>
        </div>
        </div>
    )
}
