import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    position: 'fixed',
    width: drawerWidth,
    backgroundColor: theme.palette.background.default,
    fontFamily: 'roboto'
  },
  toolbar: theme.mixins.toolbar
});

/** Боковая панель. */
class DrawerPages extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    openDrawer: PropTypes.bool
  };

  render() {
    const { classes, openDrawer } = this.props;

    return (
      <Drawer
        variant="persistent"
        open={openDrawer}
        classes={{
          paper: classes.root
        }}
      >
        <div className={classes.toolbar} />
        <List>Fjhkjhkjh</List>
        <Divider />
        <List>Fkjjhkjhkjh</List>
      </Drawer>
    );
  }
}

export default withStyles(styles)(DrawerPages);
