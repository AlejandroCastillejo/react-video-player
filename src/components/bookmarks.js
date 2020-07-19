import React, { useState } from 'react';


function Bookmarks(props) {
    
    const [showBookmarks, setShowBookmarks] = useState(false);

    const [bookmarksList, setBookmarksList] = useState(
            localStorage.getItem('bookmarksList') ? 
            JSON.parse(localStorage.getItem('bookmarksList')) :
            []
        );

    function updateBookmarksList() {
        localStorage.getItem('bookmarksList') && 
        setBookmarksList(JSON.parse(localStorage.getItem('bookmarksList')));
    }

    const openVideo = bookmark => evt => {
        props.openVideo(bookmark)
    }

    const addBookmark = () => evt => {
        updateBookmarksList();
        if ( !bookmarksList.includes(props.videoUrl)) {
            props.videoUrl && bookmarksList.push(props.videoUrl);
            localStorage.setItem('bookmarksList', JSON.stringify(bookmarksList));
            console.log('new video added to bookmarks');
        }
        else {
            console.log('video is already in bookmarks');
        }
        
        updateBookmarksList();
    }

    const toggle = () => evt => {
        updateBookmarksList();
        setShowBookmarks(showBookmarks => !showBookmarks);
        // console.log('bookmark: ', localStorage.getItem('bookmarksList'));
    }

    return(
        <div>
            <h4>
                Bookmarks ({bookmarksList.length})
            </h4>
            <button onClick={toggle()}>Show bookmarks</button> &nbsp;&nbsp;
            <button onClick={addBookmark()}>Add to bookmarks</button>
            {showBookmarks && ( 
                <div> 
                    {bookmarksList && bookmarksList.map( (bookmark, i) => {
                        return (
                            <div key={i}>
                                <h6 onClick={openVideo(bookmark)}>{bookmark}</h6>
                            </div>
                        )
                    })}
                </div>
            )} 
        </div>
    )
}

export default Bookmarks;