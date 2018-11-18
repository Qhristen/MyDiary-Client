import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavBarVeiw  from './NavBarView'

class NavBarContainer extends Component {
    render() {
        return (
            <div>
                <NavBarVeiw />
            </div>
        );
    }
}

NavBarContainer.propTypes = {

};

export default NavBarContainer;