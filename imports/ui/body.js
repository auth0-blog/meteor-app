import { Meteor } from 'meteor/meteor';
import Auth0Lock from 'auth0-lock';
import { lock } from 'xcv58:auth0-lock';
import auth0 from 'auth0-js';
import { Template } from 'meteor/templating';

import { Slangs } from '../api/slangs.js';

import './slang.js';
import './body.html';


console.log(lock);

Template.body.onCreated(function bodyOnCreated() {
  Meteor.subscribe('slangs');
});

Template.body.helpers({
  slangs() {
    return Slangs.find({}, { sort: { createdAt: -1 } });
  },
});

Template.body.events({
  'submit .new-slang'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const slang = target.slang.value;
    const definition = target.definition.value;

    // Insert a task into the collection
    Meteor.call('slangs.insert', slang, definition);

    // Clear form
    target.slang.value = '';
    target.definition.value = '';
  },
  'click button.login'(event) {
     Lock.show();
  },
  'click button.logout'(event) {
      Meteor.logout();
  }
});