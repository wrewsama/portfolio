import React from 'react'
import Typed from 'react-typed'

export default function Home() {
    return (
        <header id="home">
            <div className="container px-4 text-center">
                <h1 className="fw-bolder text-heading">
                    <Typed strings={["Hi, I'm wrewsama!"]}
                        typeSpeed={30} />
                </h1>
                <p className="lead text-normal">
                    Year 2 Computer Science and Mathematics Undergrad,
                    Software Engineering enthusiast,
                    and submission grappling hobbyist.
                    Living in accordance with kaizen.
                </p>
                <a className="btn btn-lg btn-outline-light highlighted-btn" href="#">
                    My Resume
                </a>
            </div>
        </header>
    )
}
