import axios from "axios";

const BASE_URL = "https://tourism-app-springboot.herokuapp.com/user"

class userService {

    getUserList(){
        return axios.get(BASE_URL)
    }

    addUser(user){
        return axios.post(BASE_URL , user)
    }

    editUser (user, id){
        return axios.put(BASE_URL + `/${id}`, user)
    }

    deleteUser (id){
        return axios.delete(BASE_URL + `/${id}`)
    }


}

export default new userService()