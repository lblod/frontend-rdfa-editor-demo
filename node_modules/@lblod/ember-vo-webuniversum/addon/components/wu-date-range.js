import Component from '@ember/component';
import layout from '../templates/components/wu-date-range';

export default Component.extend({
  layout,
  dateFormat: 'DD.MM.YYYY',
  tagName: 'form',
  classNames: ['form'],
  fromLabel: 'van',
  fromValue: null,
  fromPlaceholder: null,
  fromMinDate: null,
  fromMaxDate: null,
  toLabel: 'tot',
  toValue: null,
  toPlaceholder: null,
  toMinDate: null,
  toMaxDate: null
});
