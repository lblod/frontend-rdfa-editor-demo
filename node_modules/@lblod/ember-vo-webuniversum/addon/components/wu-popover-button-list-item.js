import Component from '@ember/component';
import { assert } from '@ember/debug';
import layout from '../templates/components/wu-popover-button-list-item';

export default Component.extend({
  layout,
  tagName: 'li',

  didReceiveAttrs() {
    this._super(...arguments);
    assert('{{wu-popover-button-list-item}} requires an `onClick` action or null for no action.', this.get('onClick') !== undefined);
  },
  click() {
    if (this.onClick)
      this.onClick();
    if (this.close)
      this.close();
  }
});
