const initialState = {
    comments: null,
    isLoading: false
}

export default function commentsReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_COMMENTS": {
            return {
                ...state,
                comments: [...action.payload]
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
