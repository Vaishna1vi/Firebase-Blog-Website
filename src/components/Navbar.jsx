import {React} from 'react'
import {getAuth} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
// import Login from './Login'

const Navbar = () => {
  const auth = getAuth();
  console.log(getAuth());

const navigate = useNavigate();

  const logout = () => {
    auth.signOut();
navigate('/')

  }

  return (
    <>
    <div className='bg-primary d-flex align-items-center p-2' style={{justifyContent: 'space-between'}}> 
        <div className="user-content d-flex justify-content-center align-items-center" style={{gap: '1rem'}}>
            <img src={auth?.currentUser.photoURL} alt="" style={{width: '18%', height: '18%', borderRadius: '50%'}}/>
            <h3>{auth?.currentUser.displayName}</h3>
        </div>

        <div className="email d-flex justify-content-center align-items-center" style={{gap: '1rem'}}>
          <button className='btn btn-warning'>Add Blog</button>
            <h4>{auth?.currentUser.email}</h4>
          <button className='btn btn-danger' onClick={logout}>Log-out</button>

        </div>
    </div>
    </>
  )
}

export default Navbar