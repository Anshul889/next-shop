import Link from 'next/link';
import { slide as Menu } from 'react-burger-menu'
import React from 'react';
import {menustyles} from './styles'

class Burger extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu styles={menustyles}>
        <Link id="home" className="menu-item" href="/">Home</Link>
      </Menu>
    );
  }
}

export default Burger