import Component from '@ember/component';
import layout from '../templates/components/wu-checkbox';

export default Component.extend({
  layout,
  tagName: 'label',
  attributeBindings: [
    'disabled'
  ],
  classNames: ['checkbox'],
  classNameBindings: [
    'isBlock:checkbox--block',
    'disabled:checkbox--disabled',
    'error:checkbox--error'
  ],
  checked: false,
  disabled: false,
  isBlock: false,
  error: null,
  label: null,
  onClick() {}
});
