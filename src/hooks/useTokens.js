import { ChainId } from '@sushiswap/sdk';

// import iconETH from 'assets/imgs/eth.png';
import iconWETH from 'assets/imgs/weth.png';
// import iconUSDT from 'assets/imgs/usdt.png';
// import iconUSDC from 'assets/imgs/usdc.png';
// import iconDAI from 'assets/imgs/dai.png';

// eslint-disable-next-line no-undef
const isMainnet = process.env.REACT_APP_ENV === 'MAINNET';

const Tokens = {
  [ChainId.MAINNET]: [
    // {
    //   address: '',
    //   name: 'Ethereum',
    //   symbol: 'ETH',
    //   decimals: 18,
    //   icon: iconETH,
    // },
    {
      address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      name: 'Wrapped Ether',
      symbol: 'WETH',
      decimals: 18,
      icon: iconWETH,
    },
    // {
    //   address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
    //   name: 'Tether USD',
    //   symbol: 'fUSDT',
    //   decimals: 6,
    //   icon: iconUSDT,
    // },
    // {
    //   address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    //   name: 'USD Coin',
    //   symbol: 'USDC',
    //   decimals: 6,
    //   icon: iconUSDC,
    // },
    // {
    //   address: '0x6b175474e89094c44da98b954eedeac495271d0f',
    //   name: 'Dai Stablecoin',
    //   symbol: 'DAI',
    //   decimals: 18,
    //   icon: iconDAI,
    // },
  ],
  [ChainId.KOVAN]: [
    // {
    //   address: '',
    //   name: 'Ethereum',
    //   symbol: 'ETH',
    //   decimals: 18,
    //   icon: iconETH,
    // },
    {
      address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      name: 'Wrapped Ether',
      symbol: 'WETH',
      decimals: 18,
      icon: iconWETH,
    },
  ],
};

export default function useTokens() {
  const chain = isMainnet ? ChainId.MAINNET : ChainId.KOVAN;

  const tokens = Tokens[chain];

  const getTokenByAddress = addr => {
    const address =
      !addr ||
      addr === '0x0000000000000000000000000000000000000000' ||
      addr === 'eth'
        ? ''
        : addr;
    return (tokens || []).find(
      tk => tk.address.toLowerCase() === address.toLowerCase()
    );
  };

  return { getTokenByAddress, tokens };
}
