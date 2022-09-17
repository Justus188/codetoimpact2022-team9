import axios from 'axios';
// ===========================|| MOCK DATA PROCESSING ||=========================== //


const getMockData = () => { axios.get('http://localhost:5001/api/instruments/1')
                  .then(response => {
                    console.log(response.data);
                    return response
                  }, error => {
                    console.log(error);
                  });
                };

const mockData = getMockData();
// [
//   {
//     "instrumentId": 152,
//     "marketValueDate": "2020-01-31 00:00:00.0000000",
//     "marketValue": 100000000,
//     "createdAt": "2020-01-31 00:00:00",
//     "modifiedAt": "2020-01-31 00:00:00"
//   },
//   {
//     "instrumentId": 152,
//     "marketValueDate": "2020-02-29 00:00:00.0000000",
//     "marketValue": 100000000,
//     "createdAt": "2020-02-29 00:00:00",
//     "modifiedAt": "2020-02-29 00:00:00"
//   },
//   {
//     "instrumentId": 152,
//     "marketValueDate": "2020-03-31 00:00:00.0000000",
//     "marketValue": 100000000,
//     "createdAt": "2020-03-31 00:00:00",
//     "modifiedAt": "2020-03-31 00:00:00"
//   },
//   {
//     "instrumentId": 152,
//     "marketValueDate": "2020-04-30 00:00:00.0000000",
//     "marketValue": 100000000,
//     "createdAt": "2020-04-30 00:00:00",
//     "modifiedAt": "2020-04-30 00:00:00"
//   },
//   {
//     "instrumentId": 152,
//     "marketValueDate": "2020-05-31 00:00:00.0000000",
//     "marketValue": 100000000,
//     "createdAt": "2020-05-31 00:00:00",
//     "modifiedAt": "2020-05-31 00:00:00"
//   },
//   {
//     "instrumentId": 152,
//     "marketValueDate": "2020-06-30 00:00:00.0000000",
//     "marketValue": 100000000,
//     "createdAt": "2020-06-30 00:00:00",
//     "modifiedAt": "2020-06-30 00:00:00"
//   },
//   {
//     "instrumentId": 152,
//     "marketValueDate": "2020-07-31 00:00:00.0000000",
//     "marketValue": 100000000,
//     "createdAt": "2020-07-31 00:00:00",
//     "modifiedAt": "2020-07-31 00:00:00"
//   },
//   {
//     "instrumentId": 152,
//     "marketValueDate": "2020-08-31 00:00:00.0000000",
//     "marketValue": 100000000,
//     "createdAt": "2020-08-31 00:00:00",
//     "modifiedAt": "2020-08-31 00:00:00"
//   },
//   {
//     "instrumentId": 152,
//     "marketValueDate": "2020-09-30 00:00:00.0000000",
//     "marketValue": 120000000,
//     "createdAt": "2020-09-30 00:00:00",
//     "modifiedAt": "2020-09-30 00:00:00"
//   },
//   {
//     "instrumentId": 152,
//     "marketValueDate": "2020-10-31 00:00:00.0000000",
//     "marketValue": 120000000,
//     "createdAt": "2020-10-31 00:00:00",
//     "modifiedAt": "2020-10-31 00:00:00"
//   },
//   {
//     "instrumentId": 152,
//     "marketValueDate": "2020-11-30 00:00:00.0000000",
//     "marketValue": 120000000,
//     "createdAt": "2020-11-30 00:00:00",
//     "modifiedAt": "2020-11-30 00:00:00"
//   },
//   {
//     "instrumentId": 152,
//     "marketValueDate": "2020-12-31 00:00:00.0000000",
//     "marketValue": 147615415.42,
//     "createdAt": "2020-12-31 00:00:00",
//     "modifiedAt": "2020-12-31 00:00:00"
//   },
//   {
//     "instrumentId": 152,
//     "marketValueDate": "2021-01-31 00:00:00.0000000",
//     "marketValue": 147615415.42,
//     "createdAt": "2021-01-31 00:00:00",
//     "modifiedAt": "2021-01-31 00:00:00"
//   },
//   {
//     "instrumentId": 152,
//     "marketValueDate": "2021-02-28 00:00:00.0000000",
//     "marketValue": 147615415.42,
//     "createdAt": "2021-02-28 00:00:00",
//     "modifiedAt": "2021-02-28 00:00:00"
//   },
//   {
//     "instrumentId": 152,
//     "marketValueDate": "2021-03-31 00:00:00.0000000",
//     "marketValue": 175948309.76,
//     "createdAt": "2021-03-31 00:00:00",
//     "modifiedAt": "2021-03-31 00:00:00"
//   },
//   {
//     "instrumentId": 152,
//     "marketValueDate": "2021-04-30 00:00:00.0000000",
//     "marketValue": 175948309.76,
//     "createdAt": "2021-04-30 00:00:00",
//     "modifiedAt": "2021-04-30 00:00:00"
//   },
//   {
//     "instrumentId": 152,
//     "marketValueDate": "2021-05-31 00:00:00.0000000",
//     "marketValue": 175948309.76,
//     "createdAt": "2021-05-31 00:00:00",
//     "modifiedAt": "2021-05-31 00:00:00"
//   },
//   {
//     "instrumentId": 152,
//     "marketValueDate": "2021-06-30 00:00:00.0000000",
//     "marketValue": 175948309.76,
//     "createdAt": "2021-06-30 00:00:00",
//     "modifiedAt": "2021-06-30 00:00:00"
//   },
//   {
//     "instrumentId": 152,
//     "marketValueDate": "2021-07-31 00:00:00.0000000",
//     "marketValue": 175948309.76,
//     "createdAt": "2021-07-31 00:00:00",
//     "modifiedAt": "2021-07-31 00:00:00"
//   },
//   {
//     "instrumentId": 152,
//     "marketValueDate": "2021-08-31 00:00:00.0000000",
//     "marketValue": 175948309.76,
//     "createdAt": "2021-08-31 00:00:00",
//     "modifiedAt": "2021-08-31 00:00:00"
//   },
//   {
//     "instrumentId": 152,
//     "marketValueDate": "2021-09-30 00:00:00.0000000",
//     "marketValue": 175948309.76,
//     "createdAt": "2021-09-30 00:00:00",
//     "modifiedAt": "2021-09-30 00:00:00"
//   },
//   {
//     "instrumentId": 152,
//     "marketValueDate": "2021-10-31 00:00:00.0000000",
//     "marketValue": 175948309.76,
//     "createdAt": "2021-10-31 00:00:00",
//     "modifiedAt": "2021-10-31 00:00:00"
//   },
//   {
//     "instrumentId": 152,
//     "marketValueDate": "2021-11-30 00:00:00.0000000",
//     "marketValue": 175948309.76,
//     "createdAt": "2021-11-30 00:00:00",
//     "modifiedAt": "2021-11-30 00:00:00"
//   },
//   {
//     "instrumentId": 152,
//     "marketValueDate": "2021-12-31 00:00:00.0000000",
//     "marketValue": 175948309.76,
//     "createdAt": "2021-12-31 00:00:00",
//     "modifiedAt": "2021-12-31 00:00:00"
//   },
//   {
//     "instrumentId": 152,
//     "marketValueDate": "2022-01-31 00:00:00.0000000",
//     "marketValue": 190654650.04,
//     "createdAt": "2022-01-31 00:00:00",
//     "modifiedAt": "2022-01-31 00:00:00"
//   },
//   {
//     "instrumentId": 152,
//     "marketValueDate": "2022-02-28 00:00:00.0000000",
//     "marketValue": 190654650.04,
//     "createdAt": "2022-02-28 00:00:00",
//     "modifiedAt": "2022-02-28 00:00:00"
//   },
//   {
//     "instrumentId": 152,
//     "marketValueDate": "2022-03-31 00:00:00.0000000",
//     "marketValue": 175195760.11,
//     "createdAt": "2022-03-31 00:00:00",
//     "modifiedAt": "2022-03-31 00:00:00"
//   },
//   {
//     "instrumentId": 152,
//     "marketValueDate": "2022-04-30 00:00:00.0000000",
//     "marketValue": 175195760.11,
//     "createdAt": "2022-04-30 00:00:00",
//     "modifiedAt": "2022-04-30 00:00:00"
//   },
//   {
//     "instrumentId": 152,
//     "marketValueDate": "2022-05-31 00:00:00.0000000",
//     "marketValue": 175195760.11,
//     "createdAt": "2022-05-31 00:00:00",
//     "modifiedAt": "2022-05-31 00:00:00"
//   },
//   {
//     "instrumentId": 152,
//     "marketValueDate": "2022-06-30 00:00:00.0000000",
//     "marketValue": 175195760.11,
//     "createdAt": "2022-06-30 00:00:00",
//     "modifiedAt": "2022-06-30 00:00:00"
//   },
//   {
//     "instrumentId": 152,
//     "marketValueDate": "2022-07-31 00:00:00.0000000",
//     "marketValue": 175195760.11,
//     "createdAt": "2022-07-31 00:00:00",
//     "modifiedAt": "2022-07-31 00:00:00"
//   },
//   {
//     "instrumentId": 152,
//     "marketValueDate": "2022-08-31 00:00:00.0000000",
//     "marketValue": 158277577.49,
//     "createdAt": "2022-08-31 00:00:00",
//     "modifiedAt": "2022-08-31 00:00:00"
//   },
//   {
//     "instrumentId": 152,
//     "marketValueDate": "2022-09-30 00:00:00.0000000",
//     "marketValue": 158277577.49,
//     "createdAt": "2022-09-30 00:00:00",
//     "modifiedAt": "2022-09-30 00:00:00"
//   },
//   {
//     "instrumentId": 183,
//     "marketValueDate": "2020-01-31 00:00:00.0000000",
//     "marketValue": 59644184,
//     "createdAt": "2020-01-31 00:00:00",
//     "modifiedAt": "2020-01-31 00:00:00"
//   },
//   {
//     "instrumentId": 183,
//     "marketValueDate": "2020-02-29 00:00:00.0000000",
//     "marketValue": 59644184,
//     "createdAt": "2020-02-29 00:00:00",
//     "modifiedAt": "2020-02-29 00:00:00"
//   },
//   {
//     "instrumentId": 183,
//     "marketValueDate": "2020-03-31 00:00:00.0000000",
//     "marketValue": 100006929,
//     "createdAt": "2020-03-31 00:00:00",
//     "modifiedAt": "2020-03-31 00:00:00"
//   },
//   {
//     "instrumentId": 183,
//     "marketValueDate": "2020-04-30 00:00:00.0000000",
//     "marketValue": 124556540,
//     "createdAt": "2020-04-30 00:00:00",
//     "modifiedAt": "2020-04-30 00:00:00"
//   },
//   {
//     "instrumentId": 183,
//     "marketValueDate": "2020-05-31 00:00:00.0000000",
//     "marketValue": 124556540,
//     "createdAt": "2020-05-31 00:00:00",
//     "modifiedAt": "2020-05-31 00:00:00"
//   },
//   {
//     "instrumentId": 183,
//     "marketValueDate": "2020-06-30 00:00:00.0000000",
//     "marketValue": 90459057,
//     "createdAt": "2020-06-30 00:00:00",
//     "modifiedAt": "2020-06-30 00:00:00"
//   },
//   {
//     "instrumentId": 183,
//     "marketValueDate": "2020-07-31 00:00:00.0000000",
//     "marketValue": 90459057,
//     "createdAt": "2020-07-31 00:00:00",
//     "modifiedAt": "2020-07-31 00:00:00"
//   },
//   {
//     "instrumentId": 183,
//     "marketValueDate": "2020-08-31 00:00:00.0000000",
//     "marketValue": 94505735,
//     "createdAt": "2020-08-31 00:00:00",
//     "modifiedAt": "2020-08-31 00:00:00"
//   },
//   {
//     "instrumentId": 183,
//     "marketValueDate": "2020-09-30 00:00:00.0000000",
//     "marketValue": 94505735,
//     "createdAt": "2020-09-30 00:00:00",
//     "modifiedAt": "2020-09-30 00:00:00"
//   },
//   {
//     "instrumentId": 183,
//     "marketValueDate": "2020-10-31 00:00:00.0000000",
//     "marketValue": 94032378,
//     "createdAt": "2020-10-31 00:00:00",
//     "modifiedAt": "2020-10-31 00:00:00"
//   },
//   {
//     "instrumentId": 183,
//     "marketValueDate": "2020-11-30 00:00:00.0000000",
//     "marketValue": 110007122,
//     "createdAt": "2020-11-30 00:00:00",
//     "modifiedAt": "2020-11-30 00:00:00"
//   },
//   {
//     "instrumentId": 183,
//     "marketValueDate": "2020-12-31 00:00:00.0000000",
//     "marketValue": 114473151,
//     "createdAt": "2020-12-31 00:00:00",
//     "modifiedAt": "2020-12-31 00:00:00"
//   },
//   {
//     "instrumentId": 183,
//     "marketValueDate": "2021-01-31 00:00:00.0000000",
//     "marketValue": 114473151,
//     "createdAt": "2021-01-31 00:00:00",
//     "modifiedAt": "2021-01-31 00:00:00"
//   },
//   {
//     "instrumentId": 183,
//     "marketValueDate": "2021-02-28 00:00:00.0000000",
//     "marketValue": 121747644,
//     "createdAt": "2021-02-28 00:00:00",
//     "modifiedAt": "2021-02-28 00:00:00"
//   },
//   {
//     "instrumentId": 183,
//     "marketValueDate": "2021-03-31 00:00:00.0000000",
//     "marketValue": 167577475,
//     "createdAt": "2021-03-31 00:00:00",
//     "modifiedAt": "2021-03-31 00:00:00"
//   },
//   {
//     "instrumentId": 183,
//     "marketValueDate": "2021-04-30 00:00:00.0000000",
//     "marketValue": 136796547,
//     "createdAt": "2021-04-30 00:00:00",
//     "modifiedAt": "2021-04-30 00:00:00"
//   },
//   {
//     "instrumentId": 183,
//     "marketValueDate": "2021-05-31 00:00:00.0000000",
//     "marketValue": 166362030,
//     "createdAt": "2021-05-31 00:00:00",
//     "modifiedAt": "2021-05-31 00:00:00"
//   },
//   {
//     "instrumentId": 183,
//     "marketValueDate": "2021-06-30 00:00:00.0000000",
//     "marketValue": 234454584,
//     "createdAt": "2021-06-30 00:00:00",
//     "modifiedAt": "2021-06-30 00:00:00"
//   },
//   {
//     "instrumentId": 183,
//     "marketValueDate": "2021-07-31 00:00:00.0000000",
//     "marketValue": 234454584,
//     "createdAt": "2021-07-31 00:00:00",
//     "modifiedAt": "2021-07-31 00:00:00"
//   },
//   {
//     "instrumentId": 183,
//     "marketValueDate": "2021-08-31 00:00:00.0000000",
//     "marketValue": 231997245,
//     "createdAt": "2021-08-31 00:00:00",
//     "modifiedAt": "2021-08-31 00:00:00"
//   },
//   {
//     "instrumentId": 183,
//     "marketValueDate": "2021-09-30 00:00:00.0000000",
//     "marketValue": 231997245,
//     "createdAt": "2021-09-30 00:00:00",
//     "modifiedAt": "2021-09-30 00:00:00"
//   },
//   {
//     "instrumentId": 183,
//     "marketValueDate": "2021-10-31 00:00:00.0000000",
//     "marketValue": 231997245,
//     "createdAt": "2021-10-31 00:00:00",
//     "modifiedAt": "2021-10-31 00:00:00"
//   },
//   {
//     "instrumentId": 183,
//     "marketValueDate": "2021-11-30 00:00:00.0000000",
//     "marketValue": 217749819,
//     "createdAt": "2021-11-30 00:00:00",
//     "modifiedAt": "2021-11-30 00:00:00"
//   },
//   {
//     "instrumentId": 183,
//     "marketValueDate": "2021-12-31 00:00:00.0000000",
//     "marketValue": 402509820,
//     "createdAt": "2021-12-31 00:00:00",
//     "modifiedAt": "2021-12-31 00:00:00"
//   },
//   {
//     "instrumentId": 183,
//     "marketValueDate": "2022-01-31 00:00:00.0000000",
//     "marketValue": 402509820,
//     "createdAt": "2022-01-31 00:00:00",
//     "modifiedAt": "2022-01-31 00:00:00"
//   },
//   {
//     "instrumentId": 183,
//     "marketValueDate": "2022-02-28 00:00:00.0000000",
//     "marketValue": 402509820,
//     "createdAt": "2022-02-28 00:00:00",
//     "modifiedAt": "2022-02-28 00:00:00"
//   },
//   {
//     "instrumentId": 183,
//     "marketValueDate": "2022-03-31 00:00:00.0000000",
//     "marketValue": 447052449,
//     "createdAt": "2022-03-31 00:00:00",
//     "modifiedAt": "2022-03-31 00:00:00"
//   },
//   {
//     "instrumentId": 183,
//     "marketValueDate": "2022-04-30 00:00:00.0000000",
//     "marketValue": 447052449,
//     "createdAt": "2022-04-30 00:00:00",
//     "modifiedAt": "2022-04-30 00:00:00"
//   },
//   {
//     "instrumentId": 183,
//     "marketValueDate": "2022-05-31 00:00:00.0000000",
//     "marketValue": 447052449,
//     "createdAt": "2022-05-31 00:00:00",
//     "modifiedAt": "2022-05-31 00:00:00"
//   },
//   {
//     "instrumentId": 183,
//     "marketValueDate": "2022-06-30 00:00:00.0000000",
//     "marketValue": 462569209,
//     "createdAt": "2022-06-30 00:00:00",
//     "modifiedAt": "2022-06-30 00:00:00"
//   },
//   {
//     "instrumentId": 183,
//     "marketValueDate": "2022-07-31 00:00:00.0000000",
//     "marketValue": 462569209,
//     "createdAt": "2022-07-31 00:00:00",
//     "modifiedAt": "2022-07-31 00:00:00"
//   },
//   {
//     "instrumentId": 183,
//     "marketValueDate": "2022-08-31 00:00:00.0000000",
//     "marketValue": 398614095,
//     "createdAt": "2022-08-31 00:00:00",
//     "modifiedAt": "2022-08-31 00:00:00"
//   },
//   {
//     "instrumentId": 183,
//     "marketValueDate": "2022-09-30 00:00:00.0000000",
//     "marketValue": 398614095,
//     "createdAt": "2022-09-30 00:00:00",
//     "modifiedAt": "2022-09-30 00:00:00"
//   },
// ]


const marketValueData = []
const instrumentId = 152
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
for (let i = 0; i < mockData.length; i++) {
  if (mockData[i].instrumentId === instrumentId){
    var dates = new Date(mockData[i].marketValueDate);
    marketValueData.push ({ x: months[dates.getMonth()]+" "+dates.getFullYear().toString(), y: mockData[i].marketValue });
  }
    // marketValueData.push ({ x: mockData[i].marketValueDate.slice(0,-20), y: mockData[i].marketValue/1000 });
}

const chartData = {
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
            name: 'Instrument '+instrumentId.toString(),
            data: marketValueData
        }
    ],
};

export default chartData;
