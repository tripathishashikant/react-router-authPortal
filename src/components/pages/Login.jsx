import { useActionData, Form } from 'react-router'

function Login() {
    const actionData = useActionData()

    return (
        <div className='auth-wrapper'>
            <div className='login-container'>
                <h2>Login Title</h2>   
                <Form action='/login' method='post'>
                    {
                        actionData?.error && (
                            <div className='error-message'> {actionData.error}</div>
                        )
                    }
                    <input name='username' type='text' placeholder='Enter username...' />
                    <input name='password' type='password' placeholder='Enter password...' />
                    <button type='submit'>Submit</button>
                </Form>
            </div>
        </div>
    )
}

export default Login