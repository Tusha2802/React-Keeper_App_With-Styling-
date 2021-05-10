import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';

export default function note(props){

    return(
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <DeleteIcon
                className="del-btn"
                onClick={() => {
                props.delete(props.id);
                }}
            />
            {/* <button className="del-btn" onClick={() => {
                props.delete(props.id)
            }}>Delete</button> */}
        </div>
    );
}