import { useDispatch } from "react-redux"

const AppLoader = ({ children }) => {
    const dispatch = useDispatch()
    dispatch({ type: "LOAD_POSTS" })
    return children
}

export default AppLoader
