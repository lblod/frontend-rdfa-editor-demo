import Component from '@ember/component';
import { alias, bool, equal } from '@ember/object/computed';
import layout from '../templates/components/wu-badge';

export default Component.extend({
  layout,
  classNames: ['badge'],
  classNameBindings: [
    'hasBorder:badge--border',
    'hasIcon:badge--icon',
    'hasInitials:badge--initials',
    'isAccent:badge--accent',
    'isAlt:badge--alt',
    'isLarge:badge--l',
    'isMedium:badge--m',
    'isSmall:badge--s',
    'isXLarge:badge--xl'
  ],
  border: alias('hasBorder'),
  hasBorder: false,
  hasIcon: bool('icon'),
  hasInitials: bool('initials'),
  icon: null,
  initials: null,
  isAccent: false,
  isAlt: false,
  isSmall: equal('size', 'small'),
  isMedium: equal('size', 'medium'),
  isLarge: equal('size', 'large'),
  isXLarge: equal('size', 'xlarge'),
  label: null,
  size: 'medium' // one of 'small', 'medium', 'large', 'xlarge'
});
