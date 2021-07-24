import React from 'react'

export default function Button({type, btnText, btnAction}) {
    return (
        <button 
            className={`btn btn-${type}`}
            onClick={btnAction}
        >{btnText}</button>
    )
}
