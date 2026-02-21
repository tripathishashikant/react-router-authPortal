import { useRouteLoaderData, Link } from "react-router-dom"

function Posts() {
    const posts = useRouteLoaderData('posts-loader-route')
    const limitPostBody = (content) => content.slice(0, 50) + '...'

    return (
        <section className="posts-page">
            <h2>Posts</h2>
            <div className="posts-grid">
                {posts.map((post) => (
                  <div key={post.id} className="post-card">
                    <h3>{post.title}</h3>
                    <p>{limitPostBody(post.body)}</p>
                    <Link to={`${post.id}`}> View Post </Link>
                  </div>   
                ))}
            </div>
        </section>
    )
}

export default Posts