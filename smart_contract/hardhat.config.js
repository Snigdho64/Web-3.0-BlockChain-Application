require('@nomiclabs/hardhat-waffle')
require('@nomiclabs/hardhat-ethers')

require('dotenv').config()

module.exports = {
  solidity: '0.8.13',
  networks: {
    ropsten: {
      url: process.env.ALCHEMY_HTTP_KEY,
      accounts: [process.env.METAMASK_ACCOUNT_PRIVATE_KEY],
    },
  },
}
