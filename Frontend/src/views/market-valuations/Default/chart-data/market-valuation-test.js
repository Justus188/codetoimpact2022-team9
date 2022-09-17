// ===========================|| MOCK DATA PROCESSING ||=========================== //

const mockData =
    [
        {
          "instrumentId": 152,
          "marketValueDate": "2020-01-31 00:00:00.0000000",
          "marketValue": 100000000,
          "createdAt": "2020-01-31 00:00:00",
          "modifiedAt": "2020-01-31 00:00:00"
        },
        {
          "instrumentId": 152,
          "marketValueDate": "2020-02-29 00:00:00.0000000",
          "marketValue": 100000000,
          "createdAt": "2020-02-29 00:00:00",
          "modifiedAt": "2020-02-29 00:00:00"
        },
        {
          "instrumentId": 152,
          "marketValueDate": "2020-03-31 00:00:00.0000000",
          "marketValue": 100000000,
          "createdAt": "2020-03-31 00:00:00",
          "modifiedAt": "2020-03-31 00:00:00"
        },
        {
          "instrumentId": 152,
          "marketValueDate": "2020-04-30 00:00:00.0000000",
          "marketValue": 100000000,
          "createdAt": "2020-04-30 00:00:00",
          "modifiedAt": "2020-04-30 00:00:00"
        },
        {
          "instrumentId": 152,
          "marketValueDate": "2020-05-31 00:00:00.0000000",
          "marketValue": 100000000,
          "createdAt": "2020-05-31 00:00:00",
          "modifiedAt": "2020-05-31 00:00:00"
        },
        {
          "instrumentId": 152,
          "marketValueDate": "2020-06-30 00:00:00.0000000",
          "marketValue": 100000000,
          "createdAt": "2020-06-30 00:00:00",
          "modifiedAt": "2020-06-30 00:00:00"
        },
        {
          "instrumentId": 152,
          "marketValueDate": "2020-07-31 00:00:00.0000000",
          "marketValue": 100000000,
          "createdAt": "2020-07-31 00:00:00",
          "modifiedAt": "2020-07-31 00:00:00"
        },
        {
          "instrumentId": 152,
          "marketValueDate": "2020-08-31 00:00:00.0000000",
          "marketValue": 100000000,
          "createdAt": "2020-08-31 00:00:00",
          "modifiedAt": "2020-08-31 00:00:00"
        },
        {
          "instrumentId": 152,
          "marketValueDate": "2020-09-30 00:00:00.0000000",
          "marketValue": 120000000,
          "createdAt": "2020-09-30 00:00:00",
          "modifiedAt": "2020-09-30 00:00:00"
        },
        {
          "instrumentId": 152,
          "marketValueDate": "2020-10-31 00:00:00.0000000",
          "marketValue": 120000000,
          "createdAt": "2020-10-31 00:00:00",
          "modifiedAt": "2020-10-31 00:00:00"
        },
        {
          "instrumentId": 152,
          "marketValueDate": "2020-11-30 00:00:00.0000000",
          "marketValue": 120000000,
          "createdAt": "2020-11-30 00:00:00",
          "modifiedAt": "2020-11-30 00:00:00"
        },
        {
          "instrumentId": 152,
          "marketValueDate": "2020-12-31 00:00:00.0000000",
          "marketValue": 147615415.42,
          "createdAt": "2020-12-31 00:00:00",
          "modifiedAt": "2020-12-31 00:00:00"
        },
        {
          "instrumentId": 152,
          "marketValueDate": "2021-01-31 00:00:00.0000000",
          "marketValue": 147615415.42,
          "createdAt": "2021-01-31 00:00:00",
          "modifiedAt": "2021-01-31 00:00:00"
        },
        {
          "instrumentId": 152,
          "marketValueDate": "2021-02-28 00:00:00.0000000",
          "marketValue": 147615415.42,
          "createdAt": "2021-02-28 00:00:00",
          "modifiedAt": "2021-02-28 00:00:00"
        },
        {
          "instrumentId": 152,
          "marketValueDate": "2021-03-31 00:00:00.0000000",
          "marketValue": 175948309.76,
          "createdAt": "2021-03-31 00:00:00",
          "modifiedAt": "2021-03-31 00:00:00"
        },
        {
          "instrumentId": 152,
          "marketValueDate": "2021-04-30 00:00:00.0000000",
          "marketValue": 175948309.76,
          "createdAt": "2021-04-30 00:00:00",
          "modifiedAt": "2021-04-30 00:00:00"
        },
        {
          "instrumentId": 152,
          "marketValueDate": "2021-05-31 00:00:00.0000000",
          "marketValue": 175948309.76,
          "createdAt": "2021-05-31 00:00:00",
          "modifiedAt": "2021-05-31 00:00:00"
        },
        {
          "instrumentId": 152,
          "marketValueDate": "2021-06-30 00:00:00.0000000",
          "marketValue": 175948309.76,
          "createdAt": "2021-06-30 00:00:00",
          "modifiedAt": "2021-06-30 00:00:00"
        },
        {
          "instrumentId": 152,
          "marketValueDate": "2021-07-31 00:00:00.0000000",
          "marketValue": 175948309.76,
          "createdAt": "2021-07-31 00:00:00",
          "modifiedAt": "2021-07-31 00:00:00"
        },
        {
          "instrumentId": 152,
          "marketValueDate": "2021-08-31 00:00:00.0000000",
          "marketValue": 175948309.76,
          "createdAt": "2021-08-31 00:00:00",
          "modifiedAt": "2021-08-31 00:00:00"
        },
        {
          "instrumentId": 152,
          "marketValueDate": "2021-09-30 00:00:00.0000000",
          "marketValue": 175948309.76,
          "createdAt": "2021-09-30 00:00:00",
          "modifiedAt": "2021-09-30 00:00:00"
        },
        {
          "instrumentId": 152,
          "marketValueDate": "2021-10-31 00:00:00.0000000",
          "marketValue": 175948309.76,
          "createdAt": "2021-10-31 00:00:00",
          "modifiedAt": "2021-10-31 00:00:00"
        },
        {
          "instrumentId": 152,
          "marketValueDate": "2021-11-30 00:00:00.0000000",
          "marketValue": 175948309.76,
          "createdAt": "2021-11-30 00:00:00",
          "modifiedAt": "2021-11-30 00:00:00"
        },
        {
          "instrumentId": 152,
          "marketValueDate": "2021-12-31 00:00:00.0000000",
          "marketValue": 175948309.76,
          "createdAt": "2021-12-31 00:00:00",
          "modifiedAt": "2021-12-31 00:00:00"
        },
        {
          "instrumentId": 152,
          "marketValueDate": "2022-01-31 00:00:00.0000000",
          "marketValue": 190654650.04,
          "createdAt": "2022-01-31 00:00:00",
          "modifiedAt": "2022-01-31 00:00:00"
        },
        {
          "instrumentId": 152,
          "marketValueDate": "2022-02-28 00:00:00.0000000",
          "marketValue": 190654650.04,
          "createdAt": "2022-02-28 00:00:00",
          "modifiedAt": "2022-02-28 00:00:00"
        },
        {
          "instrumentId": 152,
          "marketValueDate": "2022-03-31 00:00:00.0000000",
          "marketValue": 175195760.11,
          "createdAt": "2022-03-31 00:00:00",
          "modifiedAt": "2022-03-31 00:00:00"
        },
        {
          "instrumentId": 152,
          "marketValueDate": "2022-04-30 00:00:00.0000000",
          "marketValue": 175195760.11,
          "createdAt": "2022-04-30 00:00:00",
          "modifiedAt": "2022-04-30 00:00:00"
        },
        {
          "instrumentId": 152,
          "marketValueDate": "2022-05-31 00:00:00.0000000",
          "marketValue": 175195760.11,
          "createdAt": "2022-05-31 00:00:00",
          "modifiedAt": "2022-05-31 00:00:00"
        },
        {
          "instrumentId": 152,
          "marketValueDate": "2022-06-30 00:00:00.0000000",
          "marketValue": 175195760.11,
          "createdAt": "2022-06-30 00:00:00",
          "modifiedAt": "2022-06-30 00:00:00"
        },
        {
          "instrumentId": 152,
          "marketValueDate": "2022-07-31 00:00:00.0000000",
          "marketValue": 175195760.11,
          "createdAt": "2022-07-31 00:00:00",
          "modifiedAt": "2022-07-31 00:00:00"
        },
        {
          "instrumentId": 152,
          "marketValueDate": "2022-08-31 00:00:00.0000000",
          "marketValue": 158277577.49,
          "createdAt": "2022-08-31 00:00:00",
          "modifiedAt": "2022-08-31 00:00:00"
        },
        {
          "instrumentId": 152,
          "marketValueDate": "2022-09-30 00:00:00.0000000",
          "marketValue": 158277577.49,
          "createdAt": "2022-09-30 00:00:00",
          "modifiedAt": "2022-09-30 00:00:00"
        }
    ]


const marketValueData = []
const instrumentId = 152
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
for (let i = 0; i < mockData.length; i++) {
    var dates = new Date(mockData[i].marketValueDate);
    marketValueData.push ({ x: months[dates.getMonth()]+" "+dates.getFullYear().toString(), y: mockData[i].marketValue });
    // marketValueData.push ({ x: mockData[i].marketValueDate.slice(0,-20), y: mockData[i].marketValue/1000 });
}

const chartData = {
    type: 'line',
    options: {
        chart: {
            height: "100%",
            width: "100%",
            type: "area",
            animations: {
                initialAnimation: {
                    enabled: false
                }
            }
        }
    },
    series: [
        {
            name: 'Instrument '+instrumentId.toString(),
            data: marketValueData
        }
    ],
    xaxis: {
        type: 'datetime',
      },
    yaxis:{
        labels: {
            formatter: function (value) {
              return "$" + value.toString();
            }
          },
    }
};

export default chartData;
