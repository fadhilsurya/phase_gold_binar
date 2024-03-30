// topic 1 functions
const country = 'Indonesia'
let address = 'jakarta pusat'
var province = 'DKJakarta'

function generateWelcome(name, age) {

    if (age < 18) {

        console.log('anda masih di bawah umur')
    }

    return `sekarang tanggal berapa ${Date()}`
}

let welcome = `berikut adalah welcome messagenya ${generateWelcome('fadhil', 25)}`

// anonymous function
let perkalian = function (input1, input2) {

    return input1 * input2
}

let pertambahan = (input1, input2) => {

    // 1. process below we sum both param
    let resp = input1 + input2

    return resp
}

// currying examples
function signOutMessage(input1) {
    return function (input2) {
        return function (input3) {
            return `selamat tinggal ${input1} usia anda ${input2} domisili signout berada di ${input3}`
        }
    }
}

console.log(perkalian(2, 2))
console.log(pertambahan(3, 2))
console.log(signOutMessage('fadhil')(30)('Jakarta Selatan'))