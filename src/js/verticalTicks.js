const bases = [100,200,500,1000,2000,5000,10000,20000,50000,100000]


function getMax(arr){
    let max = 0;
    arr.forEach(element => {
       if(element>max){
           max = element
       } 
    });
    return max
}

export function verticalTicks(entry){
    const arrMax = getMax(entry);
    let max = 0;
    for(let i=0; i<bases.length; i++){
      if(arrMax<bases[i]){
          max = bases[i];
          break;
      }
    }

    return {
        fontSize: 8,
        fontFamily: 'Roboto-Bold',
        min: 0,
        max: max,
        stepSize: max/4,
        userCallback: function(value) {
            value = value.toString().split(/(?=(?:...)*$)/).join('.');
            return value;
        }
    }

}

export function horizontalTicks(days){
    return {
        fontSize: 8,
        fontFamily: 'Roboto-Bold',
        callback: function(tick, index) {
          if(days===7){
            return (index < 1 || index > 6) ? '' : tick;
          } else {
              return( index%2 === 0 && index!==30 ? tick : '')
          }
        }
      }
}

