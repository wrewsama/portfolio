import React from 'react'

export default function ProjectItemAlt({ title, techStack, screenshot, bulletPoints }) {
  return (
    <div className="card mb-3 bg-transparent" style={{maxWidth: "1440px"}}>
        <div className="row g-0">
        <div className="col-4">
                <div className="card-body">
                    <p className="card-text lead">
                        <strong className="text-heading">
                            {title}
                        </strong>
                    </p>
                    <p className="card-text">
                        <em className="text-subheading">
                            {techStack}
                        </em>
                    </p>
                    
                    <ul>
                        {
                            bulletPoints.map(point => {
                                return (
                                    <li className="card-text text-normal" key={point}>{point}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>

            <div className="col-8 p-3" >
                <img src={screenshot} className="img-fluid rounded" alt="project screenshot" />
            </div>
        </div>
    </div>
  )
}
