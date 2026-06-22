// Map is a object

let map = new Map() // Creation of Map

// Size of Map
console.log("Size of map is : ",map.size);
map.set(1,"Dheeraj")
console.log(map);

let arr = [
    [2, "Anand"],
    [3, "Roshan"],
    [4, "Shashwat"],
    [5, "Saini"],
    [6, "Rajesh"]
]
console.log(arr);

// Array to Map
map = arr.map((arrayItem) => {
    return map.set(arrayItem[0], arrayItem[1])
})
console.log(map);