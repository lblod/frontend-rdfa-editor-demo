import Component from '@ember/component';
import { computed } from '@ember/object';
import { and, equal } from '@ember/object/computed';
import { assert } from '@ember/debug';
import layout from '../templates/components/wu-button';

export default Component.extend({
  layout,
  tagName: 'button',
  attributeBindings: [
    'type',
    'href',
    'target',
    'title',
    'download',
    'disabled',
    'isLoading:disabled'
  ],
  classNames: [],
  classNameBindings: [
    'isAlt:button--alt',
    'isAltBlue:button--alt--blue',
    'isButton:button',
    'isBlock:button--block',
    'isLarge:button--large',
    'isSmall:button--small',
    'isTiny:button--tiny',
    'isNarrow:button--narrow',
    'isLink:button--link',
    'isDark:button--dark',
    'isDarkLink:button--link--dark',
    'isLoading:button--loading',
    'isWide:button--wide',
    'isSecondary:button--secondary',
    'isWarning:button--warning',
    'isWarning:button--secondary',
    'disabled:button--disabled',
  ],
  command: null,
  commandLocation: null, // null, below or inside
  commandLocationClass: computed('commandLocation', function() {
    return this.get('commandLocation') ? `button__info--${this.get('commandLocation')}` : '';
  }),
  disabled: false,
  isAlt: false,
  isBlue: false,
  isBlock: false,
  isButton: true,
  isDark: false,
  isLink: false,
  isLoading: false,
  isNarrow: false,
  isWide: false,
  isSecondary: false,
  isWarning: false,
  icon: null,
  label: null,
  size: null, // null, 'tiny', 'small' or 'large'

  isLarge: equal('size', 'large'),
  isSmall: equal('size', 'small'),
  isTiny: equal('size', 'tiny'),

  isDarkLink: and('isLink', 'isDark'),
  isAltBlue: and('isAlt', 'isBlue'),

  didReceiveAttrs() {
    this._super(...arguments);
    assert('{{wu-button}} requires an `onClick` action or null for no action.', this.get('onClick') !== undefined);
  },
  click() {
    if (this.onClick)
      this.onClick();
  }
});
