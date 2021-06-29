import axios from "axios";

const BASE_URL = "http://localhost:8090/hotels"

class hotelServices {

    getHotelList(){
        return axios.get(BASE_URL)
    }

    addHotel(hotel){
        return axios.post(BASE_URL , hotel)
    }

    editHotel (hotel, id){
        return axios.put(BASE_URL + `/${id}`, hotel)
    }

    deleteHotel (id){
        return axios.delete(BASE_URL + `/${id}`)
    }


}

export default new hotelServices()