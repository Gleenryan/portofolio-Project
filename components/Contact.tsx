import React from 'react'
import Link from 'next/link'
import './contact.css'
const Contact = () => {
    return (
        <section id='contact' className='contact container section'>
            <h2 className='contact__title'>Get In Contact</h2>
            <p className='contact__description'>Whether you are starting a project, have business inquiries or just want to say hi, my inbox is always open so feel free to reach out and I will get back to you as soon as possible.</p>
            <Link className='contact__btn btn' href="mailto:gleenryan2@gmail.com" target='_black' >Reach Out</Link>
        </section>
    )
}

export default Contact