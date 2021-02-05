import React from 'react'

function Container(props) {
    return (
        <div className="container-fluid">
            <div className="row note-container">
                {props.children}
            </div>
        </div>
    );
}

export default Container