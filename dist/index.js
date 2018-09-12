'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import './styles.css';

var MyComponent = function MyComponent() {
	return _react2.default.createElement(
		_react.Fragment,
		null,
		_react2.default.createElement(
			'h1',
			null,
			'NEW Hello from My Component'
		)
	);
};

exports.default = MyComponent;