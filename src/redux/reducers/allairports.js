import { type as getCity  } from '../actions/getCities';
import airports  from '../../data/airports';

const defaultState = airports;

function reducer (state = defaultState, { type, payload }) {
    console.log("text", payload)
    switch (type) {
        case getCity: {
            return defaultState.map((location) => location.airport );
        }
        default:
            return state;
    }
}

export default reducer;