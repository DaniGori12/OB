import React, { Component, useEffect } from 'react'

export  class willunmount extends Component {

  componentWillUnmount() {
    console.log("comportamiento antes de que desaparezca")
}


render() {
    return (
        <div>willunmount</div>
        )
    }
}




export const Willunmount = () => {
    
    useEffect(() => {
        return () => {
                console.log("comportamiento antes de que desaparezca")
            };
    }, []);
    return (
        <div>
            
<div>willunmount</div>
        </div>
    );
}

