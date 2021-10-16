import React from "react"
import { ContactItem } from "../components/ContactItem";
import phone from "../img/call_.png";
import email from "../img/email_.png";
import location from "../img/map_.png";
import { Title } from "../components/Title"

export const ContactPage = () => {
    return (
        <div className="contactPage">
            <div className="contact-title">
            <Title title={"Contact Me"} span={"Contact Me"}/>
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.5758385524928!2d18.470727314771985!3d-33.952035980633376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5d2039cfa11d%3A0xf3462e18f756f027!2s12%20Upper%20Liesbeek%20Rd%2C%20Rosebank%2C%20Cape%20Town%2C%207700!5e0!3m2!1sen!2sza!4v1632776861013!5m2!1sen!2sza" title="location" width="500" height="350" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={"+27 78 678 8778"} text2={"+27 69 001 0101"} title={"Phone"}/>
                    <ContactItem icon={email} text1={"edgarmurudu@gmail.com"} text2={"edgarmurudu@gmail.com"} title={"Email"}/>
                     <ContactItem icon={location} text1={"16Upper liesbeek Road"} text2={"Rosebank Cape Town 7700"} title={"Address"}/>
                    
                </div>
        </div>
        </div>
    )
}
