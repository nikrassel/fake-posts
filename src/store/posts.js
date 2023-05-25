const initialState = {
    posts: [],
    isLoading: false
}

export default function postsReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_POSTS": {
            return {
                ...state,
                posts: [...action.payload]
            }
        }
        case "BEGIN_LOADING": {
            return {
                ...state,
                isLoading: true
            }
        }
        case "END_LOADING": {
            return {
                ...state,
                isLoading: false
            }
        }
        default:
            return state
    }
}
