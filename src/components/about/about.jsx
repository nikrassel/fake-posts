import React from "react"
import UserCard from "../userinfo/userPage/userCard"
import UpperNavBar from "../ui/upperNavBar"

const About = () => {
    const currentUser = {
        username: "Igor_Aparin",
        name: "Игорь Апарин",
        email: "igor.aparin@bk.ru",
        address: {
            zipcode: 602265,
            city: "Муром",
            street: "Ленина",
            suite: "1-12"
        },
        phone: "89100997851",
        website: "none"
    }
    return (
        <>
            <UpperNavBar />
            <div className="container mt-2">
                <div className="row gutters-sm">
                    <div className="col-md-4 mb-3">
                        <UserCard user={currentUser} avatar={true} />
                    </div>
                    <div className="col-md-8"></div>
                </div>
            </div>
        </>
    )
}

export default About
