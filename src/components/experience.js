import React from 'react'
import ExperienceItem from './experience-item'

export default function Experience() {
    return (
        <div className="row my-5" id="experience" data-aos="fade-up">
            <div className="container px-4 justify-content-center">
                <div className="row text-center text-heading">
                    <h2>Experience</h2>
                </div>

                <ExperienceItem jobTitle="job title"
                                company="company"
                                date="date"
                                bulletPoints={["point 1", "point 2", "point 3"]}/>
            </div>
        </div>
    )
}
