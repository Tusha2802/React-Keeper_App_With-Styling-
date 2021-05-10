import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";
import "../styles.css";

function header(){
    return(
        <div className="header"><h1 className="keeper"><HighlightIcon/>Keeper</h1></div>
        
    );
}

export default header;