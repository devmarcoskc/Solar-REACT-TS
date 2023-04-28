import axios from "axios"

export const ApiRequests = {
    GetSolarIrradiance: async (lat: string, lon: string) => {
        let response = await axios.get(`https://developer.nrel.gov/api/pvwatts/v6.json?api_key=HYewxa94wDOv71K5Y2hSj7Qa7JnLEGfRYWZ3K6la&lat=${lat}&lon=${lon}&system_capacity=4&azimuth=180&tilt=40&array_type=1&module_type=1&losses=10`).
        then(response => {
            return response.data;
        })
        .catch(error => {
            return error.response;
        })
        return response;
    }
    
}