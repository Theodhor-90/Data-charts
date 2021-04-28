import Chart from "react-google-charts";

const GeoChart = (props) =>{
    return(
        <Chart
            width={'500px'}
            height={'300px'}
            chartType="GeoChart"
            data={[
                ['Country', 'Popularity'],
                ['England', 200],
                ['Scotland',500]
            ]}
            options={{
                region: 'GB',
                backgroundColor: {
                    fill: 'yellow',
                    stroke: 'green',
                    strokeWidth: 1
                },
                width: 300,
                displayMode: 'regions',
                domain: 'GB',
                forcelFrame: true,
                colorAxis: { colors: ['green', 'blue'] },
              }}
        />
    )
}

export default GeoChart;