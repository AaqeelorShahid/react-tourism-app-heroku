import axios from "axios";

const BASE_URL = "https://tourism-app-springboot.herokuapp.com/packages"

class packageServices {

    getPackageList(){
        return axios.get(BASE_URL)
    }

    addPackage(pack){
        return axios.post(BASE_URL , pack)
    }

    editPackage (pack, id){
        return axios.put(BASE_URL + `/${id}`, pack)
    }

    deletePackage (id){
        return axios.delete(BASE_URL + `/${id}`)
    }


}

export default new packageServices()