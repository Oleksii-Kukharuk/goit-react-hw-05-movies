import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/'
const API_KEY = '693166b0b43bdf507fbf204c77b82397'

axios.defaults.params = {
    key: API_KEY,
    
}

export const getMovies = async () => {
const config = {
    params: {
    media_type:'all', 
    time_window: 'week'
    }
}
const responce = await axios.get('', config)

return responce
}