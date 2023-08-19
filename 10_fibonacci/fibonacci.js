const fibonacci = function(n) {
    if(n<0) return "OOPS";
    if(n === 0) return 0;

    let a = 1;
    let b = 0;
    
    for(let i = 2; i<=n; i++){
        let c = a + b;
        b = a;
        a = c;
    }
    return a;
};

// Do not edit below this line
module.exports = fibonacci;
