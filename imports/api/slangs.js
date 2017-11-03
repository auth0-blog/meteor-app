import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Slangs = new Mongo.Collection('slangs');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('slangs', function tasksPublication() {
    return Slangs.find();
  });
}

Meteor.methods({
  'slangs.insert'(slang, definition) {
    check(slang, String);
    check(definition, String);

    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Slangs.insert({
      slang,
      definition,
      createdAt: new Date(),
      adderID: Meteor.userId(),
      username: Meteor.user().username,
    });
  },
  'slangs.remove'(slangId) {
    check(slangId, String);

    Slangs.remove(slangId);
  },
});