// import React from "react";
// import "./index.css";
// import { dummyInstrumentData } from "./DummyInstrumentData";
// import {getInstrumentsAsyn} from "../../../store/Instrument";

import React from 'react';
import Button from '@mui/material/Button';

import { useNavigate } from "react-router-dom";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from "react";
import { component } from 'react';


export const Transactions = () => {
  return (
    <>
      <HomePageHeader />
      <div className="transactions-container">
        {/* {dummyInstrumentData.map((data, key) => { */}
            {/* <div key={key}> */}
              <DenseTable
                // key={key}
                // instrumentId={data.instrumentId}
                // instrumentName={data.instrumentName}
                // instrumentType={data.instrumentType}
                // sector={data.sector}
                // country={data.country}
                // instrumentCurrency={data.instrumentCurrency}
                // isTradeable={data.isTradeable}
                // createdAt={data.createdAt}
                // modifiedAt={data.modifiedAt}
                // notes={data.notes}
              />
            </div>
          {/* ); */}
        {/* })} */}
      {/* </div> */}
    </>
  );
};


var isLoaded = false;


// console.log(result);
// console.log(dummyInstrumentData)

const HomePageHeader = () => {
  // const [open, setIsOpen] = React.useState(false);
  // const InstrumentForm = () => setIsOpen(true);
  return (
    <header className="header">
      <h2>Your Transactions Tracker</h2>
      <div className="new-itransaction__control">
          <label>Search instrument id </label>
          <input
            type="number"
            // value={enteredCurrency}
            // {...register("currency", { required: true })}
            // onChange={currencyChangeHandler}
          />
        </div>
      <div style={{ display: "flex" }}>
        <Button
          type="submit"
          style={{ marginLeft: "auto" }}
        >
          Add
        </Button>
      </div>
    </header>
  );
};

export default function DenseTable() {
   const [results, setResults] = useState([]);//it at all you're expecting array

   useEffect(() => {
      const transaction = async () => {
        const resp = await fetch(`http://18.142.178.20:5001/api/transactions`, {
          method: 'GET',
        });
        if (resp.ok) {
          const transactions = await resp.json();
          console.log(transactions)
          setResults(transactions);
        }
      }
      //dont forget to call the dataApi() function as below
      transaction();
    },[])

   //then below is you're rendered jsx mate,
   return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>transactionId</TableCell>
            <TableCell align="right">transactionId</TableCell>
            <TableCell align="right">transactionAmount</TableCell>
            <TableCell align="right">transactionCurrency</TableCell>
            <TableCell align="right">transactionDate</TableCell>
            <TableCell align="right">quantity</TableCell>
            <TableCell align="right">isCancelled</TableCell>
            {/* <TableCell align="right">createdAt</TableCell>
            <TableCell align="right">modifiedAt</TableCell> */}
            <TableCell align="right">transactiontype</TableCell>
            <TableCell align="right">Link to more info</TableCell>
          </TableRow>
        </TableHead> 
        {results.length>0? (
          <TableBody>
          {results.map((data) => (
            <TableRow
              // key={key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {/* <TableCell component="th" scope="row">
                {key}
              </TableCell> */}
              <TableCell align="right">{data.transaction_id}</TableCell>
              <TableCell align="right">{data.instrument_id}</TableCell>
              <TableCell align="right">{data.transaction_amount}</TableCell>
              <TableCell align="right">{data.currency}</TableCell>
              <TableCell align="right">{data.transaction_date}</TableCell>
              <TableCell align="right">{data.quantity}</TableCell>
              {/* <TableCell align="right">{data.isCancelled}</TableCell> */}
              {/* <TableCell align="right">{data.created_time}</TableCell>
              <TableCell align="right">{data.modified_time}</TableCell> */}
              <TableCell align="right">{data.transaction_type}</TableCell>
              {/* <TableCell align="right"><Button onClick={()=> {Getid(data.instrument_id)}}>More Info</Button></TableCell> */}

              <TableCell align="right"><Button onClick = {() => console.log('click')}>More Info</Button></TableCell>
              {/* <TableCell align="right"><Button onClick={()=> {handleClick(data.instrument_id)}}>More Info</Button></TableCell> */}

            </TableRow>
          ))}
        </TableBody>):(<></>)
        }
        
      </Table>
    </TableContainer>
  );

}



// export default function DenseTable() {
//   useEffect(()=>{
//     const instrument =  async () => {
//       const resp = await fetch(`http://localhost:5001/api/instruments`, {
//         method: 'GET',
//       });
//       if (resp.ok) {
//         const instruments = await resp.json();
//         console.log(instruments)
//         isLoaded = true;
//         return { instruments };
//       }
//     }});

//     const result = instrument()




//   }
