import React, { useState } from 'react';
import './App.css';
import CreatePost from './Components/CreatePost/CreatePost';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';

function App() {

  const [post, setPost] = useState([{name: 'Harrison Latta', post: 'Hello World!'}])

  function addNewPost(entry){
    let tempPost = [...post, entry];
    setPost(tempPost)
  }

  return (
    <div>
      <h1>Hello world!</h1>
        <div>
        <CreatePost addNewPostProperty={addNewPost}/>
        <DisplayPosts parentPosts={post}/>
        </div>

    </div>
  );
}

export default App;
