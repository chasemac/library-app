import Ember from 'ember';

export default Ember.Route.extend({
// contact points to models/contact.js ?  
    model() {
      return this.store.findAll('contact');
    }
});
