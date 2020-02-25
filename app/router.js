import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('route-not-found', {
    path: '/*wildcard'
  });
  this.route('editor', function() {
    this.route('edit', { path: '/:id/edit' });
  });
});
