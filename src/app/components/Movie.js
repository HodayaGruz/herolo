import React from 'react';
import styled from 'styled-components';

import {Button, Title as Text} from './styled';

const Root = styled.div`
    dispaly: flex; 
    flex-direction: column;
    border: 1px solid ${({theme}) => theme.colors.blue};
    margin-bottom: 10px;
    padding: 10px;
    max-width: 600px;
    box-shadow: 3px 2px 13px 0px rgba(179,179,179,1);
    background-color: ${({theme}) => theme.colors.white}
`;

const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const SmallLabel = styled.span`
    margin-left: 10px;
`;

const fixTitle = (title) => {
    return title.replace(/[^A-Za-z ]/g, "")
        .toLowerCase()
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');
}

const Movie = ({Title, openEdit, openDelete, Director}) => (
    <Root>
        <Text>{fixTitle(Title)}</Text>
        <SmallLabel>{`produced by ${Director}`}</SmallLabel>
        <ButtonsWrapper>
            <Button onClick={openEdit}>Edit</Button>
            <Button onClick={openDelete}>Delete</Button>
        </ButtonsWrapper>
    </Root>
)

export default Movie