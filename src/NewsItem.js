import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let {title, description, imageUrl,newsUrl} = this.props;
    return (
      <div className="my-3">
            <div className="card">
                <img src={!imageUrl?"https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,q_60,w_1600/c8fe9defc232e8bd494938a5c542695b.jpg":imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
      </div>
    )
  }
}

export default NewsItem
