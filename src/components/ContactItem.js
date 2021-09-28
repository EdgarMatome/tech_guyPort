import React from 'react'

export const ContactItem = ({icon, text1, text2, title}) => {
    return (
        <div className="contactItem">
            <div className="contact">
                <img src={icon} alt=""/>
                <div className="right-items">
                    <h5>{title}</h5>
                    <p>{text1}</p>
                    <p>{text2}</p>
                </div>
            </div>
        </div>
    )
}
