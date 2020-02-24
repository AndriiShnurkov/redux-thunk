import axios from 'axios';
import { GET_DATA, SUCCESS_DATA, ERROR_DATA } from './types';
const getData = () => ({
    type: GET_DATA
});
const successData = (data) => ({
    type: SUCCESS_DATA,
    payload: data
});
const errorData = (error) => ({
    type: ERROR_DATA,
    payload: error
});

const asyncGetData = () => (dispatch) => {
    getData();
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => dispatch(successData(res.data)))
        .catch(error => dispatch(errorData(error)))
        .finally(() => getData())
}

export { asyncGetData }