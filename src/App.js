import React, { useState } from 'react';
import './App.css';
import CreatePost from './Components/CreatePost/CreatePost';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import NavBar from './Components/NavBar/NavBar';

function App() {

  const [post, setPost] = useState([{name: 'Harrison Latta', post: 'Hello World!'}])

  function addNewPost(entry){
    let tempPost = [...post, entry];
    setPost(tempPost)
  }

  return (
    <div>
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
