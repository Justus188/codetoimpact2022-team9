// import React from "react";
// import "./index.css";
import { dummyInstrumentData } from "./DummyInstrumentData";
import {getInstrumentsAsyn} from "../../../store/Instrument";

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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



const instrument =  async () => {
    const resp = await fetch(`http://localhost:5001/api/instruments/1`, {
      method: 'GET',
    });
    if (resp.ok) {
      const instruments = await resp.json();
      console.log(instruments)
      return { instruments };
    }
  };


const result = instrument();

console.log(result);

const HomePageHeader = () => {
  return (
    <header className="header">
      <h2>Your instrument Tracker</h2>

    </header>
  );
};

export default function DenseTable() {
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
              <TableCell align="right">createdAt</TableCell>
              <TableCell align="right">modifiedAt</TableCell>
              <TableCell align="right">notes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dummyInstrumentData.map((data) => (
              <TableRow
                // key={key}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                {/* <TableCell component="th" scope="row">
                  {key}
                </TableCell> */}
                <TableCell align="right">{data.instrumentId}</TableCell>
                <TableCell align="right">{data.instrumentName}</TableCell>
                <TableCell align="right">{data.instrumentType}</TableCell>
                <TableCell align="right">{data.sector}</TableCell>
                <TableCell align="right">{data.country}</TableCell>
                <TableCell align="right">{data.instrumentCurrency}</TableCell>
                <TableCell align="right">{data.isTradeable.toString()}</TableCell>
                <TableCell align="right">{data.createdAt}</TableCell>
                <TableCell align="right">{data.modifiedAt}</TableCell>
                <TableCell align="right">{data.notes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

// const Instrument = ({ instrumentId, instrumentName, instrumentType, sector, country, instrumentCurrency, createdAt,  modifiedAt, notes, isTradeable }) => {
//   if (!instrumentId) return <div />;
//   return (
//     <table>
//       <tbody>
//         <tr>
//           <td>
//             <h5>{instrumentId}</h5>
//           </td>
//           <td>
//             <h5>{instrumentName}</h5>
//           </td>
//           <td>
//             <h5>{instrumentType}</h5>
//           </td>
//           <td>
//             <h5>{sector}</h5>
//           </td>
//           <td>
//             <h5>{country}</h5>
//           </td>
//           <td>
//             <h5>{instrumentCurrency}</h5>
//           </td>
//           <td>
//             <h5>{createdAt}</h5>
//           </td>
//           <td>
//             <h5>{modifiedAt}</h5>
//           </td>
//           <td>
//             <h5>{notes}</h5>
//           </td>
//           <td>
//             <p>{isTradeable}</p>
//           </td>
//         </tr>
//       </tbody>
//     </table>
//   );
// };