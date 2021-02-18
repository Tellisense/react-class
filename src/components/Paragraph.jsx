import React from 'react'
import css from './paragraph.module.css'

export default function Paragraph(props) {

  return (
    <div className={css.color} width="400px" height="400px">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  )
}