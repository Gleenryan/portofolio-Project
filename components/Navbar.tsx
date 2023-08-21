'use client';
import Link from "next/link";
import '../utils/utils.css';
import './navbar.css';
import './mobileNavbar.css';
import { useState, useEffect } from "react";
const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const [theme, setTheme] = useState(false);

    useEffect(() => {
        if (navbar) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [navbar])

    useEffect(() => {
        if (theme) {
            document.body.classList.add("light-mode");
        } else {
            document.body.classList.remove("light-mode");
        }
    }, [theme])

    return (
        <header className='header container'>
            <nav>
                <ul className="header__menu">
                    <li >
                        <Link className="header__link" href='#about'>about
                        </Link>
                    </li>
                    <li >
                        <Link className="header__link" href='#work'>Work
                        </Link>
                    </li>
                    <li >
                        <Link className="header__link" href='#contact'>Contact
                        </Link>
                    </li>
                    <li className="header__line"></li>
                    <li>
                        <button id="theme-toggle" className="header__sun" onClick={() => setTheme(!theme)} >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                            </svg>

                        </button>
                    </li>
                    <li>
                        <Link className="header__resume btn" href='#'>Resume
                        </Link>
                    </li>
                </ul>
                <button className="header__bars" onClick={() => setNavbar(!navbar)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path fill-rule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
                    </svg>

                </button>
            </nav>
            {navbar ? (
                <div className="mobile-nav">
                    <ul className="mobile-nav__menu">
                        <li>
                            <Link className="mobile-nav__link" href="#about" onClick={() => setNavbar(!navbar)}>About</Link>
                        </li>
                        <li>
                            <Link className="mobile-nav__link" href="#featured" onClick={() => setNavbar(!navbar)}>Work</Link>
                        </li>
                        <li>
                            <Link className="mobile-nav__link" href="#contact" onClick={() => setNavbar(!navbar)}>Contact</Link>
                        </li>
                        <li className="mobile-nav__link-line"></li>
                        <li>
                            <button id="theme-toggle" className="mobile-nav__sun" onClick={() => setTheme(!theme)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                                </svg>
                            </button>
                        </li>
                        <li>
                            <Link className="mobile-nav__btn btn" href='#'>Resume
                            </Link>
                        </li>
                    </ul>
                </div>
            ) : (
                <></>
            )}

        </header>



    )
}

export default Navbar