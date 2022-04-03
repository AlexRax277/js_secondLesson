function check(num) {
    for (let i = 2, max = Math.sqrt(num); i <= max; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

function foo(par) {
    const myList = []
    var stop = 1

    do {
        stop = stop + 1
        for (let j = 2; j <= stop; j++) {
            if (check(j) && !myList.includes(j)) {
                myList.push(j);  
            }
        }    
    } while (myList.length < par)
      
    return myList
}


var time = performance.now();
console.log(foo(process.argv[2]));
time = performance.now() - time;
console.log(time/1000, 'seconds')

