import React from 'react'
import "./ButtonBorder.css"

const ButtonBorder = ({children}) => {
    return (
        <div className="buttonBorder">
            <button>{children}</button>
        
        </div>
    )
}

export default ButtonBorder