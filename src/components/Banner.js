import React from 'react'

export default function Banner(props) {
    const {title, subtitle, children} = props;
    return (
        <div className="banner">
           <h1> { title} </h1>
           <p>{subtitle}</p>
           {children}
        </div>
    )
}
