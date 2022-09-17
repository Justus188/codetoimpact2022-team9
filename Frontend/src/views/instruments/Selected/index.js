import { useEffect, useState } from 'react';

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

// Mock data import 
import { mockInstrumentMetaData } from './chart-data/mock_instrument_meta_data';
import { mockInstrumentChartData } from './chart-data/mock_instrument_chart_data';

// ==============================|| DEFAULT DASHBOARD ||============================== //


const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);
    const [isEditing, setEditing] = useState(false);

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

    const {
        instrumentName,
        instrumentType,
        sector,
        country,
        instrumentCurrency,
        isTradeable,
        createdAt,
        modifiedAt,
        notes
    } = mockInstrumentMetaData;

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
            </Grid>
        </>
    );
};

export default Dashboard;
