import Component from '@ember/component';
import layout from '../templates/components/wu-wizard-step';
import { computed } from '@ember/object';
import { guidFor } from '@ember/object/internals';

export default Component.extend({
  layout,
  tagName:'',
  /**
   * Is this step currently active?
   *
   * @return {Boolean}
   */
  isActive: computed('identifier', 'currentStep', function() {
    return this.identifier === this.currentStep;
  }),
  init() {
    this._super(...arguments);
    this.set('identifier', guidFor(this));
  },
  /**
   * We need to register this step in the wizard when it's
   * rendered into the DOM.
   *
   * @return {void}
   */
  didInsertElement() {
    this._super(...arguments);
    this.registerStep(this.identifier);
  },

  /**
   * We need to unregister this step from the wizard when it's
   * removed from the DOM.
   *
   * @return {void}
   */
  willDestroyElement() {
    this._super(...arguments);
    this.unregisterStep(this.identifier);
  }
});
