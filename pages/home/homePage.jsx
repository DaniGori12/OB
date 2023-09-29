import React from 'react'
import { Button } from '@chakra-ui/react'
import{useLocation,useNavigate } from 'react-router-dom'


export default function HomePage() {



  const location = useLocation();
  const navigate = useNavigate();
  
  
  const navigatePages = (path) => {
      navigate(path)
  }   
  


  


  return (
    <div>
        <h2>Homepage 2 esto es personal</h2>
        <Button onClick={() => navigatePages('/profile')}>Go to Profile</Button>
    </div>
  )
}
