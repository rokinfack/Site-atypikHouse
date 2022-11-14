import React from "react";



const Reinitialisation=()=>{


    return(

        <div className=" w-1/2 mx-auto mt-40 px-10 py-3 md:w-1/2 md:mt-40 rounded-3xl md:px-16 md:py-5 md:mx-auto lg:w-1/3 bg-gray-100">
            <h2 className="text-center text-3xl p-1">Réinitialisation</h2>
            <p className="text-center text-sm p-1 text-gray-500"> Si vous avez oublié votre mot de passe, veillez remplir le formulaire suivant</p>
                <form action="">
                    <label for="password">Mot de passe</label>
                    <input type="password" name="passeword" id="passeword" class="w-full py-1 lg:py-2 px-1 bg-gray-30 text-gray-500"/>
                    <label for="confirm">Confirmer mot de passe</label>
                    <input type="password" name="confirm" id="confirm" class="w-full py-1 lg:py-2 px-1 bg-gray-30 text-gray-500"/>
                    <button type="submit" class="bg-yellow-400 py-1 text-center w-full lg:py-2 px-1 mt-3">Mettre à jour</button>
                    <p class="text-center text-gray-500">vous vous vouvenez du mot de passe <a src="#" href="#" class="text-yellow-500 text-sm">Se connecter</a>
                    </p>
                </form>
      </div>

    )
}
export default Reinitialisation