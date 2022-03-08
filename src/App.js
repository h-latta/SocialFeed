import React, { useState } from 'react';
import './App.css';
import CreatePost from './Components/CreatePost/CreatePost';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import NavBar from './Components/NavBar/NavBar';
//import Post from './Components/Post/Post';
import './App.css'

function App() {

  const [post, setPost] = useState([])

  function addNewPost(entry){
    let tempPost = [...post, entry];
    setPost(tempPost)
  }

  return (
    <div className='default-app'>
        <div>
        <NavBar />
        </div>
        <div>
        <CreatePost addNewPostProperty={addNewPost}/>
        </div>
        <div>
        <DisplayPosts parentPosts={post}/>
        </div>
    </div>
  );
}

export default App;
