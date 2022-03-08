import React, { useState } from 'react';
import './DisplayPosts.css'


const DisplayPosts = (props) => {
    const [buttonLike, setButtonLike] = useState('inactive')
    const [buttonDislike, setButtonDislike] = useState('inactive')

    function handleClickLike(){
        if(buttonLike === 'inactive'){
            setButtonLike('active-like')
        } else{
            setButtonLike('inactive')
        }
    }
    function handleClickDislike(){
        if(buttonDislike === 'inactive'){
            setButtonDislike('active-dislike')
        } else{
            setButtonDislike('inactive')
        }
    }
    return (
    <div className='container-fluid'>
        <table className='table'>
            <thead className='center'>
                <tr>
                    <th scope='col'>Posts</th>
                </tr>
            </thead>
            <tbody>
                {props.parentPosts.map((post, index) => {
                    return (
                        <tr key = {index}>
                            <td>{post.name}</td>
                            <td>{post.post}</td>
                            <button className={buttonLike} onClick={handleClickLike}>LIKE</button>
                            <button className={buttonDislike} onClick={handleClickDislike}>DISLIKE</button>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
    )
}
export default DisplayPosts;