import React, { useState } from 'react';
import { useSelector } from "react-redux"
import _ from "lodash"
import { paginate } from "../../../utils/paginate"
import TextField from "./textField"
import Sorting from './sorting';
import PostTable from './postTable';
import Pagination from "./Pagination";
import Loader from '../../ui/loader';

const PostsList = () => {
    const pageSize = 4
    const [currentPage, setCurrentPage] = useState(1)
    const [sortOrder, setSortOrder] = useState("asc")
    const posts = useSelector((state) => state.posts.posts)
    const loadingStatus = useSelector((state) => state.posts.isLoading)
    const [search, setSearch] = useState("")
    function handlePageChange(pageIndex) {
        setCurrentPage(pageIndex)
    }
    function handleSort(order) {
        setSortOrder(order)
    }
    function handleChange({ value }) {
        setSearch(value)
    }
    if (posts) {
        let filtredPosts = posts.filter((post) => post !== null)
        if (search) {
            const nameRegExp = new RegExp(`(?:${search.toLowerCase()})`, "g")
            filtredPosts = filtredPosts.filter((post) =>
                nameRegExp.test(post.title.toLowerCase())
            )
        }
        const count = filtredPosts.length
        const sortedPosts = _.orderBy(
            filtredPosts,
            ["title"],
            [sortOrder]
        )
        const postCrop = paginate(sortedPosts, currentPage, pageSize)
        return ( 
            <div className='container'>
                <div className='row'>
                    <Sorting 
                        sortOrder={handleSort}
                        selectedOrder={sortOrder}
                    />
                </div>
                <div className='row'>
                        <TextField 
                            label=""
                            name="search"
                            value={search}
                            placeHolder="Поиск..."
                            onChange={handleChange}
                        />
                </div>
                <div className='row'>
                    <PostTable 
                        posts={postCrop}
                    />
                </div>
                <div className='row'>
                    <Pagination 
                        itemCount={count}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
         );
    }
    if (loadingStatus) {
        return (
            <Loader />
        )
    }
}
 
export default PostsList;