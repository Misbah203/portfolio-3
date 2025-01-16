import React, { useState } from "react";
import {AiOutlineClose , AiOutlineMenu} from "react-icons/ai";

const Navbar = () => {

    const [isMenuOpen , setIsMenuOpen] = useState(false)
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    return (
        <div className="container pt-8">
        <div className="flex justify-between items-center">
            <div className="text-xl font-medium">Misbah Qasim</div>
            <ul className="gap-10 lg:gap hidden md:flex">
    
                <li className="menu-link"><a href='#hero'>Home</a></li>
                <li className="menu-link"><a href='#about'>About</a></li>
                <li className="menu-link"><a href='#projects'>Projects</a></li>
                <li className="menu-link"><a href='#skills'>Skills</a></li>
                <li className="menu-link"><a href='#contact'>Contact</a></li>
                <AiOutlineMenu size={30} />
              </ul>
        <div className="md:hidden" onClick={toggleMenu}>
         {isMenuOpen ? <AiOutlineClose size={30} /> : <AiOutlineClose size={30} />}
        </div>
        </div>
        {isMenuOpen && (
            <ul className="flex flex-col gap-4 mt-4 md:hidden">
                <li className="menu-link"><a href="#hero" onClick={toggleMenu}>Home</a></li>
                <li className="menu-link"><a href="#about" onClick={toggleMenu}>About</a></li>
                <li className="menu-link"><a href="#projects" onClick={toggleMenu}>Projects</a></li>
                <li className="menu-link"><a href="#skills" onClick={toggleMenu}>Skills</a></li>
                <li className="menu-link"><a href="#contact" onClick={toggleMenu}>Contact</a></li>
                </ul>
        )}
        </div>
    );
}

export default Navbar;

