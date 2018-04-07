'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('material-ui/styles');

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Toolbar = require('material-ui/Toolbar');

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Button = require('material-ui/Button');

var _Button2 = _interopRequireDefault(_Button);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Menu = require('material-ui-icons/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
  return {
    root: {
      zIndex: theme.zIndex.drawer + 1,
      fontFamily: 'roboto'
    },
    logoDiv: {
      flex: 1
    },
    logoImg: {
      height: '2em',
      float: 'left'
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20
    }
  };
};

var AppBarPages = function (_PureComponent) {
  _inherits(AppBarPages, _PureComponent);

  function AppBarPages() {
    _classCallCheck(this, AppBarPages);

    return _possibleConstructorReturn(this, (AppBarPages.__proto__ || Object.getPrototypeOf(AppBarPages)).apply(this, arguments));
  }

  _createClass(AppBarPages, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          onChangeSidebar = _props.onChangeSidebar,
          logoSrc = _props.logoSrc,
          auth = _props.auth,
          onChangeLogin = _props.onChangeLogin,
          onChangeLogout = _props.onChangeLogout;


      return _react2.default.createElement(
        _AppBar2.default,
        { position: 'fixed', color: 'default', className: classes.root },
        _react2.default.createElement(
          _Toolbar2.default,
          null,
          _react2.default.createElement(
            _IconButton2.default,
            {
              color: 'inherit',
              className: classes.menuButton,
              onClick: function onClick() {
                onChangeSidebar();
              }
            },
            _react2.default.createElement(_Menu2.default, null)
          ),
          _react2.default.createElement(
            'div',
            { className: classes.logoDiv },
            _react2.default.createElement('img', { src: logoSrc, className: classes.logoImg, alt: 'Logo' })
          ),
          auth ? _react2.default.createElement(
            _Button2.default,
            {
              color: 'primary',
              onClick: function onClick() {
                onChangeLogout();
              }
            },
            '\u0412\u044B\u0439\u0442\u0438'
          ) : _react2.default.createElement(
            _Button2.default,
            {
              color: 'inherit',
              onClick: function onClick() {
                onChangeLogin();
              }
            },
            '\u0412\u043E\u0439\u0442\u0438'
          )
        )
      );
    }
  }]);

  return AppBarPages;
}(_react.PureComponent);

exports.default = (0, _styles.withStyles)(styles)(AppBarPages);