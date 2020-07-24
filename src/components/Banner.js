import React from 'react'

export default function Banner({children, title, subtitle}) {
    return (
        <div className='banner'>
        <h1>{title}</h1>
        <div></div>
        <p>{subtitle}</p>
        {children}
        </div>
    )
}

//The props in the curly brackets chidlren, title, subtitle are rendered within the return. Everything is rendered in order from top to bottom.