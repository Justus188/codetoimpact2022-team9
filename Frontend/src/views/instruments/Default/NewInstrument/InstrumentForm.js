import { useState } from "react";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import "./InstrumentForm.css";
// import {
//   addInstrumentAsyn,
//   deleteInstrumentAsyn,
//   editInstrumentAsyn,
// } from "../../store/Instrument";

export const InstrumentForm = ({ handleClose, ...props }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const [enteredId, setEnteredID] = useState(props.id);
  const [enteredName, setEnteredName] = useState(props.name);
  const [enteredType, setEnteredType] = useState(props.type);
  const [enteredSector, setEnteredSector] = useState(props.sector);
  const [enteredCountry, setEnteredCountry] = useState(props.country);
  const [enteredCurrency, setEnteredCurrency] = useState(props.currency);
  const [enteredTradable, setEnteredTradable] = useState(props.tradable);
  const [enteredNote, setEnteredNote] = useState(props.notes);

  const [action, setAction] = useState(props.action);

  // const idChangeHandler = (event) => {
  //   setEnteredID(event.target.value);
  // };

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const typeChangeHandler = (event) => {
    setEnteredType(event.target.value);
  };

  const sectorChangeHandler = (event) => {
    setEnteredSector(event.target.value);
  };

  const countryChangeHandler = (event) => {
    setEnteredCountry(event.target.value);
  };

  const currencyChangeHandler = (event) => {
    setEnteredCurrency(event.target.value);
  };

  const tradableChangeHandler = (event) => {
    setEnteredTradable(event.target.value);
  };

  const noteChangeHandler = (event) => {
    setEnteredNote(event.target.value);
  };

  const onSubmit = (event) => {
    // event.preventDefault();

    const instrument = {
      notes: enteredNote,
      type: enteredType,
      name: enteredName,
      // id: enteredId,
      sector: enteredSector,
      country: enteredCountry,
      currency: enteredCurrency,
      tradable: enteredTradable,
    };

    // // TODO: Add in the following handlers
    // if (action === "add") {
    //   dispatch(addInstrumentAsyn(instrument));
    // } else if (action === "edit") {
    //   dispatch(editInstrumentAsyn(instrument));
    // }
    // navigate(-1);
  };

  const deleteHandler = () => {
    // setAction("delete");
    // dispatch(deleteInstrumentAsyn(props.id));
    return
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* {props.action === "edit" ? (
        <h1 className="new-instrument__h1">Edit Instrument</h1>
      ) : ( */}
      <h1 className="new-instrument__h1">Add Instrument</h1>
      {/* )} */}
      <div className="new-instrument__controls">
        <div className="new-instrument__control">
          <div className="new-instrument__actions">
            <Button
              variant={enteredType === "Private Equity" ? "contained" : "outlined"}
              value="Private Equity"
              onClick={typeChangeHandler}
            >
              Private Equity
            </Button>
            <Button
              variant={enteredType === "Real Estate" ? "contained" : "outlined"}
              value="Real Estate"
              onClick={typeChangeHandler}
            >
              Real Estate
            </Button>
          </div>
        </div>

        <div className="new-instrument__control">
          <label>Instrument Name</label>
          <input
            type="text"
            value={enteredName}

            onChange={nameChangeHandler}
          />
        </div>
        <div className="new-instrument__control">
          <label>Sector</label>
          <div className="new-instrument__actions">
            {enteredType === "Private Equity" ? (
              <select
                value={enteredSector}
                {...register("sector", { required: true })}
                onChange={sectorChangeHandler}
              >
                <option value="Communication Services">Communication Services</option>
                <option value="Consumer Staples">Consumer Staples</option>
                <option value="Energy">Energy</option>
                <option value="Financials">Financials</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Industrials">Industrials</option>
                <option value="Information Technology">Information Technology</option>
              </select>
            ) : (
              <select
                value={enteredSector}
                {...register("sector", { required: true })}
                onChange={sectorChangeHandler}
              >
                <option value="Real Estate">Real Estate</option>
              </select>
            )}
          </div>
        </div>
        <div className="new-instrument__control">
          <label>Country</label>
          <input
            type="text"
            value={enteredCountry}
            {...register("country", { required: true })}
            onChange={countryChangeHandler}
          />
        </div>
        <div className="new-instrument__control">
          <label>Currency</label>
          <input
            type="text"
            value={enteredCurrency}
            {...register("currency", { required: true })}
            onChange={currencyChangeHandler}
          />
        </div>
        <div className="new-instrument__control">
          <label>isTradable</label>
          <input
            type="text"
            value={enteredTradable}
            {...register("tradable", { required: true })}
            onChange={tradableChangeHandler}
          />
        </div>
        <div className="new-instrument__control">
          <label>Note</label>
          <input
            type="text"
            value={enteredNote}
            {...register("note", { required: true })}
            onChange={noteChangeHandler}
          />
        </div>
        <div className="new-instrument__actions">
          <Button
            disableElevation
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            color="success"
          >
            Submit
          </Button>
          <Button
            disableElevation
            fullWidth
            size="large"
            type="button"
            variant="contained"
            color="error"
            onClick={handleClose}
          >
            Cancel
          </Button>
        </div>

        {errors.sector && (
          <p className="error_message">Please select a sector!</p>
        )}
        {errors.country && (
          <p className="error_message">Please input a country!</p>
        )}
        {errors.currency && (
          <p className="error_message">Please input a currency!</p>
        )}
        {errors.tradable && (
          <p className="error_message">Please input if instrument is tradable!</p>
        )}
        {errors.note && (
          <p className="error_message">Please enter a description!</p>
        )}
      </div>
    </form>
  );
};

export default InstrumentForm;