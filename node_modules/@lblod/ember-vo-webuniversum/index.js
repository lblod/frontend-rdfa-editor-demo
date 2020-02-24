'use strict';

module.exports = {
  name: require('./package').name,
  included: function included(app) {
    this._super.included.apply(this, app);
    app.import('vendor/lblod/main.css');
    app.import('vendor/lblod/prototype.css');
    app.import('vendor/lblod/styleguide.css');
  },
  contentFor: function(type, config) {
    let version = '2.latest';

    if (config['vo-webuniversum'] && config['vo-webuniversum']['version'])
      version = config['vo-webuniversum']['version'];

    if (type === 'head'){
      return `
        <link href="//dij151upo6vad.cloudfront.net/${version}/css/vlaanderen-ui.css" rel="stylesheet" type="text/css" />
        <link href="//dij151upo6vad.cloudfront.net/${version}/css/vlaanderen-ui-corporate.css" rel="stylesheet" type="text/css" />
        <link href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css" rel="stylesheet" />`;
    } else if (type === 'body'){
      return `<script src="//dij151upo6vad.cloudfront.net/${version}/js/vlaanderen-ui.js" type="text/javascript"></script>\n` +
        '<div id="ember-vo-webuniversum-wormhole"></div>';
    } else {
      return '';
    }
  }
};
