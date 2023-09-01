import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import {db} from '../Firebase'
import { addDoc, collection, } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const AddBlog = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    shortDesc: '',
    fullDesc: '',
    img: '',
    authorName: auth.currentUser.displayName,
    authorImg: auth.currentUser.photoURL,
  })

  const handleChange = (e) => {
// console.log("handleChange is called")

setFormData({...formData, [e.target.name]:e.target.value})
// console.log(formData.title)
  }

  const formRef = collection(db, 'blog');

  const submitHandler = async(e) => {
e.preventDefault();

await addDoc(formRef, formData);
console.log("Data submitted");

setFormData({
  title: '',
  shortDesc: '',
  fullDesc: '',
  img: '',
})

navigate('/blogs')
  }

  return (
    <>
      <Navbar />
      <div className="container my-3" style={{ width: '60%', lineHeight: '1rem' }}>
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Title</label>
            <input
              value={formData.title}
              name='title'
              onChange={handleChange}
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>

          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Short Description</label>
            <input
              value={formData.shortDesc}
              name='shortDesc'
              onChange={handleChange}
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>

          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Full Description</label>
            <textarea
              value={formData.fullDesc}
              name='fullDesc'
              onChange={handleChange}
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"></textarea>
          </div>

          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Image URL</label>
            <input
              value={formData.img}
              name='img'
              onChange={handleChange}
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>

          <button type="submit" className="btn btn-primary">Add Blog</button>
        </form>
      </div>
    </>
  )
}

export default AddBlog