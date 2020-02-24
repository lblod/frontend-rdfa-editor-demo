import Component from '@ember/component';
import { assert } from '@ember/debug';
import { not } from '@ember/object/computed';
import layout from '../templates/components/wu-modal-buttons-button';

export default Component.extend({
  layout,
  tagName: 'a',
  classNames: ['modal-dialog__button'],
  classNameBindings: [
    'isButton:button'
  ],
  isButton: not('isLink'),
  isLink: false,

  label: null,

  didReceiveAttrs() {
    this._super(...arguments);
    assert('{{wu-modal-buttons-button}} requires an `onClick` action or null for no action.', this.get('onClick') !== undefined);
  },
  click() {
    if (this.onClick)
      this.onClick();
  }

});
