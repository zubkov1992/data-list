import React, { PureComponent } from 'react';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Navbar from '../components/AppBarPages';
import Sidebar from '../components/DrawerPages';
import BottomNavigationPages from '../components/BottomNavigationPages';
import BooksCards from './CardsData';
import { BottomNavigationAction } from 'material-ui/BottomNavigation';
import Icon from 'material-ui/Icon';
import RestoreIcon from 'material-ui-icons/Restore';
import FavoriteIcon from 'material-ui-icons/Favorite';
import LocationOnIcon from 'material-ui-icons/LocationOn';

const styles = theme => ({
  root: {
    display: 'flex',
    fontFamily: 'roboto',
    background: theme.palette.background.default
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 1.2,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  toolbar: theme.mixins.toolbar,
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 240
  }
});

let number = 0;
const arr = Array.apply(null, Array(150)).map(() => {
  return { number: ++number };
});

class App extends PureComponent {
  state = {
    openSidebar: false
  };

  onChangeSidebar = (status = null) => {
    const { openSidebar } = this.state;

    if (status === null) {
      status = !openSidebar;
    }

    this.setState({
      openSidebar: status
    });
  };

  render() {
    const { classes } = this.props;
    const { openSidebar } = this.state;

    return (
      <div className={classes.root}>
        <Navbar onChangeSidebar={this.onChangeSidebar} />
        <Sidebar openSidebar={openSidebar} />
        <div
          className={classNames(classes.content, {
            [classes.contentShift]: openSidebar
          })}
        >
          <div className={classes.toolbar} />
          <BooksCards test={arr} />
          <div className={classes.toolbar} />
        </div>
        <BottomNavigationPages>
          <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
          <BottomNavigationAction label="Folder" value="folder" icon={<Icon>folder</Icon>} />
        </BottomNavigationPages>
      </div>
    );
  }
}

export default withStyles(styles)(App);
