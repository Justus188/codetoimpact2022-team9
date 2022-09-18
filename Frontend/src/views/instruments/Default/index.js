import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
// import EarningCard from './EarningCard';
// import PopularCard from './PopularCard';
// import TotalOrderLineChartCard from './TotalOrderLineChartCard';
// import TotalIncomeDarkCard from './TotalIncomeDarkCard';
// import TotalIncomeLightCard from './TotalIncomeLightCard';
// import TotalGrowthBarChart from './TotalGrowthBarChart';
import { gridSpacing } from 'store/constant';
import { MarketValuationTimeSeries } from './MarketValuationTimeSeries';
import { InstrumentForm } from './NewInstrument/InstrumentForm';
import Instruments from "./Instruments";

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <div>
            {/* <Grid container spacing={gridSpacing}>
                <Grid item lg={10} md={10} sm={10} xs={10}>
                    <MarketValuationTimeSeries isLoading={isLoading} />
                </Grid>
            </Grid> */}
            <Instruments />
        </div>
    );
};

export default Dashboard;
