const nayok ={
    name: 'Sakib Khan',
    id: 1,
    address: 'p movie cinema naika',
    isSingle: false,
    friends:['Apu', 'Bubli', 'Puja', 'Salman'],
    act: function(){
        console.log('number 1 sakib khan')
    },
    car: {
        brand: 'Woltan',
        price: 10000,
        made: 2010,
        manufacture:{
            name: 'Wolton',
            ceo: 'Elon Maks',
            country:"Bangladesh"
        }
    }

}
nayok.act()
console.log(nayok.car.manufacture)