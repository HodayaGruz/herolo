export const movies = (state = [], action) => {
    console.log(state, action)
    switch (action.type) {
        case 'FETCH_MOVIES_SUCSSES':
            return action.payload
        case 'UPDATE_MOVIE':
            const index = state.findIndex(movie => movie.imdbID === action.payload.imdbID)
            state[index] = {...action.payload};
            console.log('innnn', state[index], index)
            return state;
        case 'ADD_MOVIE':
            return [
                ...state,
                action.payload
            ]
        case 'DELETE_MOVIE':
            const newState = state.filter(movie => movie.imdbID !== action.payload)
            return newState
        default:
            return state;
    }
} 