let arr = [1, 2, 3, 4, 5, 6, 5, 6, 7, 8, 90];

for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 !== 0) continue;

    console.log(`${arr[i]} is an even number`);
}