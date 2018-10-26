import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {Modal, BackgroundOverlay, Button} from './styled';
import {deleteMovie} from '../../store/actions';

const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-top: 10px;
`;

const SmallModal = styled(Modal)`
    height: 150px;
    width: 40%
`;

const ModalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
`;

const onDelete = (movie, deleteMovie, onClose) => {
    deleteMovie(movie.imdbID)
    onClose()
}

const DeleteMovie = ({deleteMovie, movie, onClose, isOpen}) => (
    <div>
        <SmallModal isOpen={isOpen}>
            <ModalWrapper>
                Are you sure you want to delete?
                <ButtonsWrapper>
                    <Button red onClick={() => onDelete(movie, deleteMovie, onClose)}>Delete</Button>
                    <Button gray onClick={onClose}>Cancel</Button>
                </ButtonsWrapper>
            </ModalWrapper>
        </SmallModal>
        <BackgroundOverlay isOpen={isOpen}/>
    </div>
)
const enhance = connect(() => ({}), {deleteMovie})

export default enhance(DeleteMovie);