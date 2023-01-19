import React from 'react'
import ProjectItem from './project-item'
import ProjectItemAlt from './project-item-alt'
import tsuyoIcon from '../img/tsuyo.png'
import tmwIcon from '../img/tmw.png'
import gcIcon from '../img/githubcontact.png'


export default function Projects() {
    return (
        <div className="row my-5" id="projects" data-aos="fade-up">
            <div className="container px-4 justify-content-center">
                <div className="row text-center text-heading">
                    <h2>Projects</h2>
                </div>

                <div className="row d-flex justify-content-center">
                    <ProjectItem title="tsuyo"
                                techStack={"MongoDB, Express, React, Node.js, Bootstrap"}
                                screenshot={tsuyoIcon}
                                bulletPoints={["Engineered a full-stack web application for users to track workouts and view progress over time through interactive graphs made using React and ChartJS",
                                               "Ensured secure transmission of data from backend to frontend utilising JSON web tokens"]}
                                links={[{ name: "website",
                                          url: "tsuyo.onrender.com" },
                                        { name: "frontend code",
                                          url: "https://github.com/wrewsama/tsuyo-frontend"},
                                        { name: "backend code",
                                          url: "https://github.com/wrewsama/tsuyo-backend"}]} />
                </div>

                <div className="row d-flex justify-content-center">
                    <ProjectItemAlt title="toomanywords"
                                    techStack={"React, Flask, Firebase"}
                                    screenshot={tmwIcon}
                                    bulletPoints={["Collaborated in a two man team to develop a full-stack web based text summariser for students and educators to shorten overly verbose text",
                                                   "Leveraged open-source Natural Language Processing library, Hugging Face  Transformers to summarise input text automatically and integrated it into backend using Flask",
                                                   "Experimented with performance of multiple pre-trained NLP and summariser models from Hugging Face"]}
                                    links={[{ name: "source code",
                                              url: "https://github.com/Ramanathan0908/Orbital" },
                                            { name: "demo video",
                                              url: "https://drive.google.com/file/d/1G2qCzFBWzxYBWx1Hx_66Fmj7FLbqUS-P/view?usp=sharing"}]} />
                </div>

                <div className="row d-flex justify-content-center">
                    <ProjectItem title="GithubContact"
                                techStack={"Java, JUnit"}
                                screenshot={gcIcon}
                                bulletPoints={["Cooperated with a group of 4 other students to build an address book application with automatic syncing with the Github Public API",
                                               "Devised unit and integration tests and implemented CI/CD using JUnit 4 and Github Actions"]}
                                links={[{ name: "source code",
                                          url: "https://github.com/AY2223S1-CS2103T-W08-2/tp"},
                                        { name: "jar file",
                                          url: "https://github.com/AY2223S1-CS2103T-W08-2/tp/releases/tag/v1.4"}]} />
                </div>
            </div>
        </div>
    )
}
