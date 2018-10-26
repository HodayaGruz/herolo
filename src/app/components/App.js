import React, { Component } from 'react';
import styled from 'styled-components'
import {connect} from 'react-redux';
import {pick} from 'lodash';
import {fetchMovies} from '../../store/actions'
import Movie from './Movie';
import EditMovie from './EditMovie';
import DeleteMovie from './DeleteMovie';
import {Title, Button} from './styled';

const Root = styled.div`
    padding: 30px;
    box-sizing: border-box;
    width: 100%
    height: 100%;
    background-color: ${({theme}) => theme.colors.backgroundGray}
`;

const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    max-width: 630px;
`

const ListTitle = styled.div`
    font-size: 25px;
    flex-grow: 1;
`

class App extends Component {
    constructor(props){
        super(props)

        this.state = {
            openEdit: false,
            openDelete: false,
            movie: {}
        }

        this.fetchMovies = this.fetchMovies.bind(this);
        this.modalOpener = this.modalOpener.bind(this);
    }

    fetchMovies = async () => {
        const res = await fetch('http://www.omdbapi.com/?s=Batman&page=1&apikey=30730504')
        const data = await res.json();
        const movies = data.Search.map(async movie => {
            const response = await fetch(`http://www.omdbapi.com/?i=${movie.imdbID}&apikey=30730504`)
            const movieData = await response.json()
            console.log(pick(movieData, ['imdbID', 'Title', 'Genre', 'Year', 'Runtime', 'Director']));

            return pick(movieData, ['imdbID', 'Title', 'Genre', 'Year', 'Runtime', 'Director'])
        })
        this.props.fetchMovies(await Promise.all(movies));
    }

    componentDidMount() {
        const {movies} = this.props
        if (movies.length === 0){
            this.fetchMovies()
        }
    }

    modalOpener(modal, movie){
        this.setState({[modal]: true, movie})
    }

  render() {
    return (
      <Root>
          <TitleWrapper>
            <Title as={ListTitle}>My Batman Movies</Title>
            <Button onClick={() => this.modalOpener('openEdit', {})}>Add Movie</Button>
          </TitleWrapper>
        {
            this.props.movies.map(movie => 
            <Movie 
                key={movie.imdbID}
                openEdit={() => this.modalOpener('openEdit', movie)} 
                openDelete={() => this.modalOpener('openDelete', movie)} 
                {...movie}
            />)
        }
        <EditMovie 
            movie={this.state.movie} 
            isOpen={this.state.openEdit} 
            onClose={() => this.setState({openEdit: false, movie: {}})}
        />
        <DeleteMovie
            movie={this.state.movie} 
            isOpen={this.state.openDelete} 
            onClose={() => this.setState({openDelete: false, movie: {}})}
        />
      </Root>
    );
  }
}

const enhance = connect((state) => ({
    movies: state.movies
}), {fetchMovies})

export default enhance(App);
