import React, { useContext } from 'react'
import { TransactionsContext } from '../context/TransactionsContext'
import dummyData from '../utils/dummyData'
import TransactionCard from './TransactionCard'

const Transactions = () => {
  const { currentAccount, transactions } = useContext(TransactionsContext)

  return (
    <div className="flex w-full justify-center items-center xl:p-4 gradient-bg-transactions">
      <div className="flex justify-between w-full flex-col py-12 px-4 md:p-0 lg-p-10 xl-">
        {currentAccount ? (
          <h3 className="text-white lg:text-3xl md:text-xl text-lg">
            Transactions
          </h3>
        ) : (
          <h3 className="text-white lg:text-3xl md:text-xl text-lg">
            Connet Your Account To See The Latest Trasactions
          </h3>
        )}
        <div className="flex w-full gap-4 flex-wrap justify-center items-center pb-10 mt-10">
          {transactions.reverse().map((transaction, idx) => (
            <TransactionCard key={idx} {...transaction} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Transactions
