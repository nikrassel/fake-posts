import React from "react"
import UserCard from "../userinfo/userPage/userCard"
import UpperNavBar from "../ui/upperNavBar"
import { currentUser, additionalInfo } from "./myInfo"
import InfoCard from "./infoCard"

const About = () => {
    return (
        <>
            <UpperNavBar />
            <div className="container mt-2">
                <div className="row gutters-sm">
                    <div className="col-md-4 mb-3">
                        <UserCard user={currentUser} avatar={true} />
                    </div>
                    <div className="col-md-8">
                        {Object.values(additionalInfo).map((elem) => (
                            <InfoCard info={elem} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
