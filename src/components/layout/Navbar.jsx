import React, { useState } from "react";
import { LOGO } from '../../assets/assets';
import { Link } from "react-router-dom";

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? 'bg-blue-900/98 shadow-xl backdrop-blur-lg'
                : 'bg-blue-900/95 backdrop-blur-lg'
                }`}>
                <div className="max-w-6xl mx-auto flex justify-between items-center px-5 py-4">
                    <div className="flex items-center gap-3">
                        <Link to='/'><img width="100" src={LOGO} alt="Zoul Code Logo" className="h-12" /></Link>
                    </div>

                    <ul className={`${isMobileMenuOpen
                        ? 'flex'
                        : 'hidden'
                        } md:flex flex-col md:flex-row list-none gap-8 absolute md:relative top-full md:top-auto left-0 md:left-auto w-full md:w-auto bg-blue-900/90 md:bg-transparent p-5 md:p-0 shadow-xl md:shadow-none`}>
                        <li>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-white font-medium transition-colors duration-300 hover:text-yellow-400 relative group"
                            >
                            <Link to='/'>
                                الرئيسية
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                            </button>
                        </li>
                        <li>
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-yellow-400 font-medium transition-colors duration-300 hover:text-white relative group lx:text-yellow-500"
                                >
                            <Link to='/services'>
                                    خدماتنا
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                                </button>
                        </li>
                        <li>
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-yellow-400 font-medium transition-colors duration-300 hover:text-white relative group lx:text-yellow-500"
                                >
                                <Link to='/technologies'>
                                    أدواتنا
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                                </button>
                        </li>
                        <li>
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-yellow-400 font-medium transition-colors duration-300 hover:text-white relative group lx:text-yellow-500"
                                >
                                <Link to='/portfolio'>
                                    أعمالنا
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                                </button>
                        </li>
                        <li>
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-yellow-400 font-medium transition-colors duration-300 hover:text-white relative group lx:text-yellow-500"
                                >
                                <Link to='/specialized-services'>
                                    خدماتنا المتخصصة
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                                </button>
                        </li>
                        <li>
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-yellow-400 font-medium transition-colors duration-300 hover:text-white relative group lx:text-yellow-500"
                                >
                            <Link to='/contact'>
                                    تواصل معنا
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                                </button>
                        </li>
                    </ul>

                    <button
                        className="md:hidden flex flex-col cursor-pointer"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <span className="w-6 h-0.5 bg-white mb-1 transition-all duration-300"></span>
                        <span className="w-6 h-0.5 bg-white mb-1 transition-all duration-300"></span>
                        <span className="w-6 h-0.5 bg-white transition-all duration-300"></span>
                    </button>
                </div>
            </nav>
        </>
    );
}

export default Navbar;