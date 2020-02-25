import React from 'react'
import './Card.Style.css'
export const Card = (props) =>(
    <div className = 'card-container'>
        <img alt = "marvel" src={`https://robohash.org/${props.marvel.id}set=set2&size=180x180`}/>
        <h3>{props.marvel.name}</h3>
        <p>{props.marvel.email}</p>
    </div>
)
