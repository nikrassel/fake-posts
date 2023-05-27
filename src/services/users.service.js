import httpService from "./http.service"
import localStorageService from "./localStorage.service"

const usersEndpoint = "users?id="

const usersService = {
    get: async () => {
        const { data } = await httpService.get(
            usersEndpoint + localStorageService.getUserId()
        )
        return data
    }
}

export default usersService
