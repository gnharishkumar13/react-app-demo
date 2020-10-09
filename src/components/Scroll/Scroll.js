import React from "react";

const Scroll = (props) => {
    return (
        //add scroll
        <div style={{ overflow: 'scroll', border: '5px solid black', height: '800px'}}>
            {props.children}
        </div>

    );
}

export default Scroll