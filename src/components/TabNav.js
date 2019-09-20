import React, { useState } from "react";
import { Menu, Icon } from "semantic-ui-react";

export default function TabNav(props) {
  const [activeItem, setActiveItem] = useState();

  const handleItemClick = (e, { name }) => {
    return (
      setActiveItem(name),
      props.history.push(`/${name}`)
    )
  }
  return (
    <Menu attached='top' tabular>
      <Menu.Item
        name='homepage'
        active={activeItem === 'homepage'}
        onClick={handleItemClick}
      >
      <Icon name='home' size='large'/>Home Page
      </Menu.Item>

      <Menu.Item
        name='characters'
        active={activeItem === 'characters'}
        onClick={handleItemClick}
      >
      <Icon name='users' size='large' />Characters
      </Menu.Item>

      <Menu.Item
        name='locations'
        active={activeItem === 'locations'}
        onClick={handleItemClick}
      >
      <Icon name='map outline' size='large' />Locations
      </Menu.Item>

      <Menu.Item
        name='episodes'
        active={activeItem === 'episodes'}
        onClick={handleItemClick}
      >
      <Icon name='video camera' size='large' />Episodes
      </Menu.Item>
    </Menu>
  )
};