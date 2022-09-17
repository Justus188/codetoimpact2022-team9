import PropTypes from 'prop-types';

// material-ui
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

// third-party
import Chart from 'react-apexcharts';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonTotalOrderCard from 'ui-component/cards/Skeleton/EarningCard';
import MarketValuationData from './chart-data/market-valuation-test'


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
    return (
        <>
            {isLoading ? (
                <SkeletonTotalOrderCard />
            ) : (
                <CardWrapper border={false} content={false}>
                    <Box sx={{ p: 2.25 }}>
                        {<Chart {...MarketValuationData} />}
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
