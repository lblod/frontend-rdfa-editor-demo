import Component from '@ember/component';
import layout from '../templates/components/wu-wizard-next';

export default Component.extend({
  layout,
  tagName: '',
  actions: {
    actionable() {
      if (this.onClick)
        this.onClick();
      this.nextStep();
    }
  }
});
