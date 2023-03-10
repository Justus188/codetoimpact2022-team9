import { propsToClassKey } from '@mui/styles';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// toast.configure();


// Actions
export const getInstrumentsAsyn = createAsyncThunk(
//   'instruments/getInstrumentAsyn',
  async () => {
    const resp = await fetch(`http://18.142.178.20:5001/api/instruments`, {
      method: 'GET',
    });
    if (resp.ok) {
      const instruments = await resp.json();
      console.log(instruments)
      return { instruments };
    }
  }
);