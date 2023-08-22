import React from 'react'
import Link from 'next/link'
import './hero.css'
const Hero = () => {
    return (
        <section className='hero container'>
            <img loading='lazy' className='hero__img' src='/profile.jpg' alt='Profile Picture' />
            <h2 className='hero__subtitle'>Hi, I'm Ryan</h2>
            <h1 className='hero__title'>FRONT-END <br></br> WEB DEVELOPER.</h1>
            <p className='hero__description'> A <strong>Self Taught Developer</strong>. Highly passionate in web and <strong>UI/UX</strong> specialized in building beautiful interactive websites/applications</p>
            <Link className='hero__btn btn' href='#'>Reach out</Link>
        </section>
    )
}

export default Hero