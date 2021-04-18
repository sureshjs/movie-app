import React from "react"

function Card(props) {
  console.log(props)
  return (
    <div className="card">
      <img className="card--image"
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${props.img}`}
        alt={props.title + ' poster'}
      />
      <h3>{props.title}</h3>
    </div>
  )
}

export default Card