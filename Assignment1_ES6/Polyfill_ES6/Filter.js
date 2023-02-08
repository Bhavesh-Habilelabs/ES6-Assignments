const arr = [1,2,3,4,5];
function filter(arr,cb){
    let Arr = [];
    for(let i =0;i<arr.length;i++){
        if(cb(arr[i])){
            Arr.push(cb(arr[i]));
        }
    }
    return Arr;
}
function odd(n){
    if(n%2==1){
        return n;
    }
}
console.log(filter(arr,odd));

result = arr.filter((a)=>{
    return a%2==0;
})
console.log(result);