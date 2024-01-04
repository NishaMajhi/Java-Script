//Map are not iterable so for-in will return nothing

let map = new Map();
map.set("IN", "India");
map.set("SK", "South Korea");
map.set("NP", "Nepal");

console.log(map);  // output -> Map(3) { 'IN' => 'India', 'SK' => 'South Korea', 'NP' => 'Nepal' }

for (const key of map) {
    // console.log(key);  //it will give value in this format   [ 'IN', 'India' ]
}


for (const [key, value] of map) {  //here we destruct the map values by [key,value]
    console.log(key, " -> ", value);  //it wont return value in array
}