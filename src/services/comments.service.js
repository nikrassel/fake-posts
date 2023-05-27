import httpService from "./http.service"
import localStorageService from "./localStorage.service"

// const postId = localStorageService.getPostId()
const commentsEndpoint = `comments?postId=`

const commentsService = {
    get: async () => {
        const { data } = await httpService.get(
            commentsEndpoint + localStorageService.getPostId()
        )
        return data
    }
}

export default commentsService
