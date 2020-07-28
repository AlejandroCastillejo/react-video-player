import React, { useEffect } from 'react';

function History(props) {

    // let videoPlayerHistory = JSON.parse(localStorage.getItem('videoPlayerHistory'));

    const openVideo = videoUrl => evt => {
        props.openVideo(videoUrl)
    }

    useEffect( () => {
        fetch("http://127.0.0.1:8000/history/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then( resp => resp.json())
        .then( data => localStorage.setItem('history', JSON.stringify(data)) )
        .catch( error => console.log(error))
    }, [])

    let videoPlayerHistory = JSON.parse(localStorage.getItem('history'));

    return(
        <div>
            <h2>
                History
            </h2>
            <div className="history-area">
                {/* { videoPlayerHistory && videoPlayerHistory.map( (videoUrl, i) => {
                    return(
                        <div key={i}>
                            <h6 onClick={openVideo(videoUrl)}>{videoUrl}</h6>
                        </div>
                    )
                }) } */}
                {videoPlayerHistory && videoPlayerHistory.map( element => {
                    return (
                        <div key={element.id}>
                            <h6 onClick={openVideo(element.url)}>{element.url}</h6>
                        </div>
                    )
                })}
            </div> 
        </div>
    )
}

export default History;