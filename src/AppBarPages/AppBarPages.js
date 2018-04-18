import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import classNames from 'classnames';

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

/** Верхняя навигационная панель. */
class AppBarPages extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    onChangeSidebar: PropTypes.func,
    logoSrc: PropTypes.string,
    auth: PropTypes.bool,
    onChangeLogin: PropTypes.func,
    onChangeLogout: PropTypes.func,
    className: PropTypes.string
  };

  render() {
    const { classes, onChangeSidebar, logoSrc, auth, onChangeLogin, onChangeLogout, className: classNameProp } = this.props;

    return (
      <AppBar position="fixed" color="default" className={classNames(classes.root, classNameProp)}>
        <Toolbar>
          {/*Кнопка открытия боковой панели если нужна.*/}
          {onChangeSidebar && (
            <IconButton
              color="inherit"
              className={classes.menuButton}
              onClick={() => {
                onChangeSidebar();
              }}
            >
              <MenuIcon />
            </IconButton>
          )}
          {/*Логотоп если нужен.*/}
          {logoSrc && (
            <div className={classes.logoDiv}>
              <img src={logoSrc} className={classes.logoImg} alt="Logo" />
            </div>
          )}
          {/*Кнопака входа если нужна.*/}
          {onChangeLogout &&
            onChangeLogin &&
            (auth ? (
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
            ))}
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(AppBarPages);
