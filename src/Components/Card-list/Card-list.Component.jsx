import React from 'react'
import './Card-list.Style.css'
import { Card } from '../Card/Card.Component';

export const CardList = props => 
    (<div className ='card-list'>
        {props.marvel.map(marvel => (
            <Card key = {marvel.id} marvel = {marvel}/>
        ))}
    </div>);