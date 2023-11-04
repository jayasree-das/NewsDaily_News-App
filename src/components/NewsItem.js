import React from 'react'

const NewsItem = (props) =>{
    let { title, description, imageURL, newsURL ,date, author} = props;
    return (
        <div className='my-3'>
            <div className="card text-center" >
                <img src={!imageURL?"https://www.switchingtomac.com/wp-content/uploads/2021/04/Featured-How-to-Fix-An-Error-Occurred-While-Loading-a-Higher-Quality-Version-of-This-Photo-on-iPhone.jpg":imageURL} className="card-img-top" alt="..." height="150px"/>
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()} </small></p>
                    <a href={newsURL} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )
}
export default NewsItem