import React from 'react'
import Navbar from './Navbar'
import { getAuth } from 'firebase/auth'

const Blogs = () => {
  const auth = getAuth();


  return ( 
    <>
    <Navbar />
    <div className="container d-flex flex-column justify-content-center align-items-center my-3">
      <div className="contain" >
    <div className="user-content d-flex justify-content-center align-items-center" style={{gap: '0.5rem', width: '90%'}}>
            <img src={auth?.currentUser?.photoURL} alt="google_login" style={{width: '12%', height: '12%', borderRadius: '50%', margin: '1rem'}}/>
            <h3>{auth?.currentUser?.displayName}</h3>
        </div>
        </div>
    <div className="card mb-3 bg-secondary" style={{maxWidth: '700px'}}>
  <div className="row g-0">
    <div className="col-md-4 d-flex justify-content-center align-items-center">
      <img src="https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-f41-sm-f415fds-1.jpg" className="img-fluid rounded-start" alt="..." style={{width: '70%'}} />
    </div>
    <div className="col-md-8">
      <div className="card-body text-center text-white">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
      <button className='btn btn-primary mx-3'>View More</button>
      <button className='btn btn-danger'>Delete</button>
      </div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Blogs