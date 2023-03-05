import React from 'react'
import NonFeaturedProject from './non-featured-project'
import hnrIcon from '../img/hnr.png'

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

                <NonFeaturedProject title="Hydration Tracker"
                                    img={hnrIcon}
                                    desc="A web app to track water intake."
                                    link={{
                                        name: "website",
                                        url: "https://hnr2023-stayhydrated.onrender.com/"
                                    }}
                                     />
                
                <NonFeaturedProject title="Hydration Tracker"
                                    img={hnrIcon}
                                    desc="A web app to track water intake."
                                    link={{
                                        name: "website",
                                        url: "https://hnr2023-stayhydrated.onrender.com/"
                                    }}
                                     />
            </div>
        </div>
    )
}
