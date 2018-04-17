import React, { PureComponent } from 'react';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
  root: {
    textDecoration: 'none',
    width: '100%',
    paddingTop: 12,
    paddingBottom: 12,
    textAlign: 'left'
  }
});

/**Нижняя панель навигации. */
class ListItemMultiLight extends PureComponent {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    const { classes, children } = this.props;

    return <li className={classes.root}>{children}</li>;
  }
}

export default withStyles(styles)(ListItemMultiLight);
