function chartData(entry,condition){
    const result = {};
    let weeklyCases = [], weeklyDeaths = [], cases = [], deaths = [], casesSum = 0, deathsSum = 0, casesPar, deathsPar;
    if(condition){
        result.totDeaths = entry[0].cumulativeDeaths;
        result.totCases = entry[0].cumulativeCases;
        casesPar = 'dailyCases';
        deathsPar = 'dailyDeaths'
    } else {
        result.totCases = entry[0].cumCasesByPublishDate;
        result.totDeaths = entry[0].cumDeaths28DaysByPublishDate;
        casesPar = 'newCases';
        deathsPar = 'newDeaths28DaysByPublishDate';
    }   
    for(let c=0; c<30; c++){
        const caseInfo = {
            cases: entry[c][casesPar],
            date: entry[c].date
        }
        const deathInfo = {
            deaths: entry[c][deathsPar],
            date: entry[c].date
        }
        cases.push(caseInfo);
        deaths.push(deathInfo);
        casesSum = casesSum + entry[c][casesPar];
        deathsSum = deathsSum + entry[c][deathsPar];
        if(c<7){
            weeklyCases.push(caseInfo);
            result.weeklyCasesAvarage = parseInt(casesSum/7);
            weeklyDeaths.push(deathInfo);
            result.weeklyDeathsAvarage = parseInt(deathsSum/7); 
        }
    }

    result.monthlyCases = cases;
    result.monthlyDeaths = deaths;
    result.monthlyCasesAvarage = parseInt(casesSum/30);
    result.monthlyDeathsAvarage = parseInt(deathsSum/30);
    result.dailyCases = entry[0][casesPar];
    result.dailyDeaths = entry[0][deathsPar];
    const increase = parseInt(((entry[0][casesPar]-entry[1][casesPar])/entry[1][casesPar])*100);
    result.increase = increase ? increase : 999; 
    result.weeklyCases = weeklyCases;
    result.weeklyDeaths = weeklyDeaths;

    return result;

    /*
    {
        totCases: 'Number of reported covid cases since the pandemic start',
        totDeaths: 'Number of reported covid-related deaths since the pandemic start',
        weeklyCases: 'Array of 7 numbers, cases reported in each of the last 7 days',
        weeklyDeaths: 'Array of 7 numbers, covid-related deaths reported in each of the last 7 days',
        monthlyCases: 'Array of 30 numbers, cases reported in each of the last 30 days',
        monthlyDeaths: 'Array of 30 numbers, covid-related deaths reported in each of the last 30 days',
        weeklyCasesAvarage: 'Number of avarage new cases reported in the last 7 days',
        weeklyDeathsAvarage: 'Number of avarage new covid-related deaths reported in the last 7 days',
        monthlyCasesAvarage: 'Number of avarage new cases reported in the last 30 days',
        monthlyDeathsAvarage: 'Number of avarage new covid-related deaths reported in the last 7 days',
        dailyCases: 'Number of cases reported in the last day',
        dailyDeaths: 'Number of deaths reported in the last day',
        increase: 'Number indicating the percentage of growth of last day's cases compared to the previous day'
    }    
    
    
    */
}

function stateStarter(data,labels){
    const result = {};
    for(let a=0; a<data.length; a++){
        if(a===0){
            result[labels[a].value] = {
                text: labels[a].text,
                data: chartData(data[a],true)
            }
        } else {
            result[labels[a].value] = {
                text: labels[a].text,
                data: chartData(data[a],false)
            }
        }
    }
    return result;
}

export default stateStarter;





