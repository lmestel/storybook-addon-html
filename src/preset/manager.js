import { addons, types } from '@storybook/addons';

import { ADDON_ID, PANEL_ID } from '../constants';
import { Panel } from '../Panel';

addons.register(ADDON_ID, () => {
  addons.add(PANEL_ID, {
    title: 'HTML',
    type: types.PANEL,
    match: ({ viewMode }) => viewMode === 'story',
    render: Panel,
  });
});
