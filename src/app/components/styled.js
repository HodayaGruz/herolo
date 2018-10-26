import styled from 'styled-components';

export const Modal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    padding: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    width: 60%;
    height: 75%;
    background-color: white;
    display: ${({isOpen}) => isOpen ? 'block' : 'none'}
`

export const BackgroundOverlay = styled.div`
    z-index: 99;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%
    background-color: black;
    opacity: 0.2;
    display: ${({isOpen}) => isOpen ? 'block' : 'none'}
`;

export const Title = styled.span`
    font-weight: bold;
    color: ${({theme}) => theme.colors.blue};
    font-size: 20px;
`;

export const Button = styled.div`
    padding: 10px 20px;
    margin: 10px;
    cursor: pointer;
    background-color: ${({theme, red, gray}) => theme.colors[red ? 'red' : gray ? 'gray' : 'blue']};
    border-radius: 6px;
    color: #ffffff;
    font-size: 15px;
    font-weight: bold;
    text-decoration: none;

    :hover {
        opacity: 0.9;
    }
`;
