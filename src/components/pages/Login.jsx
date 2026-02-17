import { useActionData, Form } from 'react-router'

function Login() {
    const actionData = useActionData()

    return (
        <>
            <h2>Login Title</h2>   
            <Form action='/login' method='post'>
                {
                    actionData?.error && (
                        <div style={{ color: 'red'}}> {actionData.error}</div>
                    )
                }
                <input name='username' type='text' placeholder='Enter username...' />
                <input name='password' type='password' placeholder='Enter password...' />
                <button type='submit'>Submit</button>
            </Form>
        </>
    )
}

export default Login