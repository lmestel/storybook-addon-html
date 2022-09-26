function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useEffect, useState } from 'react';
import { AddonPanel } from '@storybook/components';
import { useChannel, useParameter } from '@storybook/api';
import SyntaxHighlighter from './components/SyntaxHighlighter';
import style from 'react-syntax-highlighter/dist/esm/styles/hljs/github-gist';
import { format as prettierFormat } from 'prettier/standalone';
import prettierHtml from 'prettier/parser-html';
import { EVENT_CODE_RECEIVED } from './constants';
var PARAM_KEY = 'html';
export var Panel = function Panel(props) {
  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      html = _useState2[0],
      setHTML = _useState2[1];

  var _useState3 = useState(''),
      _useState4 = _slicedToArray(_useState3, 2),
      code = _useState4[0],
      setCode = _useState4[1];

  var parameters = useParameter(PARAM_KEY, {});
  var _parameters$highlight = parameters.highlighter;
  _parameters$highlight = _parameters$highlight === void 0 ? {} : _parameters$highlight;
  var _parameters$highlight2 = _parameters$highlight.showLineNumbers,
      showLineNumbers = _parameters$highlight2 === void 0 ? false : _parameters$highlight2,
      _parameters$highlight3 = _parameters$highlight.wrapLines,
      wrapLines = _parameters$highlight3 === void 0 ? true : _parameters$highlight3,
      _parameters$prettier = parameters.prettier,
      prettier = _parameters$prettier === void 0 ? {} : _parameters$prettier;

  var prettierConfig = _objectSpread(_objectSpread({
    htmlWhitespaceSensitivity: 'ignore'
  }, prettier), {}, {
    // Ensure we always pick the html parser
    parser: 'html',
    plugins: [prettierHtml]
  });

  useChannel(_defineProperty({}, EVENT_CODE_RECEIVED, function (_ref) {
    var html = _ref.html;
    setHTML(html);
  }));
  useEffect(function () {
    setCode(prettierFormat(html, prettierConfig));
  }, [html]);
  return /*#__PURE__*/React.createElement(AddonPanel, props, /*#__PURE__*/React.createElement(SyntaxHighlighter, {
    language: 'xml',
    copyable: true,
    padded: true,
    style: style,
    showLineNumbers: showLineNumbers,
    wrapLines: wrapLines
  }, code));
};