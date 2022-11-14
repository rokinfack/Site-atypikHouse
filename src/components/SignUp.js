import React from "react";

import twitter from '../twitter.png';
import facebook from '../facebook.png';
import instagram from '../instagram.png';
import Image from '../h10.jpg';



const SignUp=()=>{


    return(

        <div className="min-h-[845px] h-screen flex bd-gray-50">
            <div className="flex-1 flex flex-col justify-center py-12 px-4 sm-px-6 lg:px-20 lg:flex-none xl:px-24">

                <div className="mx-auto w-full max-w-sm lg:w-96">
                    <h2 className="mt-6 text-2xl font-extrabold text-gray-900 md:text-3xl">Take a breath, Sign in</h2>
                    <a href="#" className="mt-2 text-sm font-medium text-green-600 hover:text-gren-500">Already have a account ? Sign in</a>

                    <form className="mt-4">
                        <div className="space-y-5 mt-6">
                            <div>
                                <label for="email" className="block text-sm font-medium text-gray-700">Email address</label>
                                <input type="email" id="email" required className="appearance-none mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  focus:border-green-500 sm:text-sm"/>
                            </div>
                            <div>
                                <label for="password" className="block text-sm font-medium text-gray-700">Passe word</label>
                                <input type="password" id="password" required className="appearance-none mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  focus:border-green-500 sm:text-sm"/>
                            </div>
                            <div >
                                <label for="repeatPsw" className="block text-sm font-medium text-gray-700">repeat Passwrd</label>
                                <input type="password" id="repeatPsw" required className="appearance-none mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  focus:border-green-500 sm:text-sm"/>
                            </div>
                        </div>
                        <div className="flex items-center justify-between mt-8">
                            <div className="flex">
                                <input type="checkbox" id="remember-me" className="w-4 h-4 rounded"/>
                                <label className="ml-2 block text-sm text-gray-900">Remember me</label>
                            </div>
                            <a href="#" className="font-sm font-medium text-green-600 hover:text-green-500">Need help to sign up?</a>
                        </div>
                        <button className="w-full py-3 px-4 mt-4 rounded-md shadow-sm text-sm font-medium text-white bg-green-800">Sign up</button>
                    </form>
                    <div className="mt-6 mb-2 px-2 text-center text-gray-500">
                        <p>Or sign up with</p>
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
            </div>
            <div className="hidden sm:block relative pt-10 flex-1">
                <img src={Image} alt="atypik" className="h-full w-full object-cover"/>
            </div>


        </div>
    )
}

export default SignUp