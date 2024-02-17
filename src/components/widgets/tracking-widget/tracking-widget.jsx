import React from 'react'
import { WidgetContainer, List, Title, ListItem } from './style'

const TrackingWidget = () => {
  return (
    <WidgetContainer>
        <Title>Tracking</Title>
        <List>
          <ListItem>User 1</ListItem>
          <ListItem>User 2</ListItem>
          <ListItem>User 3</ListItem>
        </List>
    </WidgetContainer>
  )
}

export default TrackingWidget