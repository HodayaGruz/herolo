import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`;

const InputField = styled.input.attrs({
    type: 'text'
})`
    font-size: 14px;
    margin: 10px 10px 0px 5px;
    border: 0;
    border-bottom: 1px solid black;

    :focus {
        outline: none;
        border-bottom: 1px solid ${({theme}) => theme.colors.blue};
    }


`

const Title = styled.span`
    color: ${({theme}) => theme.colors.blue};
    font-weight: bold;
`;

const ErrorText = styled.span`
    color: red;
`;

const Input = ({value, onChange, err, name}) => {
    return (
    <Wrapper>
        <Title>{value && name}</Title>
        <InputField placeholder={name} value={value} onChange={onChange}/>
        <ErrorText>{err}</ErrorText>
    </Wrapper>
)}

export default Input;