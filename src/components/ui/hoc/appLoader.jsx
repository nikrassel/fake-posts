import { useDispatch } from "react-redux"

const AppLoader = ({ children }) => {
    const dispatch = useDispatch()
    dispatch({ type: "LOAD_DATA" })
    return children
}

export default AppLoader
