import React from 'react'
import { WidgetContainer, Title, List, ListItem } from './style';

const StudentWidget = () => {
  return (
    <WidgetContainer>
      <Title>Students</Title>
      <List>
        <ListItem>Student 1</ListItem>
        <ListItem>Student 2</ListItem>
        <ListItem>Student 3</ListItem>
      </List>
    </WidgetContainer>
  )
}

export default StudentWidget