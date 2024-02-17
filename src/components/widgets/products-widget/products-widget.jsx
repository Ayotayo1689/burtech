import React from 'react'
import { WidgetContainer, List, ListItem, WidgetTitle, WidgetIcon } from './style'
import { FiBarChart2 } from 'react-icons/fi'

const ProductsWidget = () => {
  return (
    <WidgetContainer>
      <WidgetTitle>Products</WidgetTitle>
      <WidgetIcon>
        <FiBarChart2 />
      </WidgetIcon>
      <p>$12,345</p>
      <List>
        <ListItem>Product 1</ListItem>
        <ListItem>Product 2</ListItem>
        <ListItem>Product 3</ListItem>
      </List>
    </WidgetContainer>
  )
}

export default ProductsWidget