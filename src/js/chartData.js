import { horizontalTicks } from './verticalTicks';

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

export function options(verticalTicks,days){
  return {
    legend: {
      display: false
    },
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      yAxes: [{
        color: 'black',
        gridLines: {
          color: 'black',
          display: true,
          lineWidth: 0,
          zeroLineWidth: 1
        },
        ticks: verticalTicks
      }],
      xAxes: [{
        color: 'black',
        gridLines: {
          color: 'black',
          display: true,
          lineWidth: 0,
          zeroLineWidth: 1
        },
        ticks: horizontalTicks(days)
      }]
    }
  }
}
