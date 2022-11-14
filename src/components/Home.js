import React from "react";
import house from '../h6.jpg'
import Bg from '../bg.jpg';
import Image from '../h10.jpg';
import coeur from '../coeur.jpeg';

const Home=()=>{

    const backgroundImageStyle={

        backgroundImage:`url("${Bg}")`
      };
    const backgroundImage={

        backgroundImage:`url("${Image}")`
      };

    return(


        <>
        <section className="text-center text-white w-full bg-center font-bold text-lg p-32" style={backgroundImageStyle}>
                      <h1 className="p-2">Rechercher votre logement <span className="text-yellow-300 ">atypique</span></h1>
                      <div className="max-w-2xl mx-auto">

                            <form className="flex items-center space-x-1">   
                                <label for="simple-search" className="sr-only">Search</label>
                                <div className="relative w-full">

                                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                        
                                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                                    </div>
                                    <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Rechercher un lieu" required/>
                                </div>
                                <div className="relative w-full">

                                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                        
                                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                                    </div>
                                    <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Arrivé" required/>
                                </div>
                                <div className="relative w-full">

                                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                        
                                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                                    </div>
                                    <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Depart" required/>
                                </div>
                                <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-yellow-500 rounded-lg border hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-blue-600 dark:hover:bg-yellow-300 dark:focus:ring-blue-800">Rechercher</button>
                            </form>
                            <div className="flex items-center  justify-between  space-x-10 text-white m-5">
                                <button className="p-2.5 ml-2 text-sm font-medium text-white bg-black rounded-lg border">Catégorie 1</button>
                                <button className="p-2.5 ml-2 text-sm font-medium text-white bg-black rounded-lg border">Catégorie 1</button>
                                <button className="p-2.5 ml-2 text-sm font-medium text-white bg-black rounded-lg border">Catégorie 1</button>
                                <button className="p-2.5 ml-2 text-sm font-medium text-white bg-black rounded-lg border">Catégorie 1</button>
                            </div>
                            
                    </div>
                </section>
        <main className="mx-auto px-4 py-10 ">
        <div className="pb-2">
            <p className="text-3xl mb-5 font-bold">Les plus visités</p>
        </div>
        <div className="grid  grid-cols-2 gap-5 ">
            <div className="shadow-lg row-span-1 relative bg-center w-full h-full object-cover col-span-1 gap-4 bg-cover" style={backgroundImage}>
                <div className="absolute  bottom-10 px-4 text-white">
                    <h3 className=" ">Petit Détails</h3>
                    <p className=" font-bold ">Non du lieu</p>
                 </div>
            </div>
            <div  className=" grid grid-cols-2 gap-4 border border-black-200 py-2">
                <div className="shadow-lg  h-80 w-full object-cover relative bg-center bg-cover" style={backgroundImage}>
                    <div className="absolute  bottom-10 px-4">
                        <h3 className="">Petit Détails</h3>
                        <p className=" font-bold ">Non du lieu</p>
                    </div>
                </div>
                <div className="shadow-lg  h-80 w-full object-cover relative bg-center bg-cover py-2" style={backgroundImage}>
                    <div className="absolute  bottom-10 px-4">
                        <h3 className=" ">Petit Détails</h3>
                        <p className=" font-bold ">Non du lieu</p>
                    </div>
                </div>
                <div className="shadow-lg  h-80 w-full object-cover relative bg-center bg-cover" style={backgroundImage}>
                    <div className="absolute  bottom-10 px-4">
                        <h3 className="">Petit Détails</h3>
                        <p className=" font-bold ">Non du lieu</p>
                    </div>
                </div>
                <div className="shadow-lg  h-80 w-full object-cover relative bg-center bg-cover" style={backgroundImage}>
                    <div className="absolute  bottom-10 px-4">
                        <h3 className=" ">Petit Détails</h3>
                        <p className=" font-bold ">Non du lieu</p>
                    </div>
                </div>
            </div> 
        </div>
        <div className=" grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <div className="shadow-lg w-full pt-4 ">
                    <img src={house}  alt="" className="h-80 w-full object-cover"/>
                    <div className="">
                        <div className="flex justify-between m-5">
                            <div>
                                <p className="text-gray-300">BENINABOMEY-CALAVI-GANVIE</p>
                                <h2 className="font-bold text-lg">Aenean egestas libero</h2>
                            </div>
                            <div className="w-6 h-6">
                            <i class="fa-solid fa-heart"></i>
                            </div>
                        </div>
                        <div className="flex justify-between mx-5 py-2">
                            <div className="font-bold">
                                <p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><span className="text-gray-300">(225 Evaluations)</span></p>

                            </div>
                            <div>
                                <p>A partir de </p>
                                <h2 className="font-bold text-lg">120€/nuit</h2>
                            </div>
                        </div>
                </div>
            </div>
            <div className="shadow-lg w-full pt-4 ">
                    <img src={house}  alt="" className="h-80 w-full object-cover"/>
                    <div className="">
                        <div className="flex justify-between m-5">
                            <div>
                                <p className="text-gray-300">BENINABOMEY-CALAVI-GANVIE</p>
                                <h2 className="font-bold text-lg">Aenean egestas libero</h2>
                            </div>
                            <div className="w-6 h-6">
                            <i class="fa-solid fa-heart"></i>
                            </div>
                        </div>
                        <div className="flex justify-between mx-5 py-2">
                            <div className="font-bold">
                                <p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><span className="text-gray-300">(225 Evaluations)</span></p>

                            </div>
                            <div>
                                <p>A partir de </p>
                                <h2 className="font-bold text-lg">120€/nuit</h2>
                            </div>
                        </div>
                </div>
            </div>
            <div className="shadow-lg w-full py-2">
                    <img src={house}  alt="" className="h-80 w-full object-cover"/>
                    <div className="">
                        <div className="flex justify-between m-5">
                            <div>
                                <p className="text-gray-300">BENINABOMEY-CALAVI-GANVIE</p>
                                <h2 className="font-bold text-lg">Aenean egestas libero</h2>
                            </div>
                            <div className="w-6 h-6">
                            <i class="fa-solid fa-heart"></i>
                            </div>
                        </div>
                        <div className="flex justify-between mx-5 py-2">
                            <div className="font-bold">
                                <p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><span className="text-gray-300">(225 Evaluations)</span></p>

                            </div>
                            <div>
                                <p>A partir de </p>
                                <h2 className="font-bold text-lg">120€/nuit</h2>
                            </div>
                        </div>
                </div>
            </div>
            <div className="shadow-lg w-full pt-4 ">
                    <img src={house}  alt="" className="h-80 w-full object-cover"/>
                    <div className="">
                        <div className="flex justify-between m-5">
                            <div>
                                <p className="text-gray-300">BENINABOMEY-CALAVI-GANVIE</p>
                                <h2 className="font-bold text-lg">Aenean egestas libero</h2>
                            </div>
                            <div className="w-6 h-6">
                            <i class="fa-solid fa-heart"></i>
                            </div>
                        </div>
                        <div className="flex justify-between mx-5 py-2">
                            <div className="font-bold">
                                <p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><span className="text-gray-300">(225 Evaluations)</span></p>

                            </div>
                            <div>
                                <p>A partir de </p>
                                <h2 className="font-bold text-lg">120€/nuit</h2>
                            </div>
                        </div>
                </div>
            </div>
            <div className="shadow-lg w-full pt-4 ">
                    <img src={house}  alt="" className="h-80 w-full object-cover"/>
                    <div className="">
                        <div className="flex justify-between m-5">
                            <div>
                                <p className="text-gray-300">BENINABOMEY-CALAVI-GANVIE</p>
                                <h2 className="font-bold text-lg">Aenean egestas libero</h2>
                            </div>
                            <div className="w-6 h-6">
                            <i class="fa-solid fa-heart"></i>
                            </div>
                        </div>
                        <div className="flex justify-between mx-5 py-2">
                            <div className="font-bold">
                                <p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><span className="text-gray-300">(225 Evaluations)</span></p>

                            </div>
                            <div>
                                <p>A partir de </p>
                                <h2 className="font-bold text-lg">120€/nuit</h2>
                            </div>
                        </div>
                </div>
            </div>
            <div className="shadow-lg w-full pt-4 ">
                    <img src={house}  alt="" className="h-80 w-full object-cover"/>
                    <div className="">
                        <div className="flex justify-between m-5">
                            <div>
                                <p className="text-gray-300">BENINABOMEY-CALAVI-GANVIE</p>
                                <h2 className="font-bold text-lg">Aenean egestas libero</h2>
                            </div>
                            <div className="w-6 h-6">
                            <i class="fa-solid fa-heart"></i>
                            </div>
                        </div>
                        <div className="flex justify-between mx-5 py-2">
                            <div className="font-bold">
                                <p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><span className="text-gray-300">(225 Evaluations)</span></p>

                            </div>
                            <div>
                                <p>A partir de </p>
                                <h2 className="font-bold text-lg">120€/nuit</h2>
                            </div>
                        </div>
                </div>
            </div>
            <div className="shadow-lg w-full pt-4 ">
                    <img src={house}  alt="" className="h-80 w-full object-cover"/>
                    <div className="">
                        <div className="flex justify-between m-5">
                            <div>
                                <p className="text-gray-300">BENINABOMEY-CALAVI-GANVIE</p>
                                <h2 className="font-bold text-lg">Aenean egestas libero</h2>
                            </div>
                            <div className="w-6 h-6">
                            <i class="fa-solid fa-heart"></i>
                            </div>
                        </div>
                        <div className="flex justify-between mx-5 py-2">
                            <div className="font-bold">
                                <p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><span className="text-gray-300">(225 Evaluations)</span></p>

                            </div>
                            <div>
                                <p>A partir de </p>
                                <h2 className="font-bold text-lg">120€/nuit</h2>
                            </div>
                        </div>
                </div>
            </div>
            <div className="shadow-lg w-full py-4 ">
                    <img src={house}  alt="" className="h-80 w-full object-cover"/>
                    <div className="">
                        <div className="flex justify-between m-5">
                            <div>
                                <p className="text-gray-300">BENINABOMEY-CALAVI-GANVIE</p>
                                <h2 className="font-bold text-lg">Aenean egestas libero</h2>
                            </div>
                            <div className="w-6 h-6">
                            <i class="fa-solid fa-heart"></i>
                            </div>
                        </div>
                        <div className="flex justify-between mx-5 py-2">
                            <div className="font-bold">
                                <p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><span className="text-gray-300">(225 Evaluations)</span></p>

                            </div>
                            <div>
                                <p>A partir de </p>
                                <h2 className="font-bold text-lg">120€/nuit</h2>
                            </div>
                        </div>
                </div>
            </div>
            <div className="shadow-lg w-full py-4 ">
                    <img src={house}  alt="" className="h-80 w-full object-cover"/>
                    <div className="">
                        <div className="flex justify-between m-5">
                            <div>
                                <p className="text-gray-300">BENINABOMEY-CALAVI-GANVIE</p>
                                <h2 className="font-bold text-lg">Aenean egestas libero</h2>
                            </div>
                            <div className="w-6 h-6">
                            <i class="fa-solid fa-heart"></i>
                            </div>
                        </div>
                        <div className="flex justify-between mx-5 py-2">
                            <div className="font-bold">
                                <p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><span className="text-gray-300">(225 Evaluations)</span></p>

                            </div>
                            <div>
                                <p>A partir de </p>
                                <h2 className="font-bold text-lg">120€/nuit</h2>
                            </div>
                        </div>
                </div>
            </div>
        </div>
</main>
</>
       
    )
}

export default Home