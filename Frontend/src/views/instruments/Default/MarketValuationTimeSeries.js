import PropTypes from 'prop-types';

// material-ui
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

// third-party
import Chart from 'react-apexcharts';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { useEffect, useState } from "react";

// ===========================|| MOCK DATA PROCESSING ||=========================== //

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

var isLoaded = false;

export const MarketValuationTimeSeries = ({ isLoading }) => {
    const [marketValuationData, setMarketValuationData] = useState({});
    
    function GetChartData(marketvalues){
        const marketValueData = []
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        for (let i = 0; i < marketvalues.length; i++) {
            if (marketvalues[i].instrument_id === 152){
                var dates = new Date(marketvalues[i].market_value_date);
                marketValueData.push ({ x: months[dates.getMonth()]+" "+dates.getFullYear().toString(), y: marketvalues[i].market_value });
            }
        }
        console.log("GETCHARTDATA", marketValueData)
        return {
            type: 'line',
            options: {
                chart: {
                    height: "100%",
                    type: "area",
                    animations: {
                        initialAnimation: {
                            enabled: false
                        }
                    }
                }
            },
            xaxis: {
            type: 'datetime',
            },
            yaxis:{
                labels: {
                    formatter: function (value) {
                    return "$" + value;
                    }
                },
            },
            series: [
                {
                    name: 'Instrument 152',
                    data: marketValueData
                }
            ],
        }
    }

    useEffect(() => {
        const marketvalue = async () => {
            const resp = await fetch(`http://localhost:5001/api/market-values/152`, {
              method: 'GET',
            }); 
            if (resp.ok) {
                const marketvalues = await resp.json();
                let user = await GetChartData(marketvalues);
                console.log(user);
                setMarketValuationData(user);
                isLoaded = true;
            }
        }
        marketvalue();
    }, [])

    
    return (
        <>
            {isLoaded ? (
                <CardWrapper border={false} content={false}>
                    <Box sx={{ p: 2.25 }}>
                        {<Chart {...marketValuationData}/>}
                    </Box>
                </CardWrapper>
            ) : ( <></>)}
        </>
    );
};

MarketValuationTimeSeries.propTypes = {
    isLoading: PropTypes.bool
};
