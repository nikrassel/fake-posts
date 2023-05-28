import React from "react"
import PostsList from "./postsList/postsList"
import UpperNavBar from "../ui/upperNavBar"
import { useSelector } from "react-redux"
import Alert from "../ui/alert"

const Main = () => {
    const alert = useSelector((state) => state.errors.alert)
    return (
        <>
            <UpperNavBar />
            {alert && <Alert text={alert} />}
            <div className="container mt-2">
                <PostsList />
            </div>
        </>
    )
}

export default Main
