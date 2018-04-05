import React, { PureComponent } from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

const styles = theme => ({
  root: {
    zIndex: theme.zIndex.drawer + 1,
    fontFamily: 'roboto'
  },
  logoDiv: {
    flex: 1
  },
  logoImg: {
    height: '2em',
    float: 'left'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
});

class AppBarPages extends PureComponent {
  render() {
    const { classes, onChangeSidebar, logoSrc, auth, onChangeLogin, onChangeLogout } = this.props;

    return (
      <AppBar position="fixed" color="default" className={classes.root}>
        <Toolbar>
          <IconButton
            color="inherit"
            className={classes.menuButton}
            onClick={() => {
              onChangeSidebar();
            }}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.logoDiv}>
            <img src={logoSrc} className={classes.logoImg} alt="Logo" />
          </div>
          {auth ? (
            <Button
              color="primary"
              onClick={() => {
                onChangeLogout();
              }}
            >
              Выйти
            </Button>
          ) : (
            <Button
              color="inherit"
              onClick={() => {
                onChangeLogin();
              }}
            >
              Войти
            </Button>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(AppBarPages);
