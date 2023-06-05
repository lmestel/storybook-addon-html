"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withHtml = void 0;

var _addons = require("@storybook/addons");

var _server = require("react-dom/server");

var _constants = require("./constants");

var noopDecorator = function noopDecorator(storyFn, context) {
  return storyFn(context);
};

var withHtml = (0, _addons.makeDecorator)({
  name: 'withHTML',
  parameterName: 'html',
  skipIfNoParametersOrOptions: false,
  wrapper: function wrapper(storyFn, context, _ref) {
    var _ref$parameters = _ref.parameters,
        parameters = _ref$parameters === void 0 ? {} : _ref$parameters;
    var decorator = parameters.decorator || noopDecorator;
    setTimeout(function () {
      var channel = _addons.addons.getChannel();

      var html = (0, _server.renderToStaticMarkup)(decorator(context.undecoratedStoryFn, context));
      channel.emit(_constants.EVENT_CODE_RECEIVED, {
        html: html,
        options: parameters
      });
    }, 0);
    return storyFn(context);
  }
});
exports.withHtml = withHtml;

if (module && module.hot && module.hot.decline) {
  module.hot.decline();
}