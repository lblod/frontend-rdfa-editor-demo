import Component from '@ember/component';
import layout from '../templates/components/wu-datepicker';

/**
 * Webuniversum datepicker
 *
 * @module vo-webuniversum
 * @class WuDatepicker
 * @extends Ember.Component
*/
export default Component.extend({
  layout,
  tagName: 'form',
  classNames: ['form'],
  dateFormat: 'DD.MM.YYYY',

  /**
   * Placeholder of the datepicker input field
   *
   * @property placeholder
   * @type string
   * @public
  */
  placeholder: null,

  /**
   * Minimal date of the datepicker input field
   * Format: DD.MM.YYYY
   *
   * @property minDate
   * @type string
   * @public
  */
  minDate: null,

  /**
   * Maximal date of the datepicker input field
   *
   * @property maxDate
   * @type string
   * @public
  */
  maxDate: null,

  /**
   * Current selected value in the datepicker
   *
   * @property value
   * @type Date
   * @public
  */
  value: null
});
