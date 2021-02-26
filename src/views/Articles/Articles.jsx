import React from 'react'
import axios from 'axios'

const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjE0MjYzOTA5LCJleHAiOjE2MTY4NTU5MDl9.f2f6UC0TalKtSCnwV_DVUuVphffz7sqS05TNRn70fR4"

const Articles = ({ data: serverData }) => {
  const [article, setArticle] = React.useState({
    title: '',
    content: '',
    image: ''
  })

  const handleChange = e => {
    setArticle({
      ...article,
      [e.target.name]: e.target.value
    })
  }


  const handleImageChange = e => {
    setArticle({
      ...article,
      image: e.target.files[0]
    })

    const files = Array.from(article.image)

    const formData = new FormData()

    files.forEach((file, i) => {
      formData.append(i, file)
    })
    console.log(formData)
  }


  const handleSubmit = async (e) => {

    e.preventDefault()

    try {
      const { data } = await axios({
        method: 'POST',
        url: 'http://localhost:1337/articles',
        headers: {
          Authorization: `Bearer ${authToken}`
        },
        data: {
          title: article.title,
          content: article.title,
          image: article.image
        },
      })
      setArticle({
        title: '',
        content: ''
      })
      console.log(`articles: `, article)
      console.log(`data`, data)
    } catch (error) {
      console.log(`API response error: `, error)
    }


  }


  return (

    <div>
      <div>{serverData.map(item => {
        return (
          <div key={item.id} >
            <div>{item.title}</div>
            <div>{item.content}</div>
          </div>
        )
      })}</div>
      <form onSubmit={handleSubmit}>
        <label>Add Title:
        <input onChange={handleChange} id="title" type="text" name="title" value={article.title} />
        </label>
        <label>Add Content:
        <textarea rows="5" cols="33" onChange={handleChange} id="content" type="text" name="content" value={article.content} />
        </label>
        <label>Upload Picture:
        <input onChange={handleImageChange} type="file"
            id="image" name="image" value={article.image} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Articles
