import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

const Button = () => {
    return (
        <Link to='/tour'>
            <button className="btn">Tour</button>
        </Link>
    )
}

export default Button
