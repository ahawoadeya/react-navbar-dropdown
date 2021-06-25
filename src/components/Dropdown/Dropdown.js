import React from 'react'
import { DropdownItems } from './DropdownItems'
import { Link } from 'react-router-dom'
import './Dropdown.css'

const Dropdown = () => {
    return (
        <React.Fragment>
            <ul className="dropdown-menu">
                {/* The map() method calls the provided function once for each element in an array, in order. ... 
                Note: this method does not change the original array */}
                { DropdownItems.map((item, index) => {
                    const { path, title, cName } = item
                    return (
                        <li key={index}>
                            <Link to={path} className={cName}>
                                {title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </React.Fragment>
    )
}

export default Dropdown
