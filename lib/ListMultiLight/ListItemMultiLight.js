'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('material-ui/styles');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
  return {
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
      borderBottom: '1px solid ' + theme.palette.divider,
      backgroundClip: 'padding-box'
    }
  };
};

/**Нижняя панель навигации. */

var ListItemMultiLight = function (_PureComponent) {
  _inherits(ListItemMultiLight, _PureComponent);

  function ListItemMultiLight() {
    _classCallCheck(this, ListItemMultiLight);

    return _possibleConstructorReturn(this, (ListItemMultiLight.__proto__ || Object.getPrototypeOf(ListItemMultiLight)).apply(this, arguments));
  }

  _createClass(ListItemMultiLight, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        dense: this.props.dense || this.context.dense || false,
        color: this.props.color || this.context.color || 'default',
        variant: this.props.variant || this.context.variant || 'body2'
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          children = _props.children,
          classNameProp = _props.className,
          dense = _props.dense,
          divider = _props.divider;

      var isDense = dense || this.context.dense || false;

      return _react2.default.createElement(
        'li',
        {
          className: (0, _classnames2.default)(classes.root, isDense ? classes.dense : classes.default, _defineProperty({}, classes.divider, divider), classNameProp)
        },
        children
      );
    }
  }]);

  return ListItemMultiLight;
}(_react.PureComponent);

ListItemMultiLight.defaultProps = {
  dense: false,
  divider: false
};
ListItemMultiLight.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  dense: _propTypes2.default.bool,
  divider: _propTypes2.default.bool,
  variant: _propTypes2.default.oneOf(['display4', 'display3', 'display2', 'display1', 'headline', 'title', 'subheading', 'body2', 'body1', 'caption']),
  color: _propTypes2.default.oneOf(['inherit', 'primary', 'textSecondary', 'secondary', 'error', 'default'])
};
ListItemMultiLight.childContextTypes = {
  dense: _propTypes2.default.bool,
  variant: _propTypes2.default.oneOf(['display4', 'display3', 'display2', 'display1', 'headline', 'title', 'subheading', 'body2', 'body1', 'caption']),
  color: _propTypes2.default.oneOf(['inherit', 'primary', 'textSecondary', 'secondary', 'error', 'default'])
};
ListItemMultiLight.contextTypes = {
  dense: _propTypes2.default.bool
};
exports.default = (0, _styles.withStyles)(styles)(ListItemMultiLight);