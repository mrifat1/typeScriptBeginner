function printcar(Car) {
    var str = "".concat(Car.make, " ").concat(Car.model, " (").concat(Car.year, ")");
    Car.chargeV;
    if (typeof Car.chargeV != 'undefined')
        str += "// ".concat(Car.chargeV, "v");
    console.log(str);
}
printcar({
    make: "tesla",
    model: "Model 3",
    year: 2020
});
