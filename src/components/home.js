import React from 'react'
import Typed from 'react-typed'

export default function Home() {
    return (
        <header id="home" className="my-5">
            <div className="container px-4 text-center">
                <h1 className="fw-bolder text-heading text-with-shadow">
                    <Typed strings={["Hi, I'm Andrew!"]}
                        typeSpeed={30} />
                </h1>
                <p className="lead text-normal text-with-shadow">
                    Computer Science Sophomore,
                    Software Engineer,
                    Submission Grappling hobbyist.
                    Living in accordance with kaizen.
                </p>
                <a className="btn btn-lg btn-outline-light highlighted-btn" href="#">
                    My Resume
                </a>
            </div>
        </header>
    )
}
