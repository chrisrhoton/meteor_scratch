if (Meteor.isClient) {
  Meteor.subscribe("transactions");
  Template.body.helpers({
    transactions: function() {
      return Transactions.find({});
    },

    pendingCount: function() {
      return Transactions.find({}).count();
    }
  });
}