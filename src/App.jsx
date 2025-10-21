import TestInsert from './components/TestInsert'
import TestList from './components/TestList'
import './App.css'
import { useCallback, useEffect, useId, useRef, useState } from 'react'

function App() {
  const [boards, setBoards] = useState([])
  const nextId = useId()
  const nextNumber = useRef(4)

  /**
   * 현재 board 데이터 가져오기
   */
  const getBoards = useCallback(async () => {
    const response = await fetch(`https://my-json-server.typicode.com/st20916/json-server-test/board`);
    const data = await response.json();

    setBoards(data)
  }, [])

  /**
   * Insert
   * 
   */
  const onInsert = useCallback(async (newData) => {
    const newBoards = {
      id : nextId + nextNumber.current + '-id',
      ...newData
    }

    const response = await fetch(`https://my-json-server.typicode.com/st20916/json-server-test/board`, {
      method: 'POST',
      headers : {
        'Content-Type': 'application/json'
      },
      body : JSON.stringify(newBoards)
    })

    const data = await response.json()
    setBoards([...boards, data])
    nextNumber.current += 1
  }, [boards, nextId])

  useEffect(() => {
    getBoards();
  }, [boards])

  return (
    <>
      <div className="App">
        <h1>JSON Server 실서버 배포 테스트</h1>
        <TestInsert onInsert={ onInsert } />
        <TestList boards={ boards } />
      </div>
    </>
  )
}

export default App
