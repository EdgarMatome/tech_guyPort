import React from "react";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const HomePage = () => {
    return (
        <div className="HomePage">
            <section className="hero">
                <h1 className="hero-text">
                    Web Developer
                    <span> Mobile Developer</span>
                </h1>
                <p className="h-sub-text">
                    lorem ssome text lorem ssome text lorem ssome text lorem ssome text 
                    lorem ssome text lorem ssome text lorem ssome text lorem ssome text 
                    lorem ssome text lorem ssome text lorem ssome text lorem ssome text 
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
    )
}
