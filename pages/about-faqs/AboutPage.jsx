import React from 'react'
import { Button } from '@chakra-ui/react'
import{useLocation,useNavigate } from 'react-router-dom'



const AboutPage = () => {

const location = useLocation();
const navigate = useNavigate();


const navigatePages = (path) => {
    navigate(path)
}   

const goBack = () => {
    navigate(-1)
}
const goForward= () => {
    navigate(1)
}



  return (
    <div>
    <h1>About | Faqs </h1>
    <div>
        <Button onClick={() => navigatePages('/')}>Go to Home</Button>
        <Button onClick={goBack}>Go Back </Button>
        <Button onClick={goForward}>Go Forward</Button>
        
    </div>
    </div>
  )
}

export default AboutPage