import { addons, makeDecorator } from '@storybook/addons';
import { renderToStaticMarkup } from 'react-dom/server';
import { EVENT_CODE_RECEIVED } from './constants';

const noopDecorator = (storyFn, context) => storyFn(context);

export const withHtml = makeDecorator({
  name: 'withHTML',
  parameterName: 'html',
  skipIfNoParametersOrOptions: false,
  wrapper: (storyFn, context, { parameters = {} }) => {
    const decorator = parameters.decorator || noopDecorator;
    setTimeout(() => {
      const channel = addons.getChannel();
      const html = renderToStaticMarkup(
        decorator(context.undecoratedStoryFn, context),
      );
      channel.emit(EVENT_CODE_RECEIVED, { html, options: parameters });
    }, 0);
    return storyFn(context);
  },
});

if (module && module.hot && module.hot.decline) {
  module.hot.decline();
}
