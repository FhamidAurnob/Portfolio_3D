import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants/constants';
import { fma, menu, close } from '../assets';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

const Navbar = () => {
  const [active, setactive] = useState('');
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">

        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setactive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={fma} alt="fma" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Fhamid Mottaki Aurnob &nbsp; 
            <span className="sm:block hidden"> | Software Developer</span>
            </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "text-white":"text-secondary"}hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}

           {/* Add social media icons */}
           <li className="flex items-center gap-4">
            <a href="https://www.facebook.com/fahmid.muttaki" target="_blank" rel="noreferrer">
              <FaFacebook className="text-secondary hover:text-white text-[18px] cursor-pointer" />
            </a>
            <a href="https://www.linkedin.com/in/fhamid-aurnob-115a8915a/" target="_blank" rel="noreferrer">
              <FaLinkedin className="text-secondary hover:text-white text-[18px] cursor-pointer" />
            </a>
            <a href="https://github.com/FhamidAurnob" target="_blank" rel="noreferrer">
              <FaGithub className="text-secondary hover:text-white text-[18px] cursor-pointer" />
            </a>
          </li>

        </ul>


        <div className="sm:hidden flex flex-1
      justify-end items-center">
          <img src={toggle ? close : menu}
            alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient 
      top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-x1`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? "text-white":"text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >

                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}

              {/* Social Media Icons for Mobile */}
              <li className="flex items-center gap-4">
                <a
                  href="https://www.facebook.com/fahmid.muttaki"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebook className="text-secondary hover:text-white text-[18px] cursor-pointer" />
                </a>
                <a
                  href="https://www.linkedin.com/in/fhamid-aurnob-115a8915a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin className="text-secondary hover:text-white text-[18px] cursor-pointer" />
                </a>
                <a
                  href="https://github.com/FhamidAurnob"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub className="text-secondary hover:text-white text-[18px] cursor-pointer" />
                </a>
              </li>
            </ul>

          </div>
        </div>
      </div>


    </nav>
  )
}

export default Navbar