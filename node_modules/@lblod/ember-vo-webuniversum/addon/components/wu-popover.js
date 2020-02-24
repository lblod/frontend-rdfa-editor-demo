import Component from '@ember/component';
import { equal } from '@ember/object/computed';
import layout from '../templates/components/wu-popover';

export default Component.extend({
  layout,
  classNames: ['popover', 'js-popover'],
  classNameBindings: [
    'isAlignLeft:popover--left',
    'isAlignCenter:popover--center',
    'isOpen:js-popover--open'
  ],
  align: 'left', // left or center,
  isAlignLeft: equal('align', 'left'),
  isAlignCenter: equal('align', 'center'),

  isOpen: false,

  actions: {
    close() {
      this.set('isOpen', false);
    },
    toggle() {
      this.toggleProperty('isOpen');
    }
  }

});
