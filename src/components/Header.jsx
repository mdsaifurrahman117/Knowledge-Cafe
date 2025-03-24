import React from 'react'
import profile from "../assets/images/profile.png"

function Header() {
            return (
                        <header className="bg-base-100 shadow-sm">
                                    <nav className="navbar w-11/12 mx-auto p-0">
                                                <div className="navbar-start">
                                                            <a href="" className="text-xl font-semibold">Knowledge Cafe</a>
                                                </div>
                                                <div className="navbar-end gap-5">
                                                                        <a href="">
                                                                                    <img src={profile} alt="profile image" className="w-[40px]" />
                                                                        </a>
                                                            <div className="dropdown  dropdown-end">
                                                                        <div tabIndex={0} role="button" className="lg:hidden pr-0">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                                                                        </div>
                                                                        <ul
                                                                                    tabIndex={0}
                                                                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-5 w-52 p-2 shadow">
                                                                                    <li><a>Home</a></li>
                                                                                    <li><a>Bookmark</a></li>
                                                                        </ul>
                                                            </div>
                                                </div>
                                    </nav>
                        </header>
            )
}

export default Header
