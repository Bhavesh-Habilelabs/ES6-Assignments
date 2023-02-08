const arr=[1,2,3,4,5]
function reduce(arr,cb,inital_value = arr[0]){
    let acc = inital_value;
    for(let i =1;i<arr.length;i++){
        acc = cb(arr[i],acc);
    }
    return acc;
}
function sum(x,acc){
    return (x+acc);
}
console.log(reduce(arr,sum));