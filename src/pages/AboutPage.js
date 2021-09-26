import React from "react"
import { Title } from "../components/Title"
import { ImageSection } from "../components/ImageSection"
import { SkillsSection } from "../components/SkillsSection"
import { ServicesSection } from "../components/ServicesSection"
import design from "../img/designer.png";


export const AboutPage = () => {
    return (
        <div className="AboutPage">
            <Title title={'About Me'} span={"About Me"}/>
            <ImageSection/>
            <Title title={"My Skills"} span={"My Skills"}/>
            <div className="skillsContainer">
                <SkillsSection skill={"Javascript"} progress={"70%"} width={"70%"}/>
                <SkillsSection skill={"Android"} progress={"60%"} width={"60%"}/>
                <SkillsSection skill={"React Js"} progress={"70%"} width={"70%"}/>
                <SkillsSection skill={"Typscript"} progress={"60%"} width={"60%"}/>
                <SkillsSection skill={"Php"} progress={"75%"} width={"75%"}/>
                <SkillsSection skill={"MySql"} progress={"60%"} width={"60%"}/>
                <SkillsSection skill={"SCSS"} progress={"70%"} width={"70%"}/>
                <SkillsSection skill={"SaSS"} progress={"60%"} width={"60%"}/>
                <SkillsSection skill={"CSS3"} progress={"78%"} width={"78%"}/>
                <SkillsSection skill={"HTML5"} progress={"80%"} width={"80%"}/>
                <SkillsSection skill={"JQuery"} progress={"68%"} width={"68%"}/>
                <SkillsSection skill={"Angular"} progress={"68%"} width={"68%"}/>
                <SkillsSection skill={"MsSQL"} progress={"50%"} width={"50%"}/>
                <SkillsSection skill={"Java"} progress={"63%"} width={"63%"}/>
            </div>
            <div className="services-container">
                <ServicesSection image={design} title={"web developer"} 
                text={"lorem ssome text lorem ssome text lorem some text lorem ssome"}/>

                <ServicesSection image={design} title={"Mobile developer"} 
                text={"lorem ssome text lorem ssome text lorem ssome text lorem ssome"}/>

                <ServicesSection image={design} title={"web design"} 
                text={"lorem ssome text lorem ssome text lorem ssome text lorem ssome"}/>
                
            </div>
        </div>

    )
}
