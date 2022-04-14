import React, { useContext, useState } from 'react'
import { AiFill } from 'react-icons/ai'
import { SiEthereum } from 'react-icons/si'
import { BsInfoCircle } from 'react-icons/bs'
import Loader from './Loader'
import { TransactionsContext } from '../context/TransactionsContext'

const commonStyles =
  'min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex border-[0.5px] flex justify-center items-center border-gray-400 text-white'

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    name={name}
    type={type}
    value={value}
    step={0.0001}
    onChange={handleChange}
    className={`my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism`}
  />
)

const Welcome = () => {
  const [inputField, setInputField] = useState({
    addressTo: '',
    message: '',
    amount: 0,
    keyword: '',
  })
  const { connectWallet, createTransaction, isLoading, currentAccount } =
    useContext(TransactionsContext)
  const { addressTo, message, amount, keyword } = inputField

  const handleChange = (e) => {
    setInputField((p) => ({ ...p, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      !addressTo.trim() ||
      !message.trim() ||
      !amount.trim() ||
      !keyword.trim()
    )
      return

    createTransaction(inputField)
  }
  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex lg:flex-row justify-between sm:p-10 pb-10 flex-col w-[80%]">
        <div className="flex flex-1 justify-center flex-col sm:mr-0">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Send Crypto <br />
            Across the World
          </h1>
          <p className="text-left mt-5 text-white font-light sm:w-9/12 w-12/12 text-base">
            Explore the crypto World.
            <br /> Buy and sell the cryptocurrencies
          </p>
          {!currentAccount && (
            <button
              className="flex-row justify-center items-center my-5 bg-[#2952e3] flex p-2 rounded-full cursor-pointer hover:bg-[#2546bd] text-white text-base font-semi-bold"
              onClick={connectWallet}
            >
              Connect Wallet
            </button>
          )}
          <div className="grid md:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${commonStyles}`}>Reliablity</div>
            <div className={`rounded-tr-2xl md:rounded-none ${commonStyles}`}>
              Security
            </div>
            <div className={`md:rounded-tr-2xl ${commonStyles}`}>Ethereum</div>
            <div className={`md:rounded-bl-2xl ${commonStyles}`}>Web 3.0</div>
            <div className={`rounded-bl-2xl md:rounded-none ${commonStyles}`}>
              Low Fees
            </div>
            <div className={`rounded-br-2xl ${commonStyles}`}>BlockChain </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 items-center justify-start sm:mt-0 mt-10">
          <div className="p-3 justify-end items-start flex-col rounded-xl h-[11rem] md:h-[12rem] min-w-[70%] md:w-[60%] lg:w-[80%] max-w-[90%] my-5 eth-card white-glassmorphism">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="p-1 rounded-full grid place-items-center border border-slate-500 hover:border-cyan-300">
                  <SiEthereum className="text-2xl text-gray-600 md:text-3xl hover:text-cyan-300" />
                </div>
                <BsInfoCircle
                  className="text-3xl text-gray-500 hover:text-orange-400
                   md:text-3x"
                />
              </div>
              <div>
                <p className="text-white font-light text-sm md:text-base w-11/12 break-words">
                  {currentAccount}
                </p>
                <p className="text-emerald-500 font-semibold text-lg mt-1 text-center tracking-wider text-shadow">
                  Ethereum
                </p>
              </div>
            </div>
          </div>
          <div className="p-5 sm:w-96 w-[80%] lg:w-11/12 max-w-full flex flex-col justify-start items-center blue-glassmorphism">
            <Input
              placeholder={'Address To'}
              name="addressTo"
              type="text"
              value={addressTo}
              handleChange={handleChange}
            />
            <Input
              placeholder={'Amount (ETH)'}
              name="amount"
              type="number"
              value={amount}
              handleChange={handleChange}
            />
            <Input
              placeholder={'Keyword (GIF)'}
              name="keyword"
              type="text"
              value={keyword}
              handleChange={handleChange}
            />
            <Input
              placeholder={'Enter Message'}
              name="message"
              type="text"
              value={message}
              handleChange={handleChange}
            />
            <div className="h-[1px] w-full bg-gray-400 my-2" />
            {isLoading ? (
              <Loader />
            ) : (
              <div>
                <button
                  onClick={handleSubmit}
                  className="text-orange-500 w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-orange-500 hover:text-white active:scale-105 rounded-full cursor-pointer"
                >
                  Send Now
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome
