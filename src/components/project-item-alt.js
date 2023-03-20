import React from 'react'

export default function ProjectItemAlt({ title, techStack, screenshot, bulletPoints, links }) {
  return (
    <div className="card mb-3 bg-transparent my-5" style={{maxWidth: "1440px"}} data-aos="zoom-in-left">
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
                                    <li className="card-text text-normal d-none d-md-block" key={point}>
										{point}
									</li>
                                )
                            })
                        }
                    </ul>

                    <div className = 'btn-group'>
                        {
                            links.map(link => {
                                return (
                                    <div key={link.name}>
                                        <a href={link.url}>
                                            <button className='btn btn-outline-light highlighted-btn'> {link.name} </button>
                                        </a>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            <div className="col-8 p-3" >
                <img src={screenshot} className="img-fluid rounded" alt="project screenshot" />
            </div>
        </div>
    </div>
  )
}
