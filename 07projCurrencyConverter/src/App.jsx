import { useState } from 'react'
import {InputBox} from './components'
import useCurrencyInfo from './customHooks/useCurrencyInfo'  //ye hook laliya


function App() {
  //set karna ha hamare states..bcz wo jo input banaya ha na usme bhot sare states pass kari ha isliya
  const[amount, setAmount]= useState(0)
  const[from, setFrom]= useState("usd")
  const[to, setTo]= useState("inr")
  const[convertedAmount, setConvertedAmount]= useState(0)

  const currencyInfo= useCurrencyInfo(from)                           //ab dekhna ha hook hame kese use karna ha

  const options= Object.keys(currencyInfo || {})                            //key separate karke nikalne ke lia from object

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)                                        //swaping kia
    setAmount(convertedAmount)
  }

  const convert= () => {
    
    if (!currencyInfo || !currencyInfo[to]) {                                                   //..this i see and updated from cgpt
      console.error("Currency info not loaded or missing target currency:", currencyInfo);      //..this i see and updated from cgpt
      return;
    }

    setConvertedAmount(amount * currencyInfo[to])                    //covert karnekelia...ouput isise ayega
  }
  
    return (                                                          //1st we take this htmla nd css from hitesh sirs github repo then applied reactjs
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url(https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
            }}                         //..we give our own url for pics
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();              //.here
                            convert()                        //.
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"                                 
                                amount={amount}                           //.
                                currencyOptions={options}                    //.
                                onCurrencyChange={(currency) => setAmount(currency)}  //.
                                selectCurrency={from}                        //.
                                onAmountChange= {(amount) => setAmount(amount)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}            //.
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}                              //.
                                currencyOptions={options}                             //.
                                onCurrencyChange={(currency) => setTo(currency)}      //.
                                selectCurrency={to}                                 //.
                                amountDisable                                     //.kuch bhi pass karneka matlab ha true pass karahe ho
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>

     );
}

export default App

