import React, { Component } from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {isEqual, trim} from 'lodash';
import {Modal, BackgroundOverlay, Button} from './styled';
import {addMovie, updateMovie} from '../../store/actions';
import Input from './Input';

const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-top: 10px;
`;

const ModalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: space-evenly;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;
`;

const fields = ['Title', 'Genre', 'Year', 'Runtime', 'Director'];

class EditMovie extends Component { 

    constructor(props) {
        super(props);

        this.state = {
            movie: this.props.movie,
            error: {}
        }

        this.save = this.save.bind(this);
        this.setData = this.setData.bind(this);
        this.validation = this.validation.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.movie.imdbID !== this.props.movie.imdbID) {
            this.setState({movie: this.props.movie, error: {}})
        }
    }

    validation() {
        const {Title, Genre, Year, Runtime, Director} = this.state.movie
        const yearValidation =/^\d{4}$/
        const error = {};

        if (!Title || Title === '') {
            error.Title = 'Require.';
        } else if (this.props.movie.Title !== Title && this.props.movies.find(movie => trim(movie.Title) === trim(Title))){
            error.Title = 'This name is already exist.';
        };
        if (!Genre || Genre === '') {
            error.Genre = 'Require.';
        }
        if (!Year || Year === '' ) {
            error.Year = 'Require.';
        } else if (!yearValidation.test(Year)) {
            error.Year = 'Not a valid year.';
        }
        if (!Director || Director === '') {
            error.Director = 'Require.';
        }
        if (!Runtime || Runtime === '') {
            error.Runtime = 'Require.';
        }
        if (!error.Runtime && !error.Director && !error.Year && !error.Genre && !error.Title){
            return true;
        }
        this.setState({error});
        return false;
    }

    save() {
        if(this.validation()){
            if (this.props.movie && this.props.movie.imdbID) {
                this.props.updateMovie(this.state.movie)
            } else {
                this.props.addMovie({...this.state.movie, imdbID: `id${new Date()}`})
            }
            this.props.onClose()
        }
    }

    setData(name, value){
        this.setState({movie: {...this.state.movie, [name]: value}})
    }

    render () {
        const {error} = this.state;
        return (
            <div>
                <Modal isOpen={this.props.isOpen}>
                    <ModalWrapper>
                        {
                            fields.map(field => 
                                <Input 
                                    key={field}
                                    err={error[field]} 
                                    value={this.state.movie[field]} 
                                    name={field} 
                                    onChange={e => this.setData(field, e.target.value)}
                                />
                            )
                        }
                        <ButtonsWrapper>
                            <Button onClick={this.save}>Save</Button>
                            <Button gray onClick={this.props.onClose}>Cancel</Button>
                        </ButtonsWrapper>
                    </ModalWrapper>
                </Modal>
                <BackgroundOverlay isOpen={this.props.isOpen}/>
            </div>
        )
    }
}

const enhance = connect(({movies}) => ({movies}), {addMovie, updateMovie})

export default enhance(EditMovie);