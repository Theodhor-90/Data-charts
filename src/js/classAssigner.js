function classAssigner(entry){
    let trending, weeklyAvarage, monthlyAvarage = null;
    if(entry.cases === 0){
        weeklyAvarage = 'back-good';
        monthlyAvarage = 'back-good';
    } else {
        if(entry.cases > entry.weeklyAvarage){
            weeklyAvarage = 'back-bad'
        } else weeklyAvarage = 'back-normal';
        if(entry.cases > entry.monthlyAvarage){
            monthlyAvarage = 'back-bad'
        } else monthlyAvarage = 'back-normal'
    }
    if(entry.trending>0){
        trending = 'back-bad'
    } else if(entry.trending===0){
        trending = 'back-normal'
    } else trending = 'back-good'
    return{
        trending,
        monthlyAvarage,
        weeklyAvarage
    }
}

export default classAssigner;