import React from 'react';
import { Menu } from 'semantic-ui-react'
import { withRouter, BrowserRouter as Router, Route, Link } from "react-router-dom";


class MenuComponent extends React.Component {
  constructor(props) {
    const page = props.location.pathname.replace('/', '');

    super(props);
    this.state = {
        activeItem: page.length > 0 ? page : 'home',
    };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(event, data) {
    this.setState({
      activeItem: data.name
    });
  }

  render() {
    const { activeItem } = this.state

    // TODO: conditionally render login and logout/signup
    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            name='home'
            as={Link}
            to='/'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='submit'
            as={Link}
            to='/submit'
            active={activeItem === 'submit'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='jobs'
            as={Link}
            to='/jobs'
            active={activeItem === 'jobs'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              name='login'
              as={Link}
              to='/login'
              active={activeItem === 'login'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='signup'
              as={Link}
              to='/signup'
              active={activeItem === 'signup'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='logout'
              as={Link}
              to='/logout'
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default withRouter(MenuComponent);
