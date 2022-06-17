const contractAddress = 'eth address';

const PRICE = '0.1';

const abi = [
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "mint",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  }
];

export const mintNFT = async (web3, wallet, amount) => {
    if (wallet.chainId != '1') {
      try {
        await web3.currentProvider.request({
          method: 'wallet_switchEthereumChain',
          params: [
            { chainId: web3.utils.toHex('1') },
          ], // chainId must be in hexadecimal numbers
        });
      } catch(e) {
        alert('please change to ethereum');
        throw new Error('wrong chain');
      }
    }
    const contract = new web3.eth.Contract(abi, contractAddress);
    return contract.methods.mint(String(amount)).send({
      from: wallet.address,
      value: web3.utils.toWei(PRICE * amount)
    });
}