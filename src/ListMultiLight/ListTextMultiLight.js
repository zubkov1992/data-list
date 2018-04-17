import React, { PureComponent } from 'react';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { capitalize } from 'material-ui/utils/helpers';

const styles = theme => ({
  display4: theme.typography.display4,
  display3: theme.typography.display3,
  display2: theme.typography.display2,
  display1: theme.typography.display1,
  headline: theme.typography.headline,
  title: theme.typography.title,
  subheading: theme.typography.subheading,
  body2: theme.typography.body2,
  body1: theme.typography.body1,
  caption: theme.typography.caption,
  colorInherit: {
    color: 'inherit'
  },
  colorPrimary: {
    color: theme.palette.primary.main
  },
  colorSecondary: {
    color: theme.palette.secondary.main
  },
  colorTextSecondary: {
    color: theme.palette.text.secondary
  },
  colorError: {
    color: theme.palette.error.main
  }
});

/**Нижняя панель навигации. */
class ListTextMultiLight extends PureComponent {
  static propTypes = {
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
    text: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
      'inherit',
      'primary',
      'textSecondary',
      'secondary',
      'error',
      'default'
    ]),
    component: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
  };

  static defaultProps = {
    variant: 'body2'
  };

  render() {
    const { classes, text, variant, color, component: componentProp } = this.props;
    const Component = componentProp || 'span';

    return (
      <Component
        className={classNames(classes[variant], {
          [classes[`color${capitalize(color)}`]]: color !== 'default'
        })}
      >
        {text}
      </Component>
    );
  }
}

export default withStyles(styles)(ListTextMultiLight);
