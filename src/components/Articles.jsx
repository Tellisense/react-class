import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Articles = () => {
  const [articles, setArticles] = useState([])

  console.log(articles)
  useEffect(() => {
    try {
      const apiCall = async () => {
        const { data } = await axios.get('http://localhost:1337/articles')
        setArticles(data)
      }
      apiCall()
    } catch (error) {
      alert(error)
    }
  }, [])



  return (
    <div>
      {articles.map((item) => {
        return (
          <div key={item.id}>
            <div className="p-8 bg-gray-100 ">{item.title}</div>
            <div className="p-8 bg-gray-100 ">{item.content}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Articles
