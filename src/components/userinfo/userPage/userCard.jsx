import React from "react"

const UserCard = ({ user, avatar }) => {
    return (
        <div className="card mb-3">
            <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center position-relative">
                    {avatar ? (
                        <img
                            src="/img/Avatar.jpg"
                            alt="avatar"
                            className="rounded-circle shadow-1-strong me-3"
                            width="150"
                            style={{ borderRadius: "50%" }}
                        />
                    ) : (
                        <img
                            src="/img/logo.jpg"
                            alt="avatar"
                            className="rounded-circle shadow-1-strong me-3"
                            width="150"
                        />
                    )}

                    <div className="mt-3">
                        <h4>{user.username}</h4>
                        <div className="card-body d-flex flex-column justify-content-center text-center">
                            <h5 className="card-title">
                                Real name: {user.name}
                            </h5>
                            <h5 className="card-text">Email: {user.email}</h5>
                        </div>
                        <div className="card-body d-flex flex-column justify-content-center text-center">
                            <h5 className="card-title">Address info:</h5>
                            <h5 className="card-text">
                                {user.address.zipcode}
                            </h5>
                            <h5 className="card-text">
                                {user.address.city} {user.address.street}{" "}
                                {user.address.suite}
                            </h5>
                            <h5 className="card-text">
                                Phone number: {user.phone}
                            </h5>
                            <h5 className="card-text">
                                Website: {user.website}
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCard
