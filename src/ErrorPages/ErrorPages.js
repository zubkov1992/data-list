import React from 'react';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

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
class ErrorPages extends React.Component {
  render() {
    const { classes, message } = this.props;

    return (
      <div className={classes.root}>
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
