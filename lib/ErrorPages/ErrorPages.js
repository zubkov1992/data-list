'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Typography = require('material-ui/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _styles = require('material-ui/styles');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
  return {
    root: {
      width: '100%',
      height: '100%',
      position: 'fixed',
      top: 0,
      left: 0,
      display: 'flex',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    },
    message: {
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  };
};

/**Нижняя панель навигации. */

var ErrorPages = function (_React$Component) {
  _inherits(ErrorPages, _React$Component);

  function ErrorPages() {
    _classCallCheck(this, ErrorPages);

    return _possibleConstructorReturn(this, (ErrorPages.__proto__ || Object.getPrototypeOf(ErrorPages)).apply(this, arguments));
  }

  _createClass(ErrorPages, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          message = _props.message;


      return _react2.default.createElement(
        'div',
        { className: classes.root },
        _react2.default.createElement(
          'div',
          { className: classes.message },
          _react2.default.createElement(
            _Typography2.default,
            { variant: 'headline', color: 'error', align: 'center' },
            message
          )
        )
      );
    }
  }]);

  return ErrorPages;
}(_react2.default.Component);

ErrorPages.propTypes = {
  message: _propTypes2.default.string.isRequired
};
exports.default = (0, _styles.withStyles)(styles)(ErrorPages);