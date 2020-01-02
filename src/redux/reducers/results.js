import { type as FIND_RESULTS } from '../actions/findResults';
import data from '../../data/dataVuelos'

const defaultState = [];
const objetocompleto = data;

function reducer (state = defaultState, { type, action }) {
    const origin = action;
    switch (type) {
        case FIND_RESULTS: {
             return objetocompleto.find(obj => obj.departureAirport === origin);
        }
        default:
            return state;
    }
}

export default reducer;