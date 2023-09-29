import { useEffect, useRef, useState } from "react";

const Ejemplo2 = () => {
    
    const [contador1, setcontador1] = useState(0);
    const [contador2, setcontador2] = useState(0);
    
    const miRef = useRef();
    
    function incrementar1(){setcontador1(contador1+1)}
    function incrementar2(){setcontador2(contador2+2)}
     
    
    
    useEffect(() => {
        console.log("cambio en el estado del componente")
        console.log("mostrando referencia al elemento del DOM")
        console.log(miRef)
    }, [contador1, contador2])
    
    
    return (
        <div>
            <h4>{contador1}</h4>
            <h4>{contador2}</h4>
            <h3 ref={miRef}>ejemplo</h3>
            <div>
               <button onClick={incrementar1}>+1</button>
               <button onClick={incrementar2}>+2</button>
            </div>
        </div>
    );
}

export default Ejemplo2;
