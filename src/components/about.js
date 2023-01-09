import React from 'react'

export default function About() {
    return (
        <div className="row custom-bg-dark" id="about">
            <div className="row gx-4 text-center">
                <h2>About</h2>
            </div>
            <div className="row gx-4">
                <div className="col text-center">
                    <h5>More about me: </h5>

                    <p>Lorem ipsum dolor whatever</p>
                </div>

                <div className="col text-center">
                    <h5>Skills: </h5>

                    <ul className="list-group text-start">
                        <li className="list-group-item custom-bg-dark">Languages: x</li>
                        <li className="list-group-item custom-bg-dark">Frameworks: x</li>
                        <li className="list-group-item custom-bg-dark">Databases: x</li>
                        <li className="list-group-item custom-bg-dark">Libraries: x</li>
                        <li className="list-group-item custom-bg-dark">Developer Tools: x</li>
                        <li className="list-group-item custom-bg-dark">Operating Systems: x</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
