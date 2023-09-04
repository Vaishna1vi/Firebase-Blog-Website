/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
// import { getAuth } from 'firebase/auth'
import { db } from '../Firebase'
import { onSnapshot, collection, doc, deleteDoc } from 'firebase/firestore'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Blogs = () => {
  // const auth = getAuth();

  const collref = collection(db, 'blog');


  const [data, setData] = useState([])

  useEffect(() => {

    const getData = () => {
      onSnapshot(collref, (snapshot) => {
        setData(snapshot.docs.map((doc) => ({
          ...doc.data(), id: doc.id
        })))
      })
    }

    getData()
    console.log(data);

  }, [])

  const delDoc = async (id) => {

    const data = doc(db, 'blog', id)

    alert("Your data will be deleted forever.")
    await deleteDoc(data);

    toast.warn('Your blog post is deleted!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  }


  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <Navbar />

      {data.map((d) => {
        return (
          <>
            <div className="container d-flex flex-column justify-content-center align-items-center my-3">
              <div className="contain" >
                <div className="user-content d-flex justify-content-center align-items-center" style={{ gap: '0.5rem', width: '90%' }}>
                  <img src={d.authorImg} alt="google_login" style={{ width: '10%', height: '10%', borderRadius: '50%', margin: '1rem' }} />
                  <h4>{d.authorName}</h4>
                </div>
              </div>
              <div className="card mb-3 bg-secondary" style={{ maxWidth: '700px' }}>
                <div className="row g-0">
                  <div className="col-md-4 d-flex justify-content-center align-items-center">
                    <img src={d.img} className="img-fluid rounded-start" alt="..." style={{ width: '70%' }} />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body text-center text-white">
                      <h2 className="card-title">{d.title}</h2>
                      <h3 className="card-text">{d.shortDesc}</h3>
                      <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                      <Link to={`/blogs/${d.id}`} className='btn btn-primary mx-3'>View More</Link>
                      <button
                        onClick={() => delDoc(d.id)}
                        className='btn btn-danger'>Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )
      })}


    </>
  )
}

export default Blogs