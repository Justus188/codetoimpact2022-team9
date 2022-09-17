import PropTypes from 'prop-types';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Avatar, Box, Grid } from '@mui/material';

// third-party
import Chart from 'react-apexcharts';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonTotalOrderCard from 'ui-component/cards/Skeleton/EarningCard';

import MarketValuationData from './chart-data/market-valuation-test'


// assets
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';

const CardWrapper = styled(MainCard)(({ theme }) => ({
    color: '#000',
    overflow: 'hidden',
    position: 'relative',
    '&>div': {
        position: 'relative',
        zIndex: 5
    },
}));

// ==============================|| DASHBOARD - TOTAL ORDER LINE CHART CARD ||============================== //

const MarketValuationTimeSeries = ({ isLoading }) => {
    const theme = useTheme();

    // const [timeValue, setTimeValue] = useState(false);
    // const handleChangeTime = (event, newValue) => {
    //     setTimeValue(newValue);
    // };

    return (
        <>
            {isLoading ? (
                <SkeletonTotalOrderCard />
            ) : (
                <CardWrapper border={false} content={false}>
                    <Box sx={{ p: 2.25 }}>
                        <Grid container direction="column">
                            <Grid item>
                                <Grid container justifyContent="space-between">
                                    <Grid item>
                                        <Avatar
                                            variant="rounded"
                                            sx={{
                                                ...theme.typography.commonAvatar,
                                                ...theme.typography.largeAvatar,
                                                backgroundColor: theme.palette.primary[800],
                                                color: '#fff',
                                                mt: 1
                                            }}
                                        >
                                            <LocalMallOutlinedIcon fontSize="inherit" />
                                        </Avatar>
                                    </Grid>
                                </Grid>
                            </Grid>
                                <Grid container alignItems="center">
                                        {<Chart {...MarketValuationData} />}
                                </Grid>
                        </Grid>
                    </Box>
                </CardWrapper>
            )}
        </>
    );
};

MarketValuationTimeSeries.propTypes = {
    isLoading: PropTypes.bool
};

export default MarketValuationTimeSeries;
