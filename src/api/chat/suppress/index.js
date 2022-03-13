import axios from "axios";

let URL = "localhost:8080/api/suppress";

function allChats(username, jwt) {
    let data = undefined;
    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
            'jwt-token': jwt
        }
    };

    axios.get(URL, axiosConfig)
        .then(response => {
            console.log(response)
            data = response;
        })
        .catch(err => {
            console.error(err);
        })
    
    return data
}

export default allChats