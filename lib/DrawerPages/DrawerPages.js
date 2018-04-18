'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('material-ui/styles');

var _Drawer = require('material-ui/Drawer');

var _Drawer2 = _interopRequireDefault(_Drawer);

var _List = require('material-ui/List');

var _List2 = _interopRequireDefault(_List);

var _Divider = require('material-ui/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var drawerWidth = 240;

var styles = function styles(theme) {
  return {
    root: {
      position: 'fixed',
      width: drawerWidth,
      backgroundColor: theme.palette.background.default,
      fontFamily: 'roboto'
    },
    toolbar: theme.mixins.toolbar
  };
};

/** Боковая панель. */

var DrawerPages = function (_PureComponent) {
  _inherits(DrawerPages, _PureComponent);

  function DrawerPages() {
    _classCallCheck(this, DrawerPages);

    return _possibleConstructorReturn(this, (DrawerPages.__proto__ || Object.getPrototypeOf(DrawerPages)).apply(this, arguments));
  }

  _createClass(DrawerPages, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          openDrawer = _props.openDrawer,
          classNameProp = _props.className;


      return _react2.default.createElement(
        _Drawer2.default,
        {
          variant: 'persistent',
          open: openDrawer,
          classes: (0, _classnames2.default)({
            paper: classes.root
          }, classNameProp)
        },
        _react2.default.createElement('div', { className: classes.toolbar }),
        _react2.default.createElement(
          _List2.default,
          null,
          'Fjhkjhkjh'
        ),
        _react2.default.createElement(_Divider2.default, null),
        _react2.default.createElement(
          _List2.default,
          null,
          'Fkjjhkjhkjh'
        )
      );
    }
  }]);

  return DrawerPages;
}(_react.PureComponent);

DrawerPages.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  openDrawer: _propTypes2.default.bool,
  className: _propTypes2.default.string
};
exports.default = (0, _styles.withStyles)(styles)(DrawerPages);