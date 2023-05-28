import React from "react"

const Loader = () => {
    return (
        <div className="d-flex align-items-center">
            <h5>Идет загрузка </h5>
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Loader
