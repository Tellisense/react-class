import React from 'react'
import _ from "lodash";

export function add(x, y) {
  return x + y
}

export default function Card({ myFavNumber, children }) {


  const person = { firstName: "Justin", age: 36 }


  const { firstName, age } = person  //Object destructuring



  var objects = [{ a: 1 }, { b: 2 }];

  var deep = _.cloneDeep(objects);  // lodash library deepcopy

  console.log(`deep copy: `, deep);


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