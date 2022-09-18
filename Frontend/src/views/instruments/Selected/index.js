import { useEffect, useState } from 'react';
import axios from 'axios';

// material-ui
import { Grid, Modal } from '@mui/material';

// project imports
import InstrumentMetaDataCard from './InstrumentMetaDataCard';
import InstrumentTradingInfoCard from './InstrumentTradingInfoCard';
import InstrumentNotesCard from './InstrumentNotesCard';
import InstrumentUpdateModal from './InstrumentUpdateModal';


import PopularCard from './PopularCard';
import TotalIncomeLightCard from './TotalIncomeLightCard';
import TotalGrowthBarChart from './TotalGrowthBarChart';
import { gridSpacing } from 'store/constant';

// TODO: Mock data import 
import { mockInstrumentMetaData } from './chart-data/mock_instrument_meta_data';
import { mockInstrumentChartData } from './chart-data/mock_instrument_chart_data';

import { MarketValuationTimeSeries } from '../Default/MarketValuationTimeSeries';

import { useLocation } from 'react-router';

// ==============================|| DEFAULT DASHBOARD ||============================== //


const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);
    const [isEditing, setEditing] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setLoading(false);
    }, []);

    const instrumentId = 152; // TODO: Handle API loader here
    // console.log("---> instrumentSelected, instrumentId:", instrumentId);

    const openModal = () => {
        setEditing(true);
    }

    const closeModal = () => {
        console.log("---> Dashboard, closeModal: ", closeModal);
        setEditing(false);
    };
    

    // const getSelectedInstrumentData = () => {
    //     const endPoint = `http://localhost:5001/api/instruments/1`
    //     axios.get(endPoint)
    //     .then(response => {
    //         console.log(response.data);
    //         return response
    //     }, error => {
    //         console.log(error);
    //     });
    // };

    // const mockInstrumentMetaData = getSelectedInstrumentData(); {/* TODO: */}

    console.log(location.state)

    const {
        instrument_name: instrumentName,
        instrument_type: instrumentType,
        sector,
        country,
        instrumentCurrency,
        istradeable: isTradeable,
        isdeleted: isDeleted,
        notes
    } = location.state;

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
                <InstrumentUpdateModal
                    instrumentMetaData={mockInstrumentMetaData}
                    handleClose={closeModal}
                />
            </Modal>

            <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                    <Grid container spacing={gridSpacing}>
                        <Grid item lg={4} md={6} sm={6} xs={12}>
                            <InstrumentMetaDataCard
                                isLoading={isLoading}
                                instrumentName={instrumentName}
                                country={country}
                                instrumentCurrency={instrumentCurrency}
                                openEditModal={openModal}
                            />
                        </Grid>
                        <Grid item lg={4} md={6} sm={6} xs={12}>
                            <InstrumentTradingInfoCard
                                isLoading={isLoading}
                                instrumentType={instrumentType}
                                sector={sector}
                                country={country}
                            />
                        </Grid>
                        <Grid item lg={4} md={12} sm={12} xs={12}>
                            <Grid container spacing={gridSpacing}>
                                <Grid item sm={6} xs={12} md={6} lg={12}>
                                    <InstrumentNotesCard isLoading={isLoading} notes={notes} />
                                </Grid>
                                {/* <Grid item sm={6} xs={12} md={6} lg={12}>
                                    <TotalIncomeLightCard isLoading={isLoading} />
                                </Grid> */}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                {/* TODO: Show chart for instrument */}
                {/* <Grid item xs={12}>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12} md={8}>
                            <TotalGrowthBarChart isLoading={isLoading} />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <PopularCard isLoading={isLoading} />
                        </Grid>
                    </Grid>
                </Grid> */}
                            <Grid container spacing={gridSpacing}>
                <Grid item lg={10} md={10} sm={10} xs={10}>
                    <MarketValuationTimeSeries isLoading={isLoading} />
                </Grid>
            </Grid>
            </Grid>
        </>
    );
};

export default Dashboard;
