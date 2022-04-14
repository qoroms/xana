require("dotenv").config();
const XanaContacts = {
  discord: "http://chat.fantom.network/",
  twitter: "https://twitter.com/XanaFDN",
  telegram: "https://t.me/fantomfoundation",
  reddit: "https://reddit.com/r/XanaFoundation",
  xanaUnsubscribe: `https://${
    process.env.RUNTIME ? "testnet." : ""
  }xana.io/settings/notification`,
  email: "support.artion@fantom.foundation",
};

module.exports = XanaContacts;
