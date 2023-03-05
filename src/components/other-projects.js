import React from 'react'
import NonFeaturedProject from './non-featured-project'
import hnrIcon from '../img/hnr.png'

export default function OtherProjects() {
    return (
        <div className="container" id="other-projects" data-aos="fade-up">
            <div className="row text-center text-heading">
                <h2>Other Projects</h2>
            </div>

            <div className="row">
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
