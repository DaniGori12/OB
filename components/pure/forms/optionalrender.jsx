import React, { useState } from 'react'

const LoginButton = ({ loginAction }) => {
    return (

        <button onClick={loginAction}>Login</button>
    )
}
const LogoutButton = ({ logoutAction }) => {
    return (

        <button onClick={logoutAction}>Logout</button>
    )
}



export default function Optionalrender() {

    const [access, setAccess] = useState(true)
    const [nMessages, setNMessages] = useState(0)


    // const updateAccess = () => {
    //     setAccess(!access);
    // }

    const loginAction = () => {
        setAccess(true)
    }
    const logoutAction = () => {
        setAccess(false)
    }





    let optionalButton;

    // if (access) {
    //     optionalButton = <button onClick={updateAccess}>Logout</button>
    // } else {
    //     optionalButton = <button onClick={updateAccess}>Login</button>

    // }

    if (access) {
        optionalButton = <LogoutButton logoutAction={logoutAction} ></LogoutButton>
    } else {
        optionalButton = <LoginButton loginAction={loginAction}></LoginButton>

    }

    let addMessages = () => {
        setNMessages(nMessages + 1)
    }




    return (
        <div>
            {optionalButton}
            
            {nMessages > 0 && nMessages == 1 &&<p>You have {nMessages} unread message</p>}
            {nMessages > 1 && <p>You have {nMessages} unread messages</p>}
            {nMessages == 0 && <p>There are {nMessages} new messages</p>}
            <button onClick={addMessages}>Add new message</button>


        </div>
    )
}
