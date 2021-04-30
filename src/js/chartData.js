export function chartData(numbers,dates){
    return {
        labels: dates,
        datasets: [
          {
          fill: true,
          label: 'New daily cases',
          backgroundColor: '#FFEFEF',
          borderColor: '#BB1515',
          pointBackgroundColor: '#BB1515',
          pointRadius: [0,2,2,2,2,2,2],
          data: numbers,
          lineTension: 0,
          borderWidth: 0.5
        }
      ]
      }
}

export const options =  {
    legend: {
      display: false
    },
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      yAxes: [{
        color: 'black',
        gridLines: {
          color: 'rgba(0,0,0,1)',
          display: false,
          lineWidth: 2
        },
        ticks: {
          fontSize: 8,
          fontFamily: 'Roboto-light',
          min: 0,
          max: 40000,
          stepSize: 10000,
          userCallback: function(value) {
            if(value<35000){
              value = value.toString().split(/(?=(?:...)*$)/).join('.');
              return value;
            }
          }
        }
      },
    ],
      xAxes: [{
        color: 'black',
        gridLines: {
          color: 'rgba(0,0,0,1)',
          display: false,
          lineWidth: 2
        },
        ticks: {
          fontSize: 8,
          fontFamily: 'Roboto-Light',
          callback: function(tick, index) {
            return (index < 1 || index > 6) ? '' : tick;
          }
        }
      }]
    }
  }
