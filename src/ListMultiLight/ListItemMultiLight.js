import React, { PureComponent } from 'react';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const styles = theme => ({
  root: {
    textDecoration: 'none',
    width: '100%',
    textAlign: 'left'
  },
  default: {
    paddingTop: 12,
    paddingBottom: 12
  },
  dense: {
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  },
  divider: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundClip: 'padding-box'
  }
});

/**Нижняя панель навигации. */
class ListItemMultiLight extends PureComponent {
  getChildContext() {
    return {
      dense: this.props.dense || this.context.dense || false
    };
  }

  static defaultProps = {
    dense: false,
    divider: false
  };

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    dense: PropTypes.bool,
    divider: PropTypes.bool
  };

  static childContextTypes = {
    dense: PropTypes.bool
  };

  render() {
    const { classes, children, className: classNameProp, dense, divider } = this.props;
    const isDense = dense || this.context.dense || false;

    console.log(`1 ${this.context.dense}`)
    console.log(`1 ${isDense}`)
    console.log(`1 ${isDense ? classes.dense : classes.default}`)

    return (
      <li
        className={classNames(
          classes.root,
          isDense ? classes.dense : classes.default,
          { [classes.divider]: divider },
          classNameProp
        )}
      >
        {children}
      </li>
    );
  }
}

export default withStyles(styles)(ListItemMultiLight);
