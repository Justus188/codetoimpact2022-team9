// import React from "react";
// import "./index.css";
import { dummyInstrumentData } from "./DummyInstrumentData";
import {getInstrumentsAsyn} from "../../../store/Instrument";

import * as React from 'react';
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

export const Instruments = () => {
  return (
    <>
      <HomePageHeader />
      <div className="instrument-container">
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
  return (
    <header className="header">
      <h2>Your Instrument Tracker</h2>
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

// const MarketValuationTimeSeries = ({ isLoading }) => {
//   return (
//       <>
//           {isLoading ? (
//               <SkeletonTotalOrderCard />
//           ) : (
//               <CardWrapper border={false} content={false}>
//                   <Box sx={{ p: 2.25 }}>
//                       {<Chart {...MarketValuationData} />}
//                   </Box>
//               </CardWrapper>
//           )}
//       </>
//   );
// };

export default function DenseTable() {
   const [results, setResults] = useState([]);//it at all you're expecting array

   const handleClick =(id) => {
    console.log('Hello '+ id);
   }


   let navigate = useNavigate();
   const routeChange = () => {
    let path = '../instruments-page-selected';
    navigate(path);
   }

   function Getid(id){
      console.log('Hello '+ id);
     
   }

   useEffect(() => {
      const instrument = async () => {
        const resp = await fetch(`http://localhost:5001/api/instruments`, {
          method: 'GET',
        });
        if (resp.ok) {
          const instruments = await resp.json();
          console.log(instruments)
          setResults(instruments);
        }
      }
      //dont forget to call the dataApi() function as below
      instrument();
    },[])

   //then below is you're rendered jsx mate,
   return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>instrumentId</TableCell>
            <TableCell align="right">instrumentName</TableCell>
            <TableCell align="right">instrumentType</TableCell>
            <TableCell align="right">sector</TableCell>
            <TableCell align="right">country</TableCell>
            <TableCell align="right">instrumentCurrency</TableCell>
            <TableCell align="right">isTradeable</TableCell>
            {/* <TableCell align="right">createdAt</TableCell>
            <TableCell align="right">modifiedAt</TableCell> */}
            <TableCell align="right">notes</TableCell>
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
              <TableCell align="right">{data.instrument_id}</TableCell>
              <TableCell align="right">{data.instrument_name}</TableCell>
              <TableCell align="right">{data.instrument_type}</TableCell>
              <TableCell align="right">{data.sector}</TableCell>
              <TableCell align="right">{data.country}</TableCell>
              <TableCell align="right">{data.currency}</TableCell>
              <TableCell align="right">{data.istradeable.toString()}</TableCell>
              {/* <TableCell align="right">{data.created_time}</TableCell>
              <TableCell align="right">{data.modified_time}</TableCell> */}
              <TableCell align="right">{data.notes}</TableCell>
              {/* <TableCell align="right"><Button onClick={()=> {Getid(data.instrument_id)}}>More Info</Button></TableCell> */}

              <TableCell align="right"><Button onClick={routeChange}>More Info</Button></TableCell>
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
