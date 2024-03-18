import APIRequest from "../config/axios.config";


export  function getRandomJoke(){
    return APIRequest.get('/jokes/random', {
        validateStatus: function (status) {
            return status < 500;
        }
    }) //https://randomuser.me/api/
    
}
