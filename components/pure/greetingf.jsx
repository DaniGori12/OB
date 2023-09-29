import React, {useState} from 'react'
import PropTypes from 'prop-types'

const Greetingf = (props) =>{

const [age, setage] = useState(29)

const birthday = () => {
    setage (age+1)
}


  return (
    <div>
    <h1>jejeeje {props.name}</h1>
    <h2>jejeeje es: {age}</h2>
    <button onClick={birthday}>
        Cumplir años
    </button>

</div>
  )
}




Greetingf.propTypes = {
    name: PropTypes.string
}



export default Greetingf
