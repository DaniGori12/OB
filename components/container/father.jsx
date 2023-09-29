import React, {useState} from 'react';
import Child from '../pure/forms/child';

const Father = () => {

const [name, setName] = useState("Dani");



  function showMessage(text){
alert(`Message received ${text}`)
  }

  function updateName(newName){
   setName (newName)
  }



    return (
        <div>
            <p>
                <Child name={name} send={showMessage} update={updateName}> </Child>
            </p>    
        </div>
    );
}

export default Father;

