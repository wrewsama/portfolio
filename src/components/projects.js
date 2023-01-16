import React from 'react'
import ProjectItem from './project-item'
import ProjectItemAlt from './project-item-alt'
import tsuyoIcon from '../img/tsuyo.png'


export default function Projects() {
    return (
        <div className="row my-5" id="projects" data-aos="fade-up">
            <div className="container px-4 justify-content-center">
                <div className="row text-center text-heading">
                    <h2>Projects</h2>
                </div>

                <div className="row d-flex justify-content-center">
                    <ProjectItem title="title"
                                techStack={"tech1/tech2/tech3"}
                                screenshot={tsuyoIcon}
                                bulletPoints={["point 1", "point 2", "point 3"]}
                                links={[{ name: "source code",
                                          url: "https://github.com/" },
                                        { name: "website",
                                          url: "https://www.youtube.com/watch?v=AVRF8B504GE&list=RDC0uCU8jcxlM&index=5"}]} />
                </div>

                <div className="row d-flex justify-content-center">
                    <ProjectItemAlt title="title 2"
                                    techStack={"tech1/tech2/tech3"}
                                    screenshot={tsuyoIcon}
                                    bulletPoints={["point 1", "point 2", "point 3"]}
                                    links={[{ name: "source code",
                                          url: "https://github.com/" },
                                        { name: "website",
                                          url: "https://www.youtube.com/watch?v=AVRF8B504GE&list=RDC0uCU8jcxlM&index=5"}]} />
                </div>
            </div>
        </div>
    )
}
