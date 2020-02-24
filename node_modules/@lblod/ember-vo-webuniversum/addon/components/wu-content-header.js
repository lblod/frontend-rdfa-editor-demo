import { computed } from '@ember/object';
import Component from '@ember/component';
import layout from '../templates/components/wu-content-header';

export default Component.extend({
  layout,

  isAlt: true,
  taglineTitle: 'Vlaanderen',
  tagline: null,
  prefix: null,
  title: null,

  hasLogoText: computed('prefix', 'title', function() {
    return this.get('prefix') || this.get('title');
  })
});
