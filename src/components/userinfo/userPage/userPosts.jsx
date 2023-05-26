import React from 'react';
import PostTable from '../../main/postsList/postTable';
import { useSelector } from "react-redux"

const UserPosts = ({ userId }) => {
    const posts = useSelector((state) => state.posts.posts)
    const userPosts = posts.filter((post) => post.userId === userId)
    return ( 
        <PostTable posts={userPosts} />
    );
}
 
export default UserPosts;