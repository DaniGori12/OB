import React from 'react'
import{useLocation,useNavigate } from 'react-router-dom'
import { Button } from '@chakra-ui/react';

const NotFoundPage = () => {


  const navigate = useNavigate();


  const goBack = () => {
    navigate(-1)
}
  return (
    <div>
      <h1>
        notFoundPage asdsaddsadasdas
      </h1>
      <Button onClick={goBack}>Go Back </Button>
    </div>
  )
}
export default NotFoundPage;