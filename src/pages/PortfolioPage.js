import React from "react";
import  Categories  from "../components/Categories";
import  MenuItems  from "../components/MenuItems";
import portfolios from "../components/allPortfolios";
import { Title } from "../components/Title"
import  {useState}  from "react";

const allCategories = ["All", ...new Set(portfolios.map(item => item.category))];
console.log(allCategories);
function PortfolioPage(){
    const [categories, setCategories] = useState(allCategories);
    const [menuItems, setMenuItems] = useState(portfolios);

    const filter = (category) =>{
        if(category === "All"){
            setMenuItems(portfolios)
            return;
        }

        const filteredData = portfolios.filter((item)=>{
            return item.category === category;
        })
        setMenuItems(filteredData);
    }

    return (
        <div className="PortfolioPage">
            <div className="title">
            <Title title={"Portfolios"} span={"Portfolios"}/>
            </div>
            <div className="portfolio-data">
                <Categories filter={filter} categories={categories} />
                <MenuItems menuItem={menuItems}/>
            </div>
        </div>
    )
}

export default PortfolioPage