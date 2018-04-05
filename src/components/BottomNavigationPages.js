import React from 'react';
import classNames from 'classnames';

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

class BottomNavigationPages extends React.Component {
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
