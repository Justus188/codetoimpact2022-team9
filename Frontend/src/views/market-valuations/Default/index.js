import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
import { gridSpacing } from 'store/constant';
import MarketValuationTimeSeries from './MarketValuationTimeSeries';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <Grid container spacing={gridSpacing}>
            
            <Grid item lg={10} md={10} sm={10} xs={10}>
                <MarketValuationTimeSeries isLoading={isLoading} />
            </Grid>
        </Grid>
    );
};

export default Dashboard;
