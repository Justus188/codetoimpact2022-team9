import React from 'react';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  DenseTable,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Modal
} from '@mui/material'

import { InstrumentForm } from './NewInstrument/InstrumentForm';



const Instruments = () => {
  const [results, setResults] = useState([]);//it at all you're expecting array
  const [isEditing, setEditing] = useState(false);
  const navigate = useNavigate();

  const routeChange = (data) => {
    let path = '../instruments-page-selected';
    navigate(path, {
      state: data
    });
  }

  const openModal = () => {
    setEditing(true)
  }

  const closeModal = () => {
    setEditing(false)
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
  }, [])


  const renderHomePageHeader = () => {
    return (
      <header className="header">
        <h2>Your Instrument Tracker</h2>

        <div style={{ display: "flex" }}>
          <Button
            type="submit"
            style={{ marginLeft: "auto" }}
            onClick={openModal}
          >
            Add
          </Button>
        </div>
        {/* <TableCell align="right"><Button onClick={routeChange}>More Info</Button></TableCell> */}

      </header>
    );
  };

  //then below is you're rendered jsx mate,
  return (
    <>
      <Modal
        open={isEditing}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <InstrumentForm handleClose={closeModal}/>
      </Modal>

      {renderHomePageHeader()}
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
          {results.length > 0 ? (
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

                  <TableCell align="right"><Button onClick={() => { routeChange(data) }}>More Info</Button></TableCell>
                  {/* <TableCell align="right"><Button onClick={()=> {handleClick(data.instrument_id)}}>More Info</Button></TableCell> */}

                </TableRow>
              ))}
            </TableBody>) : (<></>)
          }

        </Table>
      </TableContainer>

    </>
  );

}

export default Instruments;


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
