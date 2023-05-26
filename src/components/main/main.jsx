import React from "react"
import { useSelector } from "react-redux"
import PostsList from "./postsList/postsList"
import UpperNavBar from "../ui/upperNavBar"

const Main = () => {
    // function handleDownloadPosts() {
    //     dispatch(loadPostsList())
    // }
    const posts = useSelector((state) => state.posts.posts)
    console.log(posts)
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
