import { ChainId } from '@sushiswap/sdk';

export const NETWORK_LABEL = {
  [ChainId.MAINNET]: 'Ethereum',
  [ChainId.RINKEBY]: 'Rinkeby',
  [ChainId.ROPSTEN]: 'Ropsten',
  [ChainId.GÖRLI]: 'Görli',
  [ChainId.KOVAN]: 'Kovan',
  [ChainId.FANTOM]: 'Fantom',
  [ChainId.FANTOM_TESTNET]: 'Fantom Testnet',
  [ChainId.MATIC]: 'Matic',
  [ChainId.MATIC_TESTNET]: 'Matic Testnet',
  [ChainId.XDAI]: 'xDai',
  [ChainId.BSC]: 'BSC',
  [ChainId.BSC_TESTNET]: 'BSC Testnet',
  [ChainId.MOONBASE]: 'Moonbase',
  [ChainId.AVALANCHE]: 'Avalanche',
  [ChainId.FUJI]: 'Fuji',
  [ChainId.HECO]: 'HECO',
  [ChainId.HECO_TESTNET]: 'HECO Testnet',
  [ChainId.HARMONY]: 'Harmony',
  [ChainId.HARMONY_TESTNET]: 'Harmony Testnet',
};

export const Contracts = {
  [ChainId.MAINNET]: {
    auction: '0x3108deA4ad7dDEDe1b571275993961fc891Ab0eF',
    sales: '0x0042a5b0f7148323E909bf5954dfCe90A44B056A',
    bundleSales: '0x183AD14a372b145078206C5d5a62Af5890b118dF',
    factory: '0x4a5a176dB4ADa4cdB36132489b21E3bcBBce051A', //XanaNFTFactory
    privateFactory: '0x56229F5bAEa872AB5316E3653b0cEb68aa8bF1B8', //XanaNFTFactoryPrivate
    artFactory: '0x9d6ae310b096E7Cd1890C7dA8b98ed8dC90f2c6f', //XanaArtFactory
    privateArtFactory: '0x82949787a84956C14A29e1F216dF423f3b2d3869', //XanaArtFactoryPrivate
  },
  [ChainId.KOVAN]: {
    auction: '0xF216fEF6CB7aF6db64A8aC460648d50a6E2B4861',
    sales: '0xF5688bF118CEcA6865F2f69d4036bA4754aDB65C', //XanaMarketplace
    bundleSales: '0xD3b2F6AC9A098d3853eAB5fBd2c7959bB4c9ed49', //XanaBundleMarketplace
    factory: '0x50876DAbeC3368dEed0887403762C2CFe80D86d9', //XanaNFTFactory
    privateFactory: '0xc0F85FCe1Bcb64d4e5C16a349139de7678244C68', //XanaNFTFactoryPrivate
    artFactory: '0x818a52240e7C6C2b3c3473bdc9cAc4cF807a7573', //XanaArtFactory
    privateArtFactory: '0x7D0fdEA945BC933467b817aFd25F188a003E08cd', //XanaArtFactoryPrivate
  },
};
