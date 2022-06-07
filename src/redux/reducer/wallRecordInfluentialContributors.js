import {
    GET_WALL_RECORD_INFLUENTIAL_CONTRIBUTORS,
} from '../constent'
const initialState = {
    record_influential_contributors: []
}
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_WALL_RECORD_INFLUENTIAL_CONTRIBUTORS: {
            return { ...state, record_influential_contributors: action.payload }
        }
        default:
            return { ...state }
    }
}

