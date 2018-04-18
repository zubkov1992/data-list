import React, { PureComponent } from 'react';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const styles = theme => ({
  root: {
    listStyle: 'none'
  },
  padding: {
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  },
  dense: {
    paddingTop: theme.spacing.unit / 2,
    paddingBottom: theme.spacing.unit / 2
  },
  subheader: {
    paddingTop: 0
  }
});

/**Нижняя панель навигации. */
class ListMultiLight extends PureComponent {
  static defaultProps = {
    dense: false,
    disablePadding: false
  };

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    dense: PropTypes.bool,
    disablePadding: PropTypes.bool,
    subheader: PropTypes.node
  };

  static childContextTypes = {
    dense: PropTypes.bool
  };

  getChildContext() {
    return {
      dense: this.props.dense
    };
  }

  render() {
    const {
      classes,
      children,
      className: classNameProp,
      dense,
      disablePadding,
      subheader
    } = this.props;

    return (
      <ul
        className={classNames(
          classes.root,
          {
            [classes.dense]: dense && !disablePadding,
            [classes.padding]: !disablePadding,
            [classes.subheader]: subheader
          },
          classNameProp
        )}
      >
        {subheader}
        {children}
      </ul>
    );
  }
}

export default withStyles(styles)(ListMultiLight);
