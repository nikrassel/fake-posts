import React from "react"
import { useNavigate } from "react-router-dom"

const UpperNavBar = () => {
    const navigate = useNavigate()
    function handleNavigate(target) {
        if (target.target.id === "about") {
            navigate("/about")
        } else if (target.target.id === "main") {
            navigate("/")
        }
    }
    return (
        <>
            <nav className="navbar navbar-light bg-primary">
                <div className="container">
                    <button
                        className="btn btn-info"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasExample"
                        aria-controls="offcanvasExample"
                    >
                        Навигация
                    </button>
                </div>
            </nav>
            <div
                className="offcanvas offcanvas-start"
                tabIndex="-1"
                id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel"
            >
                <div className="offcanvas-header justify-content-end">
                    <button
                        type="button"
                        className="btn-close mb-2"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    ></button>
                </div>
                <div className="offcanvas-body">
                    <div className="card m-3">
                        <div className="card-body">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <img
                                            src="/img/Avatar.jpg"
                                            alt=""
                                            width="100px"
                                            style={{ borderRadius: "50%" }}
                                        />
                                    </div>
                                    <div className="col">
                                        <h5 className="card-title">
                                            Игорь Апарин
                                        </h5>
                                        <p className="card-text">
                                            igor.aparin@bk.ru
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        type="button"
                        className="btn btn-primary mb-2"
                        id="about"
                        data-bs-dismiss="offcanvas"
                        onClick={handleNavigate}
                    >
                        Обо мне
                    </button>
                    <br />
                    <button
                        type="button"
                        className="btn btn-primary"
                        id="main"
                        data-bs-dismiss="offcanvas"
                        onClick={handleNavigate}
                    >
                        Список постов
                    </button>
                </div>
            </div>
        </>
    )
}

export default UpperNavBar
