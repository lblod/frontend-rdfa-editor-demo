import Component from '@ember/component';
import { computed } from '@ember/object';
import { alias } from '@ember/object/computed';
import layout from '../templates/components/wu-icon';

let WuIconComponent = Component.extend({
  layout,
  tagName: 'i',
  classNames: [],
  classNameBindings: [
    'iconClass',
    'isFaIcon:fa',
    'isViIcon:vi'
  ],
  iconClass: alias('icon'),
  isFaIcon: computed('icon', function() {
    return this.get('icon') && this.get('icon').startsWith('fa-');
  }),
  isViIcon: computed('icon', function() {
    return this.get('icon') && this.get('icon').startsWith('vi-');
  })
});

WuIconComponent.reopenClass({
  positionalParams: ['icon']
});

export default WuIconComponent;
