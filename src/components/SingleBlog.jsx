/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../Firebase'
import { getDoc, doc } from 'firebase/firestore'
import Navbar from './Navbar'

const SingleBlog = () => {

  // console.log(useParams());
  const { id } = useParams()

  const [data, setData] = useState({})

  // const collref = collection(db, 'blog');

  const singleDoc = doc(db, 'blog', id);

  useEffect(() => {


    const singleFetch = () => {
      getDoc(singleDoc).then((doc) => setData(doc.data()));
    }

    singleFetch();

  }, [id])


  return (
    <>
    <Navbar />
      <div className="container d-flex justify-content-center align-items-center">
        <div className="left-img">
          <img src={data.img} alt="image" className='img-fluid' style={{ width: '50%' }} />
        </div>

        <div className="right">
          <div className="user-content d-flex justify-content-center align-items-center" style={{ gap: '0.5rem', width: '90%' }}>
            <img src={data.authorImg} alt="google_login" style={{ width: '10%', height: '10%', borderRadius: '50%', margin: '1rem' }} />
            <h4>{data.authorName}</h4>
          </div>
          <h2>{data.title}</h2>
          <h4>{data.shortDesc}</h4>
          <h5>{data.fullDesc}</h5>
        </div>
      </div>
    </>
  )
}

export default SingleBlog