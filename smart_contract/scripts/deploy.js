require('hardhat/builtin-tasks/console')

const main = async () => {
  const Transactions = await ethers.getContractFactory('Transactions')

  const transactions = await Transactions.deploy()

  await transactions.deployed()
  console.log('Transaction deployed ', transactions.address)
}

const runMain = async () => {
  try {
    await main()
    process.exit(0)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

runMain()
