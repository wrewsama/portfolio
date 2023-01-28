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
                                company="Grab"
                                date="Jan 2023 - Present"
                                bulletPoints={["Maintained a self-help Web Portal used by several thousand GrabRentals drivers"]}/>

                <ExperienceItem jobTitle="Undergraduate Teaching Assistant"
                                company="NUS"
                                date="Aug 2022 - Present"
                                bulletPoints={["Taught fundamental programming concepts to a tutorial group of six CS1101S Programming Methodology 1 students",
                                               "Facilitated weekly CS2100 Computer Organisation lab sessions, covering concepts including Boolean logic, C, and MIPS Assembly",
                                               "Guided students in CS2030S Programming Methodology 2 lab sessions, involving OOP and Functional Programming"]}/>

                <ExperienceItem jobTitle="Robotics Software Engineer Intern"
                                company="Robotics Innovation Lab, SUTD"
                                date="May 2022 - Aug 2022"
                                bulletPoints={["Collaborated with researchers to develop an application to read and publish data from a smart glove to a Robot Operating System network using ROS Noetic, Python, Scikit-Learn, NumPy, and pandas.",
                                               "Developed scripts to collect data, train models, and recognise different hand gestures using machine learning in Python, eventually achieving a validation accuracy of 99% within 200 epochs.",
                                               "Refactored several hundred lines of legacy code in accordance with SOLID design principles, as well as design patterns such as the Observer and Strategy Patterns",
                                               "Developed a Graphical User Interface to accelerate data collection and model training processes using Tkinter and Model View Controller architecture in Python",
                                               "Enhanced readability of codebase by adding hundreds of lines of documentation and comments, as well as by rewriting code in accordance with PEP 8"]}/>

                
            </div>
        </div>
    )
}
