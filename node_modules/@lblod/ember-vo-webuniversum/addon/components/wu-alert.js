import Component from '@ember/component';
import { assert } from '@ember/debug';
import layout from '../templates/components/wu-alert';

/**
 * Webuniversum alert box
 *
 * @module vo-webuniversum
 * @class WuAlert
 * @extends Ember.Component
*/
export default Component.extend({
  layout,
  classNames: ['alert'],
  classNameBindings: [
    'isWarning:alert--warning',
    'isError:alert--error',
    'isSuccess:alert--success'
  ],

  /**
   * Title of the alert
   *
   * @property title
   * @type string
   * @required
   * @public
  */
  title: null,

  /**
   * Message of the alert
   *
   * @property message
   * @type string
   * @required
   * @public
  */
  message: null,

  /**
   * Label of the action button in the alert box
   *
   * @property button
   * @type string
   * @public
  */
  button: null,

  /**
   * Whether the alert must be displayed as an error
   *
   * @property isError
   * @type boolean
   * @public
  */
  isError: false,

  /**
   * Whether the alert must be displayed as a success message
   *
   * @property isSuccess
   * @type boolean
   * @public
  */
  isSuccess: false,

  /**
   * Whether the alert must be displayed as a warning
   *
   * @property isWarning
   * @type boolean
   * @public
  */
  isWarning: false,

  didReceiveAttrs() {
    this._super(...arguments);
    assert('{{wu-alert}} requires an `onClick` action or null for no action if button value is set.', this.get('button') == null || (this.get('button') != null && this.get('onClick') !== undefined));
  }
});
