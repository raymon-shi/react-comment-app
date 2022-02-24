import React, { useState, useEffect } from 'react'
import { Card, Button } from 'react-bootstrap'
import Time from 'react-time'
import CommentForm from './CommentForm'
import Vote from './Vote'

const Comment = ({
  name, content, depth,
}) => {
  // set all the states relevant to comments
  const [votes, setVotes] = useState(0)
  const [replies, setReplies] = useState([])
  const [replyStatus, setReplyStatus] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())

  // set the comment form to false every times a comment is submitted
  useEffect(() => {
    setReplyStatus(false)
  }, [replies])

  // reverse the reply status
  const replyStatusHandler = () => {
    setReplyStatus(!replyStatus)
  }

  // conditionally renders the reply form
  const renderReplyForm = () => {
    // if the reply is clicked, then render the form
    if (replyStatus) {
      return (
        <div>
          <Button onClick={replyStatusHandler} variant="dark">
            Reply
          </Button>
          {/* create replies by inserting replies */}
          <CommentForm
            comments={replies}
            setComments={setReplies}
            depth={depth}
            author={name}
          />
        </div>
      )
    }
    // otherwise, only render the reply button
    return (
      <div>
        <Button onClick={replyStatusHandler} variant="outline-dark">
          Reply
        </Button>
      </div>
    )
  }

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {/* card that contains the comment */}
        <Card className="w-75 mb-3" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          {/* renders name, relative time, content, and reply */}
          <Card.Body>
            <div style={{ wordBreak: 'break-all' }}>
              <Card.Title className="fw-bold" style={{ color: 'orange' }}>{`${name} ✏️`}</Card.Title>
              <Card.Subtitle className="mb-3 text-muted text-left">
                <Time className="text-left" value={currentTime} titleFormat="YYYY/MM/DD HH:mm" relative />
              </Card.Subtitle>
              <Card.Text>{content}</Card.Text>
              {/* stop rendering the reply after depth 3 */}
              {depth < 3 ? renderReplyForm() : null}
            </div>
          </Card.Body>
          {/* container for upvote/downvote buttons */}
          <Vote votes={votes} setVotes={setVotes} />
        </Card>
      </div>
      {/* render the replies for this comment as comment components */}
      <div style={{ marginLeft: '30px' }}>
        {replies.map(r => <Comment key={r.id} name={r.name} content={r.content} depth={depth + 1} />)}
      </div>
    </>
  )
}

export default Comment
