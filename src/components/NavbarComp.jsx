import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Navbar } from 'flowbite-react'
import logo from '../icons/icons8-live-480.png'

const NavbarComp = () => {
    const path = useLocation().pathname
    const data = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name:'Business',
            path: '/business'
        },
        {
            name: 'Entertainment',
            path: '/entertainment'
        },
        {
            name: 'Health',
            path: '/health'
        },
        {
            name: 'Science',
            path: '/science'
        },
        {
            name: 'Sports',
            path: '/sports'
        },
        {
            name: 'Technology',
            path: '/technology'
        },
        {
            name: 'About Us',
            path: '/about-us'
        }
    ]
    return (
        <>
            <Navbar fluid rounded className='bg-gradient-to-r from-cyan-300 to-slate-200'>
                <Navbar.Brand>
                    <img src={logo} className="mr-3 h-6 sm:h-9" alt="Newsoo" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Newsoo</span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    {
                        data.map((item, index) => {
                            return <Navbar.Link key={index} as={Link} to={item.path} active={path === item.path} >{item.name}</Navbar.Link>
                        })
                    }
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default NavbarComp