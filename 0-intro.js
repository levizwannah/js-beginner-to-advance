let arr = [1, 2, 3, 4, 5, 6, 5, 6, 7, 8, 90];

for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 !== 0) continue;

    console.log(`${arr[i]} is an even number`);
}

let password = 'levi';
let validated = false;
// longer 8 char, at least 1 uppercase, at least 1 lowercase

function validatePassword(password){
    if(password.length >= 8) {

        if(/[A-Z]/g.test(password)){
    
            if(/[a-z]/g.test(password)){
                return true;
            }
        }
    }

    return false;
}


function validatePasswordNL(password){
    if(password.length < 8) return false;
    if(!/[A-Z]/g.test(password)) return false;
    if(!/[a-z]/g.test(password)) return false;

    return true;
}
