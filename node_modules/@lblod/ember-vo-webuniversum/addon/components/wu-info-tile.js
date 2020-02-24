import Component from '@ember/component';
import { alias, bool, equal } from '@ember/object/computed';
import layout from '../templates/components/wu-info-tile';

export default Component.extend({
  layout,
  classNames: ['info-tile'],
  classNameBindings: [
    'isAlt:info-tile--alt',
    'isCentered:info-tile--center',
    'isCentered:info-tile--v-center',
    'isClickable:info-tile--clickable',
    'isMedium:info-tile--m',
    'isLarge:info-tile--l'
  ],
  center: alias('isCentered'),
  isAlt: false,
  isCentered: false,
  isMedium: equal('size', 'medium'),
  isLarge: equal('size', 'large'),
  isClickable: bool('onClick'),
  size: 'normal', // one of 'normal', 'medium', 'large'
  onClick: null,
  click() {
    if (this.onClick)
      this.onClick();
  }
});
