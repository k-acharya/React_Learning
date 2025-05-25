import React, {useId} from 'react'


function InputBox({
    label,                                //important to see diffence and concept
    amount,                               //.
    onAmountChange,                       //.
    onCurrencyChange,                     //.
    currencyOptions= [],                  //.
    selectCurrency= "usd",                //important to see diffence and concept
    amountDisable= false,                 //.
    currrencyDisable= false,              //.
    className = "",
}) {
   const amountInputId= useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">   
                    {label}                                                        
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"                          //.
                    type="number"                                                                  //.
                    placeholder="Amount"                                                           //.
                    disabled={amountDisable}                                                       //important to see diffence and concept
                    value={amount}                                                                 //.
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}     //.
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}                                                  //.
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}  //here && is to check whether it has value or not
                    disabled= {currrencyDisable}                                            //ye field enable ha ki disable ha dekhlete ha
                >
                    
                    {currencyOptions.map((currency) => (    //.agar loops use karna ha toh key chahiya...remember the key in loops in react
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}

                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
