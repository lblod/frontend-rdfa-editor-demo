import Component from '@ember/component';
import layout from '../templates/components/wu-document-miniature';

export default Component.extend({
  layout,
  classNames: ['document-miniature'],
  classNameBindings: [
    'isTiny:document-miniature--tiny'
  ],
  type: null,
  label: null,
  metadata: null,
  isTiny: false
});
