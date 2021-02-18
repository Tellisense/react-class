import React from 'react'


export default function Button(props) {

  return (
    <button style={{
      backgroundColor: props.color,
      padding: '2rem 4rem',
      margin: '3rem',
      borderRadius: 15
    }}>{props.label}</button>
  )
}



