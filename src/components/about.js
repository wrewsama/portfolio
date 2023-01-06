import React from 'react'

export default function About() {
    return (
        <div className="container px-4">
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
                        <li className="list-group-item">Languages: x</li>
                        <li className="list-group-item">Frameworks: x</li>
                        <li className="list-group-item">Databases: x</li>
                        <li className="list-group-item">Libraries: x</li>
                        <li className="list-group-item">Developer Tools: x</li>
                        <li className="list-group-item">Operating Systems: x</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
