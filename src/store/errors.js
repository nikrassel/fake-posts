const initialState = {
    alert: null
}

export const errorsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ERROR/SHOW_ALERT":
            return { alert: action.payload }
        case "ERROR/HIDE_ALERT":
            return { alert: null }
        default:
            return state
    }
}
