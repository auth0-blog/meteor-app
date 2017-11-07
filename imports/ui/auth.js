import { Template } from 'meteor/templating';

import { Slangs } from '../api/slangs.js';

import './slang.html';

Template.slang.events({
  'click .delete'() {
    Meteor.call('slangs.remove', this._id);
  },
});