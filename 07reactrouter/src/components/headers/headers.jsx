import React from 'react'
import {Link, NavLink} from 'react-router-dom'

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex justify-between items-center mx-auto max-w-screen-xl">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center">
                            <img
                                src="/rahul1.png"
                                className="mr-3 h-12"
                                alt="Logo"
                            />
                        </Link>
                        {/* Navigation Links */}
                        <div className="hidden md:flex items-center ml-8 space-x-8">
                            <NavLink
                                to="/"
                                className={({isActive}) =>
                                    `${isActive ? "text-orange-700" : "text-gray-700"} hover:text-orange-700`
                                }
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/about"
                                className={({isActive}) =>
                                    `${isActive ? "text-orange-700" : "text-gray-700"} hover:text-orange-700`
                                }
                            >
                                About
                            </NavLink>
                            <NavLink
                                to="/contact"
                                className={({isActive}) =>
                                    `${isActive ? "text-orange-700" : "text-gray-700"} hover:text-orange-700`
                                }
                            >
                                Contact
                            </NavLink>
                            <NavLink
                                to="/github"
                                className={({isActive}) =>
                                    `${isActive ? "text-orange-700" : "text-gray-700"} hover:text-orange-700`
                                }
                            >
                                Github
                            </NavLink>
                        </div>
                    </div>
                    {/* Login/Register Buttons */}
                    <div className="flex items-center space-x-4">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2"
                        >
                            Get started
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}