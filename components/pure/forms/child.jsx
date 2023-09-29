import { useRef } from "react";

const Child = ({name, send, update }) => {

  
  
  const messageRef = useRef("")
  const nameRef = useRef("")

  function pressButton(){
    const text = messageRef.current.value;
      alert(`${text}`);
  }
  function pressButtonParams(text){
    alert(`Text: ${text}`);
  }

  function submitName(e){
      e.preventDefault();
      update(nameRef.current.value)
  }



    return (
        <div>
            <p onMouseOver={() => console.log("On mouse over")}>Bye, {name}</p>
            <button onClick={() => console.log("Botón 1 pulsado")}>Botón 1</button>
            <button onClick={(pressButton)}>Botón 2</button>
            <button onClick={() => pressButtonParams('Hello')}>Botón 3</button>
            <input
           
            placeholder= "send a text to your father"
            onFocus={()=> console.log("Input focused")}
            onChange={(e)=> console.log("Input changed", e.target.value)}
            onCopy={() => console.log("Copied")}
            ref = {messageRef}
            />
            <button onClick={() => send(messageRef.current.value)}>
              Send Message
            </button>
            <form onSubmit={submitName}>
              <input ref={nameRef} placeholder="asdf"></input>
              <button type="submit">Update</button>
            </form>
        </div>
    );
}

export default Child;
