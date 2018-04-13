import React from 'react';
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
class BottomNavigationPages extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    handleChange: PropTypes.func,
    valueChanged: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    children: PropTypes.node
  };

  render() {
    const { classes, handleChange, valueChanged, children } = this.props;

    return (
      <BottomNavigation
        value={valueChanged}
        onChange={handleChange}
        className={classNames(classes.root, classes.toolbar)}
      >
        {children}
      </BottomNavigation>
    );
  }
}

export default withStyles(styles)(BottomNavigationPages);
