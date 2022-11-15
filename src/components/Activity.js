import React from "react";

import house from '../h6.jpg'
import Bg from '../bg.jpg';

const Activity=()=>{

    const backgroundImageStyle={

        backgroundImage:`url("${house}")`
      };
      const backgroundImage={

        backgroundImage:`url("${Bg}")`
      };

    return(

        <section className="bg-center h-screen" >
                <section className="text-center text-white w-full bg-center font-bold text-lg p-32" style={backgroundImage}>
                      <h1 className="p-2">Rechercher votre logement <span className="text-yellow-300 ">atypique</span></h1>
                      <div className="max-w-2xl mx-auto">

                            <form className="flex items-center justify-center ">   
                                <label for="simple-search" className="sr-only">Search</label>
                                <div className="relative w-full">

                                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                        
                                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                                    </div>
                                    <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required/>
                                </div>
                                <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-yellow-500 rounded-lg border hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-blue-600 dark:hover:bg-yellow-300 dark:focus:ring-blue-800">Rechercher</button>
                            </form>
                    </div>
                </section>
                <main className="mx-auto px-4 py-10 w-full ">

            <div className="p-10 text-center bg-white w-full">
                <h2 className="text-5xl font-bold">Nos récents articles</h2>
                <p > Generate Lorem Ip favorite writing, design and blogging tools. Explore the origins, history and meaning </p>
            </div>
            <div className="grid  grid-cols-2 gap-4 ">
                
                <div className="shadow-lg  h-80 w-full object-cover relative bg-center " style={backgroundImageStyle}>
                    <div className=" bg-black opacity-75 w-full absolute  text-white bottom-0 px-2 ">
                        <p>publier il y 2 jours</p>
                        <p className=" font-bold">Pourquoi atypikhouse communique à peine sur le communiquer à peine tourisme?</p>
                        <p> Lorem ipsum dolor, <br/>sit amet consectetur adipisicing elit. Dolorum nobis atque modi <br/>velit molestiae tenetur commodi voluptatem </p>
                        <a href="#" className="text-yellow-400">lire la suite</a>
                    </div>
                </div>
                <div className="shadow-lg  h-80 w-full object-cover relative bg-center " style={backgroundImageStyle}>
                    <div className=" bg-black opacity-75 w-full absolute  text-white bottom-0 px-2 ">
                        <p>publier il y 2 jours</p>
                        <p className=" font-bold">Pourquoi atypikhouse communique à peine sur le communiquer à peine tourisme?</p>
                        <p> Lorem ipsum dolor, <br/>sit amet consectetur adipisicing elit. Dolorum nobis atque modi <br/>velit molestiae tenetur commodi voluptatem </p>
                        <a href="#" className="text-yellow-400">lire la suite</a>
                    </div>
                </div>
                <div className="shadow-lg  h-80 w-full object-cover relative bg-center " style={backgroundImageStyle}>
                    <div className=" bg-black opacity-75 w-full absolute  text-white bottom-0 px-2 ">
                        <p>publier il y 2 jours</p>
                        <p className=" font-bold">Pourquoi atypikhouse communique à peine sur le communiquer à peine tourisme?</p>
                        <p> Lorem ipsum dolor, <br/>sit amet consectetur adipisicing elit. Dolorum nobis atque modi <br/>velit molestiae tenetur commodi voluptatem </p>
                        <a href="#" className="text-yellow-400">lire la suite</a>
                    </div>
                </div>
                <div className="shadow-lg  h-80 w-full object-cover relative bg-center " style={backgroundImageStyle}>
                    <div className=" bg-black opacity-75 w-full absolute  text-white bottom-0 px-2 ">
                        <p>publier il y 2 jours</p>
                        <p className=" font-bold">Pourquoi atypikhouse communique à peine sur le communiquer à peine tourisme?</p>
                        <p> Lorem ipsum dolor, <br/>sit amet consectetur adipisicing elit. Dolorum nobis atque modi <br/>velit molestiae tenetur commodi voluptatem </p>
                        <a href="#" className="text-yellow-400">lire la suite</a>
                    </div>
                </div>
            </div>
            <div className="pt-2 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                
                <div className="shadow-lg w-full py-4 ">
                        <img src={house}  alt="" />
                    <div className=" bg-gray-100 text-black  px-2 ">
                        <p>publier il y 2 jours</p>
                        <p className=" font-bold">Pourquoi atypikhouse communique à peine sur le communiquer à peine tourisme?</p>
                        <p> Lorem ipsum dolor, <br/>sit amet consectetur adipisicing elit. Dolorum nobis atque modi <br/>velit molestiae tenetur commodi voluptatem </p>
                        <a href="#" className="text-yellow-400">lire la suite</a>
                    </div>
                </div>
                <div className="shadow-lg w-full py-4 ">
                        <img src={house}  alt="" />
                    <div className=" bg-gray-100 text-black  px-2 ">
                        <p>publier il y 2 jours</p>
                        <p className=" font-bold">Pourquoi atypikhouse communique à peine sur le communiquer à peine tourisme?</p>
                        <p> Lorem ipsum dolor, <br/>sit amet consectetur adipisicing elit. Dolorum nobis atque modi <br/>velit molestiae tenetur commodi voluptatem </p>
                        <a href="#" className="text-yellow-400">lire la suite</a>
                    </div>
                </div>
                <div className="shadow-lg w-full py-4 ">
                        <img src={house} alt="" />
                    <div className=" bg-gray-100 text-black  px-2 ">
                        <p>publier il y 2 jours</p>
                        <p className=" font-bold">Pourquoi atypikhouse communique à peine sur le communiquer à peine tourisme?</p>
                        <p> Lorem ipsum dolor, <br/>sit amet consectetur adipisicing elit. Dolorum nobis atque modi <br/>velit molestiae tenetur commodi voluptatem </p>
                        <a href="#" className="text-yellow-400">lire la suite</a>
                    </div>
                </div>
                <div className="shadow-lg w-full py-4 ">
                        <img src={house} alt="" />
                    <div className=" bg-gray-100 text-black  px-2 ">
                        <p>publier il y 2 jours</p>
                        <p className=" font-bold">Pourquoi atypikhouse communique à peine sur le communiquer à peine tourisme?</p>
                        <p> Lorem ipsum dolor, <br/>sit amet consectetur adipisicing elit. Dolorum nobis atque modi <br/>velit molestiae tenetur commodi voluptatem </p>
                        <a href="#" className="text-yellow-400">lire la suite</a>
                    </div>
                </div>
                <div className="shadow-lg w-full py-4 ">
                        <img src={house} alt="" />
                    <div className=" bg-gray-100 text-black  px-2 ">
                        <p>publier il y 2 jours</p>
                        <p className=" font-bold">Pourquoi atypikhouse communique à peine sur le communiquer à peine tourisme?</p>
                        <p> Lorem ipsum dolor, <br/>sit amet consectetur adipisicing elit. Dolorum nobis atque modi <br/>velit molestiae tenetur commodi voluptatem </p>
                        <a href="#" className="text-yellow-400">lire la suite</a>
                    </div>
                </div>
                <div className="shadow-lg w-full py-4 ">
                        <img src={house} alt="" />
                    <div className=" bg-gray-100 text-black  px-2 ">
                        <p>publier il y 2 jours</p>
                        <p className=" font-bold">Pourquoi atypikhouse communique à peine sur le communiquer à peine tourisme?</p>
                        <p> Lorem ipsum dolor, <br/>sit amet consectetur adipisicing elit. Dolorum nobis atque modi <br/>velit molestiae tenetur commodi voluptatem </p>
                        <a href="#" className="text-yellow-400">lire la suite</a>
                    </div>
                </div>
                <div className="shadow-lg w-full py-4 ">
                        <img src={house} alt="" />
                    <div className=" bg-gray-100 text-black  px-2 ">
                        <p>publier il y 2 jours</p>
                        <p className=" font-bold">Pourquoi atypikhouse communique à peine sur le communiquer à peine tourisme?</p>
                        <p> Lorem ipsum dolor, <br/>sit amet consectetur adipisicing elit. Dolorum nobis atque modi <br/>velit molestiae tenetur commodi voluptatem </p>
                        <a href="#" className="text-yellow-400">lire la suite</a>
                    </div>
                </div>
                <div className="shadow-lg w-full py-4 ">
                        <img src={house} alt="" />
                    <div className=" bg-gray-100 text-black  px-2 ">
                        <p>publier il y 2 jours</p>
                        <p className=" font-bold">Pourquoi atypikhouse communique à peine sur le communiquer à peine tourisme?</p>
                        <p> Lorem ipsum dolor, <br/>sit amet consectetur adipisicing elit. Dolorum nobis atque modi <br/>velit molestiae tenetur commodi voluptatem </p>
                        <a href="#" className="text-yellow-400">lire la suite</a>
                    </div>
                </div>
                <div className="shadow-lg w-full py-4 ">
                        <img src={house} alt="" />
                    <div className=" bg-gray-100 text-black  px-2 ">
                        <p>publier il y 2 jours</p>
                        <p className=" font-bold">Pourquoi atypikhouse communique à peine sur le communiquer à peine tourisme?</p>
                        <p> Lorem ipsum dolor, <br/>sit amet consectetur adipisicing elit. Dolorum nobis atque modi <br/>velit molestiae tenetur commodi voluptatem </p>
                        <a href="#" className="text-yellow-400">lire la suite</a>
                    </div>
                </div>
            </div>
    </main>
    </section>

       
    )
}

export default Activity