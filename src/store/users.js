const initialState = {
    users: null,
    isLoading: false
}

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_USERS": {
            return {
                ...state,
                users: [...action.payload]
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
