import React from 'react'
import { WidgetContainer, ListItem, List, Title } from './style'

const SubcategoryWidget = () => {
  return (
    <WidgetContainer>
        <Title>Subcategory</Title>
        <List>
        <ListItem>User 1</ListItem>
        <ListItem>User 2</ListItem>
        <ListItem>User 3</ListItem>
        </List>
    </WidgetContainer>
  )
}

export default SubcategoryWidget