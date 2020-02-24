import Component from '@ember/component';
import layout from '../templates/components/wu-modal-content';

export default Component.extend({
  layout,
  classNames: ['modal-dialog__content'],
  classNameBindings: [
    'isSectioned:modal-dialog__content--sectioned',
  ],
  isSectioned: false
});
