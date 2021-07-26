import { addons, makeDecorator } from '@storybook/addons';
import { renderToStaticMarkup } from 'react-dom/server';
import { EVENT_CODE_RECEIVED } from './constants';
export var withHtml = makeDecorator({
  name: 'withHTML',
  parameterName: 'html',
  skipIfNoParametersOrOptions: false,
  wrapper: function wrapper(storyFn, context, _ref) {
    var _ref$parameters = _ref.parameters,
        parameters = _ref$parameters === void 0 ? {} : _ref$parameters;
    setTimeout(function () {
      var channel = addons.getChannel();
      var html = renderToStaticMarkup(storyFn(context));
      channel.emit(EVENT_CODE_RECEIVED, {
        html: html,
        options: parameters
      });
    }, 0);
    return storyFn(context);
  }
});

if (module && module.hot && module.hot.decline) {
  module.hot.decline();
}