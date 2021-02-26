import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import Articles from './Articles'

import axios from 'axios'

const ArticlesPage = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    try {
      const apiCall = async () => {
        const { data } = await axios.get('http://localhost:1337/articles')
        setData(data)
      }
      apiCall()
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <>
      <Header />
      <Articles data={data} />
    </>
  )
}

export default ArticlesPage

