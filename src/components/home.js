import React from 'react'
import Typed from 'react-typed'

export default function Home() {
    return (
        <header className="custom-bg-dark text-white" id="home">
            <div className="container px-4 text-center">
                <h1 className="fw-bolder">
                    <Typed strings={["Hi, I'm wrewsama!"]}
                        typeSpeed={30} />
                </h1>
                <p className="lead">
                    Year 2 Computer Science and Mathematics Undergrad,
                    Software Engineering enthusiast,
                    and submission grappling hobbyist.
                    Living in accordance with kaizen.
                </p>
                <a className="btn btn-lg btn-outline-light" href="#">
                    My Resume
                </a>
            </div>
        </header>
    )
}
