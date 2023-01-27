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

                    <p className = "mx-3">
                        Hi! I'm <strong>Andrew Lo Zhi Sheng</strong>.
                        I'm currently pursuing a Bachelor's Degree in Computer Science at the National University of Singapore (NUS).
                        My interests include Software Engineering, Database Systems, as well as Artificial Intelligence and Machine Learning.
                    </p>

                    <p className = "mx-3">
                        Outside of work, I enjoy powerlifting, calisthenics, and Brazillian Jiu Jitsu.
                    </p>
                </div>

                <div className="col text-center">
                    <h5>Skills: </h5>

                    <ul className="list-group text-start">
                        <li className="list-group-item bg-transparent text-normal">Languages: Java, Python, C, JavaScript, HTML/CSS</li>
                        <li className="list-group-item bg-transparent text-normal">Frameworks: React, Express, Node.js, Bootstrap, Flask, ROS1</li>
                        <li className="list-group-item bg-transparent text-normal">Databases: MongoDB, PostgreSQL</li>
                        <li className="list-group-item bg-transparent text-normal">Libraries: PyTorch, Tkinter, pandas, NumPy, Matplotlib</li>
                        <li className="list-group-item bg-transparent text-normal">Developer Tools: Git, VS Code, IntelliJ</li>
                        <li className="list-group-item bg-transparent text-normal">Operating Systems: Windows, Linux</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
