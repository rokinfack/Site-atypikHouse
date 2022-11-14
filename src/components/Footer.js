import React, { Fragment } from "react";
import Logo from '../logo.png';
import twitter from '../twitter.png';
import facebook from '../facebook.png';
import instagram from '../instagram.png';


const Footer=()=>{

    return(

        <Fragment class=" bg-gray-300 w-full py-20">
            <hr class="w-11/12 p-1 mx-auto border-solid border-gray-400"/>
        <div class=" flex space-y-5 w-full justify-between px-20 md:flex md:flex-row md-items-center md:justify-between ">
            <a href="#"><img src={Logo} alt="AtypikHouse" class="w-20 h-20"/></a>
            <div class="space-y-5 md:flex md:flex-row md:justify-between md:item-center md:space-x-10 ">
                    <a href="#" className="flex items-center">Home</a>
                    <a href="#">About Us</a>
                    <a href="#">Pricing</a>
                    <a href="#">Features</a>
                    <a href="#">Contact</a>
                    <a href="#">Teams</a>
                    <a href="#">Privacy</a>
            </div>
                 <div className="mt-1 flex justify-center">
                        <a href="#" className="mx-2 p-4 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-50">
                            <span className="sr-only">Sign up with instagram</span>
                            <img src={instagram} alt="instagram logo" className="w-6"></img>
                        </a>
                        <a href="#" className="mx-2 p-4 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-50">
                            <span className="sr-only">Sign up with facebook</span>
                            <img src={facebook} alt="facebook logo" className="w-6"></img>
                        </a>
                        <a href="#" className="mx-2 p-4 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-50">
                            <span className="sr-only">Sign up with twitter</span>
                            <img src={twitter} alt="twitter logo" className="w-6"></img>
                        </a>
                    </div>
        </div>
        <p class="w-full text-center">&copy;2022 Bonnie Hong All Rights Reserved</p>
    </Fragment>
    )
}
export default Footer