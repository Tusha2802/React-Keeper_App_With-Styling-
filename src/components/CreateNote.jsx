import React, { useState } from "react";
//import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import AddIcon from "@material-ui/icons/Add";

function CreateNote(props){

    const[input_Values, setInput] = useState({title : "", content: ""});
    const [isExpanded, setIsExpanded] = useState(false);

    function Change(event){
        const {name,value} = event.target;
        //const id1 = {IncId}
        setInput((prevValue) => {
            // return{
            //     ...prevValue,
            //     [name] : value
            // }
            if(name === "title"){
                return({
                    title : value,
                    content : prevValue.content
                })
            }
            else if(name === "content"){
                return({
                    title : prevValue.title,
                    content : value 
                })
            }
        })
        
    }

    function expand() {
        setIsExpanded(true);
    }

    return(
        <div className="addNote">
            <input className="addNote_input" type="text" placeholder="Title of the note" onChange={Change} onClick={expand} name="title" value={input_Values.title}></input><br></br>
            {isExpanded && <textarea className="addNote_input" placeholder="Take a note" rows={isExpanded ? "5" : "1"} cols="45" name="content" onChange={Change} value={input_Values.content}></textarea>}
            <Zoom in={isExpanded}>
             <AddIcon
                className="button-box"
                onClick={() => {
                    props.adn(input_Values);
                    setInput({ title: "", content: "" });
                }}
            />
            </Zoom> 
            {/* { <input className="button-box" type="button" value="Add" 
            onClick={() => 
            {props.adn(input_Values)
            setInput({title: "", content: ""})
            }}></input>
            }  */}
        </div>
    );
}

export default CreateNote;