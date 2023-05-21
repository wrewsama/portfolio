import React from 'react'

export default function ExperienceItem({ jobTitle, company, date, bulletPoints }) {
  return (
    <div className="container my-5">
        <div className="row gx-4 justify-content-center text-normal" data-aos="zoom-in">
            <h5 className="mb-1">
                <strong>{jobTitle}</strong> @ <span className="text-heading">{company}</span>
            </h5>
            <p className="mb-0">
                <em>{date}</em>
            </p>
            <ul>
                {
                    bulletPoints.map(point => {
                        return (
                            <li key={point}>{point}</li>
                        )
                    })
                }
            </ul>
        </div>
    </div>
  )
}
