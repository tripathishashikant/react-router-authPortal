import { useLoaderData } from "react-router"

function Posts() {
    const posts = useLoaderData()
    
    return (
        <>
            <h2>Posts title</h2>
            {
                posts.map((post) => (
                    <p key={post.id}>{post.title}</p>
                ))
            }
        </>
    )
}

export default Posts