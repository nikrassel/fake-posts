const initialState = {
    users: null,
    isLoading: false
}

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case "USERS/SET": {
            return {
                ...state,
                users: [...action.payload]
            }
        }
        case "USERS/CLEAN": {
            return {
                ...state,
                users: null
            }
        }
        case "USERS/BEGIN_LOADING": {
            return {
                ...state,
                isLoading: true
            }
        }
        case "USERS/END_LOADING": {
            return {
                ...state,
                isLoading: false
            }
        }
        default:
            return state
    }
}
