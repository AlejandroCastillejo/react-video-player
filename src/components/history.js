import React from 'react';

function History(props) {

    let videoPlayerHistory = JSON.parse(localStorage.getItem('videoPlayerHistory'));

    const openVideo = videoUrl => evt => {
        props.openVideo(videoUrl)
    }

    return(
        <div>
            <h2>
                History
            </h2>
            { videoPlayerHistory && videoPlayerHistory.map( (videoUrl, i) => {
                return(
                    <div key={i}>
                        <h6 onClick={openVideo(videoUrl)}>{videoUrl}</h6>
                    </div>
                )
            }) }
            
        </div>
    )
}

export default History;