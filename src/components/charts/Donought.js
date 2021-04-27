/*    <div className='box'>
    <Doughnut 
    data={data} 
    options={{
        responsive: true,
        maintainAspectRatio: true,
      }}/>
    </div> */

    const data = {
        labels: ['England', 'Scotland', 'Wales', 'Northern Ireland'],
        datasets: [
          {
            label: 'New cases yesterday',
            data: info,
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