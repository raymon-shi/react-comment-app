import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Form, Button, Card } from 'react-bootstrap'

const CommentForm = ({
  comments, setComments, depth, author,
}) => {
  // setting comment name and content
  const [name, setName] = useState('')
  const [content, setContent] = useState(author ? `@${author}, ` : '')

  // set the comment name to the current input field value
  const nameChangeHandler = ({ target }) => {
    setName(target.value)
  }
  // set the comment content to the current textarea field value
  const contentChangeHandler = ({ target }) => {
    setContent(target.value)
  }
  // append comment and reset the form values
  const createCommentHandler = e => {
    e.preventDefault()
    setComments([...comments, {
      id: uuidv4(), name, content, depth,
    }])
    setName('')
    setContent('')
  }

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {/* card that contains the comment form */}
        <Card className="w-25 m-3">
          <Card.Title className="m-3 fw-bold">New Comment</Card.Title>
          <Form className="m-3" onSubmit={createCommentHandler}>
            {/* name input field */}
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Name..." value={name} autoComplete="off" onChange={nameChangeHandler} required />
            </Form.Group>
            {/* content text area field */}
            <Form.Group className="mb-3" controlId="formBasicComment">
              <Form.Label>Comment</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Write a new comment..."
                value={content}
                autoComplete="off"
                onChange={contentChangeHandler}
                required
              />
            </Form.Group>
            {/* creates a new comment only if the name and content is filled in */}
            <Button variant="primary" type="submit" id="comment-create" disabled={name.length === 0 || content.length === 0}>
              Submit
            </Button>
          </Form>
        </Card>
      </div>
    </>
  )
}

export default CommentForm
