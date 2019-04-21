import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Menu } from 'semantic-ui-react'


class MenuComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { is_authed } = this.props;

    // TODO: handle complex URLs
    const page = this.props.pathname.replace('/', '');
    const activeItem = page.length > 0 ? page : 'home';

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
            {is_authed ? (
              <Menu.Item
                name='logout'
                as={Link}
                to='/logout'
                active={activeItem === 'logout'}
                onClick={this.handleItemClick}
              />
            ) : (
              <>
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
              </>
            )}
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    is_authed: state.auth.is_authed,
    pathname: state.router.location.pathname,
  };
}

export default connect(mapStateToProps)(MenuComponent);
