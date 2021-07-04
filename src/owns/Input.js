import styled from 'styled-components';
import React from 'react';
const InputStyled = styled.input.attrs()
    `
border-radius : 3px;
border : 2px solid rgba(89, 115, 187, 0.89);
color : ${props => props.c};
background : ${props => props.bkg};
height : ${props => props.h + 'px'};
width : ${props => props.w + 'px'} ;
`
const Input = (props) => {
    return (
        <InputStyled
            w={props.w}
            h={props.h}
            c={props.c}
            bkg={props.bkg}
            onChange={props.onChange}
            value={props.value}
        />
    )
}
export default Input;