import { useState } from "react";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

// import "./InstrumentForm.css";
// import {
//   addInstrumentAsyn,
// } from "../../store/Instrument";

const TransactionForm = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [enteredId, setEnteredID] = useState(props.id);
  const [enteredName, setEnteredName] = useState(props.name);
  const [enteredType, setEnteredType] = useState(props.type);
  const [enteredSector, setEnteredSector] = useState(props.sector);
  const [enteredCountry, setEnteredCountry] = useState(props.country);
  const [enteredCurrency, setEnteredCurrency] = useState(props.currency);
  const [enteredTradable, setEnteredTradable] = useState(props.tradable);
  const [enteredNote, setEnteredNote] = useState(props.notes);

  const [action, setAction] = useState(props.action);

  const idChangeHandler = (event) => {
    setEnteredID(event.target.value);
  };

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

    const transaction = {
      notes: enteredNote,
      type: enteredType,
      name: enteredName,
      date: enteredDate,
      id: enteredId,
      sector: enteredSector,
      Country: enteredCountry,
      currency: enteredCurrency,
      tradable: enteredTradable,
    };

    // TODO: Add in the following handlers
    if (action === "add") {
      dispatch(addTransactionAsyn(transaction));
    } else if (action === "edit") {
      dispatch(editTransactionAsyn(transaction));
    }
    navigate(-1);
  };

  const deleteHandler = () => {
    setAction("delete");
    dispatch(deleteTransactionAsyn(props.id));
  };

  // 5 Input Field - Type, Date, Category, Amount and Note
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {props.action === "add" ? (
        <h1 className="new-transaction__h1">Add Transaction</h1>
      ) : (
        <h1 className="new-transaction__h1">Edit Transaction</h1>
      )}
      <div className="new-transaction__controls">
        <div className="new-transaction__control">
          <div className="new-transaction__actions">
            <Button
              variant={enteredType === "income" ? "contained" : "outlined"}
              value="income"
              onClick={typeChangeHandler}
            >
              Income
            </Button>
            <Button
              variant={enteredType === "expense" ? "contained" : "outlined"}
              value="expense"
              onClick={typeChangeHandler}
            >
              Expense
            </Button>
          </div>
        </div>

        <div className="new-transaction__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2022-01-01"
            max="2050-12-31"
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-transaction__control">
          <label>Category</label>
          <div className="new-transaction__actions">
            {enteredType === "income" ? (
              <select
                value={enteredCategory}
                {...register("category", { required: true })}
                onChange={categoryChangeHandler}
              >
                <option value="salary">Salary</option>
                <option value="allowance">Allowance</option>
                <option value="bonus">Bonus</option>
                <option value="pettycash">Petty cash</option>
                <option value="other">Other</option>
              </select>
            ) : (
              <select
                value={enteredCategory}
                {...register("category", { required: true })}
                onChange={categoryChangeHandler}
              >
                <option value="food">Food</option>
                <option value="transport">Transport</option>
                <option value="apparel">Apparel</option>
                <option value="social life">Social Life</option>
                <option value="household">Household</option>
                <option value="gift">Gift</option>
                <option value="others">Other</option>
              </select>
            )}
          </div>
        </div>
        <div className="new-transaction__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            {...register("amount", { required: true })}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-transaction__control">
          <label>Note</label>
          <input
            type="text"
            value={enteredNote}
            {...register("note", { required: true })}
            onChange={noteChangeHandler}
          />
        </div>
        {props.action === "edit" ? (
          <div className="new-transaction__actions">
            <Button type="submit" variant="contained">
              Save
            </Button>
            <Button type="submit" variant="contained" onClick={deleteHandler}>
              Delete
            </Button>
          </div>
        ) : props.action === "add" ? (
          <div className="new-transaction__actions">
            <Button type="submit" variant="contained">
              Add
            </Button>
          </div>
        ) : null}
        {errors.category && (
          <p className="error_message">Please select a category!</p>
        )}
        {errors.amount && (
          <p className="error_message">Please enter an amount!</p>
        )}
        {errors.note && (
          <p className="error_message">Please enter a description!</p>
        )}
      </div>
    </form>
  );
};

export default TransactionForm;