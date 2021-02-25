import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import PicturePage from '../views/PicturePage'
import axios from 'axios'

const MainLayout = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    try {
      const apiCall = async () => {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/photos')
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
      <PicturePage data={data} />
    </>
  )
}

export default MainLayout

