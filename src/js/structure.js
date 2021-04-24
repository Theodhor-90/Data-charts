// const structure = 'https://api.coronavirus.data.gov.uk/v1/data?' +
// 'filters=areaType=nation;areaName=england&' +
// 'structure={"date":"date","cumDeaths28DaysByPublishDate": "cumDeaths28DaysByPublishDate","newDeaths28DaysByPublishDate": "newDeaths28DaysByPublishDate","cumCasesByPublishDate": "cumCasesByPublishDate","areaCode":"areaCode","areaName":"areaName","newCases":"newCasesByPublishDate"}';

const base = 'https://api.coronavirus.data.gov.uk/v1/data?'
const bottom = 'structure={"date":"date","cumDeaths28DaysByPublishDate": "cumDeaths28DaysByPublishDate","newDeaths28DaysByPublishDate": "newDeaths28DaysByPublishDate","cumCasesByPublishDate": "cumCasesByPublishDate","areaCode":"areaCode","areaName":"areaName","newCases":"newCasesByPublishDate"}'
const filters = 'filters=areaType=nation;areaName='

const uk = base + 'filters=areaName=United%20Kingdom;areaType=overview&structure={"date": "date","name": "areaName","code": "areaCode","dailyCases": "newCasesByPublishDate","cumulativeCases": "cumCasesByPublishDate","dailyDeaths": "newDeaths28DaysByPublishDate","cumulativeDeaths": "cumDeaths28DaysByPublishDate"}'
const england = base + filters + 'england&' + bottom;
const scotland = base + filters + 'scotland&' + bottom;
const wales = base + filters + 'wales&' + bottom;
const ireland = base + filters + 'Northern%20Ireland&' + bottom;

const structure = {
    uk,
    england,
    scotland,
    wales,
    ireland
}

export default structure;
