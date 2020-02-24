import Component from '@ember/component';
import layout from '../templates/components/wu-wizard-progressbar';

export default Component.extend({
  layout,
  tagName: '',
  actions: {
    setStep(step) {
      this.setStep(step);
    }
  }
});
