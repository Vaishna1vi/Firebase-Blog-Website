import React from 'react'
import Login from './components/Login'
import Blogs from './components/Blogs'
import AddBlog from './components/AddBlog'
import SingleBlog from './components/SingleBlog'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return ( 
<>
<Router>
  <Routes>
    <Route path='/' element={<Login />} />
    <Route path='/blogs' element={<Blogs />} />
    <Route path='/blogs/:id' element={<SingleBlog />} />
    <Route path='/addblog' element={<AddBlog />} />
  </Routes>
</Router>
</>
    
  )
}

export default App