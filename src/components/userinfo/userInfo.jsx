import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import Loader from "../ui/loader"
import UserPosts from "./userPage/userPosts"
import UserCard from "./userPage/userCard"

const UserInfo = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useParams()
    const users = useSelector((state) => state.users.users)
    if (!users) {
        dispatch({ type: "LOAD_USERS" })
    }
    const loadingStatus = useSelector((state) => state.users.isLoading)
    function handleBack() {
        navigate("/")
    }
    if (users && id) {
        const currentUser = users.find((user) => user.id === Number(id))
        return (
            <>
                <button className="btn btn-primary m-2" onClick={handleBack}>Назад</button>
                <div className="container">
                <div className="row gutters-sm">
                    <div className="col-md-4 mb-3">
                        <UserCard user={currentUser} />
                    </div>
                    <div className="col-md-8">
                        <UserPosts userId={currentUser.id}/>
                    </div>
                </div>
            </div>
            </>
        )
    }
    if (loadingStatus) {
        return <Loader />
    }
    
}

export default UserInfo
