import React, { PureComponent } from 'react';
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

class DrawerPages extends PureComponent {
  render() {
    const { classes, openSidebar } = this.props;

    return (
      <Drawer
        variant="persistent"
        open={openSidebar}
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
