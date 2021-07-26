import { addons, types } from '@storybook/addons';
import { ADDON_ID, PANEL_ID } from '../constants';
import { Panel } from '../Panel';
addons.register(ADDON_ID, function () {
  addons.add(PANEL_ID, {
    title: 'HTML',
    type: types.PANEL,
    match: function match(_ref) {
      var viewMode = _ref.viewMode;
      return viewMode === 'story';
    },
    render: Panel
  });
});