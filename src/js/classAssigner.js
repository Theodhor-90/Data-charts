function classAssigner(entry){
    let trending, weeklyAvarage, monthlyAvarage = null;
    if(entry.cases === 0){
        weeklyAvarage = 'back-good';
        monthlyAvarage = 'back-good';
    } else {
        if(entry.dailyCases > entry.weeklyCasesAvarage){
            weeklyAvarage = 'back-bad'
        } else weeklyAvarage = 'back-normal';
        if(entry.dailyCases > entry.monthlyCasesAvarage){
            monthlyAvarage = 'back-bad'
        } else monthlyAvarage = 'back-normal'
    }
    if(entry.increase>0){
        trending = 'back-bad'
    } else if(entry.increase===0){
        trending = 'back-normal'
    } else trending = 'back-good'
    return{
        trending,
        monthlyAvarage,
        weeklyAvarage
    }
}

export default classAssigner;