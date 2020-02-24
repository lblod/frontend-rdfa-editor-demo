import Component from '@ember/component';
import layout from '../templates/components/wu-accordion';
/* global vl */

export default Component.extend({
  layout,
  classNames: ['js-accordion'],
  classNameBindings: ['openAtStart:js-accordion--open'],
  label: null,
  openAtStart: false,
  didInsertElement() {
    this._super(...arguments);
    vl.accordion.dress(this.element);
  }
});
