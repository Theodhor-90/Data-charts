import { Doughnut } from 'react-chartjs-2';


const DoughnutChart = (props) => {

  const data = {
    labels: ['England', 'Scotland', 'Wales', 'Northern Ireland'],
    datasets: [
      {
        label: 'New cases yesterday',
        data: props.data,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };

  return(
    <div className='centralizer third-container'>
        <div className='box'>
          <Doughnut 
          width={300}
          height={300}
          data={data} 
          />
        </div>
    </div>
  )
}      

export default DoughnutChart;