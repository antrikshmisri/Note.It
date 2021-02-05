import React from "react"
import './styles.css'
function Note(props) {
    return (
        <div className="note col-lg-3">
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
        </div>
    );
}

export default Note