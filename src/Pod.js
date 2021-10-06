import React from "react";
console.log("in pod.js")

const Pod = (props) => {
    const { title, url, explanation } = props.pod;
    
    return(
        <>
            <h1>{title}</h1>
            <img src={url} alt={`${explanation}`} />
            <p>{explanation}</p>
        </>
    );
};

export default Pod;


