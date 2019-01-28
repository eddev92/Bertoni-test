import axios from 'axios';
import { ROUTE_GET_ITEMS, ROUTE_SAVE_ITEM } from '../routes/routes';
import {HEADERS_REQUEST} from '../constants/constants'
const catchFn = error => {
	console.log('error: ', error);
	return console.log(error.response);
};

class Api {
    saveItem = (name) => {
        return axios.post(ROUTE_SAVE_ITEM, name, HEADERS_REQUEST)
        .then(response => {
            return response.data;
        })
       .catch(catchFn);
    }
    deleteItem() {
        
    }
    updateItem() {
        
    }
    getItems = () => {
        return axios.get(ROUTE_GET_ITEMS, HEADERS_REQUEST)
        .then(response => {
            return response.data;
        })
       .catch(catchFn);

    }
}

export default Api;
