import React from 'react'
import Comment from './Comment'

const CommentList = ({
  comments, depth,
}) => comments.map(c => <Comment key={c.id} name={c.name} content={c.content} depth={depth} />)

export default CommentList
