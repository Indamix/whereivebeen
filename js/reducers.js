
import {
    REQUEST_MAP,
    RECEIVE_MAP,
    REQUEST_TRAVELS,
    RECEIVE_TRAVELS
} from './actions';
import { combineReducers } from 'redux'

function map(state = {}, action) {
    switch (action.type) {
        case REQUEST_MAP:
            return Object.assign({}, state, {
                isLoading: true
            })
            break
        case RECEIVE_MAP:
            return Object.assign({}, state, {
                isLoading: false,
                geojson: action.geojson
            })
            break
        default:
            return state;
    }
}

function travels(state = {}, action) {
    switch (action.type) {
        case REQUEST_TRAVELS:
            return Object.assign({}, state, {
                isLoading: true
            });
            break;
        case RECEIVE_TRAVELS:
            return Object.assign({}, state, {
                isLoading: false,
                travels: action.travels
            })
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    map,
    travels
})

export default rootReducer
