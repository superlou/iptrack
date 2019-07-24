import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('patents');
  this.route('new-patent-app');
  this.route('new-patent-grant');
  this.route('patent-app', {path: '/patents/app/:patent-app_id'});
});

export default Router;
