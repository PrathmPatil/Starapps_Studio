let staticArray=[[2,1,2,3,1],[1,6,3,4,5,0,0,0,6]]

function isThisMyDestiny(arr) {
    // find the number of airports
    let numberOfAirports = arr.length;
    // if length is less than or equal to 1 that mean user have already on her destination
    if (numberOfAirports <= 1) return 0;  
    //if on the first station there is no fuel then user can not able to travel.
    if (arr[0] === 0) return -1;

    // user have need to find the number of planes,maximum distance user have covered and where user is.
    let numberOfPlanes = 0;
    let maxDistCovered = 0;
    let currentDistCovered = 0;

    // iterate the all planes fuel count for get the maximum distance user have covered
    for (let i = 0; i < numberOfAirports - 1; i++) {
        // find the max distance
        maxDistCovered = Math.max(maxDistCovered, i + arr[i]);
        // find the current distance user have covered
        if (i === currentDistCovered) {
            // increase the number of planes
            numberOfPlanes++;
            // update the current distance
            currentDistCovered = maxDistCovered;
            // if current distance is greater than or equal to number of airports then return the number of planes
            if (currentDistCovered >= numberOfAirports - 1) return numberOfPlanes;
        }
        // if current distance is greater than or equal to maximum distance user have covered then return -1
        if (i >= maxDistCovered) return -1; 
    }
    // if current distance is less than number of airports then return -1
    return -1;
}

// call the function
staticArray?.map(ele=>{
    console.log(isThisMyDestiny(ele))
})

