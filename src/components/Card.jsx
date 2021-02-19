import React from 'react'


export default function Card({ myFavNumber, children }) {


  const person = { firstName: "Justin", age: 36 }
  const { firstName, age } = person  //Object destructuring



  return (
    <>
      <div className="p-12 rounded-xl bg-gray-100 w-80 m-12">
        {children}
      </div>
      <div>{myFavNumber}</div>
      <div>{firstName}</div>
      <div>{age}</div>
    </>
  )
}







{/* <img src={props.image} />
      <h5>{props.title}</h5>
      <p>{props.details}</p>
      <a href={props.firstHref}>{props.firstLink}</a> */}


// <a href="" target="_blank" rel="noopener">goto www.googl.com</a>

{/* <Card title={title} content={content}>   {children}    </Card> */ }

// props.title
// props.content
// props.children