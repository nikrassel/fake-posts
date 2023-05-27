import React from "react"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import Loader from "../ui/loader"
import UserPosts from "./userPage/userPosts"
import UserCard from "./userPage/userCard"
import Alert from "../ui/alert"

const UserInfo = () => {
    const alert = useSelector((state) => state.errors.alert)
    const navigate = useNavigate()
    const { id } = useParams()
    const users = useSelector((state) => state.users.users)
    const loadingStatus = useSelector((state) => state.users.isLoading)
    function handleBack() {
        navigate("/")
    }
    if (loadingStatus) {
        return <Loader />
    }
    if (users && id) {
        const currentUser = users.find((user) => user.id === Number(id))
        return (
            <>
                {alert && <Alert text={alert} />}
                <button className="btn btn-primary m-2" onClick={handleBack}>
                    Назад
                </button>
                <div className="container">
                    <div className="row gutters-sm">
                        <div className="col-md-4 mb-3">
                            <UserCard user={currentUser} />
                        </div>
                        <div className="col-md-8">
                            <UserPosts userId={currentUser.id} />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default UserInfo
