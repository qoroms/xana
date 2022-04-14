module.exports = {
  async up(db, client) {
    // update nft item trade history
    await db
      .collection("tradehistories")
      .updateMany({}, { $set: { paymentToken: "eth", priceInUSD: 0 } });
    // update offer collection
    await db
      .collection("offers")
      .updateMany({}, { $set: { paymentToken: "eth", priceInUSD: 0 } });
    // update bundle offer collection
    await db
      .collection("bundleoffers")
      .updateMany({}, { $set: { paymentToken: "eth", priceInUSD: 0 } });
    // update listings collection
    await db
      .collection("listings")
      .updateMany({}, { $set: { paymentToken: "eth", priceInUSD: 0 } });
    // update bundle listings collection
    await db
      .collection("bundlelistings")
      .updateMany({}, { $set: { paymentToken: "eth", priceInUSD: 0 } });
    // update nftitems collection
    await db.collection("nftitems").updateMany(
      {},
      {
        $set: {
          paymentToken: "eth",
          priceInUSD: 0,
          lastSalePricePaymentToken: "eth",
          lastSalePriceInUSD: 0,
        },
      }
    );
    // update nftitems collection
    await db.collection("bundles").updateMany(
      {},
      {
        $set: {
          paymentToken: "eth",
          priceInUSD: 0,
          lastSalePricePaymentToken: "eth",
          lastSalePriceInUSD: 0,
        },
      }
    );
  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
  },
};
