import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <>
            <h2>Page Not found</h2>
            <Link to='/'>Home</Link>
        </>
    )
}

export default NotFound