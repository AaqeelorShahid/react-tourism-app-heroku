import axios from "axios";

const BASE_URL = "http://localhost:8090/customer"

class customerServices {

    getCustomerList(){
        return axios.get(BASE_URL)
    }

    addCustomer(customer){
        return axios.post(BASE_URL , customer)
    }

    editCustomer (customer, id){
        return axios.put(BASE_URL + `/${id}`, customer)
    }

    deletCustomer (id){
        return axios.delete(BASE_URL + `/${id}`)
    }


}

export default new customerServices()