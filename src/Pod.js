import React from "react";
import styled from 'styled-components';
// console.log("in pod.js")

const StyledPod = styled.div`
    width: 75%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 5px;
    border: 2px solid black;
    background-color: ${pr => pr.theme.darkgrey};
    color: ${pr => pr.theme.white}
    p {
        margin: 20px;
        padding: 10px;
    }
`

const Pod = (props) => {
    const { title, url, explanation } = props.pod;
    
    return(
        <StyledPod>
            <h1>{title}</h1>
            <img src={url} alt={`${explanation}`} />
            <p>{explanation}</p>
        </StyledPod>
    );
};

export default Pod;


