import axios from 'axios';


export const requestsAPI = {
    authTest(success: boolean) {
        return axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success})
            .then(response => {
                console.log(response);
                return response.data.errorText;
            })
            .catch(error => {
                console.log({...error});
                console.log(error.response ? error.response.data.errorText : error.message);
                return error.response.data.errorText;

            })
    }
}