const months =[
    'Jannuary',
    'Febbruary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]

export function dateFormatter(entry){
    const date = entry.split('-');
    const formattedDate = parseInt(date[2]) + ' '  + months[parseInt(date[1]) - 1] + ' ' + date[0];
    return formattedDate;
}