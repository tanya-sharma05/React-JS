import { useState } from "react"
import {InputBox} from './components'
import useCurrencyInfo from "./hooks/useCurrencyInfo";

// 1. Create custom hooks (useCurrencyInfo)
// 2. Make reusable components 

function App() {
  // 1 //
  const [amount,setAmount]=useState(0);
  const [from,setFrom]=useState("usd");
  const [to,setTo]=useState("inr");
  const [convertedAmount,setConvertedAmount]=useState(0);

  // 2 //
  const currencyInfo=useCurrencyInfo(from); // see from API we're using from currency in it
  const options=Object.keys(currencyInfo); // taking keys from API data from currencyInfo

  // 3 // 
  const swap=()=>{
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert=()=>{
    setConvertedAmount(amount*currencyInfo[to]);
  }

  // 1 take div and set background image
  // (step 2,3,4 are in a form)
  // 2 make inputboxes 
  // 3 make swap and it's function
  // 4 make convert button 

  // 4 //
  return (
    <div 
    className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
    style={{
      backgroundImage:`url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
    }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form onSubmit={(e)=>{
            e.preventDefault();
            convert();
          }}>
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency)=>setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount)=>setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
               <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={swap}
               >swap</button>    
            </div>
            <div className="w-full mb-1">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency)=>setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
            Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
 