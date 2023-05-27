const POST_ID = "post-id"
const USER_ID = "user-id"

export function setPostId(newId) {
    localStorage.setItem(POST_ID, newId)
}

export function setUserId(newId) {
    localStorage.setItem(USER_ID, newId)
}

export function getPostId() {
    return localStorage.getItem(POST_ID)
}

export function getUserId() {
    return localStorage.getItem(USER_ID)
}

const localStorageService = {
    setPostId,
    getPostId,
    setUserId,
    getUserId
}
export default localStorageService