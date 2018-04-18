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
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  },
  dense: {
    paddingTop: theme.spacing.unit / 4,
    paddingBottom: theme.spacing.unit / 4
  },
  divider: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundClip: 'padding-box'
  }
});

/**Нижняя панель навигации. */
class ListItemMultiLight extends PureComponent {
  static defaultProps = {
    dense: false,
    divider: false
  };

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    dense: PropTypes.bool,
    divider: PropTypes.bool,
    variant: PropTypes.oneOf([
      'display4',
      'display3',
      'display2',
      'display1',
      'headline',
      'title',
      'subheading',
      'body2',
      'body1',
      'caption'
    ]),
    color: PropTypes.oneOf(['inherit', 'primary', 'textSecondary', 'secondary', 'error', 'default'])
  };

  static childContextTypes = {
    dense: PropTypes.bool,
    variant: PropTypes.oneOf([
      'display4',
      'display3',
      'display2',
      'display1',
      'headline',
      'title',
      'subheading',
      'body2',
      'body1',
      'caption'
    ]),
    color: PropTypes.oneOf(['inherit', 'primary', 'textSecondary', 'secondary', 'error', 'default'])
  };

  static contextTypes = {
    dense: PropTypes.bool
  };

  getChildContext() {
    return {
      dense: this.props.dense || this.context.dense || false,
      color: this.props.color || this.context.color || 'default',
      variant: this.props.variant || this.context.variant || 'body2'
    };
  }

  render() {
    const { classes, children, className: classNameProp, dense, divider } = this.props;
    const isDense = dense || this.context.dense || false;

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
