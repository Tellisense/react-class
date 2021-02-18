import React from 'react'


export default function Card(props) {


  return (
    <div>
      <img src={props.image} />
      <h5>{props.title}</h5>
      <p>{props.details}</p>
      <a href={props.firstHref}>{props.firstLink}</a>
  
    </div>
  )

}