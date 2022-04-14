import { ethers } from 'ethers'
import { createContext, useEffect, useState } from 'react'
import { contractABI, contractAddress } from '../utils/constants'

export const TransactionsContext = createContext({
  connectWallet: () => {},
  createTransaction: () => {},
  isLoading: null,
  currentAccount: '',
  transactions: [],
})

const { ethereum } = window

const createEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum)
  const signer = provider.getSigner()
  const transactionsContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  )
  return transactionsContract
}

const TransactionsProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [transactions, setTransactions] = useState([])

  const [transactionsCount, setTransactionsCount] = useState(
    localStorage.getItem('transactionsCount')
  )

  // CHECK IF WALLET EXISTS
  const checkWallet = async () => {
    try {
      if (!ethereum) return alert('Please Install Metamask')
      const accounts = await ethereum.request({ method: 'eth_accounts' })
      if (accounts.length) {
        setCurrentAccount(accounts[0])
      } else {
        // alert('No Accounts Found')
        console.log('No account found')
      }
    } catch (e) {
      console.log(e)
    }
  }

  // CONNECT TO WALLET
  const connectWallet = async () => {
    try {
      if (!ethereum) return alert('Please Install Metamask')
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' })

      setCurrentAccount(accounts[0])
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }

  //CHECK IF TRASACTIONS EXISTS
  const checkIfTransactionsExist = async () => {
    try {
      if (!ethereum) return alert('Please Install Metamask')
      const transactionsContract = createEthereumContract()
      const transactionsCount = transactionsContract.getTransactionsCount()
      window.localStorage.setItem('transactionsCount', transactionsCount)
    } catch (error) {
      console.log(error)
    }
  }

  // GET ALL TRANSACTIONS
  const getAllTransactions = async () => {
    try {
      if (!ethereum) return alert('Please Install Metamask')
      const transactionsContract = createEthereumContract()

      const availableTransactions =
        await transactionsContract.getAllTransactions()

      console.log(availableTransactions)

      const transactions = availableTransactions.map((transaction) => ({
        addressTo: transaction.sender,
        addressFrom: transaction.receiver,
        amount: parseInt(transaction.amount._hex) / 10 ** 18,
        keyword: transaction.keyword,
        message: transaction.message,
        timestamp: new Date(
          transaction.timestamp.toNumber() * 1000
        ).toLocaleString(),
      }))
      console.log(transactions)
      setTransactions(transactions)
    } catch (error) {
      console.log(error)
    }
  }

  // Create Transaction with our Transaction Contract
  const createTransaction = async (inputData = {}) => {
    const { addressTo, amount, message, keyword } = inputData
    const parsedAmount = ethers.utils.parseEther(amount)

    try {
      if (!ethereum) return alert('Please Install Metamask')
      if (!currentAccount) return alert('Please Connect To You Account')
      const transactionsContract = createEthereumContract()

      await ethereum.request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: currentAccount,
            to: addressTo,
            gas: '0x5208', //IN GWEI (UNITS)
            value: parsedAmount._hex,
          },
        ],
      })

      const transactionHash = await transactionsContract.addToBlockChain(
        addressTo,
        parsedAmount,
        message,
        keyword
      )

      setIsLoading(true)
      console.log(`Loading - ${transactionHash.hash}`)
      await transactionHash.wait()
      console.log(`Success - ${transactionHash.hash}`)
      setIsLoading(false)
      const transactionsCount =
        await transactionsContract.getTransactionsCount()
      setTransactionsCount(transactionsCount)
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    checkWallet()
    checkIfTransactionsExist()
    getAllTransactions()
  }, [transactionsCount])

  return (
    <TransactionsContext.Provider
      value={{
        connectWallet,
        createTransaction,
        isLoading,
        currentAccount,
        transactions,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}

export default TransactionsProvider
