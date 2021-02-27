import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import Articles from './Articles'

import axios from 'axios'

const ArticlesPage = () => {


  return (
    <>
      <Header />
      <Articles data={data} />
    </>
  )
}

export default ArticlesPage

