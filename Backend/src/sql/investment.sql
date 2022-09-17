CREATE TABLE Investment(
    investmentId SERIAL PRIMARY KEY,
    instrumentId INTEGER,
    cumulativeQuantity DOUBLE PRECISION,
    cumulativeTransactionAmount DOUBLE PRECISION,
    refreshDatetime TIMESTAMP,
    FOREIGN KEY (instrumentId) REFERENCES Instruments (instrument_id)
);