const initialState = {
    posts: null,
    isLoading: false
}

export default function postsReducer(state = initialState, action) {
    switch (action.type) {
        case "POSTS/SET": {
            return {
                ...state,
                posts: [...action.payload]
            }
        }
        case "POSTS/START_LOADING": {
            return {
                ...state,
                isLoading: true
            }
        }
        case "POSTS/END_LOADING": {
            return {
                ...state,
                isLoading: false
            }
        }
        default:
            return state
    }
}
