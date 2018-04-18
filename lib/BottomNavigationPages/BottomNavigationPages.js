'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('material-ui/styles');

var _BottomNavigation = require('material-ui/BottomNavigation');

var _BottomNavigation2 = _interopRequireDefault(_BottomNavigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
  return {
    root: {
      position: 'fixed',
      width: '100%',
      left: 'auto',
      right: 0,
      bottom: 0,
      boxShadow: theme.shadows[10]
    },
    toolbar: theme.mixins.toolbar
  };
};

/**Нижняя панель навигации. */

var BottomNavigationPages = function (_Component) {
  _inherits(BottomNavigationPages, _Component);

  function BottomNavigationPages() {
    _classCallCheck(this, BottomNavigationPages);

    return _possibleConstructorReturn(this, (BottomNavigationPages.__proto__ || Object.getPrototypeOf(BottomNavigationPages)).apply(this, arguments));
  }

  _createClass(BottomNavigationPages, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          handleChange = _props.handleChange,
          valueChanged = _props.valueChanged,
          children = _props.children,
          classNameProp = _props.className;


      return _react2.default.createElement(
        _BottomNavigation2.default,
        {
          value: valueChanged,
          onChange: handleChange,
          className: (0, _classnames2.default)(classes.root, classes.toolbar, classNameProp)
        },
        children
      );
    }
  }]);

  return BottomNavigationPages;
}(_react.Component);

BottomNavigationPages.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  handleChange: _propTypes2.default.func,
  valueChanged: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  children: _propTypes2.default.node,
  className: _propTypes2.default.string
};
exports.default = (0, _styles.withStyles)(styles)(BottomNavigationPages);