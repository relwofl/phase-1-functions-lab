// Code your solution in this file!
const hq = 42
const feet = 264
function distanceFromHqInBlocks(start){
    if(start < 42){
        return hq - start
    } else
        return start - hq
    }
// function distanceFromHqInFeet(pickup){
//      if(pickup < 42){
//         return ((hq - pickup) * feet)
//     } else
//         return (pickup - hq) * feet
// }
function distanceFromHqInFeet(start){
     return distanceFromHqInBlocks(start) * 264
    }
function distanceTravelledInFeet(start, stop){
    if(stop < start){
        return (start - stop) * feet
    } else {
        return (stop - start) * feet
    }
}
function calculatesFarePrice(start, stop){
    let f = distanceTravelledInFeet(start, stop)
        if (f<=400) {
            return 0
        } else if(f>400 && f <=2000){
            return (f - 400) *.02
        } else if (f>2000 && f<2500){
            return 25 
        } else if(f > 2500) {
            return 'cannot travel that far'
        } 
}
