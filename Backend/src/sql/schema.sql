-- Drop all tables
DROP SCHEMA IF EXISTS public CASCADE;
CREATE SCHEMA public;

-- Instruments

-- CREATE TYPE InstrumentType AS ENUM ('Private Equity', 'Real Estate');
-- CREATE TYPE SectorType AS ENUM ('Consumer Staples', 'Information Technology', 'Healthcare', 'Industrials', 'Energy', 'Financials', 'Communication Services', 'Real Estate');

CREATE TABLE Instruments(
    instrument_id INTEGER PRIMARY KEY,
    instrument_name TEXT NOT NULL,
    instrument_type TEXT NOT NULL, 
    sector TEXT NOT NULL,
    country TEXT,
    currency TEXT,
    isTradeable BOOLEAN,
    created_time TIMESTAMP,
    modified_time TIMESTAMP,
    notes TEXT,
    isDeleted BOOLEAN DEFAULT FALSE
);

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

CREATE TABLE Transactions(
    tranaction_id INTEGER PRIMARY KEY,
    instrument_id INTEGER NOT NULL,
    tranaction_amount DOUBLE PRECISION,
    currency TEXT,
    tranaction_date DATE,
    quantity REAL NOT NULL,
    isCancelled Boolean,
    created_time TIMESTAMP,
    modified_time TIMESTAMP,
    tranaction_type TransactionType NOT NULL,
    FOREIGN KEY(instrument_id) references Instruments(instrument_id)
);

COPY Instruments
FROM '/tmp/instruments.csv'
DELIMITER ','
CSV HEADER;

COPY MarketValues
FROM '/tmp/market-values.csv'
DELIMITER ','
CSV HEADER;

COPY Transactions
FROM '/tmp/transactions.csv'
DELIMITER ','
CSV HEADER;