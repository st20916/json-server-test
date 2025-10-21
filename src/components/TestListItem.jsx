import React from 'react'
import './TestListItem.scss'

const TestListItem = ({ board }) => {
  const { title, category, content } = board;

  return (
    <div className="list-item">
      <h3>{ title }</h3>
      <span className="category">{ category }</span>
      <p className="content">{ content }</p>
    </div>
  )
}

export default TestListItem