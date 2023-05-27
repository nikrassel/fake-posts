const initialState = {
    comments: [],
    isLoading: false
}

export default function commentsReducer(state = initialState, action) {
    switch (action.type) {
        case "COMMENTS/SET": {
            if (state.comments.length) {
                if (state.comments.find((elem) => elem.id === action.payload[0].id)) {
                    return state
                }
            }
            return {
                ...state,
                comments: [
                    ...state.comments,
                    ...action.payload
                ]
            }
        }
        case "COMMENTS/BEGIN_LOADING": {
            return {
                ...state,
                isLoading: true
            }
        }
        case "COMMENTS/END_LOADING": {
            return {
                ...state,
                isLoading: false
            }
        }
        default:
            return state
    }
}
