import React from "react";
import telephone from '../telephoner.png';
import message from '../message.png';
import Bg from '../bg.jpg';


const PageContact=()=>{
    const backgroundImageStyle={

        backgroundImage:`url("${Bg}")`
      };


    return(
       <div className="bg-center mb-10 pb-10 h-[1300px]" style={backgroundImageStyle}>
            <h1 className="text-white uppercase font-bold text-center text-4xl pb-10 pt-32">ContacteZ atypikHouse</h1>
            <div className=" w-1/2 mx-auto bg-white px-10 rounded-3xl pb-10">
                <div>
                    <p className="p-3 text-bold text-blue-800 ">
                Sequi explicabo odio asperiores earum nostrum officia vero porro error rerum velit aspernatur, rem voluptat similique sunt voluptas eum quaerat!<b/>
                des suggestion d'acquisition à nous proposer? contacter-nous sur <a href="#" className="border-b-2 border-b-blue-700 hover:text-yellow-700">le support.AtypikHouse.fr</a>
                </p>

                </div>
                
                <div className=" shadow:sm py-3 px-4  rounded-md w-full">
                    <h2 className="font-bold uppercase text-2xl"> Contactez nous</h2>

                    <div className=" lg:flex lg:space-x-4  border-box p-4">
                        <div className="border-4 w-64 border-box flex items-center space-x-2 justify-center px-4 hover:bg-green-400 rounded-lg " >
                              <img src={telephone} alt="Call" className=" block w-6 h-6"/>
                              <a href="">(+33)0678760986</a>
                        </div>
                        <div className="border-4 w-64  flex items-center space-x-2 justify-center p-4 px-4 hover:bg-green-400 rounded-lg " >
                              <img src={message} alt="Call" className=" block w-10 h-10"/>
                              <a href="#">atypikhouse@gmail.com</a>
                        </div>
                        
                    </div>
                </div>
                <form action="" className="space-y-6 relative  max-w-3xl mx-auto px-4 sm:px-6 ">
                    <h2 className="uppercase text-2xl font-bold">Formulaire de Contact</h2>
                    <div className="flex items-center space-x-4">
                        <div className="w-1/2">
                            <label for="" className="block text-bold text-black">Nom</label>
                            <input type="text" name="" id="" className=" ring-1 ring-gray-200 shadow:sm py-3 px-4  placeholder-gray-500  border-gray-300 rounded-md w-full" placeholder="votre Nom"/>
                        </div>
                            <div className="w-1/2">
                            <label for="" className="block text-bold text-black">Prenom</label>
                        <input type="text" name="" id="" className="ring-1 ring-gray-200 shadow:sm py-3 px-4  placeholder-gray-500  border-gray-300 rounded-md w-full" placeholder="votre prenom"/>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="w-1/2">
                            <label for="" className="block">ville</label>
                            <input type="text" name="" id="" className=" ring-1 ring-gray-200 shadow:sm py-3 px-4  placeholder-gray-500  border-gray-300 rounded-md w-full" placeholder="votre ville"/>
                        </div>
                            <div className="w-1/2">
                            <label for="" className="block">raison social</label>
                        <input type="text" name="" id="" className="ring-1 ring-gray-200 shadow:sm py-3 px-4  placeholder-gray-500  border-gray-300 rounded-md w-full" placeholder="cocos"/>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="w-1/2">
                            <label for="" className="block">numero de telephone</label>
                            <input type="tel" name="" id="" className=" ring-1 ring-gray-200 shadow:sm py-3 px-4  placeholder-gray-500  border-gray-300 rounded-md w-full" placeholder="phone"/>
                        </div>
                            <div className="w-1/2">
                            <label for="" className="block">Addresse email</label>
                        <input type="email" name="" id="" className="ring-1 ring-gray-200 shadow:sm py-3 px-4  placeholder-gray-500  border-gray-300 rounded-md w-full" placeholder="votre email"/>
                        </div>
                    </div>

              
                    <div>
                        <label for="">Object du message</label>
                        <input type="text" name="" id="" placeholder="cocos" className="block ring-1 ring-gray-200 shadow:sm py-3 px-4  placeholder-gray-500  border-gray-300 rounded-md w-full"/>
                    </div>
                    <div>
                        <label for="">Message</label>
                        <textarea name="" id="" cols="30" rows="4" className="block ring-1 ring-gray-200 shadow:sm py-3 px-4  placeholder-gray-500  border-gray-300 rounded-md w-full">votre message</textarea>
                    </div>

                    <button type="submit" className="py-2 text-white shadow-md text-base font-medium rounded-lg bg-yellow-500 w-full">Envoyer</button>
        
                </form>


                </div>

                <div class="md:mb-12 lg:mb-0">
            <div class="map-container relative shadow-lg rounded-lg">
              <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" class="left-0 top-0 h-full w-full absolute rounded-lg" frameborder="0" allowfullscreen></iframe>
            </div>
          </div>
                
       </div>
    )
}

export default PageContact