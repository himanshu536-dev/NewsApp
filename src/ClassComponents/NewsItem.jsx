import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        return (
            <>
                <div className='col-xl-2 col-lg-3 col-md-4 col-xs-6 col-12'>
                    <div className="card" style={{ "height": '100%' }}>
                        <img src={this.props.pic ? this.props.pic : "/images/noimage.jpg"} className="card-img-top" alt="..." height={150} />
                        <div className="card-body">
                            <h5 className="card-title">{this.props.title ? this.props.title : ""}</h5>
                            <hr />
                            <div className="card-source-date">
                                <p>{this.props.source}</p>
                                <p>{new Date(this.props.publishedAt).toLocaleDateString()}</p>
                            </div>
                            <p className="card-text">
                                {this.props.description ? this.props.description.slice(0, 100) + "..." : ""}
                            </p>
                            <a href={this.props.url} className="btn btn-primary w-100 text-center">
                                Know More..
                            </a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}