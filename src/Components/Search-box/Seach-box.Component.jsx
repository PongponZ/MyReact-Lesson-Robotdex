import React from 'react'
import './Seach-box.Style.css'

export const SeachBox = ({placeholder,handlechanged}) => (
    <input
        className = "search" 
        type = "search" 
        placeholder = {placeholder}
        onChange ={handlechanged}/>

)