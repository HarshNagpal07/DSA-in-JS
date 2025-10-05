let nums=[2,7,11,15];
let target = 9;
let map={};

for(let i=0;i<=nums.length;i++){
    let result=target-nums[i];
    if(map[result]!==undefined){
        console.log([map[result],i]);
    }
    map[nums[i]]=i;
}
// console.log(map);