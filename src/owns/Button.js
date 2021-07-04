import React from 'react';
import styled from 'styled-components'
const ButtonStyled = styled.button.attrs()
    `
    display:flex;
    justify-content : center;
    align-items: center;
    border-radius : 5px;
    border : 2px solid rgba(235, 215, 37, 0.89);
    color : ${props => props.c};
    background : ${props => props.bkg};
    height : ${props => props.h + 'px'};
    width : ${props => props.w + 'px'} ;
`
const Button = (props) => {
    const handleClick = () => {
        props.doClick ? props.doClick() : handleCancle()
    }
    const handleCancle = () => {
    }
    return (
        <ButtonStyled
            w={props.w}
            h={props.h}
            c={props.c}
            bkg={props.bkg}
            onClick={handleClick}
        >
            {props.name}
        </ButtonStyled>
    )
}
export default Button