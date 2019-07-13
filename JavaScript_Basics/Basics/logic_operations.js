function shopping(work1, work2) {

    //OR
    const buyIceCream = work1 || work2;
    
    //AND
    const buyBiggestTv = work1 && work2;
    
    //XOR
    const buysmallestTv = work1 != work2;
    
    //NOT
    const keepHealthy = !buyIceCream;

    //ES2015 -> creating object 
    return { buyIceCream, buyBiggestTv, buysmallestTv, keepHealthy };
}

console.log(shopping(true, true));