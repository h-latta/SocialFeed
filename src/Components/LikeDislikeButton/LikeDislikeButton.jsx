import React, { useState } from 'react';
import './LikeDislikeButton.css'
const LikeDislikeButton = (props) => {
    const [buttonLike, setButtonLike] = useState('inactive')
    const [buttonDislike, setButtonDislike] = useState('inactive')

    function handleClickLike(){
        if(buttonLike === 'inactive'){
            setButtonLike('active-like')
        } else{
            setButtonLike('inactive')
        }
    };

    function handleClickDislike(){
        if(buttonDislike === 'inactive'){
            setButtonDislike('active-dislike')
        } else{
            setButtonDislike('inactive')
        }
    }
    return (
        <div>     
            <button className={buttonLike} onClick={handleClickLike}>LIKE</button>
            <button className={buttonDislike} onClick={handleClickDislike}>DISLIKE</button>
        </div>
    )
}
 
export default LikeDislikeButton;