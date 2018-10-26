export const fetchMovies = (movies) => ({
    type: 'FETCH_MOVIES_SUCSSES',
    payload: movies
})

export const updateMovie = (movie) => ({
    type: 'UPDATE_MOVIE',
    payload: movie
})

export const addMovie = (movie) => ({
    type: 'ADD_MOVIE',
    payload: movie
})

export const deleteMovie = (movieId) => ({
    type: 'DELETE_MOVIE',
    payload: movieId
})