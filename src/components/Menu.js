import React, { Fragment } from "react";
import Logo from '../logo.png';
import Hamburger from '../menu1.svg';
import Bg from '../bg.jpg';



const Menu=()=>{
    const backgroundImage={

        backgroundImage:`url("${Bg}")`
      };
    

    return(
        <Fragment className=" sm:pb-24 md:min-h-650  z-20 w-full ">
            <nav className="flex items-center fixed w-full justify-between bg-gray-300 px-20 py-1 relative">
                <div > 
                    <a href="#">
                    <img src={Logo}
                    alt="AtypikHouse"
                    class="h-16 w-16 border-0"/>
                    </a>
            </div>
            <ul className="toggle-menu absolute top-16 my-2 -translate-x-full space-y-5 md:space-y-0 sm: duration-500 md:translate-x-0 md:top-0 md:border-0 bg-gray-300 left-0 pl-16 border-2 md:relative md:flex md:space-x-8">
                <li><a href="/" className="p-1">Home</a></li>
                <li> <a href="/logement" className="p-1">Logement</a></li>
                <li><a href="/activite" className="p-1">Activités</a></li>
                <li><a href="/contact" className="p-1">Contact</a></li>
            </ul>
                
            <div className="flex hidden md:flex ">
            <a href="/sign" className="md:bg-black md:text-white md:p-2">Dévenir hôte</a>
            </div>
            <div className="md:hidden icone-toggle">
            <img src={Hamburger}
                alt="Hamburger"
                className="h-6 w-6"/>
            </div> 
        </nav>
    </Fragment> 
    )
}

export default Menu