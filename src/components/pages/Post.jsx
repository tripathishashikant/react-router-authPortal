import { useParams, useRouteLoaderData, Link } from "react-router-dom"

function Post() {
    const { id } = useParams()
    const posts = useRouteLoaderData('posts-loader-route')
    const post = posts.find(post => post.id === Number(id))

    return (
        <>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to=".." relative="path">Back to Posts</Link>
        </>
    )
}

export default Post