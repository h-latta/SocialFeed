const Post = (props) => {

    return ( 
        <div>
            <h1>{props.name}</h1>
            <p>{props.post}</p>
        </div>
     );
}
 
export default Post;