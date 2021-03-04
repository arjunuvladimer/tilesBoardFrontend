const GET_SQUARE = 'GET_SQUARE'
const SET_SQUARE = 'SET_SQUARE'

export const getSquare = () => ({
    type: GET_SQUARE
})

export const setSquare = (squares) => ({
    type: SET_SQUARE,
    squares,
})

const intialState = {
    squares: null
}


export default (state = intialState, action) => {
    switch (action.type) {
        case SET_SQUARE:
            const {squares} = action
            return {...state, squares}
        default:
            return state
    }
}