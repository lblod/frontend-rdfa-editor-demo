import Component from '@ember/component';
import { or } from '@ember/object/computed';
import layout from '../templates/components/wu-info-tile-header';

export default Component.extend({
  layout,
  tagName: 'header',
  classNames: ['info-tile__header'],
  hasTitle: or('title', 'subtitle'),
  subtitle: null,
  title: null
});
