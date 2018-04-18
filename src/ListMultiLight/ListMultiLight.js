import React, { PureComponent } from 'react';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const styles = theme => ({
  root: {
    listStyle: 'none'
  },
  padding: {
    paddingTop: theme.spacing.unit / 2,
    paddingBottom: theme.spacing.unit / 2
  },
  dense: {
    paddingTop: theme.spacing.unit / 3,
    paddingBottom: theme.spacing.unit / 3
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
    subheader: PropTypes.node,
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
