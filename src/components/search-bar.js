import React, { useState} from 'react';


function SearchBar(props) {
    
    const [searchUrl, setSearchUrl] = useState(''); 

    const searchClicked = searchUrl => event => {
        console.log(searchUrl)
        props.searchClicked(searchUrl)
        
        // let videoPlayerHistory = [];
        // if (localStorage.getItem('videoPlayerHistory')) {
        //     videoPlayerHistory = JSON.parse(localStorage.getItem('videoPlayerHistory'));
        // } 
        // videoPlayerHistory.push(searchUrl);
        // localStorage.setItem('videoPlayerHistory', JSON.stringify(videoPlayerHistory));

        searchUrl && 
        fetch("http://127.0.0.1:8000/history/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url: searchUrl})
        }).then( resp => resp.json() )
        .then(data => console.log(data))
        .catch( error => console.log(error))
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