import React from 'react'
import NonFeaturedProject from './non-featured-project'
import gcIcon from '../img/githubcontact.png'
import hnrIcon from '../img/hnr.png'
import notDukeIcon from '../img/notduke.png'
import calcIcon from '../img/calc.png'
import chewsyIcon from '../img/chewsy.png'
import sakanaDbIcon from '../img/sakanadb.png'

export default function OtherProjects() {
    return (
        <div className="container my-5" id="other-projects" data-aos="fade-up">
            <div className="row text-center text-heading mb-5">
                <h2>Other Projects</h2>
            </div>

            <div className="row d-flex justify-content-center mb-5">
                <NonFeaturedProject title="SakanaDB"
                                    img={sakanaDbIcon}
                                    desc="A monorepo of various Database Management Systems"
                                    link={{
                                        name: "source code",
                                        url: "https://github.com/wrewsama/sakanadb"
                                    }}
                                     />
                <NonFeaturedProject title="Chew-sy"
                                    img={chewsyIcon}
                                    desc="Web app to help teams decide where to go for lunch made with React, Typescript, Play/Akka, and Java."
                                    link={{
                                        name: "website",
                                        url: "https://chew-sy.onrender.com/"
                                    }}
                                     />
                <NonFeaturedProject title="Hydration Tracker"
                                    img={hnrIcon}
                                    desc="Web app to track water intake made with MongoDB, Express, React, and Node."
                                    link={{
                                        name: "website",
                                        url: "https://hnr2023-stayhydrated.onrender.com/"
                                    }}
                                     />

            </div>

            <div className='row d-flex justify-content-center'>
                <NonFeaturedProject title="GithubContact"
                                    img={gcIcon}
                                    desc="An addressbook integrated with GitHub to manage software teams."
                                    link={{
                                        name: "jar file",
                                        url: "https://github.com/AY2223S1-CS2103T-W08-2/tp/releases/tag/v1.4"
                                    }}
                                     />
                <NonFeaturedProject title="Totally Not Duke"
                                    img={notDukeIcon}
                                    desc="Todo list chatbot made with Java/JavaFX, tested with JUnit."
                                    link={{
                                        name: "jar file",
                                        url: "https://github.com/wrewsama/ip/releases/tag/v0.3"
                                    }}
                                     />
                
                <NonFeaturedProject title="Calculator"
                                    img={calcIcon}
                                    desc="Simple calculator made using vanilla HTML, CSS, and Javascript."
                                    link={{
                                        name: "website",
                                        url: "https://wrewsama.github.io/odin-calculator/"
                                    }}
                                     />
            </div>
        </div>
    )
}
