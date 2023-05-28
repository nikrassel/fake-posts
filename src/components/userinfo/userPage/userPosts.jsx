import React from "react"
import PostTable from "../../main/postsList/postTable"

const UserPosts = ({ userId, posts }) => {
    const userPosts = posts.filter((post) => post.userId === userId)
    return <PostTable posts={userPosts} />
}

export default UserPosts
