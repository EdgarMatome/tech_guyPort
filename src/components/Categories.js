import React from "react";
import { NavLink } from "react-router-dom";

function Categories({filter, categories}) {
    return (
        <div className="buttons">
            {
                categories.map((cat, i)=>{

                    return <button type="button" className="btn-port" onClick={()=> filter(cat)} key={i} >{cat}</button>
                    // return <NavLink key={i} onClick={()=> filter(cat)}>{cat}</NavLink>
                })
            }
        </div>
    )
}

export default Categories;

