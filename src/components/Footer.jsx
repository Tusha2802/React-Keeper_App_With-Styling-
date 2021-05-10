import React from "react";


function footer(){

    const year = new Date().getFullYear();
    
    return(
        <div className="footer">
            copywright © {year}
        </div>
    );
}

export default footer;