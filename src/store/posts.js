const initialState = {
    posts: [],
    comments: [],
    user: []
}

export default function postsReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_POSTS": {
            return {
                ...state,
                posts: [...state.posts, ...action.payload]
            }
        }
        default:
            return state
    }
}
