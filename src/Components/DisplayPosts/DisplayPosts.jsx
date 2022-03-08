import './DisplayPosts.css';
import LikeDislikeButton from '../LikeDislikeButton/LikeDislikeButton';

const DisplayPosts = (props) => {
    return (
    <div className='container' style={{'marginTop': '3rem'}}>
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
                            <LikeDislikeButton />
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
    )
}
export default DisplayPosts;