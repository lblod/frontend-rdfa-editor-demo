import { computed } from '@ember/object';
import Component from '@ember/component';
import layout from '../templates/components/wu-switch';

export default Component.extend({
  layout,
  classNames: ['checkbox-switch__wrapper'],
  label: null,
  inputElementId: computed('elementId', function() {
    return `${this.get("elementId")}-input`;
  }),
  onClick() {}
});
