import {
    GET_WALL_RECORD_MOST_ACTIVE_USERS
} from '../constent'
const initialState = {
    record_most_active_users: { data: [], total: 0 }
}
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_WALL_RECORD_MOST_ACTIVE_USERS: {
            return { ...state, record_most_active_users: action.payload }
        }
        default:
            return { ...state }
    }
}