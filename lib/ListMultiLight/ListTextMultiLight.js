'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('material-ui/styles');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _helpers = require('material-ui/utils/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
  return {
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
  };
};

/**Нижняя панель навигации. */

var ListTextMultiLight = function (_PureComponent) {
  _inherits(ListTextMultiLight, _PureComponent);

  function ListTextMultiLight() {
    _classCallCheck(this, ListTextMultiLight);

    return _possibleConstructorReturn(this, (ListTextMultiLight.__proto__ || Object.getPrototypeOf(ListTextMultiLight)).apply(this, arguments));
  }

  _createClass(ListTextMultiLight, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          text = _props.text,
          variant = _props.variant,
          color = _props.color,
          componentProp = _props.component,
          classNameProp = _props.className;

      var Component = componentProp || 'span';
      var _context = this.context,
          variantContext = _context.variant,
          colorContext = _context.color;

      var variantProps = variant || variantContext;
      var colorProps = color || colorContext;

      return _react2.default.createElement(
        Component,
        {
          className: (0, _classnames2.default)(classes[variantProps], _defineProperty({}, classes['color' + (0, _helpers.capitalize)(colorProps)], colorProps !== 'default'), classNameProp)
        },
        text
      );
    }
  }]);

  return ListTextMultiLight;
}(_react.PureComponent);

ListTextMultiLight.propTypes = {
  variant: _propTypes2.default.oneOf(['display4', 'display3', 'display2', 'display1', 'headline', 'title', 'subheading', 'body2', 'body1', 'caption']),
  text: _propTypes2.default.string.isRequired,
  color: _propTypes2.default.oneOf(['inherit', 'primary', 'textSecondary', 'secondary', 'error', 'default']),
  component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  className: _propTypes2.default.string
};
ListTextMultiLight.defaultProps = {
  variant: 'body2',
  color: 'default'
};
ListTextMultiLight.contextTypes = {
  variant: _propTypes2.default.oneOf(['display4', 'display3', 'display2', 'display1', 'headline', 'title', 'subheading', 'body2', 'body1', 'caption']),
  color: _propTypes2.default.oneOf(['inherit', 'primary', 'textSecondary', 'secondary', 'error', 'default'])
};
exports.default = (0, _styles.withStyles)(styles)(ListTextMultiLight);