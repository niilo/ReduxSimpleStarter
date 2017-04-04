import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action) {
    //console.log('Action received', action)
    switch(action.type) {
        case FETCH_WEATHER:
            // return stete.concat([ action.payload.data ]); // this doesn't mutate state, like state.push would do
            return [ action.payload.data, ...state] // ES6 same as above
    }

    return state
}