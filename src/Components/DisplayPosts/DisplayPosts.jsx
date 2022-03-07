const DisplayPosts = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Posts</th>
                </tr>
            </thead>
            <tbody>
                {props.parentPosts.map((entry, index) => {
                    return (
                        <tr key = {index}>
                            <td>entry.name</td>
                            <td>entry.post</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}