import React from 'react';


function VideoView(props) {

    var url = '';

    function updateUrl() {
        props.videoUrl && 
        props.videoUrl.includes("www.youtube") && 
        (url = props.videoUrl.replace("watch?v=", "embed/")) 
    }
    
    return(
        <div>         
            {updateUrl()}
            <iframe width="640" height="360" 
                src={url}>
            </iframe>
        </div>
    )
}

export default VideoView;