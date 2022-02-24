import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import CommentForm from './components/CommentForm'
import CommentList from './components/CommentList'
import Footer from './components/Footer'

const App = () => {
  // setting comments for app
  const [comments, setComments] = useState([])
  return (
    <div style={{
      display: 'flex', minHeight: '100vh', flexDirection: 'column', justifyContent: 'space-between',
    }}
    >
      <Header />
      <CommentForm comments={comments} setComments={setComments} depth={1} author="" />
      <CommentList comments={comments} depth={1} />
      <Footer />
    </div>
  )
}

export default App
