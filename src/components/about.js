import React from 'react'

export default function About() {
    return (
        <div className="row my-5" id="about" data-aos="fade-up">
            <div className="row gx-4 text-center text-heading">
                <h2>About</h2>
            </div>
            <div className="row gx-4 text-normal">
                <div className="col text-center">
                    <h5>More about me: </h5>

                    <p>Lorem ipsum dolor whatever</p>
                </div>

                <div className="col text-center">
                    <h5>Skills: </h5>

                    <ul className="list-group text-start">
                        <li className="list-group-item bg-transparent text-normal">Languages: x</li>
                        <li className="list-group-item bg-transparent text-normal">Frameworks: x</li>
                        <li className="list-group-item bg-transparent text-normal">Databases: x</li>
                        <li className="list-group-item bg-transparent text-normal">Libraries: x</li>
                        <li className="list-group-item bg-transparent text-normal">Developer Tools: x</li>
                        <li className="list-group-item bg-transparent text-normal">Operating Systems: x</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
