import { ChainId } from '@sushiswap/sdk';

import { WETH_ABI } from './abi';
import { calculateGasMargin, getHigherGWEI } from 'utils';
import useContract from 'hooks/useContract';
import { ethers } from 'ethers';

const WETH_ADDRESS = {
  [ChainId.MAINNET]: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  [ChainId.KOVAN]: '0xd0a1e359811322d97991e03f863a0c30c2cf029c',
};

// eslint-disable-next-line no-undef
const isMainnet = process.env.REACT_APP_ENV === 'MAINNET';
const CHAIN = isMainnet ? ChainId.MAINNET : ChainId.KOVAN;
export const useWETHContract = () => {
  const { getContract } = useContract();

  const wethAddress = WETH_ADDRESS[CHAIN];

  const getWETHContract = async () => await getContract(wethAddress, WETH_ABI);

  const getWETHBalance = async address => {
    const contract = await getWETHContract();
    return await contract.balanceOf(address);
  };

  const wrapETH = async (value, from) => {
    const contract = await getWETHContract();

    const options = {
      value,
      from,
      gasPrice: getHigherGWEI(),
    };

    const gasEstimate = await contract.estimateGas.deposit(options);
    options.gasLimit = calculateGasMargin(gasEstimate);

    return await contract.deposit(options);
  };

  const unwrapETH = async value => {
    const contract = await getWETHContract();

    const options = {
      gasPrice: getHigherGWEI(),
    };

    return await contract.withdraw(value, options);
  };

  const getAllowance = async (owner, spender) => {
    const contract = await getWETHContract();
    return await contract.allowance(owner, spender);
  };

  const approve = async (address, value) => {
    const contract = await getWETHContract();
    const tx = await contract.approve(
      address,
      ethers.constants.MaxUint256 || value
    );
    await tx.wait();
  };

  return {
    wethAddress,
    getWETHBalance,
    wrapETH,
    unwrapETH,
    getAllowance,
    approve,
  };
};
