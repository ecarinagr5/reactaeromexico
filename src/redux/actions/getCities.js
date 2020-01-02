import axios from 'axios';
export const type = 'GET_CITY';


const getCity = text => {
        return {
            type,
            payload: text,
        };
    };
    


export function ciudadades() {
        return function(dispatch) {
          return axios.get("https://www.aeromexico.com/cms/api/v1/airports?language=es&status=1")
            .then(({ data }) => {
            dispatch(getCity(data));
          });
        };
      }
