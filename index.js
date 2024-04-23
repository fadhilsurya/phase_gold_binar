

class Employee {
    constructor(perusahaan, asuransi) {
        this.perusahaan = perusahaan
        this.asuransi = asuransi
    }

    salary(nom) {
        return `your current salary is ${nom}`
    }

    numberOfLeave(nom) {
        return `your number of leave were ${nom}  `

    }
}

class Manager extends Employee {
    constructor(perusahaan, asuransi, maxAge) {
        super(perusahaan, asuransi)
        this.maxAge = maxAge
    }

    // this is a private method
    #ngobrol() {
        return `ngobrolnya berdua sama temen kerjanya aja nih`
    }

    greetings(name, salaryNom) {
        console.log(this.#ngobrol())
        return `welcome bapak ${name} ${this.salary(salaryNom)}, you're currently work for ${this.perusahaan}`
    }
}

const kendaraan = {
    merk: 'toyota',
    transmisi: 'automatic',
    jumlahRoda: 4
}

let employee = new Employee('Binar', 'Mandiri')
let manager = new Manager('Binar', 'Mandiri', 50)


// let direkturWelcome = employee.salary(10000)


console.log(manager.greetings('fadhil', 100000))
    / s// console.log(kendaraan['transmisi'])