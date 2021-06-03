import React from 'react';

const NewsDisplay = (props) => {
    console.log(props)
    const renderNews = props.newsdata.map((data) => {
        return(
            <div>
                <h3>{data.title}</h3>
                <p>{data.feed}</p>
            </div>
        )
    })

    return(
        <div>
            {renderNews}
        </div>
    )
}

export default NewsDisplay;