import React from "react"
import { useDispatch, useSelector } from "react-redux"

const Main = () => {
    const dispatch = useDispatch()
    // function handleDownloadPosts() {
    //     dispatch(loadPostsList())
    // }
    const posts = useSelector((state) => state.posts.posts)
    console.log(posts)
    return (
        <>
            <h1>Main page</h1>
            <div className="container">
                <button
                    className="btn btn-primary"
                    onClick={() => dispatch({ type: "LOAD_DATA" })}
                >
                    Download posts
                </button>
            </div>
        </>
    )
}

export default Main
