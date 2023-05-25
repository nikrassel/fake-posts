import React from "react"
import { useSelector } from "react-redux"
import PostsList from "./postsList/postsList"

const Main = () => {
    // function handleDownloadPosts() {
    //     dispatch(loadPostsList())
    // }
    const posts = useSelector((state) => state.posts.posts)
    console.log(posts)
    return (
        <>
            <h1>Main page</h1>
            <div className="container">
                <PostsList />
            </div>
        </>
    )
}

export default Main
