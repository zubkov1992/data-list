'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('material-ui/styles');

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _Card = require('material-ui/Card');

var _Card2 = _interopRequireDefault(_Card);

var _Collapse = require('material-ui/transitions/Collapse');

var _Collapse2 = _interopRequireDefault(_Collapse);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Typography = require('material-ui/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _ExpandMore = require('material-ui-icons/ExpandMore');

var _ExpandMore2 = _interopRequireDefault(_ExpandMore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
  return {
    root: {
      flexGrow: 1,
      marginBottom: 10,
      zIndex: theme.zIndex.drawer - 1,
      fontFamily: 'roboto'
    },
    details: {
      display: 'flex'
    },
    detailsLeft: {
      flexGrow: 1,
      flexBasis: '100%',
      display: 'flex',
      flexDirection: 'column'
    },
    detailsLeftActions: {
      marginTop: 'auto'
    },
    detailsRight: {
      flexGrow: 1,
      flexBasis: 150
    },
    detailsRightMedia: {
      height: 200,
      width: 120,
      margin: 'auto'
    },
    actionsBottom: {
      height: 20
    },
    contentMain: {
      display: 'flex'
    },
    contentMainLeft: {
      flexGrow: 1,
      flexBasis: '70%'
    },
    contentMainRight: {
      flexGrow: 1,
      flexBasis: '30%',
      borderLeft: '2px solid ' + theme.palette.divider,
      padding: theme.spacing.unit + 'px ' + theme.spacing.unit * 2 + 'px'
    },
    expand: {
      transform: 'rotate(0deg)',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
      }),
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    expandOpen: {
      transform: 'rotate(180deg)'
    }
  };
};

var CardDataMaster = function (_PureComponent) {
  _inherits(CardDataMaster, _PureComponent);

  function CardDataMaster() {
    _classCallCheck(this, CardDataMaster);

    return _possibleConstructorReturn(this, (CardDataMaster.__proto__ || Object.getPrototypeOf(CardDataMaster)).apply(this, arguments));
  }

  _createClass(CardDataMaster, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          subtitle = _props.subtitle,
          overhead = _props.overhead,
          title = _props.title,
          cover = _props.cover,
          overheadColor = _props.overheadColor,
          contentMain = _props.contentMain,
          actions = _props.actions,
          expandMain = _props.expandMain,
          handleExpandMainClick = _props.handleExpandMainClick,
          contentMainAdditional = _props.contentMainAdditional;


      return _react2.default.createElement(
        _Card2.default,
        { className: classes.root },
        _react2.default.createElement(
          'div',
          { className: classes.details },
          _react2.default.createElement(
            'div',
            { className: classes.detailsLeft },
            _react2.default.createElement(
              _Card.CardContent,
              null,
              overhead && _react2.default.createElement(
                _Typography2.default,
                { variant: 'caption', color: overheadColor },
                overhead
              ),
              title && _react2.default.createElement(
                _Typography2.default,
                { variant: 'headline' },
                title
              ),
              subtitle && _react2.default.createElement(
                _Typography2.default,
                { variant: 'subheading', color: 'textSecondary' },
                subtitle
              )
            ),
            actions && _react2.default.createElement(
              _Card.CardActions,
              { className: classes.detailsLeftActions },
              actions
            )
          ),
          _react2.default.createElement(
            'div',
            { className: classes.detailsRight },
            cover && _react2.default.createElement(_Card.CardMedia, { className: classes.detailsRightMedia, image: cover })
          )
        ),
        contentMain && _react2.default.createElement(
          _Card.CardActions,
          { className: classes.actionsBottom },
          _react2.default.createElement(
            _IconButton2.default,
            {
              className: (0, _classnames3.default)(classes.expand, _defineProperty({}, classes.expandOpen, expandMain)),
              onClick: handleExpandMainClick
            },
            _react2.default.createElement(_ExpandMore2.default, null)
          )
        ),
        contentMain && _react2.default.createElement(
          _Collapse2.default,
          { 'in': expandMain, timeout: 'auto' },
          _react2.default.createElement(
            _Card.CardContent,
            { className: classes.contentMain },
            _react2.default.createElement(
              _Typography2.default,
              { className: classes.contentMainLeft },
              contentMain
            ),
            contentMainAdditional && _react2.default.createElement(
              _Typography2.default,
              { variant: 'caption', className: classes.contentMainRight },
              contentMainAdditional
            )
          )
        )
      );
    }
  }]);

  return CardDataMaster;
}(_react.PureComponent);

exports.default = (0, _styles.withStyles)(styles)(CardDataMaster);