if (Meteor.isServer) {
  // Only publish tasks that are public or belong to the current user
  Meteor.publish("transactions", function () {
    return Transactions.find({});
  });
}