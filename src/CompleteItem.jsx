import React, {useState} from "react";

function CompleteItem(props){

    return (
        <div className="completeItems">
            <li>{props.doneItem}</li>
        </div>
    );
}

export default CompleteItem;