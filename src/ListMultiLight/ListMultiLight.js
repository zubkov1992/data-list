import React, { PureComponent } from 'react';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
  root: {
    listStyle: 'none'
  }
});

/**Нижняя панель навигации. */
class ListMultiLight extends PureComponent {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    const { classes, children } = this.props;

    return <ul className={classes.root}>{children}</ul>;
  }
}

export default withStyles(styles)(ListMultiLight);
