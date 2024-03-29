import React, { useState } from 'react';


const CreatePost = (props) => {

    const [name, setName] = useState('')
    const [post, setPost] = useState('')

    function handleSubmit(event){
        event.preventDefault();
        let newPost = {
            name: name,
            post: post
        };
        console.log(newPost);
        props.addNewPostProperty(newPost);
    }

    return ( 
        <form onSubmit={handleSubmit} className='container'>
            <div className='form-group'>
                <label>Name</label>
                    <input type='text' className='form-control' value={name} onChange={(event) => setName(event.target.value)} />
            </div>
            <div>
                <label>Write something..</label>
                    <input style={{'height': '5rem'}}type='textarea' className='form-control' value={post} onChange={(event) => setPost(event.target.value)} />
            <button style={{'marginTop': '.5rem'}} type='submit' className='btn btn-primary'>POST</button>
            </div>
        </form>
     );
}
 
export default CreatePost;