import React from 'react'

const PictureCard = ({ data }) => {
  return (
    <>
      {
        data.map(item => {
          return (
            <div key={item.id}>
              <h1>{item.title}</h1>
              <img className="rounded-2xl m-8 " alt='image' src={`https://picsum.photos/id/${Math.floor(Math.random() * 500) +
                1}/400/600?grayscale`} />
              {/* <img alt='thumbnail' src={item.thumbnailUrl} /> */}
            </div>
          )
        })

      }
    </>
  )
}

export default PictureCard
