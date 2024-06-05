import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function CurrencyConvertion() {
    const [amountTo, setAmountTo] = useState("");
    const [amountFrom, setAmountFrom] = useState("");
    const [currencyTo, setCurrentTo] = useState("");
    const [currencyFrom, setCurrentFrom] = useState("");

    async function convert() {
        var myHeaders = new Headers();
        myHeaders.append("apikey", "ZEOcbrQz5MhCJ7U7O5hlwaTrjICVjjtU");

        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: myHeaders
        };

        try {
            let response = await fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${currencyTo}&from=${currencyFrom}&amount=${amountFrom}`, requestOptions);
            let result = await response.json();
            
            console.log(result);
            console.log('Conversion Rate:', result.info.rate);
            console.log('Converted Amount:', result.result);
            setAmountTo(result.result.toFixed(2)); // Set the converted amount to the state
        } catch (error) {
            console.log('error', error);
        }

    }

    return (
        <>
            <h1>Currency Conversion</h1>
            <div className='currencyConversion'>
                
                <Form.Select onChange={(e) => setCurrentFrom(e.target.value)} value={currencyFrom}>
                    <option>From:</option>
                    <option value="NGN">NGN</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                </Form.Select>
                <Form.Control type="number" placeholder="Amount" min="0.01" onChange={(e) => setAmountFrom(e.target.value)} value={amountFrom}/>
                <Form.Select onChange={(e) => setCurrentTo(e.target.value)} value={currencyTo} >
                    <option>TO:</option>
                    <option value="NGN">NGN</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                </Form.Select>
                <Form.Control type="number" placeholder="Amount" min="0.01" value={amountTo}/>
                <Button varient="primary" onClick={convert}>Convert</Button>
            </div>
        </>
    )
}