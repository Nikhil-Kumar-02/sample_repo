function comparetime(arrivalTime,departureTime){
    const t1 = new Date(arrivalTime);
    const t2 = new Date(departureTime);
    return t1.getTime() < t2.getTime();
}

module.exports = comparetime;