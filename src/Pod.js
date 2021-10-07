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
    color: ${pr => pr.theme.white};
    padding: 10px;
    margin: auto;

`
const StyledP = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 5px;
    border: 2px solid black;
    background-color: ${pr => pr.theme.black};
    color: ${pr => pr.theme.white};
    padding: 20px;
    margin: auto;
    margin-top: 20px;
`

const Pod = (props) => {
    const { title, url, explanation } = props.pod;
    
    return(
        <StyledPod>
            <h1>{title}</h1>
            <img src={url} alt={`${explanation}`} />
            <StyledP>
                <p>{explanation}</p>
            </StyledP>
        </StyledPod>
    );
};

export default Pod;


