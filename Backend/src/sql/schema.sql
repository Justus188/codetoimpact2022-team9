-- Drop all tables
DROP SCHEMA IF EXISTS public CASCADE;
CREATE SCHEMA public;

-- Instruments

-- CREATE TYPE InstrumentType AS ENUM ('Private Equity', 'Real Estate');
-- CREATE TYPE SectorType AS ENUM ('Consumer Staples', 'Information Technology', 'Healthcare', 'Industrials', 'Energy', 'Financials', 'Communication Services', 'Real Estate');
DROP TABLE IF EXISTS Instruments;
DROP TABLE IF EXISTS MarketValues;
DROP TABLE IF EXISTS Transactions;

CREATE SEQUENCE instrument_id_seq;
CREATE TABLE Instruments(
	instrument_id INT NOT NULL DEFAULT NEXTVAL('instrument_id_seq'), 
    instrument_name TEXT NOT NULL,
    instrument_type TEXT NOT NULL, 
    sector TEXT NOT NULL,
    country TEXT,
    currency TEXT,
    isTradeable BOOLEAN,
    created_time TIMESTAMP,
    modified_time TIMESTAMP,
    notes TEXT,
    isDeleted BOOLEAN DEFAULT FALSE,
	PRIMARY KEY(instrument_id)
);
ALTER SEQUENCE instrument_id_seq RESTART WITH 201 INCREMENT BY 1;

-- Market Values

CREATE TABLE MarketValues(
    instrument_id INTEGER,
    market_value_date TIMESTAMP,
    market_value DOUBLE PRECISION,
    created_time TIMESTAMP,
    modified_time TIMESTAMP,
    PRIMARY KEY (instrument_id, market_value_date),
    FOREIGN KEY (instrument_id) references Instruments(instrument_id)
);

-- Transactions

CREATE TYPE TransactionType AS ENUM('BUY', 'SELL');
CREATE SEQUENCE transaction_id_seq;
CREATE TABLE Transactions(
	transaction_id INT NOT NULL DEFAULT NEXTVAL('transaction_id_seq'), 
    instrument_id INTEGER NOT NULL,
    transaction_amount DOUBLE PRECISION,
    currency TEXT,
    transaction_date DATE,
    quantity REAL NOT NULL,
    isCancelled Boolean,
    created_time TIMESTAMP,
    modified_time TIMESTAMP,
    transaction_type TransactionType NOT NULL,
    FOREIGN KEY(instrument_id) references Instruments(instrument_id),
	PRIMARY KEY(transaction_id)
);
ALTER SEQUENCE transaction_id_seq RESTART WITH 4954 INCREMENT BY 1;
