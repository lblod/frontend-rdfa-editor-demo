import Component from '@ember/component';
import layout from '../templates/components/wu-wizard-pane';

export default Component.extend({
  layout,
  tagName:'',
  actions: {
    nextStep() {
      this.nextStep();
    }
  }
});
