const DISABLED_PAYTOKENS =
  process.env.NETWORK_CHAINID === '1'
    ? [
        {
          address: '0x0000000000000000000000000000000000000000',
          name: 'Ethereum',
          symbol: 'eth',
          decimals: 18,
        },
      ]
    : [
        {
          address: '0x0000000000000000000000000000000000000000',
          name: 'Ethereum',
          symbol: 'eth',
          decimals: 18,
        },
      ];

const PAYTOKENS =
  process.env.NETWORK_CHAINID === '1'
    ? [
        {
          address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
          name: 'Wrapped Ether',
          symbol: 'weth',
          decimals: 18,
        },
        // {
        //   address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        //   name: 'Tether USD',
        //   symbol: 'fusdt',
        //   decimals: 6,
        // },
        // {
        //   address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
        //   name: 'USD Coin',
        //   symbol: 'usdc',
        //   decimals: 6,
        // },
        // {
        //   address: '0x6b175474e89094c44da98b954eedeac495271d0f',
        //   name: 'Dai Stablecoin',
        //   symbol: 'dai',
        //   decimals: 18,
        // },
      ]
    : [
        {
          address: '0xd0a1e359811322d97991e03f863a0c30c2cf029c',
          name: 'Wrapped Ether',
          symbol: 'weth',
          decimals: 18,
        },
      ];

module.exports = { PAYTOKENS, DISABLED_PAYTOKENS };
