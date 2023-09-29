import React from 'react';

const Ejemplo4 = (props) => {
    return (
        <div>
            <h1>ejemplo</h1>
            <h2>nombre: {props.nombre}
            </h2>
        {props.children}
        </div>
    );
}

export default Ejemplo4
