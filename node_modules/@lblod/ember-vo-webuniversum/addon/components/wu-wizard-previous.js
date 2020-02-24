import Component from '@ember/component';
import layout from '../templates/components/wu-wizard-previous';

export default Component.extend({
  layout,
  tagName: '',
  actions: {
    actionable() {
      if (this.onClick)
        this.onClick();
      this.previousStep();
    }
  }
});
