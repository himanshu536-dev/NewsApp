import React from 'react'

export default function NewsItem(props) {
    return (
        <>
            <div className='col-xl-2 col-lg-3 col-md-4 col-xs-6 col-12'>
                <div className="card" style={{ "height": '100%' }}>
                    <img src={props.pic ? props.pic : "/images/noimage.jpg"} className="card-img-top" alt="..." height={150} />
                    <div className="card-body">
                        <h5 className="card-title">{props.title ? props.title : ""}</h5>
                        <hr />
                        <div className="card-source-date">
                            <p>{props.source}</p>
                            <p>{new Date(props.publishedAt).toLocaleDateString()}</p>
                        </div>
                        <p className="card-text">
                            {props.description ? props.description.slice(0, 100) + "..." : ""}
                        </p>
                        <a href={props.url} className="btn btn-primary w-100 text-center">
                            Know More..
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
