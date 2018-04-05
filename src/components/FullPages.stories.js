import React, { PureComponent } from 'react';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Navbar from './AppBarPages';
import Sidebar from './DrawerPages';
import BottomNavigationPages from './BottomNavigationPages';
import CardDataMaster from './CardDataMaster';
import { BottomNavigationAction } from 'material-ui/BottomNavigation';
import Icon from 'material-ui/Icon';
import RestoreIcon from 'material-ui-icons/Restore';
import FavoriteIcon from 'material-ui-icons/Favorite';
import LocationOnIcon from 'material-ui-icons/LocationOn';
import { storiesOf } from '@storybook/react';

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
  },
  cardDataMaster: {
    margin: '0px 100px 20px 100px',
    [theme.breakpoints.down('sm')]: {
      margin: '0px 20px 8px 20px'
    },
    [theme.breakpoints.only('md')]: {
      margin: '0px 40px 13px 40px'
    }
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
          <div className={classes.cardDataMaster}>
            {arr.map(item => <CardDataMaster key={item.number} number={item.number} />)}
          </div>
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

const FullPages = withStyles(styles)(App);

storiesOf('FullPages', module).add('fullPages example', () => <FullPages/>);
