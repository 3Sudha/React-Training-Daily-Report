let car = {
    brand: 'Honda',
    getBrand: function () {
        return this.brand;
    }
}

let bike = {
    brand: 'Harley Davidson',
}

let brand = car.getBrand.bind(bike);
console.log(brand());