import React, { useState, useEffect} from 'react';


function SearchBar(props) {
    
    const [searchUrl, setSearchUrl] = useState(''); 

    const searchClicked = searchUrl => event => {
        console.log(searchUrl)
        props.searchClicked(searchUrl)
        
        let videoPlayerHistory = [];

        if (localStorage.getItem('videoPlayerHistory')) {
            videoPlayerHistory = JSON.parse(localStorage.getItem('videoPlayerHistory'));
        } 
        videoPlayerHistory.push(searchUrl);
        localStorage.setItem('videoPlayerHistory', JSON.stringify(videoPlayerHistory));
        // console.log('videoplayerhistory: ', videoPlayerHistory);
    }

    return(
        <div>
            <input 
                type="url" 
                style={{ width: "400px" }}
                placeholder="video url..." 
                value={searchUrl} 
                onChange={event => { setSearchUrl(event.target.value)}} 
            /> &nbsp;      
            <button  onClick={searchClicked(searchUrl)} > search </button>
        </div>
    )
}

export default SearchBar;