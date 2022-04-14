const CollectionFactoryContract = {
  MAINNET_721_PRIVATE: '0x56229F5bAEa872AB5316E3653b0cEb68aa8bF1B8', //XanaNFTFactoryPrivate
  MAINNET_721_PUBLIC: '0x4a5a176dB4ADa4cdB36132489b21E3bcBBce051A', //XanaNFTFactory
  TESTNET_721_PRIVATE: '0x56229F5bAEa872AB5316E3653b0cEb68aa8bF1B8', //XanaNFTFactoryPrivate
  TESTNET_721_PUBLIC: '0x4a5a176dB4ADa4cdB36132489b21E3bcBBce051A', //XanaNFTFactory
  MAINNET_1155_PRIVATE: '0x82949787a84956C14A29e1F216dF423f3b2d3869', //XanaArtFactoryPrivate
  MAINNET_1155_PUBLIC: '0x9d6ae310b096E7Cd1890C7dA8b98ed8dC90f2c6f', //XanaArtFactory
  TESTNET_1155_PRIVATE: '0x82949787a84956C14A29e1F216dF423f3b2d3869', //XanaArtFactoryPrivate
  TESTNET_1155_PUBLIC: '0x9d6ae310b096E7Cd1890C7dA8b98ed8dC90f2c6f', //XanaArtFactory
  ABI: [
    {
      inputs: [{ internalType: 'address', name: '', type: 'address' }],
      name: 'exists',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'view',
      type: 'function'
    }
  ]
};

module.exports = CollectionFactoryContract;
