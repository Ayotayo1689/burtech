import React from 'react';
import { WidgetContainer, Title, List, ListItem } from './style';

const CategoryWidget = () => {
  return (
    <WidgetContainer>
        <Title>Categories</Title>
        <List>
        <ListItem>Category 1</ListItem>
        <ListItem>Category 2</ListItem>
        <ListItem>Category 3</ListItem>
        </List>
    </WidgetContainer>
  )
}

export default CategoryWidget