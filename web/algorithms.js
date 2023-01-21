/**
 * O(n)
 * @param {*} list 
 * @param {*} target 
 * @returns 
 */
function linearSearch(list, target) {
    
    for(let x = 0; x < list.length; x++){
        if(list[x] === target){
            return x;
        }
    }
    
    return null;
}

function binarySearch(list, target){
    let first = 0;
    let last  = list.length - 1;

    while (first <= last) {
        midpoint = Math.floor((first + last)/2);

        if (list[midpoint] === target) return midpoint;
        else if (list[midpoint] < target) first = midpoint + 1;
        else last = midpoint - 1;
    }  

    return null;
}

function verify(index){
    if(index >= 0){
        console.log("Target found at index: ", index);    
    }
    else{
        console.log(`Target not found in list.`);
    }
}

let numbers = [0,1,2,3,4,5,6,7,8,9];

result = linearSearch(numbers, 9);
verify(result);

