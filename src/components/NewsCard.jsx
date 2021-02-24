import React from 'react'

const NewsCard = ({ data }) => {
  const { mainTitle, feed1, feed2 } = data

  return (
    <div>
      <h1>{mainTitle}</h1>
      <img src={feed1.img} />
    </div>
  )
}

export default NewsCard
