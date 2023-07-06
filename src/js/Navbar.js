import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg pb-4 pt-4" style={{ backgroundColor: "#89CEEB" }}>
            <div className="container ">
                <a className="navbar-brand ms-1" href="#">Cozy Games</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                        <li className="nav-item mr-auto">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar