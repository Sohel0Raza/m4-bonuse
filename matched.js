const numbers = [19, 29, 27, 93, 63, 45]
for(number of numbers){
    // console.log(number)
}
const products =[
    {id:1, name: 'walton phone', price: 10000},
    {id:2, name: 'laptop', price: 10000},
    {id:3, name: 'infinix Phone', price: 10000},
    {id:4, name: 'i phone', price: 10000},
    {id:5, name: 'mac book laptop', price: 10000},
    {id:6, name: 'nokia phone', price: 10000},
    {id:7, name: 'lenovo laptop', price: 10000},
    {id:8, name: 'samsung Phone', price: 10000},
    {id:9, name: 'hp laptop', price: 10000},
]
function matchedProducts(products, search){
    const matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
}
return matched;
}
const result = matchedProducts(products, 'phONe')
console.log(result)