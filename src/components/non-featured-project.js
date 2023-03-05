import React from 'react'

export default function NonFeaturedProject({ img, title, desc, link }) {
    return (
        <div className="col-4 d-flex justify-content-center">
            <div className="card text-center" style={{height: '15rem', width: '15rem'}}>
                <img src={img} className="card-img" style={{height: '15rem', width: '15rem'}} />
                <div className="card-img-overlay">
                    <h5 className='card-title'>{title}</h5>
                    <p className="card-text">{desc}</p>
                    <a href={link.url}>
                        <button className='btn'>{link.name}</button>
                    </a>
                </div>
            </div>
        </div>
    )
}
