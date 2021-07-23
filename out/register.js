import React from 'react';
import { AddonPanel } from '@storybook/components';
import { addons, types } from '@storybook/addons';
import Panel from './Panel';
var ADDON_ID = 'html';
var PANEL_ID = "".concat(ADDON_ID, "/panel");
addons.register(ADDON_ID, function () {
  addons.add(PANEL_ID, {
    title: 'HTML',
    type: types.PANEL,
    render: function render(_ref) {
      var active = _ref.active,
          key = _ref.key;
      return /*#__PURE__*/React.createElement(AddonPanel, {
        active: active,
        key: key
      }, /*#__PURE__*/React.createElement(Panel, null));
    }
  });
});