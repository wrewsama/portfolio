import React from 'react'

export default function NonFeaturedProject({ img, title, desc, link }) {
    return (
        <div className="col-3 d-flex justify-content-center">
            <div className="card bg-dark text-center" style={{height: '15rem', width: '15rem'}}>
                <img src={img} className="card-img" style={{height: '15rem', width: '15rem'}} />

                <div className="card-img-overlay">
                    <h4 className='card-title text-heading'>{title}</h4>
                    <p className="card-text text-normal">{desc}</p>
                    <a href={link.url}>
                        <button className='btn highlighted-btn'>{link.name}</button>
                    </a>
                </div>
            </div>
        </div>
    )
}
