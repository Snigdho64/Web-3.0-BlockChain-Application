import useFetch from '../hooks/useFetch'

const shortAddress = (address = '') =>
  address.slice(0, 5) + '...' + address.slice(-4)

const TransactionCard = ({
  url,
  addressTo,
  addressFrom,
  amount,
  message,
  keyword,
  timestamp,
}) => {
  const gifUrl = useFetch({ keyword })
  return (
    <div
      className="bg-[#181918] 
    sm:max-w-[250px]
    md:max-w-[300px] 
    lg:min-h-[350px]
    xl:max-w-[350px] 
    w-[80%]
    shadow-md
    drop-shadow-md
    hover:shadow-emerald-200
    hover:bg-opacity-50
    rounded-lg
    xl:rounded-2xl 
    p-4
    xl:p-6"
    >
      <div className="flex flex-col items-center w-full mt-3">
        <div className="w-full mb-6 p-2 flex flex-col">
          <div className="flex flex-col sm:flex-row justify-between">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`http://ropsten.etherscan.io/address/${addressFrom}`}
            >
              <p className="text-white text-base hover:text-teal-500">
                From: {shortAddress(addressFrom)}
              </p>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`http://ropsten.etherscan.io/address/${addressTo}`}
            >
              <p className="text-white text-base hover:text-emerald-500">
                To:{shortAddress(addressTo)}
              </p>
            </a>
          </div>
          <p className="self-center text-lg text-green-400">
            Amount: {amount}
          </p>
          {message && (
            <>
              <br />
              <p className="text-white text-base">Message: {message}</p>
            </>
          )}
        </div>
        <div className="relative flex flex-col justify-center w-full h-full self-center pb-5">
          <img
            src={gifUrl || url}
            alt="gif"
            className="w-full 
            min-h-[150px] 
            sm:min-h-[200px] 
            md:min-h-[250px] 
            lg:m-h-[300px] 
            xl:min-h-[300px]
            max-h-[400px] 
            rounded-md
            xl:rounded-2xl
            shadow-lg"
          />
          <div className="bg-black absolute bottom-[0px] p-2 self-center lg:p-4 w-max rounded-3xl shadow-2xl">
            <p className="text-[#37c7da] font-bold">{timestamp}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default TransactionCard
