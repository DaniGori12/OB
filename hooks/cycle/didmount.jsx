import React, { Component, useEffect } from 'react';

export class Didmount extends Component {

  componentDidMount(){
    console.log("antes de que se renderice")
  }

    render() {
        return (
            <div>
                  <h1> Didmount</h1>
            </div>
        );
    }
}


export const DidmountHook = () => {

    useEffect(() => {
         console.log("as")
    }, [])
    return (
        <div>       
        <h1> Didmount</h1>
        </div>
    );
}
