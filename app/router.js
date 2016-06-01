import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('Contact');

  this.route('admin', function() {
    this.route('invitations');
    this.route('contacts');
  });
  this.route('libraries', function() {
    this.route('new');
  });
});

export default Router;
