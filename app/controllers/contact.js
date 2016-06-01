import Ember from 'ember';

export default Ember.Controller.extend({

  headerMessage: 'Contact Us',
  responseMessage: '',
  emailAddress: '',
  contactMessage: '',

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),

  actions: {

    saveContact() {
      const email = this.get('emailAddress');
      const message = this.get('contactMessage');

      const newContact = this.store.createRecord('contact', {
        email: email,
        message: message
      });

      newContact.save().then((response) => {
        this.set('responseMessage', `Thank you! We saved your email address with the following id: ${response.get('id')}`);
        this.set('emailAddress', '');
        this.set('contactMessage', '');
      });

    }
  }

});
