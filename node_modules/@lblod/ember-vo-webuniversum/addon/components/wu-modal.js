import Component from '@ember/component';
import layout from '../templates/components/wu-modal';

export default Component.extend({
  layout,
  classNameBindings: [
    'isVisible:modal-overlay:modal-overlay--hidden'
  ],
  title: null,
  destinationId: null,
  init() {
    this._super(...arguments);
    if (!this.get('destinationId'))
      this.set('destinationId', 'ember-vo-webuniversum-wormhole');
  },
  close() {
    this.set('isVisible', false);
    if (this.get('onClose'))
      this.get('onClose')();
  },
  actions: {
    close() {
      this.close();
    },
    clicked(event) {
      let node = document.querySelector('#ember-webuniversum-overlay');
      if (event.target.isSameNode(node))
        this.close();
    }
  }
});
