 import React, {useState} from 'react';
 
 const Ejemplo1 = () => {
    
    const ValorInicial = 0; 
    const PersonaInicial = {
        nombre: "Dani",
        email: "dada@adsa"
    }
    
    
    const [contador, setcontador] = useState(ValorInicial);
    const [persona, setpersona] = useState(PersonaInicial);


    function incrementarContador(){
        setcontador(contador+1)
    } 
    function sustituirPersona(){
        setpersona({
            nombre: "Pepe",
            email: "dasd@adasda"
        })
    } 
    
    return (
        <div>
             <h5>ejemplo de useState</h5>
             {contador}
             <div> {persona.nombre}</div>
             <div>{persona.email}</div>
             <button onClick={incrementarContador}>+1</button>
             <button onClick={sustituirPersona}>?</button>
        </div>
    );
 }
 
 export default Ejemplo1;
   