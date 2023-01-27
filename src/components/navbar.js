import React from 'react'

export default function MainNavbar() {
    return (
        <nav className="navbar sticky-top navbar-expand-lg custom-bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand text-heading" href="#home">wrewsama</a>

                <button className="navbar-toggler light-dropdown-btn"
                        data-bs-toggle='collapse'
                        data-bs-target='#navbarSupportedContent'>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link text-subheading" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-subheading" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-subheading" href="#experience">Experience</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link text-subheading" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-subheading" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
