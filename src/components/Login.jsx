import React from 'react'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../Firebase'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();

    const googleClick = async () => {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);

        // console.log(result);
        navigate('/blogs')
    }
    return (
        <>
            <div className='container'>
                {/* <button></button> */}
                <div
                    className='d-flex justify-content-center align-items-center'
                    style={{ height: '100vh' }}
                >
                    <img
                        style={{ height: '100px', width: '100px', }}
                        src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png"
                        alt="google login"
                        onClick={googleClick} />
                </div>
            </div>
        </>
    )
}

export default Login