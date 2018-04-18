import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  message: {
    marginLeft: 'auto',
    marginRight: 'auto'
  }
});

/**Нижняя панель навигации. */
class ErrorPages extends Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
    className: PropTypes.string
  };

  render() {
    const { classes, message, className: classNameProp } = this.props;

    return (
      <div className={classNames(classes.root, classNameProp)}>
        <div className={classes.message}>
          <Typography variant="headline" color="error" align="center">
            {message}
          </Typography>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ErrorPages);
