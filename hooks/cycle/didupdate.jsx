import React, { Component, useEffect } from 'react'

export  class didupdate extends Component {

  componentDidUpdate(){
    console.log("Cuando el comp recibe nuevos props")
}

render() {
    return (
        <div>didupdate</div>
        )
    }
    
    
    
}


export const DidupdateHook = () => {
    
    useEffect(() => {
        console.log("Cuando el comp recibe nuevos props")
        
    });
    return (
        <div>
            
<div>didupdate</div>
        </div>
    );
}

