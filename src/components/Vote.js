import React from 'react'
import { Card, Button, Stack } from 'react-bootstrap'

const Vote = ({ votes, setVotes }) => {
  // increase the comment vote by 1
  const upvoteHandler = () => {
    setVotes(votes + 1)
  }
  // decrease the comment vote by 1
  const downvoteHandler = () => {
    setVotes(votes - 1)
  }
  return (
    <div>
      {/* container for upvote/downvote buttons */}
      <Stack className="mb-10" gap={0}>
        <Button className="w-10" size="md" onClick={upvoteHandler} variant="outline-danger">
          ▲
        </Button>
        <Card.Subtitle className="m-2 text-muted text-center">{votes}</Card.Subtitle>
        <Button className="w-10" onClick={downvoteHandler} variant="outline-primary">
          ▼
        </Button>
      </Stack>
    </div>
  )
}

export default Vote
