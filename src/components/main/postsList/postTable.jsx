import React from "react"
import PostCard from "./postCard"

const PostTable = ({ posts }) => {
    return (
        <div className="container">
            {posts.map((post) => (
                <PostCard post={post} key={post.id} />
            ))}
        </div>
    )
}

export default PostTable
