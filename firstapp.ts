function printcar(Car:
    {
    make: string
    model: string
    year: number
    chargeV?: any

}) {
    let str = `${Car.make} ${Car.model} (${Car.year})`
    Car.chargeV

    if(typeof Car.chargeV != 'undefined')
    str+=`// ${Car.chargeV}v`

    console.log(str)
}
printcar({
    make: "tesla",
    model:"Model 3",
    year:2020,
    //chargeV:220,
})