import React from 'react'
import { Image, Text, Title, Value } from './style'

const Values = ({ data }) => {
  return (
    <>
       {data.map((item, index) => (
        <Value key={index}>
          <Image src={item.image} alt={item.title} />
          <Title>{item.title}</Title>
          <Text>{item.text}</Text>
        </Value>
      ))}
    </>
  )
}

export default Values