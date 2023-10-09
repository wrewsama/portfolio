import React from 'react'
import ExperienceItem from './experience-item'

export default function Experience() {
    return (
        <div className="row my-5" id="experience" data-aos="fade-up">
            <div className="container px-4 justify-content-center">
                <div className="row text-center text-heading">
                    <h2>Experience</h2>
                </div>

                <ExperienceItem jobTitle="Software Engineer Intern"
                                company="GovTech"
                                date="May 2023 - Present"
                                bulletPoints={["Engineered features for micro-services for the Citizen Disbursement System using technologies such as AWS, Spring Boot, Apache Kafka, Docker, and Kubernetes, handling government payouts for up to 6 million citizens",
                                               "Optimised application performance through code refactoring, reducing memory usage by over 95%",
                                               "Built application infrastructure on AWS using Terraform, standardising deployments across 3 different environments"]}/>

                <ExperienceItem jobTitle="Software Engineer Intern"
                                company="Grab"
                                date="Jan 2023 - May 2023"
                                bulletPoints={["Enhanced a self-help Web Portal by developing features utilised by several hundred GrabRentals drivers and staff",
                                               "Automated business processes by creating a script to automatically generate invoice statements using MySQL, NodeJS, and AWS S3, saving dozens of man-hours per annum",
                                               "Spearheaded communication between various teams including Operations and two Tech teams from Indonesia and Vietnam"]}/>

                <ExperienceItem jobTitle="Undergraduate Teaching Assistant"
                                company="NUS"
                                date="Aug 2022 - May 2023"
                                bulletPoints={["Taught fundamental programming concepts to a tutorial group of six CS1101S Programming Methodology 1 students",
                                               "Facilitated weekly CS2100 Computer Organisation lab sessions, covering concepts including Boolean logic, C, and MIPS Assembly",
                                               "Guided students in CS2030S Programming Methodology 2 lab sessions, involving OOP and Functional Programming"]}/>

                <ExperienceItem jobTitle="Robotics Software Engineer Intern"
                                company="Robotics Innovation Lab, SUTD"
                                date="May 2022 - Aug 2022"
                                bulletPoints={["Collaborated with researchers to develop an application to read and publish data from a smart glove to a Robot Operating System network using ROS Noetic, Python, Scikit-Learn, NumPy, and pandas.",
                                               "Developed scripts to collect data, train models, and recognise different hand gestures using machine learning in Python, eventually achieving a validation accuracy of 99% within 200 epochs."]}/>
            </div>
        </div>
    )
}
