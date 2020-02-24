import TextField from '@ember/component/text-field';
import layout from '../templates/components/wu-datepicker-input';
import moment from 'moment';

/* global vl */

// Known bug:
// highlighted date is not correctly update when value is changed
// by an external component
//
// See https://github.com/dbushell/Pikaday/issues/634

export default TextField.extend({
  layout,
  attributeBindings: [
    'data-datepicker',
    'minDate:data-datepicker-min',
    'maxDate:data-datepicker-max'
  ],
  'data-datepicker': true,
  dateFormat: 'DD.MM.YYYY',

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
  rawValue: null,

  didReceiveAttrs(){
    if(this.get('rawValue')){
      let date = moment(this.get('rawValue'));
      if(date.isValid()){
        this.set('value', date.format(this.get('dateFormat')));
        return;
      }
    }
    this.set('value', null);
  },

  didInsertElement() {
    this._super(...arguments);
    vl.datepicker.dress(this.element);
  },

  focusOut(){
    let date = moment.utc(this.get('value'), this.get('dateFormat'));
    if(date.isValid()){
      this.set('rawValue', date.toDate());
    } else {
      this.set('rawValue', null);
    }
    if (this.onChange)
      this.onChange(this.rawValue);
  }
});
