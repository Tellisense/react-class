import React, { useState } from 'react'
import axios from 'axios'

const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjE0MzAxNzU0LCJleHAiOjE2MTY4OTM3NTR9.ltagsj0juBAAp-6Mz9l1bYBDLfI1wsUwcDIhaDoDJCc"

const Form = () => {
  const [article, setArticle] = useState({
    title: "",
    content: ""
  })


  const handleChange = e => {
    setArticle({
      ...article,
      [e.target.name]: e.target.value
    })
  }
  console.log(`article`, article)

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      const { data } = await axios({
        method: 'POST',
        url: 'http://localhost:1337/articles',
        // headers: {
        //   Authorization: `Bearer ${authToken}`
        // },
        data: {
          title: article.title,
          content: article.content,
        },
      })
      setArticle({
        title: '',
        content: ''
      })

    } catch (error) {
      console.log(`API response error: `, error)
    }
  }

  return (
    <div className="mb-20 p-20">
      <form onSubmit={handleSubmit}>
        <input className="border-2 border-blue-500 p-2 " type="text" name="title" value={article.title} onChange={handleChange} />
        <br />
        <textarea className="border-2 border-blue-500  p-2" type="text" name="content" value={article.content} onChange={handleChange} />
        <br />
        <input className="" type="submit" value="submit" />
      </form>
    </div>
  )
}

export default Form
