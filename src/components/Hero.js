import React from 'react'

export default function Hero(props) {
    const {hero, children} = props;
    return (
        <header className={hero}>
            {children}
        </header>
    )
}
Hero.defaultProps = {
    hero: 'defaultHero',
}