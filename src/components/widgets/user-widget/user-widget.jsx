import React from 'react'
import { WidgetContainer, List, WidgetTitle, WidgetIcon, ListItem } from './style'
import { FiUsers } from 'react-icons/fi';

const UserWidget = () => {
  return (
    <WidgetContainer>
      <WidgetIcon>
        <FiUsers />
      </WidgetIcon>
      <WidgetTitle>Users</WidgetTitle>
      <p>3,456 users</p>
      <List>
          <ListItem>User 1</ListItem>
          <ListItem>User 2</ListItem>
          <ListItem>User 3</ListItem>
        </List>
    </WidgetContainer>
  )
}

export default UserWidget