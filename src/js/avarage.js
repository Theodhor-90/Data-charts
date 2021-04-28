function mathBox(entry,area){
    let monthlySum = 0;
    let weeklySum, diff, coeff, cases = null;
    if(area==='uk'){
        for(let a=0; a<30; a++){
            monthlySum = monthlySum + entry[a].dailyCases
            if(a===6){
                weeklySum = monthlySum
            }
        } 
        cases = entry[0].dailyCases;
        diff = entry[0].dailyCases - entry[1].dailyCases;
        coeff = diff/entry[1].dailyCases;
    } else  for(let a=0; a<30; a++){
        monthlySum = monthlySum + entry[a].newCases
        if(a===6){
            weeklySum = monthlySum
        }
        cases = entry[0].newCases;
        diff = entry[0].newCases - entry[1].newCases;
        coeff = diff/entry[1].newCases
    } 
    return {
        weeklyAvarage: parseInt(weeklySum/7),
        monthlyAvarage: parseInt(monthlySum/30),
        trending: parseInt(coeff*100),
        cases,
        weeklyText: 'Avarage of last 7 days',
        monthlyText: 'Avarage of last 30 days'
    }
}

export default mathBox;