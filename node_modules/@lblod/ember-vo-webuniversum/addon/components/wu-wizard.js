import Component from '@ember/component';
import layout from '../templates/components/wu-wizard';
import { computed } from '@ember/object';
import { A } from '@ember/array';

export default Component.extend({
  layout,
  tagName: '',
  currentStep: null,
  init() {
    this._super(...arguments);
    this.set('steps', A());
    this.set('currentStep', '');
  },
  previousStep: computed('currentStep', 'steps', function() {
    const index = this.steps.indexOf(this.currentStep);
    if (index > 0 )
      return this.steps[index-1];
    else
      return null;
  }),
  nextStep: computed('currentStep', 'steps', function() {
    const index = this.steps.indexOf(this.currentStep);
    if (index < this.steps.length -1 )
      return this.steps[index+1];
    else
      return null;
  }),
  parsedSteps: computed('steps', 'currentStep', function() {
    return this.steps.map( (id) => {
      return {id, active: (id === this.currentStep) };
    });
  }),
  actions: {
    nextStep() {
      if (this.nextStep) {
        this.set('currentStep', this.nextStep);
      }
    },
    previousStep() {
      if (this.previousStep) {
        this.set('currentStep', this.previousStep);
      }
    },
    setStep(step) {
      this.set('currentStep', step);
    },
    registerStep(identifier) {
      this.steps.pushObject(identifier);
      if(!this.currentStep)
        this.set('currentStep',identifier);
    },
    unregisterStep(identifier) {
      this.steps.removeObject(identifier);
    }
  }
});
