import axios from 'axios'
import { BASE_URL } from './constants'

const config = {
    headers: {
        "Content-Type" : "application/json",    // this means a json we're sending a JSON object data in request body
        "Accept" : "application/json"   // this mean client(here the callAPI function) will get data response in JSON format
    }
}

export const callAPI = async (resource) => {
    const { data } = await axios.get(`${BASE_URL}/${resource}`, config)
    return data
}

// while calling the function, we'll send a resource as a string like `data/meetingRoom.json` to point to that file
