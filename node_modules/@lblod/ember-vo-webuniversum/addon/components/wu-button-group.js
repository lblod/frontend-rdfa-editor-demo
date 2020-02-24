import Component from '@ember/component';
import layout from '../templates/components/wu-button-group';

export default Component.extend({
  layout,
  classNameBindings: [
    'isInline:button-group__inline:button-group',
    'isInline:u-clearfix'
  ],
  isInline: false
});
