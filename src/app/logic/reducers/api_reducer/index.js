import { SAVE_API_DATA } from "../../actions/api";

const initialState = {
    apiData: []
}

export default function apiReducer(state=initialState, action) {
    switch(action.type) {
        case SAVE_API_DATA:
            return {...state, apiData: action.payload}
        default:
            return state;
    }
}