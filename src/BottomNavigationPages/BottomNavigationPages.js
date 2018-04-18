import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import BottomNavigation from 'material-ui/BottomNavigation';

const styles = theme => ({
  root: {
    position: 'fixed',
    width: '100%',
    left: 'auto',
    right: 0,
    bottom: 0,
    boxShadow: theme.shadows[10]
  },
  toolbar: theme.mixins.toolbar
});

/**Нижняя панель навигации. */
class BottomNavigationPages extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    handleChange: PropTypes.func,
    valueChanged: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    children: PropTypes.node,
    className: PropTypes.string
  };

  render() {
    const { classes, handleChange, valueChanged, children, className: classNameProp } = this.props;

    return (
      <BottomNavigation
        value={valueChanged}
        onChange={handleChange}
        className={classNames(classes.root, classes.toolbar, classNameProp)}
      >
        {children}
      </BottomNavigation>
    );
  }
}

export default withStyles(styles)(BottomNavigationPages);
