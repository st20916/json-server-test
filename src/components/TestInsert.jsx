import React, { useState } from 'react'
import './TestInsert.scss'

const TestInsert = ({ onInsert }) => {
  const [data, setData] = useState({
    title : '',
    category : '개발',
    content : ''
  })

  /**
   * Change 핸들러 : Computed Property 사용
   * @param {*} e 
   */
  const onChangeHandler = (e) => {
    setData({
      ...data,
      [e.target.name] : e.target.value
    })
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onInsert(data);
  }

  return (
    <div className="TestInsert">
      <form action="" onSubmit={ onSubmitHandler }>
        <div className="input-wrap">
          <label htmlFor="title">제목</label>
          <input 
            type="text" 
            name="title" 
            id="title"
            onChange={ onChangeHandler }
          />
        </div>
        <div className="input-wrap">
          <label htmlFor="category">카테고리</label>
          <select name="category" id="category" onChange={ onChangeHandler }>
            <option value="개발">개발</option>
            <option value="디자인">디자인</option>
          </select>
        </div>
        <div className="input-wrap">
          <label htmlFor="content">내용</label>
          <textarea 
            name="content" 
            id="content" 
            onChange={ onChangeHandler }
          ></textarea>
        </div>
        <button type="submit">
          등록
        </button>
      </form>
    </div>
  )
}

export default TestInsert
