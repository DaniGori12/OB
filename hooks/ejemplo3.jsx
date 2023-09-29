import React, { useContext, useState } from "react";

const miContexto = React.createContext(null)

const Componente1  = () => {
    const state = useContext(miContexto)

    return (
        <div>
            <h1>ass: {state.token}</h1>
            <Componente2></Componente2>
        </div>
    );
}
const Componente2  = () => {

    const state = useContext (miContexto)
    return (
        <div>
            sesion: {state.sesion}
        </div>
    );
}

export default function ComponenteConContexto() {
    const estadoInicial = {
        token: "123456",
        sesion: 1
         
    }

    const [sessionData, setsessionData] = useState(estadoInicial);

    function actualizarSesion(){
     setsessionData (
        {
            token: "123123123",
            sesion: sessionData.sesion +1
        }
     )
    }


    return (    
      <div>
        <miContexto.Provider value={sessionData}>

            <Componente1></Componente1>
            <button onClick={actualizarSesion}>Actu sesion</button>
        </miContexto.Provider>
      </div>
    )
}


