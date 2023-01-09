import React from 'react'

export default function MainNavbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <span className="navbar-brand text-white">wrewsama</span>

                
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#experience">Experience</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link text-white" href="#projects">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
