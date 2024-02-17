import React from 'react'
import { Button } from './style'
import { useNavigate } from 'react-router-dom'

const ServiceBtn = ({text}) => {
  const navigate = useNavigate()

  return (
    <Button onClick={() => navigate("/categories")}>
      {text}
    </Button>
  )
}

export default ServiceBtn