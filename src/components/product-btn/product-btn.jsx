import React from 'react'
import { Button } from './style';
import { TiArrowSortedDown } from 'react-icons/ti'

const ProductBtn = ({text}) => {
  return (
    <Button>
        {text}
        <TiArrowSortedDown />
    </Button>
  )
}

export default ProductBtn