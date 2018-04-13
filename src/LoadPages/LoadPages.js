import React, { Component } from 'react';
import { CircularProgress } from 'material-ui/Progress';
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
class LoadPages extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.message}>
          <CircularProgress className={classes.progress} size={230} thickness={4} />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(LoadPages);
