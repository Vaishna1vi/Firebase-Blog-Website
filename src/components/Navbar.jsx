import {React} from 'react'
import {getAuth} from 'firebase/auth'
import { useNavigate, Link, useLocation } from 'react-router-dom';
// import Login from './Login'

const Navbar = () => {
  const auth = getAuth();
  console.log(getAuth());

const navigate = useNavigate();
const location = useLocation();

  const logout = () => {
    auth.signOut();
navigate('/')

  }

  return (
    <>
    <div className='bg-primary d-flex align-items-center p-2' style={{justifyContent: 'space-between'}}> 
        <div className="user-content d-flex justify-content-center align-items-center" style={{gap: '1rem'}}>
            <img src={auth?.currentUser?.photoURL} alt="" style={{width: '18%', height: '18%', borderRadius: '50%'}}/>
            <h3>{auth?.currentUser?.displayName}</h3>
        </div>

        <div className="email d-flex justify-content-center align-items-center" style={{gap: '1rem'}}>

        {/* { (location.pathName==='/blogs') ? (<Link to={'/addblog'} className='btn btn-warning'>Add Blog</Link>) : '' } */}
        { location.pathname==='/blogs' && <Link to={'/addblog'} className='btn btn-warning'>Add Blog</Link> }
        { location.pathname!=='/blogs' && <Link to={'/blogs'} className='btn btn-warning'>Back to Blogs</Link> }

            <h4>{auth?.currentUser?.email}</h4> 
          <button className='btn btn-danger' onClick={logout}>Log-out</button>

        </div>
    </div>
    </>
  )
}

export default Navbar