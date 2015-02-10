Meteor.methods({
  addTransaction: function (eta) {
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Transactions.insert({
      eta: eta,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username
    });
  },
  claimTransaction: function (transactionId) {
    // Make sure the user is logged in before claiming a transaction
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    var transaction = Transaction.findOne(transactionId);
    Transactions.update(transactionId, { $set: { deliverer: Meteor.userId()} });
  }
});