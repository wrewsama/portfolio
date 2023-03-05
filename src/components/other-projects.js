import React from 'react'
import NonFeaturedProject from './non-featured-project'
import hnrIcon from '../img/hnr.png'
import notDukeIcon from '../img/notduke.png'
import calcIcon from '../img/calc.png'

export default function OtherProjects() {
    return (
        <div className="container my-5" id="other-projects" data-aos="fade-up">
            <div className="row text-center text-heading mb-5">
                <h2>Other Projects</h2>
            </div>

            <div className="row d-flex justify-content-center">
                <NonFeaturedProject title="Hydration Tracker"
                                    img={hnrIcon}
                                    desc="A web app to track water intake. Made with MongoDB, Express, React, and Node."
                                    link={{
                                        name: "website",
                                        url: "https://hnr2023-stayhydrated.onrender.com/"
                                    }}
                                     />

                <NonFeaturedProject title="Totally Not Duke"
                                    img={notDukeIcon}
                                    desc="A todo list chatbot made with Java/JavaFX and tested with JUnit."
                                    link={{
                                        name: "jar file",
                                        url: "https://github.com/wrewsama/ip/releases/tag/v0.3"
                                    }}
                                     />
                
                <NonFeaturedProject title="Calculator"
                                    img={calcIcon}
                                    desc="A simple calculator made using vanilla HTML, CSS, and Javascript."
                                    link={{
                                        name: "website",
                                        url: "https://wrewsama.github.io/odin-calculator/"
                                    }}
                                     />
            </div>
        </div>
    )
}
