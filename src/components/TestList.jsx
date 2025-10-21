import React from 'react'
import './TestList.scss'
import TestListItem from './TestListItem'

const TestList = ({ boards }) => {
  return (
    <div className="TestList">
      <h2>리스트</h2>
      <div className="list">
        {
          boards.map(board => (
            <TestListItem key={ board.id } board={ board } />
          ))
        }
      </div>
    </div>
  )
}

export default TestList