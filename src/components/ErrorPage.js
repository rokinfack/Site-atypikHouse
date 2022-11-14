import React, { Fragment } from "react";
import ErrorImage from '../404.png';
import Bg from '../bg.jpg';



const ErrorPage=()=>{

    const backgroundImage={

        backgroundImage:`url("${Bg}")`
      };


    return(
        <div style={backgroundImage} className="bg-center p-20">
        <div class=" w-1/2 mx-auto mt-40 px-10 py-3 md:my-auto rounded-3xl md:px-16 md:py-5 md:mx-auto lg:w-1/3 " >
            <h1 class=" text-white  text-9xl font-bold text-center"><img src={ErrorImage} alt="404" class="text-white"/></h1>
            <p class="font-bold text-xl text-white mt-7 p-2 text-center">oupp!!! <br/>Quelque chose s'est mal passé ou la page que vous demande n'esxiste pas</p>
            <button type="submit" class="text-center w-full bg-yellow-500 p-2 mt-5">retourner à la page precedente</button>
      </div>
      </div>
    )
}
export default ErrorPage