import React from "react"
import PostsList from "./postsList/postsList"
import UpperNavBar from "../ui/upperNavBar"

const Main = () => {
    return (
        <>
            <UpperNavBar />
            <div className="container mt-2">
                <PostsList />
            </div>
        </>
    )
}

export default Main
