import React, { useState } from 'react';


const CreatePost = (props) => {

    const [name, setName] = useState('')
    const [post, setPost] = useState('')


    return ( 
        <form>
            <div>
                <label>Name</label>
                    <input />
            </div>
            <div>
                <label>Write something..</label>
                    <input />
            </div>
            <button>POST</button>
        </form>
     );
}
 
export default CreatePost;