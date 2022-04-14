import { ChainId } from '@sushiswap/sdk';
import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';

import { NetworkConnector } from './NetworkConnector';

import XANA_LOGO_URL from '../assets/svgs/Logo.svg';

// eslint-disable-next-line no-undef
const isMainnet = process.env.REACT_APP_ENV === 'MAINNET';

const RPC = isMainnet
  ? {
      [ChainId.MAINNET]:
        'https://mainnet.infura.io/v3/680cfa7e89584f92bd4777c9920bf1e8',
    }
  : {
      [ChainId.KOVAN]:
        'https://kovan.infura.io/v3/680cfa7e89584f92bd4777c9920bf1e8',
    };

export const network = new NetworkConnector({
  defaultChainId: ChainId.MAINNET,
  urls: RPC,
});

export const injected = new InjectedConnector({
  supportedChainIds: isMainnet
    ? [
        1, // mainnet
      ]
    : [
        42, // ropsten testnet
      ],
});

export const walletlink = new WalletLinkConnector({
  url: 'https://mainnet.infura.io/v3/680cfa7e89584f92bd4777c9920bf1e8',
  appName: 'Xana',
  appLogoUrl: XANA_LOGO_URL,
});
