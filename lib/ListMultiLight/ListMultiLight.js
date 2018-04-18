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
  };
};

/**Нижняя панель навигации. */

var ListMultiLight = function (_PureComponent) {
  _inherits(ListMultiLight, _PureComponent);

  function ListMultiLight() {
    _classCallCheck(this, ListMultiLight);

    return _possibleConstructorReturn(this, (ListMultiLight.__proto__ || Object.getPrototypeOf(ListMultiLight)).apply(this, arguments));
  }

  _createClass(ListMultiLight, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        dense: this.props.dense || this.context.dense || false
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          classes = _props.classes,
          children = _props.children,
          classNameProp = _props.className,
          dense = _props.dense,
          disablePadding = _props.disablePadding,
          subheader = _props.subheader;


      return _react2.default.createElement(
        'ul',
        {
          className: (0, _classnames2.default)(classes.root, (_classNames = {}, _defineProperty(_classNames, classes.dense, dense && !disablePadding), _defineProperty(_classNames, classes.padding, !disablePadding), _defineProperty(_classNames, classes.subheader, subheader), _classNames), classNameProp)
        },
        subheader,
        children
      );
    }
  }]);

  return ListMultiLight;
}(_react.PureComponent);

ListMultiLight.defaultProps = {
  dense: false,
  disablePadding: false
};
ListMultiLight.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  dense: _propTypes2.default.bool,
  disablePadding: _propTypes2.default.bool,
  subheader: _propTypes2.default.node
};
ListMultiLight.childContextTypes = {
  dense: _propTypes2.default.bool
};
exports.default = (0, _styles.withStyles)(styles)(ListMultiLight);